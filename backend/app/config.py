from dotenv import load_dotenv
from pydantic_settings import BaseSettings


load_dotenv()


class Settings(BaseSettings):

    MONGO_URL: str
    DATABASE_NAME: str

    class Config:
        env_file = ".env"


settings = Settings()