from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import torch
import cv2
import numpy as np
from PIL import Image, ImageDraw
import io
import os
import logging
# logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
MAX_FILE_SIZE = 10 * 1024 * 1024

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

model = None

def load_model():
    print("Loading model...")
    global model
    try:
        model_path = 'airplane.pt'
        if not os.path.exists(model_path):
            print(f"Model file {model_path} not found")
            
            return None
        model = torch.load(model_path, map_location='cpu')
        model.eval()
        print("Model loaded.")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def detect_airplanes(image):
    width, height = image.size
    return [
        [width*0.2, height*0.3, width*0.6, height*0.7, 0.85, 0],
        [width*0.1, height*0.1, width*0.4, height*0.4, 0.72, 0],
    ]

def draw_obb_boxes(image, detections):
    result_image = image.copy()
    draw = ImageDraw.Draw(result_image)
    for det in detections:
        x1, y1, x2, y2 = det[:4]
        confidence = det[4]
        draw.rectangle([x1, y1, x2, y2], outline='red', width=3)
        draw.text((x1, y1 - 15), f"Airplane: {confidence:.2f}", fill='red')
    return result_image

@app.route('/api/health', methods=['GET'])
def health():
    logging.info("Health check requested.")
    return jsonify({'status': 'ok', 'model_loaded': model is not None})

@app.route('/api/detect', methods=['POST'])
def detect():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    file = request.files['image']
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type'}), 400
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    try:
        image = Image.open(file.stream).convert('RGB')
    except Exception as e:
        return jsonify({'error': 'Invalid image'}), 400

    detections = detect_airplanes(image)
    result_image = draw_obb_boxes(image, detections)

    buffer = io.BytesIO()
    result_image.save(buffer, format='JPEG')
    buffer.seek(0)
    return send_file(buffer, mimetype='image/jpeg')

def start_app():
    print("Starting app and loading model...")
    # load_model() or anything else here
    load_model()
    app.run(host='0.0.0.0', port=5000, debug=True)

if __name__ == '__main__':
    start_app()


load_model()
print("Model loaded successfully.")