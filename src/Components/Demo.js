import React, { useState } from "react";

const Demo = () => {
  const [viewdetails, setViewdetails] = useState(false);

  const handleclick=()=>{
    setViewdetails(!viewdetails)
  }

  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  return (


    <div className="container">
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item?.title}</h1>
          <img src={item.image} alt="product" width="100px" />
          <br />
          
  <button onClick={handleclick} >

            {viewdetails ? "Hide details" : "View more"}

          </button>

          {viewdetails && (
            <div>
              <h2>Price: ${item.price}</h2>
              <p>{item.description}</p>
              <p>Category: {item.category}</p>
              <p>Rating: {item.rating.rate}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Demo;
