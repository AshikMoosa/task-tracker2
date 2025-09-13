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