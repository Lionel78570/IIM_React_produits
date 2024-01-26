import { useGetArticlesQuery, useCreateArticleMutation } from "../Services/API"
import { useCart } from "../Providers/CartContext"
import Header from "../Components/Header"
import { Link } from "react-router-dom"

export default function () {


    let {cart, addToCart } = useCart()

    let { data, isFetching } = useGetArticlesQuery()
    let [createArticle, { isLoading }] = useCreateArticleMutation()


    const Product = ({ id, name, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, name, price });
    };
}
    return <div>
        <Header />
        <h1>  Home  </h1> 
        {
            isFetching ? <p>ça fetch</p> : <div>

            <br />
            Cart Count: {cart.length}

            <Link to="/articles/1"></Link>

            <ArticlesList />
            <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
    </div>

            </div>
        }
        <button onClick={() => {
            createArticle({ title: "Mon article", content: "Mon contenu" })
        }}> Créer un article </button>
    </div>
}

function ArticlesList() {

    let { data, isFetching } = useGetArticlesQuery()

    return data.map((article) => {
        return <h3>{article.title}</h3>
    })

}