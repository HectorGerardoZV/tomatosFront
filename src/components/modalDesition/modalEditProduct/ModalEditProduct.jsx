
import { useState, useEffect } from "react"
import axiosClient from "../../../config/axiosClient"


//Hooks
import useProducts from "../../../hooks/useProducts"
import useModal from "../../../hooks/useModal"
//Images
import Logo from "../../../img/logoSmall.svg"
import Success from "../../../img/success.svg"
//Style
import "../modalAddProduct/ModalAddProduct.css"
import "./ModalEditProduct.css"

const ModalEditProduct = () => {

    const { queryApiUpdateProduct, productSelected ,handleSetProductSelected} = useProducts()
    const { handleToggleModalDesition } = useModal()
    const [categories, setCategories] = useState([]);
    const [success, setSuccess] = useState(false);

    const [product, setProduct] = useState({ ...productSelected })
    const queryAllCategories = async () => {
        try {
            const response = await axiosClient.get("/categories");
            const arrayDatos = response.data
            setCategories(arrayDatos)
        } catch (error) {

        }
    }

    const handleOnChangeField = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        product.category = parseInt(product.category)
        product.salePrice = parseInt(product.salePrice)
        product.basePrice = parseInt(product.basePrice)

        const updated = await queryApiUpdateProduct(product);
        if (updated) {
            setSuccess(true)
            handleSetProductSelected(null)
            setTimeout(() => {
                handleToggleModalDesition()
            }, 2000);
        }

    }

    useEffect(() => {
        queryAllCategories();
    }, [])



    return (
        <div className="modaAddProduct">
            {
                success ? (
                    <div className="modalProductSuccess">
                        <img src={Success} />
                        <h1>Producto editado</h1>
                    </div>
                ) : (
                    <>
                        <div className="modalAddProduct__img">
                            <img src={success ? Success : Logo} alt="" />
                        </div>
                        <form className="modalAddProduct__form" onSubmit={handleOnSubmit}>
                            <fieldset>
                                <div className="form__field">
                                    <label htmlFor="name">Nombre</label>
                                    <input id="name" name="name" type="text"
                                        defaultValue={product.name}
                                        onChange={handleOnChangeField} />
                                </div>
                                <div className="form__field">
                                    <label htmlFor="basePrice">Costo Base</label>
                                    <input id="basePrice" name="basePrice" type="number"
                                        defaultValue={product.basePrice}
                                        onChange={handleOnChangeField} />
                                </div>
                                <div className="form__field">
                                    <label htmlFor="salePrice">Costo Venta</label>
                                    <input id="salePrice" name="salePrice" type="number"
                                        defaultValue={product.salePrice}
                                        onChange={handleOnChangeField} />
                                </div>
                                <div className="form__field">
                                    <label htmlFor="category">Categoría</label>
                                    <select name="category" id="category"
                                        value={`${product.category}`}
                                        onChange={handleOnChangeField}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            categories.map((category, index) => (
                                                <option value={category.id} key={index}>{category.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </fieldset>
                            <div className="buttonSubmit">
                                <input type="submit" value={"Guardar Cambios"} />

                            </div>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default ModalEditProduct