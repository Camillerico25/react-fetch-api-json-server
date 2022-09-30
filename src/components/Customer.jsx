import React from "react";
import { useState, useEffect } from "react";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gym_logs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((customer) => {
          return (
            <>
              <div className="card m-4 p-1 bg-warning">
                <p className="card-text">id: {customer.id}</p>
                <h5 className="card-title">firstname: {customer.firstname}</h5>
                <h5 className="card-title">lastname: {customer.lastname}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Customer;
