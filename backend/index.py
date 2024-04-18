from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

df = pd.read_csv('Crop_recommendation.csv')

if 'N' not in df.columns or 'P' not in df.columns or 'K' not in df.columns or 'temperature' not in df.columns or 'ph' not in df.columns or 'rainfall' not in df.columns or 'humidity' not in df.columns:
    raise ValueError("One or more columns are missing in the dataset.")

class InputData(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    ph: float
    rainfall: float
    humidity: float

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=['POST'],
    allow_headers=['Content-Type']
)

X = df[['N', 'P', 'K', 'temperature', 'ph', 'rainfall', 'humidity']]
y = df['label']
X_train, _, y_train, _ = train_test_split(X, y, test_size=0.2, random_state=42)
classifier = RandomForestClassifier()
classifier.fit(X_train, y_train)

@app.post("/features/" ,tags=['croppredict'])
async def predict_crop(input_data: InputData):
    input_df = pd.DataFrame(input_data.model_dump(), index=[0])
    predicted_crop = classifier.predict(input_df)
    return {"predicted_crop": predicted_crop[0]}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
