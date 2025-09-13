from sqlalchemy import Column, Boolean, Integer, String
from .database import Base  # Import the Base from our database.py file

# This is our SQLAlchemy Model for the 'tasks' table.
class Task(Base):
    __tablename__ = "tasks"  # The actual name of the table in the database

    # Define the columns (fields) for the table
    id = Column(Integer, primary_key=True, index=True)
    text = Column(String)
    day = Column(String)
    reminder = Column(Boolean, default=False)