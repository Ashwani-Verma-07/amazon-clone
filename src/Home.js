import React from "react";
import Slider from "./BasicSlider";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slider />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="12321578"
            title="Apple AirPods Pro with MagSafe Charging Case"
            price={241.91}
            rating={5}
            image="https://m.media-amazon.com/images/I/31G4DtYkP+L._SX342_SY445_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="45321341"
            title="TASUS Vivobook 16X, 16.0-inch, AMD Ryzen 5(8GB/512GB SSD//Silver/1.80 kg)"
            price={598.64}
            rating={5}
            image="https://m.media-amazon.com/images/I/41CQCMPCSdL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 8GB RAM /128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90452612"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X75K (Black) (2022 Model) | with Alexa Compatibility"
            price="64,549"
            rating={4}
            image="https://m.media-amazon.com/images/I/71+7bU+fkVL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
