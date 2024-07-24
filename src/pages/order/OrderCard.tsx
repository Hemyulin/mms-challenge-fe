import "./OrderCard.css";

export const OrderCard = () => {
  return (
    <div className="order-card">
      <div className="title">
        <h4>Long Johnson</h4>
        <h5 className="status">current state: OPEN</h5>
      </div>
      <h5>Line Items</h5>
      <ul>
        <li>Screen</li>
        <li>Keyboard</li>
      </ul>
      <p>Created at 27.07.24</p>
      <p>Updated at 28.07.24</p>
    </div>
  );
};
