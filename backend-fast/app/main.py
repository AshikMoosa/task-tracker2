from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

# --- NEW CORS IMPORT ---
from fastapi.middleware.cors import CORSMiddleware  

from . import models, schemas, crud
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# --- NEW CORS MIDDLEWARE ---
# This must be added near the top, after 'app = FastAPI()'

# Define the list of "origins" (addresses) that are allowed to talk to our API
origins = [
    "http://localhost:5173",  # Your Vite React app's default address
    "http://localhost:3000",  # A common React default address
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Allow the specific origins listed above
    allow_credentials=True,    # Allow cookies (not needed now, but good to have)
    allow_methods=["*"],       # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],       # Allow all headers
)

# --- YOUR ENDPOINTS (These remain exactly the same) ---

@app.post("/tasks", response_model=schemas.Task)
def create_new_task(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db=db, task=task)

@app.get("/tasks", response_model=List[schemas.Task])
def read_all_tasks(db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db=db)
    return tasks

@app.delete("/tasks/{task_id}", response_model=schemas.Task)
def delete_existing_task(task_id: int, db: Session = Depends(get_db)):
    deleted_task = crud.delete_task(db=db, task_id=task_id)
    
    if deleted_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
        
    return deleted_task

@app.patch("/tasks/{task_id}", response_model=schemas.Task)
def update_existing_task(task_id: int, task: schemas.TaskCreate, db: Session = Depends(get_db)):
    # We pass all the data to our crud function
    updated_task = crud.update_task(db=db, task_id=task_id, task=task)
    
    # If it returns None, it wasn't found, so raise a 404
    if updated_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
        
    return updated_task