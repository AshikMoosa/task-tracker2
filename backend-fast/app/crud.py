from sqlalchemy.orm import Session
from . import models, schemas

# This function reads all tasks
def get_tasks(db: Session):
    # This is a SQLAlchemy query. It says:
    # "Get all records from the Task model (tasks table)"
    return db.query(models.Task).all()

# This function creates a new task in the database
def create_task(db: Session, task: schemas.TaskCreate):
    # 1. Convert the Pydantic schema (task) into an SQLAlchemy model
    #    The .model_dump() function turns the Pydantic object into a dictionary
    #    that our 'models.Task' class can understand.
    db_task = models.Task(**task.model_dump())
    
    # 2. Add the new model object to the database session
    db.add(db_task)
    
    # 3. Commit the transaction to save it to the database
    db.commit()
    
    # 4. Refresh the object to get the new data from the DB (like the new ID)
    db.refresh(db_task)
    
    # 5. Return the newly created task object
    return db_task

def delete_task(db: Session, task_id: int):
    # Get the existing task
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if db_task is None:
        return None
        
    # If it exists, delete it from the session and commit
    db.delete(db_task)
    db.commit()
    
    # Return the deleted object (this is good practice)
    return db_task

def update_task(db: Session, task_id: int, task: schemas.TaskCreate):
    # First, get the existing task from the DB
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()

    # If the task doesn't exist, return None
    if db_task is None:
        return None

    # Get the data from the Pydantic schema as a dictionary
    # exclude_unset=True means it only includes fields that the user actually sent
    # This allows for partial updates (i.e., just updating 'reminder')
    update_data = task.model_dump(exclude_unset=True)

    # Loop over the dictionary of new data and update the db_task object
    for key, value in update_data.items():
        setattr(db_task, key, value)

    # Add the (now updated) object to the session, commit, and refresh
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    
    return db_task