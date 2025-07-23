# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# 🛍️ Seller Product Manager Dashboard

A React + TypeScript frontend dashboard for sellers to view, filter, sort, and add products. Powered by a public REST API and designed with raw CSS for complete customization.

---

## 📸 Preview

<img width="1488" height="940" alt="image" src="https://github.com/user-attachments/assets/c12b5001-04a0-42c3-a18f-044f50fef6a0" />
<img width="1460" height="938" alt="image" src="https://github.com/user-attachments/assets/1232bf4b-056d-4fb8-a0be-56498a6a8a19" />
<img width="1375" height="555" alt="image" src="https://github.com/user-attachments/assets/0a46b719-9f8c-4473-a271-99900125bb71" />
<img width="1342" height="847" alt="image" src="https://github.com/user-attachments/assets/5c4ad2c6-5a16-4219-8deb-76dd73a464bb" />





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



































 
