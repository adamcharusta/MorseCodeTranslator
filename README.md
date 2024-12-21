# Morse Code Translator

---

## **Project Overview**
The **Morse Code Translator** is a web application designed to translate text into Morse code and vice versa. Additionally, it allows users to listen to the translated Morse code in the form of sound signals and copy the result to the clipboard.

---

### **Features:**

1. **Text to Morse Code Translation:**
   - Input any text and convert it to Morse code in real-time.
2. **Morse Code to Text Translation:**
   - Input Morse code and decode it into readable text.
3. **Morse Code Sound Playback:**
   - Listen to the Morse code through short and long sound signals.
4. **Copy Morse Code:**
   - Quickly copy the resulting Morse code to the clipboard.
5. **Real-Time Updates:**
   - Automatic updates of results as the user types text or Morse code.

---

## **Project Structure**

- **`index.html`**: Main page of the application.
- **`scripts/configuration.js`**: Contains configuration for the application.
- **`scripts/helpers.js`**: Helper functions used throughout the application.
- **`scripts/translators.js`**: Functions for encoding and decoding Morse code.
- **`scripts/index.js`**: Main application logic.
- **`Dockerfile`**: File for running the project in a Docker container.
- **`style`**: Utilizes Bootstrap CDN for responsiveness and styling.

---

## **Running the Application Locally**

### **Prerequisites:**
1. **Node.js and npm** (optional, if you want to modify the code).
2. **Docker** (for running the application in a container).

### **Steps to Run:**

#### **Method 1: Direct Local Execution**
1. Clone the project repository:
   ```bash
   git clone <repository-link>
   cd <project-folder>
   ```
2. Open the `index.html` file in any web browser.

#### **Method 2: Running with Docker**
1. Clone the project repository:
   ```bash
   git clone <repository-link>
   cd <project-folder>
   ```
2. Build the Docker image:
   ```bash
   docker build -t morse-code-translator .
   ```
3. Run the Docker container:
   ```bash
   docker run -p 8080:80 morse-code-translator
   ```
4. Open the application in a web browser at:
   ```
   http://localhost:8080
   ```
