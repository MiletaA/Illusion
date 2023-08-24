import numpy as np
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.preprocessing import image

# List to store paths of liked images
liked_images_paths = []

# Function to add a liked image
def add_liked_image(img_path):
    global liked_images_paths
    liked_images_paths.append(img_path)
    
    # Check if the list has reached a size of 10
    if len(liked_images_paths) >= 10:
        X_train, y_train = load_your_data(liked_images_paths)
        train_model(X_train, y_train)

# Function to load data
def load_your_data(img_paths):
    image_size = (160, 160)  # MobileNetV2 default size. Adjust if needed.
    
    X_train = []
    for img_path in img_paths:
        img = image.load_img(img_path, target_size=image_size)
        img_array = image.img_to_array(img)
        X_train.append(img_array)
    
    X_train = np.array(X_train) / 255.0  # Normalize the images
    y_train = np.array([0, 1, 2, ...])  # Replace with your labels. If you don't have labels, you'll need to define them.
    
    return X_train, y_train

# Function to train the model
def train_model(X_train, y_train):
    # Load the MobileNetV2 model pre-trained on ImageNet
    base_model = MobileNetV2(weights='imagenet', include_top=False)

    # Freeze the layers of the base model
    for layer in base_model.layers:
        layer.trainable = False

    # Create a new model with the base model and a few additional layers
    model = Sequential([
        base_model,
        GlobalAveragePooling2D(),
        Dense(1024, activation='relu'),
        Dense(10, activation='softmax')  # Assuming 10 classes for demonstration
    ])

    # Compile the model
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    # Use data augmentation
    data_gen = tf.keras.preprocessing.image.ImageDataGenerator(rotation_range=20, zoom_range=0.15,
                                                               width_shift_range=0.2, height_shift_range=0.2,
                                                               shear_range=0.15, horizontal_flip=True, fill_mode="nearest")

    # Train the model using the data generator
    model.fit(data_gen.flow(X_train, y_train, batch_size=32), epochs=10)

# Example usage:
# add_liked_image("path_to_liked_image.jpg")
