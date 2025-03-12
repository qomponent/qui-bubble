# qui-bubble

`qui-bubble` is a **lightweight, customizable Web Component** for rendering **chat bubbles** in a conversation-style UI. It supports **text messages, rich content, avatars, typing indicators, and CSS customizations**.

---

## 🌟 Features

✅ **Web Component** – Works in any frontend framework or vanilla HTML  
✅ **Customizable with CSS Variables** – Easily style bubbles, colors, and spacing  
✅ **Supports Named Messages** – Display sender names with icons  
✅ **Slot Support** – Embed rich content like images or formatted text  
✅ **Typing Indicator** – Animated dots for real-time conversations  

---

## 📦 Installation

Install via npm:

```bash
npm i @qomponent/qui-bubble
```

---

## 🚀 Usage

### **1. Import the Component**
#### **ES Module**
```javascript
import '@qomponent/qui-bubble';
```

#### **HTML (No Build Setup Required)**
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@qomponent/qui-bubble"></script>
```

### **2. Add Chat Bubbles**
```html
<div class="chat-container">

    <qui-bubble message="Hello! How are you?" side="left" name="Alice"
        icon="https://randomuser.me/api/portraits/women/1.jpg">
    </qui-bubble>

    <qui-bubble message="I'm good! How about you?" side="right"></qui-bubble>

    <qui-bubble side="right">
        <span style="color: blue; font-weight: bold;">Custom <i>styled</i> message!</span>
    </qui-bubble>

    <qui-bubble side="left" name="Kristen">
        <img src="https://randomuser.me/api/portraits/women/2.jpg"><span>My new profile pic</span>
    </qui-bubble>

    <qui-bubble side="left" name="Bob" typing></qui-bubble>
</div>
```

---

## 🎨 Customization

You can customize the chat bubbles using **CSS variables**:

```css
chat-bubble {
  --chat-bubble-bg: #007aff;
  --chat-bubble-color: white;
  --chat-bubble-border-radius: 20px;
  --chat-bubble-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  --chat-bubble-typing-dot: #ff5722;
}
```

#### **Available CSS Variables**
| Variable                     | Default Value | Description |
|------------------------------|--------------|-------------|
| `--chat-bubble-bg`           | `lightgray`  | Background color of the bubble |
| `--chat-bubble-color`        | `black`      | Text color inside the bubble |
| `--chat-bubble-border-radius` | `12px`       | Corner radius of the bubble |
| `--chat-bubble-padding`      | `8px 12px`   | Inner padding of the bubble |
| `--chat-bubble-shadow`       | `0px 4px 8px rgba(0, 0, 0, 0.1)` | Shadow effect |
| `--chat-bubble-typing-dot`   | `#666`       | Color of typing indicator dots |

---

## 🔥 Example (Run Locally)

To run the example locally:

```bash
npm install
npm start
```

This will start a **local development server** with a demo page.

---

## 🤝 Contributing

Pull requests are welcome! 🚀  
For major changes, please open an **issue** first to discuss your ideas.

---

## 📜 License

This project is licensed under the **Apache 2.0 License**.  
[Read the full license](http://www.apache.org/licenses/LICENSE-2.0).
