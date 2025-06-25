// UpcomingEvents.jsx - Main React Component with Stack Animation

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, DollarSign, Users, Star, X } from 'lucide-react';

const EventCard = ({ event }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Registration Data:', {
      event: event.title,
      ...formData,
      timestamp: new Date().toISOString()
    });
    
    alert(`Registration submitted successfully for ${event.title}!`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      additionalInfo: ''
    });
    
    // Hide form and show details
    setIsFormVisible(false);
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  };

  const showRegistrationForm = () => {
    setIsFormVisible(true);
  };

  const hideRegistrationForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="event-card">
      <div className="card-stack">
        
        {/* Details Card */}
        <div className={`card-layer details-card ${isFormVisible ? 'slide-down' : 'slide-up'}`}>
          <div className="card-content">
            {/* Header Section with Event Details and Poster */}
            <div className="card-header">
              {/* Left: Event Details */}
              <div className="event-details">
                <h3 className="event-name">{event.title}</h3>
                
                <div className="event-info">
                  <div className="info-item">
                    <MapPin className="info-icon blue" />
                    <span className="info-text">{event.venue}</span>
                  </div>
                  
                  <div className="info-item center">
                    <Calendar className="info-icon green" />
                    <span className="info-text">{event.date}</span>
                  </div>
                  
                  <div className="info-item center">
                    <Clock className="info-icon orange" />
                    <span className="info-text">{event.time}</span>
                  </div>
                  
                  <div className="info-item center">
                    <DollarSign className="info-icon red" />
                    <span className="info-text bold">{event.fee}</span>
                  </div>
                </div>
              </div>

              {/* Right: Event Poster */}
              <div className="event-poster">
                <div className="poster-container">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="poster-image"
                    onError={handleImageError}
                  />
                  <div className="poster-placeholder">
                    <Users />
                    <div>Event Poster</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Full Width */}
            <div className="card-body">
              {/* Scrollable content area */}
              <div className="scrollable-content">
                <div>
                  <p className="event-introduction">
                    {event.introduction}
                  </p>
                  <p className="event-description">
                    {event.shortDescription}
                  </p>
                </div>

                <div className="perks-section">
                  <h4 className="perks-title">
                    <Star className="info-icon yellow" />
                    Perks:
                  </h4>
                  <ul className="perks-list">
                    {event.perks.map((perk, index) => (
                      <li key={index}>
                        <span className="perk-bullet"></span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fixed Register Button - Always Visible */}
              <div className="card-footer">
                <button
                  onClick={showRegistrationForm}
                  className="register-btn"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Card */}
        <div className={`card-layer form-card ${isFormVisible ? 'slide-up' : 'slide-down'}`}>
          <div className="form-container">
            <div className="form-header">
              <h3 className="form-title">Register for {event.title}</h3>
              <button
                onClick={hideRegistrationForm}
                className="close-btn"
              >
                <X />
              </button>
            </div>

            <div className="form-body">
              <div className="form-fields">
                <div className="form-group">
                  <label className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-input form-textarea"
                    placeholder="Any special requirements or questions?"
                  />
                </div>
              </div>

              <div className="form-footer">
                <button
                  onClick={handleSubmit}
                  className="submit-btn"
                >
                  Submit Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;