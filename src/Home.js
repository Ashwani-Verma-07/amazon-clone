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
            rating={4}
            image="https://m.media-amazon.com/images/I/41CQCMPCSdL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="4903850"
            title="Smart Fitness Watch For Xiaomi Mi 8 Pro Original Sports Touchscreen Smart Watch Bluetooth 1.3"
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
            price={1189.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/71+7bU+fkVL._SL1500_.jpg"
          />
        </div>
        <div className="home__head__nature">
          <h2>Green Products</h2>
          <img
            src="https://i.ibb.co/NssMcgL/Why-Eco-Friendly-Products-Are-Important.jpg"
            alt="Why-Eco-Friendly-Products-Are-Important"
            border="0"
          />
        </div>
        <div className="home__row">
          <Product
            id="62829345"
            title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={1019.98}
            rating={4}
            image="	https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg"
          />
          <Product
            id="85452692"
            title="Moto Edge 40 Neo 5G 256 GB, 12 GB,Super Light Design with IP68, Vegan Leather, 10-bit pOLED Curved Display, Caneel Bay"
            price={299.19}
            rating={5}
            image="https://i.ibb.co/7gYg4qS/shopping.webp"
          />
          <Product
            id="85452691"
            title="Fairphone 4 Dual-SIM 256GB ROM + 8GB RAM (GSM Only | No CDMA) Factory Unlocked 5G Smartphone (Green) - International Version"
            price={399.15}
            rating={3}
            image="https://m.media-amazon.com/images/I/51QqKi6YmIL._AC_SX679_.jpg"
          />
          <Product
            id="85452692"
            title="Teracube 2e has a replaceable battery, is DIY repairable, made from recycled material, and comes with a sturdy biodegradable case. "
            price={298.95}
            rating={3}
            image="https://i.ibb.co/ydmM7X0/Teracube-front-view-1024x1024-2x.webp"
          />
        </div>
        <div className="home__row">
          <Product
            id="62829341"
            title="36 Counter-Depth Side by Side Refrigerator with Family Hub™, 21.5 cu.ft of Capacity"
            price={1089.98}
            rating={3}
            image="https://i.ibb.co/x6TqR7T/ref.webp"
          />
          <Product
            id="85452698"
            title="Frigidaire FFRE083ZA1 8000 BTU Window-Mounted Air Conditioner"
            price={299.95}
            rating={5}
            image="https://i.ibb.co/r4cKZTc/1-Eco-friendly-Air-Conditioner-Fridgidaire-19-Inch-Window-Mounted-png.webp"
          />
          <Product
            id="85452697"
            title="Bosch 8 kg 5 Star Fully-Automatic Front Loading Washing Machine (WAJ28262IN, Silver)"
            price={499.12}
            rating={4}
            image="https://i.ibb.co/xHBQdfk/Images-by-Bosch.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="62829389"
            title="PHILIPS Prime Neo 3-watt Concealed JB LED downlighter for Ceiling | Green | 2 inch"
            price={1019.98}
            rating={4}
            image="	https://m.media-amazon.com/images/I/51Q3YyehmdL._SX679_.jpg"
          />
          <Product
            id="85452629"
            title="PHILIPS Cove glow 25 Watt LED strip light 60 LED per meter GREEN without driver PH1234"
            price={299.19}
            rating={4}
            image="	https://www.thelightkart.com/wp-content/uploads/2023/02/PH1234.jpg"
          />
          <Product
            id="85452619"
            title="MR Products BPA-free Plastic Easy Flow Square Dispenser Jar with Lid (Sea Green 1500 ml, Pack of 6)"
            price={399.19}
            rating={3}
            image="	https://m.media-amazon.com/images/I/81KQRNixRrL._SX679_.jpg"
          />
          <Product
            id="85452678"
            title="ANYA GREEN ENERGY 650W MONO PERC HALFCUT Solar Panel, Silicon Material Monocrystalline"
            price={299.45}
            rating={5}
            image="https://i.ibb.co/BZR8bkr/650-650w-mono-perc-halfcut-anya-green-energy-132-original-imagsjnq4hnf4dpk.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
