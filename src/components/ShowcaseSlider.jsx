import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SHOWCASE_ITEMS = [
  {
    id: 'stroganoff',
    name: 'MUSHROOM STROGANOFF',
    sub: '& WARM BUTTER PILAF',
    color: '#F4E7D3', // Warm Butter Caramel
    textColor: '#5A381E',
    tag: 'Indore Connoisseur Choice',
    price: '₹440',
    image: 'assets/images/mushroom-pasta.jpg',
    secrets: [
      { icon: '🍄', title: 'Wild Forest Mushrooms', desc: 'Portobello & button mushrooms slow-simmered for deep umami.' },
      { icon: '🧈', title: 'Paprika Sour Cream', desc: 'Velvety reduction with sweet Hungarian paprika and fresh herbs.' },
      { icon: '🍚', title: 'Fragrant Butter Pilaf', desc: 'Tossed with ghee, bay leaf, and cardamom for pure comfort.' }
    ],
    diet: 'Comfort European Classic'
  },
  {
    id: 'pizza',
    name: 'STONE-BAKED BURRATA',
    sub: '& SAN MARZANO PIZZA',
    color: '#D5E5DA', // Soft Celadon Sage
    textColor: '#24452B',
    tag: 'Naturally Fermented Sourdough',
    price: '₹540',
    image: 'assets/images/burrata-pizza.jpg',
    secrets: [
      { icon: '🌾', title: '36-Hr Fermented Dough', desc: 'Naturally levain sourdough, blistered and crisp in hearth.' },
      { icon: '🍅', title: 'San Marzano Coulis', desc: 'Crushed sweet Italian plum tomatoes with fresh torn basil.' },
      { icon: '🧀', title: 'Creamy Burrata Ball', desc: 'Whole silky burrata torn open with cold-pressed olive oil.' }
    ],
    diet: '🌿 Jain Preparation Available'
  },
  {
    id: 'shake',
    name: 'BISCOFF ANJEER SHAKE',
    sub: '& CARAMEL CRUNCH',
    color: '#F7DDD4', // Warm Fig Rose
    textColor: '#692E21',
    tag: 'Signature Indore Fusion',
    price: '₹290',
    image: 'assets/images/biscoff-latte.jpg',
    secrets: [
      { icon: '🍪', title: 'Lotus Biscoff Spread', desc: 'Caramelized speculoos biscuit cream whipped with cold milk.' },
      { icon: '🍯', title: 'Afghani Dried Figs', desc: 'Sun-cured sweet figs blended for rich textural delight.' },
      { icon: '🍨', title: 'Chilled Malai Cream', desc: 'Topped with generous biscuit dust and fig honey syrup.' }
    ],
    diet: '🌿 100% Vegetarian'
  },
  {
    id: 'fries',
    name: 'BLACK TRUFFLE FRIES',
    sub: '& 24-MO PARMESAN',
    color: '#EFE4C6', // Golden Butter
    textColor: '#4C3D18',
    tag: 'Artisanal Small Plate',
    price: '₹320',
    image: 'assets/images/truffle-fries.jpg',
    secrets: [
      { icon: '🥔', title: 'Hand-Cut Russet Potatoes', desc: 'Double-fried for an airy, shatteringly crisp crust.' },
      { icon: '🌿', title: 'Italian Black Truffle', desc: 'Cold-pressed truffle oil and freshly picked mountain thyme.' },
      { icon: '🧀', title: 'Aged Parmigiano', desc: 'Snow of 24-month aged parmesan and cracked tellicherry pepper.' }
    ],
    diet: '🌿 Jain Friendly Available'
  }
];

