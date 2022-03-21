//Components
import Order from "./Order"

const OrderList = (props) => {
  let { orders,setOrder,state,setOrderAction } = props;
  return (
    <div className="order-list">
      {
        orders.map(order => (
          <Order
            key={order.id}
            order={order}
            setOrder={setOrder}
            state={state}
            setOrderAction={setOrderAction}
          />
        ))
      }
    </div>

  )
}

export default OrderList