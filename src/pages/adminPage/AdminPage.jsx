
import useProducts from "../../hooks/useProducts"
import "./AdminPage.css"
const AdminPage = () => {
    const { getQuantityProducts } = useProducts()
    return (
        <div className="adminPageStyle">
            <div className="itemStatus">
                <h2>Productos</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
            <div className="itemStatus">
                <h2>Categorías</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
            <div className="itemStatus">
                <h2>Promociones</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
            <div className="itemStatus">
                <h2>Usuarios</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
            <div className="itemStatus">
                <h2>Ventas Hoy</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
            <div className="itemStatus">
                <h2>Ventas Semana</h2>
                <p>#{getQuantityProducts()}</p>
            </div>
        </div>
    )
}

export default AdminPage