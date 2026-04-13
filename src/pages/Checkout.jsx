import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();

    toast.success("Order placed successfully ✅");

    setTimeout(() => {
      navigate("/"); // redirect to home
    }, 1500);
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      Shipping <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>Total</strong>
                      <strong>${Math.round(subtotal + shipping)}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>

                <div className="card-body">
                  <form onSubmit={handleCheckout}>
                    <div className="row g-3">

                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" required />
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-md-5 my-1">
                        <label htmlFor="country">Country</label>
                        <select className="form-select" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="state">State</label>
                        <select className="form-select" required>
                          <option value="">Choose...</option>
                          <option>Andhra Pradesh</option>
                        </select>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number">Card number</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary"
                      type="submit"
                    >
                      Place Order
                    </button>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;