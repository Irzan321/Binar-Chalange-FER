import React from "react";
import happyGirl from "assets/style/images/img_service.png";
import chekedIcon from "assets/style/images/Group 53.png";
import completeIcon from "assets/style/images/icon_complete.png";
import priceIcon from "assets/style/images/icon_price.png";
import twentyFourhrs from "assets/style/images/icon_24hrs.png";
import profesionalIcon from "assets/style/images/icon_professional.png";
import photoTesti1 from "assets/style/images/img_photo.png";
import photoTesti2 from "assets/style/images/img_photo (1).png";
import ratePhoto from "assets/style/images/Rate.png";
import leftBtn from "assets/style/images/Left button.png";
import rightBtn from "assets/style/images/Right button.png";
import faqIcon from "assets/style/images/chevron-down.svg";

const Home = (props) => {
  return (
    <>
      {/* Start Our Services */}
      <div className="main-hero">
        <img src={happyGirl} alt="Happy Girl" />
        <div className="main-title">
          <h3>
            Best Car Rental for any kind of trip in <br />
            (Lokasimu)!
          </h3>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga <br />
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta <br />
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, <br />
            meeting, dll.
          </p>
          <div class="main-services">
            <p>
              <img src={chekedIcon} /> Dengan Supir di Bali 12 Jam
            </p>
            <p>
              <img src={chekedIcon} /> Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
            <p>
              <img src={chekedIcon} /> Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p>
              <img src={chekedIcon} /> Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p>
              <img src={chekedIcon} /> Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
      {/* End Our Services  */}

      {/* Start Why Us  */}
      <div className="main-whyus">
        <div className="title-hero">
          <h3>Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="hero-card">
          <div className="whyus-card">
            <img src={completeIcon} alt="" />
            <h3>Mobil Lengkap</h3>
            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div className="whyus-card">
            <img src={priceIcon} alt="" />
            <h3>Harga Murah</h3>
            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div className="whyus-card">
            <img src={twentyFourhrs} alt="" />
            <h3>Layanan 24 Jam</h3>
            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div className="whyus-card">
            <img src={profesionalIcon} alt="" />
            <h3>Sopir Profesional</h3>
            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>
      {/* End Why Us  */}

      {/* Start Testimonial  */}
      <div className="hero-testimonial">
        <div className="testimonial-title">
          <p>Testimonial</p>
        </div>
        <div className="testimonial-desc">
          <p>Berbagai review positif dari para pelangan kami</p>
        </div>
        <div className="parent-list">
          <div className="testimonial-side">
            <div className="photo-testimonial">
              <img src={photoTesti1} alt="Testimonial Photo" />
            </div>
            <div className="content-testimonial">
              <img src={ratePhoto} alt="Rating" />
              <p className="content-desc">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="content-title">John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="testimonial-center">
            <div className="photo-testimonial">
              <img src={photoTesti1} alt="Testimonial-photo" />
            </div>
            <div className="content-testimonial">
              <img src={ratePhoto} alt="Rating" />
              <p className="content-desc">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="content-title">John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="testimonial-side">
            <div className="photo-testimonial">
              <img src={photoTesti2} alt="Testimonial Photo" />
            </div>
            <div className="content-testimonial">
              <img src={ratePhoto} alt="Rating" />
              <p className="conten-desc">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="content-title">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div className="button-testimonial">
          <button className="left-click">
            <img src={leftBtn} alt="Left" />
          </button>
          <button className="right-click">
            <img src={rightBtn} alt="Right" />
          </button>
        </div>
      </div>
      {/* End Testimonial  */}

      {/* Start CTA Banner  */}
      <section class="hero-cta">
        <div class="main-cta">
          <div class="title-cta">
            <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
          </div>
          <div class="desc-cta">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <button class="cta-btn">Mulai Sewa Mobil</button>
        </div>
      </section>
      {/* End CTA Banner  */}

      {/* Start FAQ  */}
      <div class="hero-faq">
        <div class="main-faq">
          <div class="faq-title">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="faq-list">
            <div class="faq-item">
              <p>Apa saja syarat yang dibutuhkan</p>
              <img src={faqIcon} />
            </div>
            <div class="faq-item">
              <p>Berapa hari minimal sewa lepas kunci?</p>
              <img src={faqIcon} />
            </div>
            <div class="faq-item">
              <p>Berapa hari sebelumnya seabaiknya booking sewa mobil?</p>
              <img src={faqIcon} />
            </div>
            <div class="faq-item">
              <p>Apakah ada biaya antar jemput?</p>
              <img src={faqIcon} />
            </div>
            <div class="faq-item">
              <p>Bagaimana jika terjadi kecelakaan</p>
              <img src={faqIcon} />
            </div>
          </div>
        </div>
      </div>
      {/* End FAQ  */}
    </>
  );
};

export default Home;
