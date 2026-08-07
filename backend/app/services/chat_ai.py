import ollama


def chat_with_code(
    language: str,
    original_code: str,
    improved_code: str,
    question: str
):

    prompt = f"""
You are an expert Senior Software Engineer.

The user has already reviewed their code.

Programming Language:
{language}

Original Code:

{original_code}

Improved Code:

{improved_code}

User Question:
{question}

Instructions:

- Answer only the user's question.
- Be accurate.
- Explain clearly.
- Use examples if helpful.
- If code is needed, provide code.
- Keep answers concise.
"""

    response = ollama.chat(
        model="qwen2.5-coder:7b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]