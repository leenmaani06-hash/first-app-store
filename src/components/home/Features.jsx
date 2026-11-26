import React from 'react'
import '../../style/features.css'
function Features() {
    return (
        <div className="features ">
            <div className="row ">

                <div className="feature col-12 col-md-3">
                    <div className="feature-content row">
                        <div className="feature-icon col-auto">
                            <i className="fa-solid fa-truck"></i>
                        </div>

                        <div className="feature-text col">
                            <span>Free Shipping</span>
                            <p>Orders over 300 $</p>
                        </div>
                    </div>
                </div>


                <div className="feature col-12 col-md-3">
                    <div className="feature-content row">
                        <div className="feature-icon col-auto">
                            <i className="fa-solid fa-right-left"></i>
                        </div>

                        <div className="feature-text col">
                            <span>Easy Returns</span>
                            <p>Easy returns within 14days</p>
                        </div>
                    </div>
                </div>


                <div className="feature col-12 col-md-3">
                    <div className="feature-content row">
                        <div className="feature-icon col-auto">
                            <i className="fa-solid fa-lock"></i>
                        </div>

                        <div className="feature-text col">
                            <span>Secure Payment</span>
                            <p>100% secure payment experience</p>
                        </div>
                    </div>
                </div>


                <div className="feature col-12 col-md-3 ">
                    <div className="feature-content row">
                        <div className="feature-icon col-auto">
                            <i className="fa-solid fa-headset"></i>
                        </div>

                        <div className="feature-text col">
                            <span>24/7 Support</span>
                            <p>Always available to help you</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features