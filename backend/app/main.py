from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.mongodb import get_database
from app.routes.auth import router as auth_router
from app.routes.review import router as review_router

app = FastAPI(
    title="CodePilot-AI API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)
app.include_router(review_router)


@app.get("/")
def home():

    db = get_database()

    return {
        "message": "CodePilot-AI Backend Running",
        "database": db.name
    }