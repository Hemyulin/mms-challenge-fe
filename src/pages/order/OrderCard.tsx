import "./OrderCard.css";

export const OrderCard = () => {
  return (
    <div className="order-card">
      <h5>current state: OPEN</h5>
      <h4>Customer Name</h4>
      <h5>Line Items</h5>
      <ul>
        <li>Screen</li>
        <li>Keyboard</li>
      </ul>
      <p>Created at 27.07.24</p>
      <p>Updated at 28.07.24</p>
      <p>
        id: ID! currentState: OrderStatus! customer: Customer! employee:
        Employee! lineItems: [String!]! createdAt: String! updatedAt: String!
      </p>
    </div>
  );
};
