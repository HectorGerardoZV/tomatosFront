
import "./productPanel.css"
import hamburguesa from "../../img/products/hamburguesa.png";
import Product from "../product/Product";

const ProductPanel = (props) => {
    let {products,addProductToList} = props;
    products = products.map(product=>{
        product.image = hamburguesa;
        return product;
    });
    return (
        <div className="productPanel">
            {
                products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        addProductToList={addProductToList}
                        
                    />
                ))
            }
        </div>
    )
}

export default ProductPanel