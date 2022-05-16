import { useState, useEffect } from "react"

import useModal from "../../hooks/useModal"
import useProducts from "../../hooks/useProducts"
import axiosClient from "../../config/axiosClient"

import ProductAdmin from "../../components/productAdmin/ProductAdmin"
import ButtonAdd from "../../img/buttonAdd_product.svg"
import "./AdminProducts.css"
const AdminProducts = () => {

    const { products } = useProducts();
    const { handleToggleModalAddProduct, handleToggleModalDesition } = useModal()
    const [productName, setProductName] = useState("");
    const [categoryProduct, setCategoryProduct] = useState(-1);
    const [categories, setCategories] = useState([]);


    const handleOnChangeProductName = (e) => {
        setProductName(e.target.value)
    }
    const handleOnChangeCategory = (e) => {
        setCategoryProduct(parseInt(e.target.value));
    }
    const queryApiGetAllCategories = async () => {
        try {
            const response = await axiosClient.get("/categories");
            const { data } = response;
            setCategories(data);
        } catch (error) {

        }
    }
    const openModalAddProduct = () => {
        handleToggleModalDesition();
        handleToggleModalAddProduct();
    }
    const filterValues = () => {
        return products.filter(product => {
            if (productName.trim() == "") {
                return product
            } else {
                if (product.name.trim().toLowerCase().includes(productName.trim().toLowerCase())) {
                    return product
                }
            }
        }).filter(product=>{
            if(categoryProduct==-1){
                return product
            }
            else{
                if(categoryProduct==product.category){
                    return product
                }   
            }
        })
    }
    useEffect(() => {
        queryApiGetAllCategories()
    }, [])
    return (
        <div>
            <div className="controlls_adminProducts">
                <div className="filtersProducts">
                    <input type="text" placeholder="Nombre del producto..."
                        onChange={handleOnChangeProductName}
                    />
                    <select name="category" id=""
                        onChange={handleOnChangeCategory}
                    >
                        <option value="-1">--Seleccione--</option>

                        {
                            categories.map((category, index) => (
                                <option key={index} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="controll__add" onClick={openModalAddProduct}>
                    <img src={ButtonAdd} alt="" />
                </button>
            </div>


            <section className="panelProduct">
                {
                    filterValues().map((product, index) => (
                        <ProductAdmin
                            key={index}
                            product={product}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default AdminProducts