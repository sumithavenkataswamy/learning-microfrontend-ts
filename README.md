Here’s a clean and well-structured `README.md` for your repository `learning-microfrontend-ts`:

---

````markdown
# Micro Frontend with Vite, React, and TypeScript

This project demonstrates a micro frontend architecture using **Module Federation**, built with **Vite**, **React**, and **TypeScript**.

It consists of two apps:
- **host-app**: Main application shell that consumes remote components.
- **remote-app**: Remote application that exposes components to the host.

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/sumithavenkataswamy/learning-microfrontend-ts.git
cd learning-microfrontend-ts
````

### 2. Install dependencies for `host-app`

```bash
cd host-app
npm install
```

### 3. Install dependencies for `remote-app`

```bash
cd ../remote-app
npm install
```

---

## ▶️ Running the Applications

### Step 4: Start the **Remote App**

```bash
npm run deploy
```

> This runs the remote application on `http://localhost:5001`

### Step 5: Start the **Host App**

Open a new terminal tab or window:

```bash
cd ../host-app
npm run dev
```

> This runs the host application on `http://localhost:5000`

---

## ✅ Features

* 🧩 Micro frontend integration using **Module Federation**
* ⚡ Built with **Vite** for fast dev experience
* 💡 Written in **TypeScript**
* ♻️ Dynamic import of remote components using `React.lazy`

---

## 📂 Folder Structure

```
learning-microfrontend-ts/
├── host-app/
└── remote-app/
```

---

## 📜 License

This project is licensed under the MIT License.

````

---

You can copy and paste this into a new file in your repo as `README.md`, then run:

```bash
git add README.md
git commit -m "Add README with setup instructions"
git push
````

Let me know if you'd like to add images, architecture diagrams, or advanced configuration.
