from pydantic import BaseModel
from typing import Optional

# 1. Base Schema (Common Fields)
# We create a base class to avoid repeating the same fields.
# Both creating and reading tasks will share these fields.
class TaskBase(BaseModel):
    text: str
    day: Optional[str] = None  # Use Optional to make fields not required
    reminder: bool = False

# 2. Create Schema (for data coming IN - from the frontend)
# This inherits from TaskBase. It has all the same fields.
# This tells our API: "When creating a task, you must provide data
# that matches the fields in TaskBase."
class TaskCreate(TaskBase):
    pass  # 'pass' means it has no additional fields of its own

# 3. Read Schema (for data going OUT - to the frontend)
# This is the schema that will be used when returning data from our API.
class Task(TaskBase):
    id: int  # When we READ a task, we always include its 'id'

    # This is a crucial setting for Pydantic.
    class Config:
        from_attributes = True  # (was 'orm_mode = True' in Pydantic v1)