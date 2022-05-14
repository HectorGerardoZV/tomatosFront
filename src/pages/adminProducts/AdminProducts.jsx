import ProductAdmin from "../../components/productAdmin/ProductAdmin"
import ButtonAdd from "../../img/buttonAdd_product.svg"
import Image from "../../img/products/hamburguesa.png"
import "./AdminProducts.css"
const AdminProducts = () => {

    const products = [
        { id: 1, image: Image, name: "Product #1", salePrice: 120 },
        { id: 2, image: Image, name: "Product #2", salePrice: 120 },
        { id: 3, image: Image, name: "Product #3", salePrice: 120 },
        { id: 4, image: Image, name: "Product #4", salePrice: 120 },
        { id: 5, image: Image, name: "Product #5", salePrice: 120 },
        { id: 6, image: Image, name: "Product #6", salePrice: 120 },
        { id: 7, image: Image, name: "Product #7", salePrice: 120 },
        { id: 8, image: Image, name: "Product #8", salePrice: 120 },
        { id: 9, image: Image, name: "Product #9", salePrice: 120 },
    ]

    return (
        <div>
            <div className="controlls">
                <div className="filtersProducts">
                    <input type="text" placeholder="Nombre del producto..." />
                    <select name="category" id="">
                        <option value="">--Seleccione--</option>
                        <option value="cat1">Categoría #1</option>
                        <option value="cat2">Categoría #2</option>
                        <option value="cat3">Categoría #3</option>
                        <option value="cat4">Categoría #4</option>

                    </select>
                </div>
                <button className="controll__add">
                    <img src={ButtonAdd} alt="" />
                </button>
            </div>


            <section className="panelProduct">
                {
                    products.map(product => (
                        <ProductAdmin
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default AdminProducts