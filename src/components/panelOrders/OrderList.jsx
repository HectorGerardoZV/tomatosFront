import Order from "./Order"

const OrderList = (props) => {
  let { orders } = props;

  return (
    <div className="order-list">
      {
        orders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))
      }
    </div>

  )
}

export default OrderList