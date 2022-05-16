import useModal from "../../hooks/useModal"
import useProducts from "../../hooks/useProducts"

import ProductAdmin from "../../components/productAdmin/ProductAdmin"
import ButtonAdd from "../../img/buttonAdd_product.svg"
import "./AdminProducts.css"
const AdminProducts = () => {

    const {products} = useProducts();
    const { handleToggleModalAddProduct,handleToggleModalDesition } = useModal()



    const openModalAddProduct = () => {
        handleToggleModalDesition();
        handleToggleModalAddProduct();
    }

    return (
        <div>
            <div className="controlls_adminProducts">
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
                <button className="controll__add" onClick={openModalAddProduct}>
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