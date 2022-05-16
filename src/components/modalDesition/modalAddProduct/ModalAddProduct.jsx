import Logo from "../../../img/logoSmall.svg"
import { useState, useEffect } from "react"
import axiosClient from "../../../config/axiosClient"
import "./ModalAddProduct.css"
const ModalAddProduct = () => {

  const [categories, setCategories] = useState([]);

  const queryAllCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      const arrayDatos = response.data
      setCategories(arrayDatos)
    } catch (error) {

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
      <form className="modalAddProduct__form">
        <fieldset>
          <div className="form__field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className="form__field">
            <label htmlFor="basePrice">Costo Base</label>
            <input id="basePrice" name="basePrice" type="number" />
          </div>
          <div className="form__field">
            <label htmlFor="salePrice">Costo Venta</label>
            <input id="salePrice" name="salePrice" type="number" />
          </div>
          <div className="form__field">
            <label htmlFor="category">Categoríá</label>
            <select name="category" id="category">
              <option value="">--Seleccione--</option>
              {
                categories.map((category, index) => (
                  <option value={`${category.name}`} key={index}>{category.name}</option>
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