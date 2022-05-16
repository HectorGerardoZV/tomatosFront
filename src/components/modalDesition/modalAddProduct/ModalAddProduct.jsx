import Logo from "../../../img/logoSmall.svg"
import { useState, useEffect } from "react"
import axiosClient from "../../../config/axiosClient"
import "./ModalAddProduct.css"
import useProducts from "../../../hooks/useProducts"
import useModal from "../../../hooks/useModal"


const ModalAddProduct = () => {
  const { queryApiAddProduct } = useProducts()
  const { handleToggleModalDesition } = useModal()
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    basePrice: "",
    salePrice: "",
    description: "",
    category: ""
  })
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
    const added = await queryApiAddProduct(product);
    if (added) {
      setTimeout(() => {
        handleToggleModalDesition();
      }, 2000);
    }
  }

  useEffect(() => {
    queryAllCategories();
  }, [])

  return (
    <div className="modaAddProduct">
      <div className="modalAddProduct__img">
        <img src={Logo} alt="" />
      </div>
      <form className="modalAddProduct__form" onSubmit={handleOnSubmit}>
        <fieldset>
          <div className="form__field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" onChange={handleOnChangeField} />
          </div>
          <div className="form__field">
            <label htmlFor="basePrice">Costo Base</label>
            <input id="basePrice" name="basePrice" type="number" onChange={handleOnChangeField} />
          </div>
          <div className="form__field">
            <label htmlFor="salePrice">Costo Venta</label>
            <input id="salePrice" name="salePrice" type="number" onChange={handleOnChangeField} />
          </div>
          <div className="form__field">
            <label htmlFor="category">Categoríá</label>
            <select name="category" id="category" onChange={handleOnChangeField}>
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
          <input type="submit" value={"Agregar Producto"} />

        </div>
      </form>
    </div>
  )
}

export default ModalAddProduct;