import React from 'react'
import '../../style/carousel.css'

function Carousel({ products }) {
    return (
        <div id="carouselExampleIndicators"  dir="rtl" className="carousel slide carousel-dark">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="container-fluid px-5">
                        <div className="row align-items-center">
                            {/* Image Section (Left) */}
                            <div className="col-md-6 position-relative text-center">
                                <div className="discount-badge">
                                    <span>UP TO</span>
                                    <strong>50% OFF</strong>
                                </div>
                                <img src={products[0]?.thumbnail} className="carousel-img" alt="slide 1" />
                            </div>

                            {/* Text & Buttons Section (Right) */}
                            <div className="col-md-6 text-end ps-md-5">
                                <h1 className="hero-title">Discover the Latest Products<br />Just for You</h1>
                                <p className="hero-desc">
                                    Shop from a wide range of high-quality products<br />
                                    .and enjoy a seamless, secure shopping experience
                                </p>
                                <div className="d-flex gap-2 justify-content-end btn-carousel">
                                    <a href="#" className="btn btn-dark rounded-pill px-4">Shop Now</a>
                                    <a href="#" className="btn btn-outline-dark rounded-pill px-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="container-fluid px-5">
                        <div className="row align-items-center">
                            {/* Image Section (Left) */}
                            <div className="col-md-6 position-relative text-center">
                                <div className="discount-badge">
                                    <span>UP TO</span>
                                    <strong>50% OFF</strong>
                                </div>
                                <img src={products[1]?.thumbnail} className="carousel-img" alt="slide 2" />
                            </div>

                            {/* Text & Buttons Section (Right) */}
                            <div className="col-md-6 text-end ps-md-5">
                                <h1 className="hero-title">Discover the Latest Products<br />Just for You</h1>
                                <p className="hero-desc">
                                    Shop from a wide range of high-quality products<br />
                                    .and enjoy a seamless, secure shopping experience
                                </p>
                                <div className="d-flex gap-2 justify-content-end btn-carousel">
                                    <a href="#" className="btn btn-dark rounded-pill px-4">Shop Now</a>
                                    <a href="#" className="btn btn-outline-dark rounded-pill px-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                    <div className="container-fluid px-5">
                        <div className="row align-items-center">
                            {/* Image Section (Left) */}
                            <div className="col-md-6 position-relative text-center">
                                <div className="discount-badge">
                                    <span>UP TO</span>
                                    <strong>50% OFF</strong>
                                </div>
                                <img src={products[2]?.thumbnail} className="carousel-img" alt="slide 3" />
                            </div>

                            {/* Text & Buttons Section (Right) */}
                            <div className="col-md-6 text-end ps-md-5">
                                <h1 className="hero-title">Discover the Latest Products<br />Just for You</h1>
                                <p className="hero-desc">
                                    Shop from a wide range of high-quality products<br />
                                    .and enjoy a seamless, secure shopping experience
                                </p>
                                <div className="d-flex gap-2 justify-content-end btn-carousel">
                                    <a href="#" className="btn btn-dark rounded-pill px-4">Shop Now</a>
                                    <a href="#" className="btn btn-outline-dark rounded-pill px-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel