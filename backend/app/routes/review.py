from fastapi import APIRouter
from datetime import datetime

from bson import ObjectId
from app.database.mongodb import get_database
from app.models.review import ReviewCreate
from app.services.ai_reviewer import analyze_code
from app.services.chat_ai import chat_with_code

router = APIRouter(
    prefix="/review",
    tags=["Code Review"]
)


db = get_database()



@router.post("/")
def review_code(data: ReviewCreate):

    result = analyze_code(
        data.language,
        data.code
    )

    review_document = {
        "language": data.language,
        "code": data.code,
        "summary": result.get("summary", ""),
        "score": result.get("score", 100),
        "issues": result.get("issues", []),
        "suggestions": result.get("suggestions", []),
        "improved_code": result.get("improved_code", data.code),
        "created_at": datetime.now()
    }

    # Debug - verify what is being saved
    print("\n========== SAVING TO MONGODB ==========")
    print(review_document)
    print("=======================================\n")

    db.reviews.insert_one(review_document)

    return result


@router.post("/chat")
def chat(request: dict):

    answer = chat_with_code(
        language=request["language"],
        original_code=request["original_code"],
        improved_code=request["improved_code"],
        question=request["question"]
    )

    return {
        "answer": answer
    }

@router.get("/history")
def get_history():

    reviews = list(
        db.reviews.find(
            {},
            {
                "code": 0
            }
        )
    )


    for review in reviews:
        review["_id"] = str(review["_id"])


    return reviews




@router.get("/stats")
def get_stats():

    total_reviews = db.reviews.count_documents({})


    scores = list(
        db.reviews.find(
            {},
            {
                "score": 1,
                "_id": 0
            }
        )
    )


    if scores:
        average_score = sum(
            item["score"] for item in scores
        ) / len(scores)

    else:
        average_score = 0



    all_reviews = list(
        db.reviews.find(
            {},
            {
                "issues": 1,
                "language": 1,
                "_id": 0
            }
        )
    )


    total_issues = sum(
        len(review.get("issues", []))
        for review in all_reviews
    )


    languages = len(
        set(
            review.get("language")
            for review in all_reviews
        )
    )


    return {

        "total_reviews": total_reviews,

        "average_score": round(average_score),

        "security_issues": total_issues,

        "languages": languages

    }




@router.get("/recent")
def get_recent_reviews():

    reviews = list(
        db.reviews.find(
            {},
            {
                "code": 0
            }
        )
        .sort("created_at", -1)
        .limit(3)
    )


    for review in reviews:
        review["_id"] = str(review["_id"])


    return reviews




@router.get("/{id}")
def get_review(id: str):

    review = db.reviews.find_one({
        "_id": ObjectId(id)
    })


    if not review:
        return {
            "message": "Review not found"
        }


    review["_id"] = str(review["_id"])


    return review