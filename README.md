
# Mini Product Dashboard

A responsive and interactive product dashboard built with **React (JavaScript)** and **Tailwind CSS**.  
It fetches product data from a public API and allows users to browse, search, filter, sort, and favorite items.

This project demonstrates modern frontend practices such as component-based architecture, state management with hooks, responsive UI, and persistent user preferences.

---

## ✨ Features

- **Dynamic Product Grid**  
  Products are fetched from the [Fake Store API](https://fakestoreapi.com/).

- **Search Functionality**  
  Instantly filter products by title.

- **Filtering & Sorting**  
  Filter by category & sort by price (Ascending / Descending).

- **Pagination**  
  Navigate through products page-by-page with smooth scroll.

- **Favorites System**  
  Mark/unmark products as favorites.  
  Stored in localStorage for persistence.

- **Product Modal**  
  Click a product to view detailed information with a smooth animated modal.

- **Dark/Light Mode**  
  Fully implemented theme switcher that respects system preferences  
  and stores the user preference in localStorage.

- **Responsive Design**  
  Works beautifully across all screen sizes.

- **Loading & Error States**  
  Skeletons for loading and clear error messaging for failed requests.

- **Modern Tailwind UI**  
  Clean design with animations and transitions.

---

## 🛠️ Tech Stack

- **Frontend:** React (JavaScript)
- **Styling:** Tailwind CSS
- **Data Source:** Fake Store API

---

## 🚀 Getting Started

This project uses **Vite + React** and locally installed Tailwind CSS.

### Prerequisites

You must have:

- Node.js (v16+ recommended)
- npm or yarn

### 1️⃣ Install Dependencies

```bash
npm install
````

### 2️⃣ Run the Project

```bash
npm run dev
```

Then open the local URL shown in the terminal (e.g., `http://localhost:5173`).

---

## 📁 File Structure

```
.
├── components/
│   ├── FilterBar.jsx        # Search, filter, and sort controls
│   ├── Header.jsx           # App header + theme toggle
│   ├── Icons.jsx            # Reusable SVG icons
│   ├── ProductCard.jsx      # UI for each product preview
│   ├── ProductGrid.jsx      # Product layout + pagination
│   ├── ProductModal.jsx     # Detailed modal view of a product
│   └── SkeletonCard.jsx     # Placeholder skeleton
│
├── App.jsx                  # Main app logic + global state
├── index.html               # Root HTML with Tailwind and React imports
├── main.jsx                 # Entry point (ReactDOM.createRoot)
├── index.css                # Global Tailwind entry
├── metadata.json            # App metadata
└── README.md                # (You are here)
```

---

## 🔧 Environment & API

This project uses the public Fake Store API:

```
https://fakestoreapi.com/products
```

No API key required.

---

## 🌗 Theme Persistence

The theme is saved in:

```
localStorage.theme
```

Logic includes:

* User preference
* System preference fallback (`prefers-color-scheme`)
* Class-based Tailwind dark mode

---

## 🤝 Contributing

Feel free to fork, modify, and enhance the project!

---


