from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


SECRET_KEY = "codepilot-secret-key"
ALGORITHM = "HS256"


def hash_password(password):
    return pwd_context.hash(password)


def verify_password(password, hashed_password):
    return pwd_context.verify(
        password,
        hashed_password
    )


def create_token(data):

    expire = datetime.utcnow() + timedelta(days=7)

    data.update({
        "exp": expire
    })

    return jwt.encode(
        data,
        SECRET_KEY,
        algorithm=ALGORITHM
    )