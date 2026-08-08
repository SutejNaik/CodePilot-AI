from fastapi import APIRouter, HTTPException, Depends

from app.models.user import UserCreate, UserLogin
from app.database.mongodb import get_database
from app.utils.security import (
    hash_password,
    verify_password,
    create_token
)
from app.utils.auth import get_current_user


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


db = get_database()


# ============================================================
# REGISTER
# ============================================================

@router.post("/register")
def register(user: UserCreate):

    existing_user = db.users.find_one({
        "email": user.email
    })

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = hash_password(
        user.password
    )

    db.users.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    })

    return {
        "message": "User registered successfully"
    }


# ============================================================
# LOGIN
# ============================================================

@router.post("/login")
def login(user: UserLogin):

    existing_user = db.users.find_one({
        "email": user.email
    })

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    token = create_token({
        "email": existing_user["email"]
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }


# ============================================================
# CURRENT USER
# ============================================================

@router.get("/me")
def get_me(
    current_user=Depends(get_current_user)
):

    user = db.users.find_one(
        {
            "email": current_user["email"]
        },
        {
            "password": 0
        }
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user["_id"] = str(user["_id"])

    return user