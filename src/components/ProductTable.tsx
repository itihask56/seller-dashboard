import type {Product} from "../types/product.ts";

interface Props {
    products: Product[];
}

const ProductTable = ({ products }: Props) => {
    return (
        <table className="product-table">
            <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>
                        <img src={product.thumbnail} alt={product.title} width="50" height="50" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
