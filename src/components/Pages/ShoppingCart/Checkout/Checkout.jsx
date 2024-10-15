import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function CheckoutForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactMethod: "",
    contactDetails: "",
    details: "",
  });

  const [isContactDetailsVisible, setIsContactDetailsVisible] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "contactMethod") {
      setIsContactDetailsVisible(value !== "");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted: ", formData);
    navigate("/thank-you");
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
            />
          </label>
          <label className="checkout-label">
            Preferred Method of Contact:
            <select
              className="checkout-select"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="phonecall">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>

          {isContactDetailsVisible && (
            <label className="checkout-label">
              {formData.contactMethod === "email" && "Email:"}
              {formData.contactMethod === "phonecall" && "Phone Number:"}
              {formData.contactMethod === "whatsapp" && "WhatsApp Number:"}
              <input
                className="checkout-input"
                type="text"
                name="contactDetails"
                value={formData.contactDetails}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <label className="checkout-label">
            Additional Details (optional):
            <input
              className="checkout-input"
              type="text"
              name="details"
              value={formData.details}
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
