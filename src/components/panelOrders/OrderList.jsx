import Order from "./Order"

const OrderList = () => {
  const orders = [
    {
      id: "1",
      client: "Diana",
      quantity: "3 Productos",
      cost: "200.00"
    },
    {
      id: "2",
      client: "Héctor",
      quantity: "4 Productos",
      cost: "300.00"
    },
    {
      id: "3",
      client: "Yair",
      quantity: "3 Productos",
      cost: "250.00"
    },
    {
      id: "4",
      client: "Elizabeth",
      quantity: "2 Productos",
      cost: "100.00"
    },
    {
      id: "5",
      client: "Daniel",
      quantity: "1 Productos",
      cost: "90.00"
    },
    {
      id: "6",
      client: "Sisi",
      quantity: "2 Productos",
      cost: "200.00"
    },
    {
      id: "7",
      client: "Paloma",
      quantity: "2 Productos",
      cost: "200.00"
    },
    {
      id: "8",
      client: "Coco",
      quantity: "3 Productos",
      cost: "300.00"
    },
    {
      id: "9",
      client: "Niña",
      quantity: "2 Productos",
      cost: "290.00"
    }
  ]

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