export default function ShowcaseSlider({ onReserveDish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const total = SHOWCASE_ITEMS.length;
  const currentItem = SHOWCASE_ITEMS[currentIndex];

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const prevItem = SHOWCASE_ITEMS[prevIndex];
  const nextItem = SHOWCASE_ITEMS[nextIndex];

  const handlePrev = () => {
    setIsRevealed(false);
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setIsRevealed(false);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="showcase-outer-container">
      
      {/* Reference-inspired Frame (Dark Cocoa / Espresso Border with Rounded Corners) */}
      <div className="showcase-mac-window">
        
        {/* Top Header Bar */}
        <div className="showcase-window-header">
          <div className="window-header-left">
            <span className="window-tag-bookmark">🔖</span>
            <span className="window-brand-title">NEIGHBOURHOOD · SAKET, INDORE</span>
          </div>

          <div className="window-header-right">
            <span>OPEN DAILY · 11AM – 11:30PM</span>
            <span className="heart-icon">♥</span>
          </div>
        </div>

        {/* Triple Panel Stage */}
        <div className="showcase-stage-panels">
          
          {/* LEFT PEEK PANEL (Previous Item) */}
          <motion.div
            className="peek-panel peek-left"
            style={{ backgroundColor: prevItem.color }}
            onClick={handlePrev}
            whileHover={{ opacity: 0.9, scale: 0.99 }}
            title={`Previous: ${prevItem.name}`}
          >
            <div className="peek-title" style={{ color: prevItem.textColor }}>
              {prevItem.name}
            </div>
            <div className="peek-img-wrap">
              <img src={prevItem.image} alt={prevItem.name} />
            </div>
          </motion.div>

          {/* CENTER HERO PANEL (Active Item) */}
          <motion.div
            key={currentItem.id}
            className="hero-panel-center"
            style={{ backgroundColor: currentItem.color }}
            initial={{ opacity: 0.85, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            
            {/* Mobile Nav Arrows */}
            <button
              className="slider-nav-arrow slider-nav-prev"
              onClick={handlePrev}
              aria-label="Previous creation"
            >
              ‹
            </button>
            <button
              className="slider-nav-arrow slider-nav-next"
              onClick={handleNext}
              aria-label="Next creation"
            >
              ›
            </button>
            
            {/* Top Close / Toggle button if revealed */}
            {isRevealed && (
              <button
                className="close-reveal-pill"
                onClick={() => setIsRevealed(false)}
                aria-label="Close dish reveal"
              >
                ✕
              </button>
            )}

            {/* Dish Title */}
            <div className="hero-panel-title-block">
              <h2 className="hero-panel-title" style={{ color: currentItem.textColor }}>
                {currentItem.name}
              </h2>
              <span className="hero-panel-subtitle" style={{ color: currentItem.textColor }}>
                {currentItem.sub}
              </span>
            </div>

            {/* Interactive Dish Visual or Revealed Breakdown */}
            <div className="hero-dish-interactive-center">
              
              <AnimatePresence mode="wait">
                {!isRevealed ? (
                  /* Floating Hero Dish */
                  <motion.div
                    key="floating-dish"
                    className="floating-dish-wrapper"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.div
                      className="floating-dish-media"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    >
                      <img src={currentItem.image} alt={currentItem.name} />
                    </motion.div>
                    
                    {/* Soft Floating Shadow */}
                    <motion.div
                      className="floating-dish-shadow"
                      animate={{ scale: [1, 0.88, 1], opacity: [0.25, 0.15, 0.25] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    />
                  </motion.div>
                ) : (
                  /* Revealed Recipe Secrets Card */
                  <motion.div
                    key="revealed-secrets"
                    className="revealed-secrets-card"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="secrets-header">
                      <span className="secrets-badge">{currentItem.tag}</span>
                      <strong className="secrets-price">{currentItem.price}</strong>
                    </div>

                    <div className="secrets-list">
                      {currentItem.secrets.map((sec, idx) => (
                        <div key={idx} className="secret-item">
                          <span className="secret-icon">{sec.icon}</span>
                          <div>
                            <span className="secret-title">{sec.title}</span>
                            <p className="secret-desc">{sec.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="secrets-footer">
                      <span className="secrets-diet">{currentItem.diet}</span>
                      <button
                        className="btn-order-table-quick"
                        onClick={() => {
                          if (onReserveDish) onReserveDish(currentItem);
                        }}
                      >
                        Reserve Table for This →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom Reveal Pill Button (The Signature Reference Interaction) */}
            <div className="hero-panel-bottom-action">
              <motion.button
                className="btn-reveal-puff"
                onClick={() => setIsRevealed(!isRevealed)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRevealed ? 'HIDE THE SECRETS' : 'REVEAL THE DISH'}
              </motion.button>
            </div>

          </motion.div>

          {/* RIGHT PEEK PANEL (Next Item) */}
          <motion.div
            className="peek-panel peek-right"
            style={{ backgroundColor: nextItem.color }}
            onClick={handleNext}
            whileHover={{ opacity: 0.9, scale: 0.99 }}
            title={`Next: ${nextItem.name}`}
          >
            <div className="peek-title" style={{ color: nextItem.textColor }}>
              {nextItem.name}
            </div>
            <div className="peek-img-wrap">
              <img src={nextItem.image} alt={nextItem.name} />
            </div>
          </motion.div>

        </div>

        {/* Bottom Window Footer */}
        <div className="showcase-window-footer">
          
          <div className="window-footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill" title="Instagram">
              <span>📷</span>
            </a>
            <a href="https://maps.google.com/?q=Neighbourhood+Cafe+Saket+Indore" target="_blank" rel="noopener noreferrer" className="social-pill" title="Google Maps">
              <span>📍</span>
            </a>
            <a href="https://wa.me/919826000000" target="_blank" rel="noopener noreferrer" className="social-pill" title="WhatsApp Concierge">
              <span>💬</span>
            </a>
          </div>

          <div className="window-footer-logo">
            <span className="footer-logo-text">NEIGHBOURHOOD</span>
          </div>

          <div className="window-footer-nav">
            <a href="#reserve" className="footer-reserve-pill">
              <span>Reserve Table</span>
            </a>
          </div>

        </div>

      </div>

      {/* Helper swipe hint for mobile */}
      <div className="slider-swipe-dots">
        {SHOWCASE_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsRevealed(false);
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
