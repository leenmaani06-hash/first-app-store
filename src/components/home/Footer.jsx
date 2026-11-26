import React from 'react'
import '../../style/footer.css'
function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* Footer Main */}
        <div className="footer-content row">

          {/* Logo */}
          <div className="footer-logo col-md-3">

    <div className="logo-circle">
        <img src="/img/viva-logo.png" alt="Viva Store" />
    </div>
</div>


          {/* Shop */}
          <div className="footer-column col-md-2">
            <h6>SHOP</h6>

            <p>Women</p>
            <p>Men</p>
            <p>Kids</p>
            <p>Shoes</p>
            <p>Bags</p>
          </div>


          {/* Customer Service */}
          <div className="footer-column col-md-3">
            <h6>CUSTOMER SERVICE</h6>

            <p>Contact Us</p>
            <p>Shipping & Delivery</p>
            <p>Returns & Exchanges</p>
            <p>FAQs</p>
            <p>Payment Methods</p>
          </div>


          {/* About Viva */}
          <div className="footer-column col-md-2">
            <h6>ABOUT VIVA</h6>

            <p>About Us</p>
            <p>Our Categories</p>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
            <p>Offers</p>
          </div>


          {/* Follow & Help */}
          <div className="footer-column col-md-2">
            <h6>FOLLOW & HELP</h6>

            <p>Instagram</p>
            <p>Facebook</p>
            <p>TikTok</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>


        {/* Divider */}
        <hr />


        {/* Social Media */}
        <div className="social row">

          <div className="col-12">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>

        </div>


        {/* Copyright */}
        <div className="copyright row">

          <div className="col-12">
            <p>© 2026 Viva Store. All Rights Reserved.</p>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer