import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>
      <div className="home__row">
        <Product
          id="123"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
          price={14.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL.jpg"
        />
        <Product
          id="12312"
          title="Canon EOS Rebel T7 DSLR Camera|2 Lens Kit with EF18-55mm + EF 75-300mm Lens, Black"
          price={499.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71W1KvLH3sL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12332121"
          title="Jabra Elite 75t Earbuds – True Wireless Earbuds with Charging Case, Titanium Black – Bluetooth Earbuds with a More Comfortable, Secure Fit, Long Battery Life and Great Sound Quality"
          price={149.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71M3yV-WjUL._AC_SL1500_.jpg"
        />
        <Product
          id="121232"
          title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
          price={349.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51ZOSUUMjHL._AC_.jpg"
        />
        <Product
          id="12343"
          title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel Core i3-8145U CPU, 8GB RAM, 128GB SSD, Windows 10 in S Mode, F512FA-AB34, Slate Gray"
          price={544.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81mZ4eDWYkL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123121222"
          title="HONBAY Convertible Sectional Sofa Couch, L-Shaped Couch with Modern Linen Fabric for Small Space Dark Grey"
          price={299.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81A9PkJnamL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
