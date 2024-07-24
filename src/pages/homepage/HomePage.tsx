import { useState, ChangeEvent, FormEvent } from "react";
import { OrderCard } from "../order/OrderCard";

function HomePage() {
  const [orderCard, useOrderCardState] = useState();

  return (
    <div className="home-page">
      <h1>Home Page</h1>

      <OrderCard />
    </div>
  );
}

export default HomePage;
