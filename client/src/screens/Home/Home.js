import React, { useState } from "react";
import Card from "../../components/Card";
// import Carousel from '../components/Carousel'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useQuery } from "react-query";
import { fetchFoodData } from "../../services/Home";
import { Helmet } from "react-helmet";
import useUserAuthInfo from "../../hooks/useUserAuthInfo";
import AdminDashboard from "../../Admin/Dashboard/AdminDashboard";
 const Home=()=> {
  const [search, setSearch] = useState("");
   const { data: foodData, isLoading } = useQuery("foodData", fetchFoodData);
   const { role } = useUserAuthInfo()
  return (
    role === 'admin' ? <AdminDashboard/> : <div>
      <Helmet>
        <title>Ebuy | Home</title>
      </Helmet>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner " id="carousel" style={{ maxHeight: "88vh" }}>
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  placeholder="Search in here..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className="btn text-white bg-danger"
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  X
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x700/?burger"
                className="d-block w-100  "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?pastry"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?barbeque"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {!!foodData ? (
          foodData[1].map((data) => {
            return (
              <div className="row mb-3" key={data.id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr
                  id="hr-success"
                  style={{
                    height: "4px",
                    backgroundImage:
                      "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                  }}
                />
                {!!foodData[0] ? (
                  foodData[0]
                    .filter(
                      (items) =>
                        items.CategoryName === data.CategoryName &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => (
                      <div
                        key={filterItems.id}
                        className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
                      >
                        <Card
                          foodName={filterItems.name}
                          item={filterItems}
                          options={filterItems.options[0]}
                          ImgSrc={filterItems.img}
                        />
                      </div>
                    ))
                ) : (
                  <div>No Such Data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Home