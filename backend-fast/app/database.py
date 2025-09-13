from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 1. This is the connection string for your local PostgreSQL database.
# Replace 'your_username' and 'your_password' with the credentials you set
# up when you installed PostgreSQL.
DATABASE_URL = "postgresql://postgres:crazyuser@localhost/tasktracker"

# 2. The Engine is the main point of contact for SQLAlchemy with the database.
engine = create_engine(DATABASE_URL)

# 3. This creates a "session factory." We will use this to create a 
# new, temporary database session every time we get a request.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. We create a 'Base' class. All of our database models (like our Task model)
# will inherit from this class. This is how SQLAlchemy links the
# Python classes to the tables in the database.
Base = declarative_base()


# This is our dependency function.
def get_db():
    db = SessionLocal()  # Create a new session
    try:
        yield db  # Provide the session to the endpoint
    finally:
        db.close() # Close the session after the request is finished