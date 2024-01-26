import { useParams } from "react-router-dom";
import { useCart } from "../Providers/CartContext";

export default function ProductPage() {
    let {id} = useParams();
    let {cart} = useCart();
    
    return (
        <div>
            <h1>Articles {id}</h1>
            {cart.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            ))}
        </div>
    );
}
