import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts, fetchImageURL } from "../api";
import "./styles.css";

export default function App() {
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState(null)

  const getCategories = async () => {
    setCategories(await fetchCategories() || []);
    console.log(categories)
  };

  const getProducts = async ()=>{
    setProducts(await fetchProducts('gatsby'))
    console.log(products)
  }
  

  useEffect(() => {
    getCategories()
    getProducts()
  }, []);



  return (
    <div className="App">
      <h1>Categories</h1>
        {categories.map((products, idx)=>{
          return( <div key={products.id}> {products.name} <br/><br/> Ese es el numero de products: {products.products.length}</div>)
        })}
        {
          products && (
            <>
            <h1> Productos </h1>
              <h3>{products.title}</h3>
              <div>{products.description}</div>
              <img src={fetchImageURL(products.image.url)} alt={products.title} height={100} width={100}/>
          
          </>
          )
        }
      
      <h2></h2>
    </div>
  );
}

