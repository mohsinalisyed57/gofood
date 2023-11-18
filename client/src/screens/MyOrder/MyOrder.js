import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useQuery } from "react-query";
import { myOrderData } from "../../services/order";

const MyOrder=()=> {
  const { data: orderData, isLoading, isError } = useQuery('myOrderData',myOrderData)
  console.log(orderData)
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container" >
        <div className="row">
          {!!orderData ? Array(orderData).map((data) => {
            return data.orderData
              ? data.orderData.order_data
                .slice(0)
                .reverse()
                .map((item) => {
                  let totalPrice = 0;
                  item.forEach((item) => {
                    if (item.price) {
                      totalPrice += item.price;
                    }
                  });
                  return item.map((arrayData) => {
                    return (
                      <div>
                        {arrayData.Order_date ? (
                          <div className="m-auto mt-5 d-flex justify-content-between">
                            <div> {(data = arrayData.Order_date)}</div>
                            <div >TotalPrice : Rs {totalPrice}/- </div>
                            <hr />
                          </div>
                        ) : (
                          <div>
                            <div className="col-12 col-md-6 col-lg-3" >
                              <div
                                className="card mt-3"
                                style={{
                                  width: "16rem",
                                  maxHeight: "360px",
                                }}
                              >
                                <img
                                  src={arrayData.img}
                                  className="card-img-top"
                                  alt="..."
                                  style={{
                                    height: "120px",
                                    objectFit: "fill",
                                  }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {arrayData.name}
                                  </h5>
                                  <div
                                    className="container w-100 p-0"
                                    style={{ height: "38px" }}
                                  >
                                    <span className="m-1">
                                      {arrayData.qty}
                                    </span>
                                    <span className="m-1">
                                      {arrayData.size}
                                    </span>
                                    <span className="m-1">{data}</span>
                                    <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                      <br />
                                      Rs {arrayData.price}/-
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  });
                })
              : "";
          })
            : ""}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default MyOrder
