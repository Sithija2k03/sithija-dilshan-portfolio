import React, { useState, useEffect } from 'react';
import { submitContact } from '../../services/api';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'Other'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's approximate location (optional)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied or unavailable');
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'Other'
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Open location in Google Maps
  const openLocation = () => {
    const { lat, lng } = CONTACT_INFO.locationCoords;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your project or internship opportunity
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="info-link">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="info-link">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="info-item clickable" onClick={openLocation}>
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>{CONTACT_INFO.location}</p>
                <span className="view-map">View on Map →</span>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="location-map">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58640142688!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890`}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

            <div className="social-links-contact">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <span className="icon">🔗</span> GitHub
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="icon">💼</span> LinkedIn
                </a>
                <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noopener noreferrer">
                  <span className="icon">📊</span> Kaggle
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiryType">Inquiry Type *</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="Internship">Internship Opportunity</option>
                <option value="Freelance">Freelance Project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief subject of your message"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project or inquiry..."
                required
              ></textarea>
            </div>

            {success && (
              <div className="alert alert-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="alert alert-error">
                ❌ {error}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                <>Send Message 📨</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;