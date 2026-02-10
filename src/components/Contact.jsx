import { MapPin, Phone, Mail, Clock, PawPrint } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* Header */}
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          Questions? Need to book an appointment? We're here to help.{" "}
          <span className="heart">💛</span>
        </p>
      </div>

      <div className="contact-wrapper">

        {/* Left info panel */}
        <div className="contact-info">

          <div className="info-item">
            <span className="icon"><MapPin /></span>
            <div>
              <h4>Visit Us</h4>
              <p>123 Pet Care Lane<br />San Francisco, CA 94102</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon"><Phone /></span>
            <div>
              <h4>Call Us</h4>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon"><Mail /></span>
            <div>
              <h4>Email</h4>
              <p>info@pawcare.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon"><Clock /></span>
            <div>
              <h4>Hours</h4>
              <p>
                Mon–Fri: 8:00 AM – 8:00 PM<br />
                Sat: 9:00 AM – 6:00 PM<br />
                Sun: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Right form */}
        <div className="contact-form">
          <form>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="(555) 123-4567" />
              </div>

              <div className="form-group">
                <label>Pet Name</label>
                <input type="text" placeholder="Max" />
              </div>
            </div>

            <div className="form-group">
            <label>Service Interested In</label>

            <div className="select-wrapper">
                <select>
                <option>Select a service</option>
                <option>Grooming</option>
                <option>Vet Consultation</option>
                <option>Pet Boarding</option>
                <option>Training</option>
                </select>
            </div>
            </div>


            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your pet and what you need..." />
            </div>

            <button type="submit" className="send-btn">
              Send Message <PawPrint size={16} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
