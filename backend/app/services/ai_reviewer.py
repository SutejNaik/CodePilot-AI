import json
import ollama


def analyze_code(language: str, code: str):

    prompt = f"""
You are a Senior Software Engineer, Security Engineer, and Code Reviewer.

Review ONLY the given {language} code.

Return ONLY valid JSON.

JSON format:

{{
  "summary": "",
  "score": 0,
  "issues": [
    {{
      "title": "",
      "category": "",
      "severity": "Low",
      "line": 1,
      "description": ""
    }}
  ],
  "suggestions": [
    ""
  ],
  "improved_code": ""
}}

Rules:

1. Return ONLY JSON.
2. Do NOT use markdown.
3. Do NOT use triple backticks.
4. Do NOT explain anything outside JSON.
5. Analyze ONLY the provided code.
6. Never invent vulnerabilities.
7. If there are no issues, return an empty issues array.
8. Suggestions must relate only to detected issues.
9. Score must be between 0 and 100.
10. improved_code must contain ONLY the improved source code.
11. improved_code must NOT contain JSON.
12. improved_code must NOT contain markdown.
13. improved_code must preserve the original functionality.
14. Use \\n for line breaks.
15. Summary should be under 80 words.

Example:

"improved_code":"import getpass\\npassword = getpass.getpass()"

Code:

{code}
"""

    response = ollama.chat(
        model="qwen2.5-coder:7b",
        format="json",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    text = response["message"]["content"]

    print("\n========== AI RESPONSE ==========\n")
    print(text)
    print("\n================================\n")

    try:

        data = json.loads(text)

    except Exception as e:

        print(e)

        return {
            "summary": "The AI response could not be parsed.",
            "score": 50,
            "issues": [
                {
                    "title": "Parsing Error",
                    "category": "System",
                    "severity": "Low",
                    "line": 1,
                    "description": "Failed to parse AI response."
                }
            ],
            "suggestions": [
                "Try analyzing the code again."
            ],
            "improved_code": code
        }

    # --------------------------
    # Defaults
    # --------------------------

    data.setdefault("summary", "No summary available.")
    data.setdefault("score", 100)
    data.setdefault("issues", [])
    data.setdefault("suggestions", [])
    data.setdefault("improved_code", code)

    # --------------------------
    # Fix Improved Code
    # --------------------------

    improved = data["improved_code"]

    if not isinstance(improved, str):
        improved = code

    improved = improved.replace("\\n", "\n")
    improved = improved.replace('\\"', '"')
    improved = improved.replace("```python", "")
    improved = improved.replace("```", "")
    improved = improved.strip()

    # Sometimes the model returns another JSON object instead of code
    if improved.startswith("{") and improved.endswith("}"):
        improved = code

    # Empty response
    if improved == "":
        improved = code

    # Sometimes model returns only a few words
    if len(improved.split()) < 2:
        improved = code

    data["improved_code"] = improved

    # --------------------------
    # Normalize Issues
    # --------------------------

    fixed_issues = []

    for issue in data["issues"]:

        if isinstance(issue, dict):

            fixed_issues.append({

                "title": issue.get("title", "Issue"),

                "category": issue.get(
                    "category",
                    "Best Practice"
                ),

                "severity": issue.get(
                    "severity",
                    "Low"
                ),

                "line": issue.get(
                    "line",
                    1
                ),

                "description": issue.get(
                    "description",
                    "No description provided."
                )

            })

        else:

            fixed_issues.append({

                "title": str(issue),

                "category": "Best Practice",

                "severity": "Low",

                "line": 1,

                "description": "Review this part of the code."

            })

    data["issues"] = fixed_issues

    # --------------------------
    # Normalize Suggestions
    # --------------------------

    fixed_suggestions = []

    for suggestion in data["suggestions"]:

        if isinstance(suggestion, dict):

            fixed_suggestions.append(

                suggestion.get("text")
                or suggestion.get("title")
                or suggestion.get("description")
                or "AI Suggestion"

            )

        else:

            fixed_suggestions.append(str(suggestion))

    data["suggestions"] = fixed_suggestions

    return data