import React, { useState, useEffect } from 'react';


// Import Lucide React Icons
import {
  Info, Users, Image, Handshake, CheckCircle,
  Linkedin, Twitter, CalendarDays, Lightbulb, Mic,
  Crown, Star, Briefcase,
  UserRoundCheck, UserPlus // NEW: Icons for speaker types
} from 'lucide-react';

const CompletedEventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const openModal = () => {
    setShowModal(true);
    setActiveTab('description');
  };
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (showModal) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModal]);

  const isTabActive = (tabName) => activeTab === tabName;

  // Filter speakers into categories
  const mainSpeakers = event.speakers?.filter(speaker => speaker.type === 'main') || [];
  const assistantSpeakers = event.speakers?.filter(speaker => speaker.type === 'assistant' || !speaker.type) || []; // Catch those without a 'type' as assistants/support

  return (
    <>
      {/* Main Event Card */}
      <div className="event-card" onClick={openModal}>
        <div className="event-card-image">
          <img
            src={event.imageUrl}
            alt={event.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`;
            }}
          />
        </div>
        <div className="event-card-content">
          <h3>{event.title}</h3>
          <p className="event-date">
            <CalendarDays size={16} className="card-icon" /> {event.date}
          </p>
          <p className="event-summary">
            <Lightbulb size={16} className="card-icon" /> {event.summary}
          </p>
          <button className="more-info-button" onClick={openModal}>
            More Info
          </button>
        </div>
      </div>

      {/* Modal / Popup Card */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{event.title} 🎉</h2>

            <div className="modal-tabs">
              <button
                className={`tab-button ${isTabActive('description') ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                <Info size={18} className="tab-icon" /> Description
              </button>
              {event.speakers && event.speakers.length > 0 && (
                <button
                  className={`tab-button ${isTabActive('speakers') ? 'active' : ''}`}
                  onClick={() => setActiveTab('speakers')}
                >
                  <Users size={18} className="tab-icon" /> Speakers
                </button>
              )}
              {event.photos && event.photos.length > 0 && (
                <button
                  className={`tab-button ${isTabActive('photos') ? 'active' : ''}`}
                  onClick={() => setActiveTab('photos')}
                >
                  <Image size={18} className="tab-icon" /> Photos
                </button>
              )}
              {event.sponsors && event.sponsors.length > 0 && (
                <button
                  className={`tab-button ${isTabActive('sponsors') ? 'active' : ''}`}
                  onClick={() => setActiveTab('sponsors')}
                >
                  <Handshake size={18} className="tab-icon" /> Sponsors
                </button>
              )}
            </div>

            <div className="tab-content-container">
              {isTabActive('description') && (
                <div className="modal-tab-section">
                  {event.descriptionDetails ? (
                    <>
                      {event.descriptionDetails.heading && (
                        <h4 className="description-heading">
                          <Info size={20} className="section-heading-icon" /> {event.descriptionDetails.heading}
                        </h4>
                      )}
                      {event.descriptionDetails.brief && (
                        <p className="brief-description">{event.descriptionDetails.brief}</p>
                      )}
                      {event.descriptionDetails.perks && event.descriptionDetails.perks.length > 0 && (
                        <div className="perks-section">
                          <h4 className="perks-title">What You Gained: ✨</h4>
                          <ul className="perks-list">
                            {event.descriptionDetails.perks.map((perk, index) => (
                              <li key={index} className="perk-item">
                                <CheckCircle size={20} className="perk-icon" />
                                {perk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    event.description && <p>{event.description}</p>
                  )}
                </div>
              )}

              {isTabActive('speakers') && event.speakers && event.speakers.length > 0 && (
                <div className="modal-tab-section">
                  <h3><Mic size={24} className="section-heading-icon" /> Our Esteemed Speakers 🗣️</h3> {/* Updated heading */}

                  {mainSpeakers.length > 0 && (
                    <>
                      <h4 className="speaker-sub-heading">
                        <UserRoundCheck size={20} className="section-heading-icon" /> Main Speakers 💡
                      </h4>
                      <div className="speakers-list">
                        {mainSpeakers.map((speaker, index) => (
                          <div key={index} className="speaker-item">
                            <img
                              src={speaker.photoUrl}
                              alt={speaker.name}
                              className="speaker-photo"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/150x150/CCCCCC/333333?text=No+Photo`;
                              }}
                            />
                            <div className="speaker-details">
                              <h4>{speaker.name}</h4>
                              <p className="speaker-title">{speaker.title}</p>
                              {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
                              {(speaker.linkedin || speaker.twitter) && (
                                <div className="speaker-social-links">
                                  {speaker.linkedin && (
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${speaker.name}'s LinkedIn`}>
                                      <Linkedin size={20} className="social-icon" />
                                    </a>
                                  )}
                                  {speaker.twitter && (
                                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${speaker.name}'s Twitter`}>
                                      <Twitter size={20} className="social-icon" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {assistantSpeakers.length > 0 && (
                    <>
                      <h4 className="speaker-sub-heading">
                        <UserPlus size={20} className="section-heading-icon" /> Assistant & Support Speakers 🤝
                      </h4>
                      <div className="speakers-list">
                        {assistantSpeakers.map((speaker, index) => (
                          <div key={index} className="speaker-item">
                            <img
                              src={speaker.photoUrl}
                              alt={speaker.name}
                              className="speaker-photo"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/150x150/CCCCCC/333333?text=No+Photo`;
                              }}
                            />
                            <div className="speaker-details">
                              <h4>{speaker.name}</h4>
                              <p className="speaker-title">{speaker.title}</p>
                              {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
                              {(speaker.linkedin || speaker.twitter) && (
                                <div className="speaker-social-links">
                                  {speaker.linkedin && (
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${speaker.name}'s LinkedIn`}>
                                      <Linkedin size={20} className="social-icon" />
                                    </a>
                                  )}
                                  {speaker.twitter && (
                                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${speaker.name}'s Twitter`}>
                                      <Twitter size={20} className="social-icon" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {isTabActive('photos') && event.photos && event.photos.length > 0 && (
                <div className="modal-tab-section">
                  <h3><Image size={24} className="section-heading-icon" /> Event Photos 📸</h3> {/* Added emoji */}
                  <div className="event-photos-grid">
                    {event.photos.map((photo, index) => (
                      <div key={index} className="photo-gallery-item">
                        <img
                          src={photo.url}
                          alt={photo.caption || `Event Photo ${index + 1}`}
                          className="event-photo-thumbnail"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/800x600/CCCCCC/333333?text=Photo+Error`;
                          }}
                        />
                        {photo.caption && <p className="photo-caption">{photo.caption}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isTabActive('sponsors') && event.sponsors && event.sponsors.length > 0 && (
                <div className="modal-tab-section">
                  <h3><Handshake size={24} className="section-heading-icon" /> Our Valued Sponsors 💖</h3> {/* Added emoji */}

                  {event.sponsors.filter(s => s.tier === 'Platinum').length > 0 && (
                    <>
                      <h4 className="sponsor-tier-heading">
                        <Crown size={20} className="section-heading-icon" /> Platinum Sponsors ✨
                      </h4>
                      <div className="sponsors-list">
                        {event.sponsors.filter(s => s.tier === 'Platinum').map((sponsor, index) => (
                          <a
                            key={index}
                            href={sponsor.website || '#'}
                            target={sponsor.website ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="sponsor-item"
                            aria-label={`Visit ${sponsor.name} website`}
                          >
                            <img
                              src={sponsor.logoUrl}
                              alt={sponsor.name}
                              className="sponsor-logo"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/100x50/CCCCCC/333333?text=Sponsor+Logo`;
                              }}
                            />
                            <p className="sponsor-name">{sponsor.name}</p>
                          </a>
                        ))}
                      </div>
                    </>
                  )}

                  {event.sponsors.filter(s => s.tier === 'Gold').length > 0 && (
                    <>
                      <h4 className="sponsor-tier-heading">
                        <Star size={20} className="section-heading-icon" /> Gold Sponsors 🌟
                      </h4>
                      <div className="sponsors-list">
                        {event.sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                          <a
                            key={index}
                            href={sponsor.website || '#'}
                            target={sponsor.website ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="sponsor-item"
                            aria-label={`Visit ${sponsor.name} website`}
                          >
                            <img
                              src={sponsor.logoUrl}
                              alt={sponsor.name}
                              className="sponsor-logo"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/100x50/CCCCCC/333333?text=Sponsor+Logo`;
                              }}
                            />
                            <p className="sponsor-name">{sponsor.name}</p>
                          </a>
                        ))}
                      </div>
                    </>
                  )}

                  {event.sponsors.filter(s => !s.tier || (s.tier !== 'Platinum' && s.tier !== 'Gold')).length > 0 && (
                    <>
                      <h4 className="sponsor-tier-heading">
                        <Briefcase size={20} className="section-heading-icon" /> Other Sponsors 💼
                      </h4>
                      <div className="sponsors-list">
                        {event.sponsors.filter(s => !s.tier || (s.tier !== 'Platinum' && s.tier !== 'Gold')).map((sponsor, index) => (
                          <a
                            key={index}
                            href={sponsor.website || '#'}
                            target={sponsor.website ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="sponsor-item"
                            aria-label={`Visit ${sponsor.name} website`}
                          >
                            <img
                              src={sponsor.logoUrl}
                              alt={sponsor.name}
                              className="sponsor-logo"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/100x50/CCCCCC/333333?text=Sponsor+Logo`;
                              }}
                            />
                            <p className="sponsor-name">{sponsor.name}</p>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompletedEventCard;