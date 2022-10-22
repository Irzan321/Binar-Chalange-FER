import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoBinar from "assets/style/images/logo-binar.svg";
import car from "assets/style/images/img_car.png";

export const Header = ({ name }) => {
  const navigate = useNavigate();
  return (
    //  Start Header
    <div className="header">
      <div className="nav-logo">
        <img src={logoBinar} alt="Binar" />
        <div className="nav-menu">
          <ul>
            <li>
              <Link href="#our-services">Our services</Link>
            </li>
            <li>
              <Link className="active nav-menu" to="#why-us">
                Why Us
              </Link>
            </li>
            <li>
              <Link className="active nav-menu" to="#testimonial">
                Testimonial
              </Link>
            </li>
            <li>
              <Link className="Active nav-menu" to="#faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-title">
          <h1>
            Sewa & Rental Mobil Terbaik di <br />
            kawasan (Lokasimu)
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br />
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br />
            untuk sewa mobil selama 24 jam.
          </p>
          <button onClick={() => navigate} className="hero-btn">
            Mulai Sewa Mobil
          </button>
        </div>
        <img src={car} className="hero-car" alt="Car" />
      </div>
    </div>
    //  End Header
  );
};
