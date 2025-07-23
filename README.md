# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# 🛍️ Seller Product Manager Dashboard

A React + TypeScript frontend dashboard for sellers to view, filter, sort, and add products. Powered by a public REST API and designed with raw CSS for complete customization.

---

## 📸 Preview

> _Add screenshots here later_  
> Example:
> ![Product Table Screenshot](./screenshots/table.png)

---

## 🚀 Features

- 📦 Product Table View
- 🔍 Search by Product Title
- 🎯 Category Filter (Dropdown)
- ⬆️ Sorting by Title, Price, and Stock
- ➕ Add New Product (Simulated Modal)
- 🧼 Clean UI with responsive layout

---

## ⚙️ Tech Stack

- **React** + **TypeScript**
- **REST API**: [DummyJSON Products API](https://dummyjson.com/products)
- **Raw CSS** (No frameworks used)
- **State Management**: `useState`, `useEffect`, `useMemo`

---

## 📁 Folder Structure

 
<br>

```bash

seller-dashboard/
│
├── public/
│   └── vite.svg                  # Vite logo (optional)
│
├── src/
│   ├── components/
│   │   ├── AddProductModal.tsx   # Modal form to add product
│   │   └── ProductTable.tsx      # Product table UI
│   │
│   ├── hooks/
│   │   └── useProducts.ts        # Custom hook to fetch from API
│   │
│   ├── types/
│   │   └── product.ts            # TypeScript interface for Product
│   │
│   ├── App.tsx                   # Main App logic + layout
│   ├── App.css                   # Component-specific styling
│   ├── index.css                 # Global styles
│   ├── main.tsx                  # Entry point of the React app
│
├── .eslintrc.cjs                 # ESLint config
├── .gitignore                    # Git ignore rules
├── index.html                    # HTML template
├── package.json                  # NPM project config + scripts
├── postcss.config.js             # PostCSS config (required for Tailwind if used)
├── tailwind.config.js            # Tailwind config (not used here but often included)
├── tsconfig.json                 # TypeScript config
├── tsconfig.node.json            # TS config for Node context
├── vite.config.ts                # Vite config
├── README.md                     # Your documentation 💯
├── screenshots/                  # (Optional) Screenshot assets for README
│   └── dashboard.png
│
└── node_modules/                 # Auto-generated after npm install



```
</details>




## 🧪 How to Run

### 1. Clone this repo
```bash
git clone https://github.com/yourusername/seller-dashboard.git
cd seller-dashboard

```

### 2. Install dependencies
```bash

npm install
```
### 3. Start development server

 ```bash
npm run dev
```
Visit: http://localhost:5173


### 🧑‍💻 Author
Your Name – @itihask56



































 
