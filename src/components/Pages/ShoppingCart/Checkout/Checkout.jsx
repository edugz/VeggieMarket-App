import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { CartContext } from "../../../hooks/CartContext.jsx";
import "./Checkout.css";

function CheckoutForm() {
  const { cart, resetCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactDetailsPhone: "",
    contactDetailsEmail: "",
    information: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedCartItems = cart
      .map(
        (item) =>
          `<b>${item.name}</b> (${item.weight}kg)<br>
          <b>Quantity:</b> ${item.quantity}u<br> 
          <b>Item Price:</b> ¥${item.price * item.quantity}`
      )
      .join("<br><br>");

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const fullOrderDetails = `
    ${formattedCartItems}<br><br>---<br>
    <b>Total Price:</b> ¥${totalPrice}<br>---`;

    const formattedFormData = `
    <b>Name:</b> ${formData.name}<br>
    <br>
    <b>Address:</b> ${formData.address}<br>
    <br>
    <b>Phone Number:</b> ${formData.contactDetailsPhone}<br>
    <br>
    <b>Email:</b> ${formData.contactDetailsEmail}<br>
    <br>
    <b>Additional Info:</b> ${formData.information}`;

    emailjs
      .send(
        "service_udbcvxm",
        "template_v4l83um",
        {
          formData: formattedFormData,
          /* Cart */
          cartItems: fullOrderDetails,
          orderName: formData.name,
        },
        "OM4CUFIGRqyF_5YI6"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );

          // Reset form data
          setFormData({
            name: "",
            address: "",
            contactDetailsPhone: "",
            contactDetailsEmail: "",
            information: "",
          });

          resetCart();

          navigate("/thank-you");
        },
        (error) => {
          console.error("Failed to send email. Error: ", error);
        }
      );
  };

  /* Form Render */
  return (
    <div className="checkout-main">
      <div className="checkout">
        <h2 className="checkout-heading">Provide Your Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <label className="checkout-label">
            Name:
            <input
              className="checkout-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Fullname..."
            />
          </label>
          <label className="checkout-label">
            Address:
            <input
              className="checkout-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Address..."
            />
          </label>

          <label className="checkout-label">
            Phone Number:
            {formData.contactMethodPhone}
            <input
              className="checkout-input"
              type="text"
              name="contactDetailsPhone"
              value={formData.contactDetailsPhone}
              onChange={handleChange}
              required
              placeholder="Phone Number..."
            />
          </label>

          <label className="checkout-label">
            Email:
            {formData.contactMethodEmail}
            <input
              className="checkout-input"
              type="text"
              name="contactDetailsEmail"
              value={formData.contactDetailsEmail}
              onChange={handleChange}
              required
              placeholder="Email..."
            />
          </label>

          <label className="checkout-label">
            Additional Information (optional):
            <input
              className="checkout-input"
              type="text"
              name="information"
              value={formData.information}
              onChange={handleChange}
              placeholder="Enter any additional information"
            />
          </label>

          <button className="checkout-submit" type="submit">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
