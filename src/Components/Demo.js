import React, { useState } from "react";

const Demo = () => {
  const [viewdetails, setViewdetails] = useState(false);

  const handleclick = () => {
    setViewdetails(true);
  };

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
        <img src={item?.image} alt="no-image" width="100px" /><br />


          {

         !viewdetails ? (
            <button onClick={handleclick}>View more</button>
          ) : (
            <>
              <h1>{item?.price}</h1>
              <h1>{item?.description}</h1>
              <h1>{item?.category}</h1>
              <h1>{item?.rating?.rate}</h1>
            </>
          )
          
          }
        </div>
      ))}
      
    </div>
  );
};

export default Demo;
