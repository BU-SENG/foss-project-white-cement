Here’s a clean, simple **“How to Use the Frontend”** section you can add to your README.

You can paste this directly into your README **under a section like "🚀 How to Run the Frontend" or "🛠 How It Works"**.

---

# **🚀 How to Run the Frontend (StudySync)**

Follow these steps to set up and run the StudySync frontend on your system.

---

## **📦 1. Install Dependencies**

Make sure you have **Node.js** installed.

Then open your terminal in the `frontend` folder and run:

```bash
npm install
```

This installs all React dependencies listed in `package.json`.

---

## **▶️ 2. Start the Development Server**

Still inside the `frontend` directory, run:

```bash
npm run dev


This will start the Vite development server.
You’ll see a local URL like:


http://localhost:5173/


Click the link to open the app in your browser.


# **🧭 How the Frontend Works**

The StudySync frontend is built with **React + Vite** and contains multiple pages that students use to find and join study groups.

### **🔹 Main Pages**

| Page                 | Description                                               |
| -------------------- | --------------------------------------------------------- |
| **Sign Up / Login**  | Authentication pages where students enter details.        |
| **Dashboard**        | Displays a student’s overview, groups, and quick actions. |
| **Find Group**       | Students pick interests, availability, study style, etc.  |
| **Available Groups** | Shows recommended groups based on selected preferences.   |


# **✨ Key UI Behaviours**

### **1. Smart Group Filtering**

On **Find Group**, users select:

* Interests
* Study style
* Availability
* Skill level

These choices shape the recommendations shown on **Available Groups**.


### **2. Responsive Design**

The UI automatically adjusts for:

* Laptop screens
* Tablet
* Mobile view

No configuration needed.


### **3. Navigation**

Navigation is handled using **React Router**.
Pages include:

/home
/signup
/login
/dashboard
/find-group
/available-groups

The "Find My Group" button redirects users to `/available-groups`.