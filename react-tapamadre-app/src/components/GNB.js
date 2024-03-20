import React from 'react'
import { Link } from 'react-router-dom'

const GNB = () => {
    return (
        <div className="preloader">
            <nav classNameName="navbar py-4 py-lg-3 navbar-expand border-bottom bg-white navbar-light w-100">
                <div className="container">
                    <a href="index.html" className="navbar-brand width-80">
                        <img src="assets/img/logo/logo-dark.svg" alt="" className="img-fluid" />
                    </a>
                    <div className="d-flex align-items-center ms-auto">
                        <small className="me-3 text-muted"> Book Now</small>
                        <a href="#!" className="lead text-dark">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 16 16"
                                className="bi bi-telephone-fill me-1 align-middle"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                                />
                            </svg>
                            <span className="lead">+01 0123 4567</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default GNB
