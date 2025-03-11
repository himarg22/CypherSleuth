from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import re

# Load the trained model
model = tf.keras.models.load_model("spam_classifier.h5")
app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Dummy function to simulate ML prediction
def predict_spam(email_text):
    return 1 if "spam" in email_text.lower() else 0

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        email_text = data.get("text", "")

        if not email_text:
            return jsonify({"error": "No text provided"}), 400

        prediction = predict_spam(email_text)
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)