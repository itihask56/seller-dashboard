import { useState } from 'react';
import type {Product} from "../types/product.ts";

interface Props {
    onAdd: (product: Product) => void;
}

const AddProductModal = ({ onAdd }: Props) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: Product = {
            id: Date.now(), // or generate a unique id
            title,
            price: parseFloat(price),
            stock: parseInt(stock),
            category,
            thumbnail: imageUrl,
            description: '',
        };

        console.log('🆕 Adding product:', newProduct); // 👈 Debug log
        onAdd(newProduct); // 👈 this must be triggered
        setShow(false); // Close modal
    };

    return (
        <>
            <button className="add-btn" onClick={() => setShow(true)}>
                + Add New Product
            </button>

            {show && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" required />
                            <input value={stock} onChange={(e) => setStock(e.target.value)} type="number" placeholder="Stock" required />
                            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
                            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
                            <button type="submit">Add</button>
                            <button type="button" onClick={() => setShow(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddProductModal;
