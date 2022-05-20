import { useState, useEffect } from "react";
import './Contact.css';


const Contact = () => {

    const initialValues = { email: "", subject: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.message) {
            errors.message = "Message is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.subject) {
            errors.subject = "Subject is required!";
        }
        // else if (values.password.length < 4) {
        //   errors.password = "Password must be more than 4 characters";
        // } else if (values.password.length > 10) {
        //   errors.password = "Password cannot exceed more than 10 characters";
        // }
        return errors;
    };

    return (
        <div>
            <div className="News-mar">
                <div className="container">
                    <div className="row">
                        <div className="News-head">
                            <div>
                                <h5>Contact Us</h5>
                                <h3>Get in Touch</h3>
                            </div>
                        </div>
                    </div>
                    <form action="" className='row' onSubmit={handleSubmit}>
                        <div className="col-md-6 mb-3">
                            <input type="email" className='form-control contact-input' name='email' value={formValues.email} onChange={handleChange} placeholder="Email" />
                            <p className="contact-required-class">{formErrors.email}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className='form-control contact-input' name='subject' value={formValues.subject} onChange={handleChange} placeholder="Subject" />
                            <p className="contact-required-class">{formErrors.subject}</p>
                        </div>
                        <div className="col-md-12 mb-3">
                            <textarea name="message" cols="15" rows="7" value={formValues.message} onChange={handleChange} className='form-control contact-input' placeholder='Message Here...'></textarea>
                            <p className="contact-required-class">{formErrors.message}</p>
                        </div>
                        <div className="col-md-12 justify-content-center d-flex">
                            <button className="btn Contact-btn" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;