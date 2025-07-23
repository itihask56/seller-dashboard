import { useProducts } from './hooks/useProducts';
import ProductTable from './components/ProductTable';
import { useState, useMemo } from 'react';
// import type {Product} from './types/product.ts';
import type { Product } from './types/product';
import AddProductModal from './components/AddProductModal';

const App = () => {
    const { products, loading } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [customProducts, setCustomProducts] = useState<Product[]>([]);

    const allProducts = useMemo(() => [...customProducts, ...products], [customProducts, products]);

    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (!sortBy) return 0;

        const valA = a[sortBy as keyof Product];
        const valB = b[sortBy as keyof Product];

        if (typeof valA === 'number' && typeof valB === 'number') {
            return sortOrder === 'asc' ? valA - valB : valB - valA;
        }

        if (typeof valA === 'string' && typeof valB === 'string') {
            return sortOrder === 'asc'
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        }

        return 0;
    });

    const categories = useMemo(() => {
        const cats = allProducts.map((p) => p.category);
        return ['All', ...Array.from(new Set(cats))];
    }, [allProducts]);

    return (
        <div className="container">
            <h1>Seller Product Manager </h1>
            <div className="top-controls">
                <AddProductModal onAdd={(newProduct) => setCustomProducts([newProduct, ...customProducts])} />
                <input
                    type="text"
                    placeholder="Search by product title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />

                <select
                    className="dropdown-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>


            {/* Sort Controls */}
            <div className="sort-controls">
                <select
                    className="dropdown-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>

                <select
                    className="dropdown-select"
                    value={sortOrder}
                    onChange={(e) =>
                        setSortOrder(e.target.value === 'asc' ? 'asc' : 'desc')
                    }
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            {/* Product Table */}
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <ProductTable products={sortedProducts} />
            )}

        </div>
    );
};

export default App;
