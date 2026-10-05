import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseSlider from './components/ShowcaseSlider';
import { CAFE_SPACES, MENU_ITEMS, GUEST_STORIES } from './data/cafeData';

export default function App() {
  // Active Space Corner Tab
  const [selectedSpaceId, setSelectedSpaceId] = useState('solarium');
  const currentSpace = CAFE_SPACES.find((s) => s.id === selectedSpaceId) || CAFE_SPACES[0];

  // Menu Category Filter
  const [activeMenuCat, setActiveMenuCat] = useState('all');
  const [jainOnly, setJainOnly] = useState(false);

  // Table Reservation State (Simple, Warm, Cozy)
  const [reserveCorner, setReserveCorner] = useState('The Sunlit Glasshouse Solarium');
  const [reserveDay, setReserveDay] = useState('Today');
  const [reserveTime, setReserveTime] = useState('06:30 PM (Sunset)');
  const [reserveParty, setReserveParty] = useState('Table for Two 🥂');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [wantJain, setWantJain] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Filtered Menu Items
  const filteredDishes = MENU_ITEMS.filter((dish) => {
    const matchesCat = activeMenuCat === 'all' || dish.category === activeMenuCat;
    const matchesJain = !jainOnly || dish.isJain;
    return matchesCat && matchesJain;
  });

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      alert('Please share your name and phone number so we can save your spot!');
      return;
    }
    setIsBooked(true);
  };

  // Called when user clicks "Reserve Table for This" inside the Showcase Slider
  const handleReserveFromShowcase = (item) => {
    setSpecialNote(`Craving: ${item.name} (${item.price})`);
    if (item.diet.includes('Jain')) {
      setWantJain(true);
    }
    const reserveSection = document.getElementById('reserve');
    if (reserveSection) {
      reserveSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp Message Formatter
  const whatsappUrl = () => {
    const noteText = [
      wantJain ? '🌿 Jain Food Preferred' : '',
      specialNote ? `Note: ${specialNote}` : ''
    ]
      .filter(Boolean)
      .join(' · ');

    const msg = encodeURIComponent(
      `Hello Neighbourhood Cafe! 🌿\n\nI would love to save a table:\n• Name: ${guestName}\n• Seating: ${reserveCorner}\n• When: ${reserveDay} around ${reserveTime}\n• Party: ${reserveParty}\n${noteText ? '• Notes: ' + noteText + '\n' : ''}\nPlease let us know if this spot is available for us. Thank you!`
    );
    return `https://wa.me/919826000000?text=${msg}`;
  };

  return (
    <div className="cozy-app">
      
      {/* Top Banner */}
      <div className="cozy-top-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <span className="green-dot"></span>
            <span>Open today in Saket, Indore · 11:00 AM – 11:30 PM</span>
          </div>
          <div className="banner-right">
            <span>4.6★ Rated Sanctuary</span>
            <span>·</span>
            <a href="#reserve">Save a Table</a>
            <span>·</span>
            <a href="https://maps.google.com/?q=Neighbourhood+Cafe+Saket+Indore" target="_blank" rel="noopener noreferrer">
              Find Us in Saket
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="cozy-header">
        <div className="container nav-container">
          <a href="#hero" className="brand-wrapper">
            <div className="brand-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 21V10a8 8 0 0 1 16 0v11" />
                <path d="M9 21V12a3 3 0 0 1 6 0v9" />
              </svg>
            </div>
            <div>
              <span className="brand-name">neighbourhood</span>
              <span className="brand-sub">Glasshouse & Courtyard · Indore</span>
            </div>
          </a>

          <nav className="nav-menu">
            <a href="#showcase" className="nav-link">Signatures</a>
            <a href="#spaces" className="nav-link">Our Corners</a>
            <a href="#menu" className="nav-link">Bake & Brew</a>
            <a href="#reserve" className="nav-link">Save a Table</a>
            <a href="#visit" className="nav-link">Hours & Location</a>
          </nav>

          <div className="nav-actions">
            <motion.a
              href="#reserve"
              className="nav-reserve-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Spot
            </motion.a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-wrapper" id="hero">
        <div className="container hero-grid">
          
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="cozy-tag">Sanctuary in Saket</span>
            
            <h1 className="hero-headline">
              A place to slow down, <br className="desktop-br" />
              sip coffee, and <em>breathe.</em>
            </h1>

            <p className="hero-description">
              Sunlit glasshouse solarium, hearth sourdough, and unhurried coffee in Saket, Indore.
            </p>

            <div className="hero-buttons-row">
              <motion.a
                href="#reserve"
                className="btn-honey"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Save a Table</span>
                <span>→</span>
              </motion.a>

              <motion.a
                href="#showcase"
                className="btn-linen"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Signatures</span>
              </motion.a>
            </div>

            <div className="hero-stats-strip">
              <div className="stat-unit">
                <strong>4.6★</strong>
                <span>1,400+ Indore Hearts</span>
              </div>
              <div className="stat-unit">
                <strong>Solarium</strong>
                <span>Natural Glasshouse Canopy</span>
              </div>
              <div className="stat-unit">
                <strong>Courtyard</strong>
                <span>Underlit Amber Stone Steps</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            className="hero-visual-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-main-photo-frame">
              <img
                src="assets/images/solarium-glasshouse.jpg"
                alt="Sunlit glasshouse solarium with cane chairs and celadon tiles at Neighbourhood Cafe Indore"
              />
              <div className="photo-caption-bubble">
                <div>
                  <div className="caption-title">The Glasshouse Solarium</div>
                  <div className="caption-sub">Filtered natural daylight & leafy canopy</div>
                </div>
                <span style={{ fontSize: '1.4rem' }}>🌿</span>
              </div>
            </div>

            <div className="mobile-rating-pill">
              <span>★ 4.6</span>
              <span>·</span>
              <span>1,400+ Indore Hearts</span>
              <span>·</span>
              <span>Saket Nagar</span>
            </div>

            {/* Floating Food Accent */}
            <motion.div
              className="floating-food-card"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <img
                src="assets/images/mushroom-pasta.jpg"
                className="floating-food-thumb"
                alt="Mushroom Stroganoff"
              />
              <div>
                <span className="food-note-name">Mushroom Stroganoff</span>
                <span className="food-note-desc">Velvety & warm with butter rice</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* REFERENCE-INSPIRED SIGNATURE SHOWCASE SLIDER */}
      <section className="section showcase-section" id="showcase">
        <div className="container-wide">
          
          <div className="section-intro">
            <span className="cozy-tag">Interactive Creations</span>
            <h2 className="section-headline">Things We're Known For</h2>
            <p className="section-subtext">
              Slide through our signature comfort dishes. Tap <strong>"Reveal The Dish"</strong> to discover the ingredients and secrets behind every recipe.
            </p>
          </div>

          {/* The Showcase Slider Component */}
          <ShowcaseSlider onReserveDish={handleReserveFromShowcase} />

        </div>
      </section>

      {/* OUR CORNERS (SPACES) */}
      <section className="section spaces-section" id="spaces">
        <div className="container">
          
          <div className="section-intro">
            <span className="cozy-tag">Three Distinct Corners</span>
            <h2 className="section-headline">Find Your Quiet Corner</h2>
            <p className="section-subtext">
              Every hour here feels different. Find where you feel most at home today.
            </p>
          </div>

          {/* Space Tabs Bar */}
          <div className="spaces-tabs-bar">
            {CAFE_SPACES.map((space) => {
              const isActive = selectedSpaceId === space.id;
              return (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpaceId(space.id)}
                  className={`space-tab-pill ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="spaceTabPill"
                      className="pill-active-bg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="pill-label">{space.title}</span>
                </button>
              );
            })}
          </div>

          {/* Animated Space Card Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpace.id}
              className="space-display-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-card-media">
                <img src={currentSpace.image} alt={currentSpace.title} />
              </div>

              <div className="space-card-details">
                <span className="space-vibe-pill">{currentSpace.vibe}</span>
                
                <h3 className="space-title-large">{currentSpace.title}</h3>
                
                <p className="space-desc-text">{currentSpace.description}</p>

                <ul className="space-perks-list">
                  {currentSpace.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="perk-bullet">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-action-row">
                  <motion.a
                    href="#reserve"
                    className="btn-honey"
                    onClick={() => setReserveCorner(currentSpace.title)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Save a Spot in {currentSpace.title.replace('The ', '')} →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* TABLE RESERVATION SECTION (COZY & EFFORTLESS) */}
      <section className="section reservation-section" id="reserve">
        <div className="container">
          
          <div className="section-intro">
            <span className="cozy-tag">Warm Hospitality</span>
            <h2 className="section-headline">Save a Table for You</h2>
            <p className="section-subtext">
              Whether it’s a quiet solo coffee with your journal, a date under the amber evening steps, or Sunday brunch with loved ones.
            </p>
          </div>

          <div className="reservation-box">
            
            {!isBooked ? (
              <form onSubmit={handleReservationSubmit}>
                
                {/* Step 1: Corner Choice */}
                <div className="reservation-step-block">
                  <label className="step-label">1. Where would you like to sit?</label>
                  <div className="corner-options-row">
                    {[
                      {
                        title: 'The Sunlit Glasshouse Solarium',
                        emoji: '☀️',
                        desc: 'Glass canopy, cane chairs & trees'
                      },
                      {
                        title: 'The Stepped Courtyard Garden',
                        emoji: '🌙',
                        desc: 'Underlit amber steps & night breeze'
                      },
                      {
                        title: 'The Cosy Stucco Bungalow',
                        emoji: '🛋️',
                        desc: 'Warm plaster walls & coffee aroma'
                      }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.title}
                        onClick={() => setReserveCorner(opt.title)}
                        className={`corner-pick-card ${reserveCorner === opt.title ? 'active' : ''}`}
                      >
                        <span className="corner-emoji">{opt.emoji}</span>
                        <span className="corner-name">{opt.title.replace('The ', '')}</span>
                        <span className="corner-sub">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date & Time */}
                <div className="reservation-step-block">
                  <label className="step-label">2. When are you joining us?</label>
                  
                  {/* Days Chips */}
                  <div className="chips-row" style={{ marginBottom: '12px' }}>
                    {['Today', 'Tomorrow', 'This Saturday', 'This Sunday'].map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setReserveDay(d)}
                        className={`choice-chip ${reserveDay === d ? 'active' : ''}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  {/* Time Chips */}
                  <div className="chips-row">
                    {[
                      '12:00 PM (Brunch)',
                      '03:30 PM (Sunlit High Tea)',
                      '06:30 PM (Sunset)',
                      '08:00 PM (Dinner)',
                      '09:45 PM (Late Evening)'
                    ].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setReserveTime(t)}
                        className={`choice-chip ${reserveTime === t ? 'active' : ''}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Party Size */}
                <div className="reservation-step-block">
                  <label className="step-label">3. Table for how many?</label>
                  <div className="chips-row">
                    {[
                      'Just Me ☕',
                      'Table for Two 🥂',
                      'Small Group (3–4) 🌿',
                      'Celebration Table (5–8) ✨'
                    ].map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setReserveParty(p)}
                        className={`choice-chip ${reserveParty === p ? 'active' : ''}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Contact & Notes */}
                <div className="reservation-step-block">
                  <label className="step-label">4. Your details so we can welcome you</label>
                  
                  <div className="input-two-col" style={{ marginBottom: '14px' }}>
                    <div className="cozy-field">
                      <label className="field-label">Your Name</label>
                      <input
                        type="text"
                        required
                        className="cozy-input"
                        placeholder="e.g. Suryansh Jain"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                      />
                    </div>
                    <div className="cozy-field">
                      <label className="field-label">WhatsApp Mobile</label>
                      <input
                        type="tel"
                        required
                        className="cozy-input"
                        placeholder="+91 98260 XXXXX"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="cozy-field" style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setWantJain(!wantJain)}
                        className={`diet-pill-btn ${wantJain ? 'active' : ''}`}
                      >
                        <span>🌿 Jain Preparation</span>
                        {wantJain && <span>✓</span>}
                      </button>
                    </div>

                    <input
                      type="text"
                      className="cozy-input"
                      placeholder="Any gentle notes (e.g. quiet corner, anniversary, etc.)"
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <motion.button
                  type="submit"
                  className="reserve-now-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Save My Table Spot</span>
                  <span>→</span>
                </motion.button>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--cozy-sand)', marginTop: '12px' }}>
                  No advance fee required. We hold tables for 15 minutes past arrival.
                </p>

              </form>
            ) : (
              /* Warm Animated Invitation Card on Booking */
              <motion.div
                className="confirmed-invite-card"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="invite-badge">🌿 Table Reserved for You</span>
                
                <h3 className="invite-title">We’re saving a spot for you, {guestName}!</h3>
                
                <p className="invite-text">
                  Your table in <strong>{reserveCorner}</strong> has been set aside for <strong>{reserveDay}</strong> around <strong>{reserveTime}</strong> for <strong>{reserveParty}</strong>.
                </p>

                <div className="invite-details-bubble">
                  <div className="detail-unit">
                    <small>Guest</small>
                    <span>{guestName}</span>
                  </div>
                  <div className="detail-unit">
                    <small>Corner</small>
                    <span>{reserveCorner.replace('The ', '')}</span>
                  </div>
                  <div className="detail-unit">
                    <small>Time</small>
                    <span>{reserveTime}</span>
                  </div>
                </div>

                <div className="invite-actions-row">
                  <motion.a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-confirm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Chat on WhatsApp to Confirm Spot</span>
                    <span>💬</span>
                  </motion.a>

                  <button
                    type="button"
                    onClick={() => setIsBooked(false)}
                    className="btn-reset"
                  >
                    Edit Reservation
                  </button>
                </div>
              </motion.div>
            )}

          </div>

        </div>
      </section>

      {/* BAKE & BREW (MENU) */}
      <section className="section menu-section" id="menu">
        <div className="container">
          
          <div className="section-intro">
            <span className="cozy-tag">Honest Culinary Craft</span>
            <h2 className="section-headline">Things We Bake & Brew</h2>
            <p className="section-subtext">
              Slow food made with genuine care. Fresh hand-pulled pasta, naturally fermented sourdough pizzas, and our acclaimed fig & biscoff creations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="menu-filter-bar">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'comfort', label: 'Hearty Comfort' },
              { id: 'pizza', label: 'Sourdough Hearth' },
              { id: 'small-plates', label: 'Warm Small Plates' },
              { id: 'sweet-brews', label: 'Shakes & Brews' }
            ].map((cat) => {
              const isActive = activeMenuCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveMenuCat(cat.id)}
                  className={`menu-category-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuCatPill"
                      className="menu-pill-bg"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="menu-pill-text">{cat.label}</span>
                </button>
              );
            })}

            {/* Jain Filter Toggle */}
            <button
              onClick={() => setJainOnly(!jainOnly)}
              className={`diet-pill-btn ${jainOnly ? 'active' : ''}`}
              style={{ marginLeft: '6px' }}
            >
              <span>🌿 Jain Friendly Only</span>
              {jainOnly && <span>✓</span>}
            </button>
          </div>

          {/* Dishes Grid */}
          <motion.div className="menu-grid" layout>
            <AnimatePresence>
              {filteredDishes.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="dish-card"
                >
                  <div className="dish-photo-wrap">
                    <img src={dish.image} alt={dish.name} loading="lazy" />
                    <span className="dish-tag-badge">{dish.tag}</span>
                    {dish.isJain && <span className="dish-jain-leaf">🌿 Jain Prep Available</span>}
                  </div>

                  <div className="dish-info">
                    <div className="dish-title-row">
                      <h4 className="dish-title">{dish.name}</h4>
                      <span className="dish-price">₹{dish.price}</span>
                    </div>
                    <p className="dish-desc">{dish.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* GUEST STORIES */}
      <section className="section stories-section" id="stories">
        <div className="container">
          
          <div className="section-intro">
            <span className="cozy-tag">Why People Keep Coming Back</span>
            <h2 className="section-headline">Letters from Guests</h2>
            <p className="section-subtext">
              Real moments from afternoons and evenings spent at Neighbourhood.
            </p>
          </div>

          <div className="stories-grid">
            {GUEST_STORIES.map((story, i) => (
              <motion.div
                key={i}
                className="story-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div style={{ color: '#e8a858', fontSize: '1.2rem', marginBottom: '8px' }}>★★★★★</div>
                <p className="story-quote">“{story.quote}”</p>
                <div className="story-author">
                  <strong>{story.author}</strong>
                  <span>{story.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* VISIT & HOURS STRIP */}
      <section className="section visit-section" id="visit">
        <div className="container">
          <div className="visit-card-grid">
            
            <div className="visit-info-col">
              <span className="cozy-tag">Saket Nagar, Indore</span>
              <h3>Come say hello.</h3>
              <p>
                We are open seven days a week. Whether you want to escape with a book, catch up with an old friend, or enjoy a slow family dinner under the trees.
              </p>

              <div className="visit-meta-list">
                <div className="visit-meta-item">
                  <span className="icon">⏰</span>
                  <span>Open Daily · 11:00 AM – 11:30 PM (Kitchen closes 10:45 PM)</span>
                </div>
                <div className="visit-meta-item">
                  <span className="icon">📍</span>
                  <span>Saket Nagar, Indore, Madhya Pradesh 452001</span>
                </div>
                <div className="visit-meta-item">
                  <span className="icon">🚗</span>
                  <span>Valet parking available at our mint gate entrance</span>
                </div>
                <div className="visit-meta-item">
                  <span className="icon">🐾</span>
                  <span>Pet-friendly stepped courtyard seating</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=Neighbourhood+Cafe+Saket+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-honey"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
                <a href="#reserve" className="btn-linen">
                  <span>Save a Table</span>
                </a>
              </div>
            </div>

            <div className="visit-visual-col">
              <img
                src="assets/images/facade-entrance.jpg"
                alt="Neighbourhood Cafe entrance with mint gate in Indore"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cozy-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <h4>neighbourhood</h4>
              <p>A quiet solarium glasshouse & courtyard in Saket, Indore.</p>
            </div>

            <div className="footer-links">
              <a href="#hero">Back to Top</a>
              <a href="#showcase">Signatures</a>
              <a href="#spaces">Our Corners</a>
              <a href="#menu">Menu</a>
              <a href="#reserve">Save a Table</a>
              <a href="https://maps.google.com/?q=Neighbourhood+Cafe+Saket+Indore" target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>

          <div className="footer-copyright">
            © 2026 Neighbourhood Cafe, Indore. Built with warm hospitality & peaceful quiet.
          </div>
        </div>
      </footer>

    </div>
  );
}
