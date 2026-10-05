/**
 * NEIGHBOURHOOD CAFE · INDORE
 * Master Frontend Interaction Engine & Reservation Studio
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATASETS: MENU ITEMS & ARCHITECTURAL TABLES
  // --------------------------------------------------------------------------
  const MENU_DATA = [
    {
      id: "dish-stroganoff",
      title: "Mushroom Stroganoff & Butter Pilaf",
      category: "mains",
      price: 440,
      isJain: false,
      tag: "Indore Connoisseur Choice",
      desc: "Button and wild portobello mushrooms braised in a velvety sour cream & paprika reduction, accompanied by fragrant basmati pilaf.",
      image: "assets/images/mushroom-pasta.jpg"
    },
    {
      id: "dish-truffle-fries",
      title: "Black Truffle & Aged Parmesan Fries",
      category: "truffle",
      price: 320,
      isJain: false,
      tag: "Signature Starter",
      desc: "Crisp hand-cut Russet potatoes tossed with cold-pressed Italian black truffle oil, fresh thyme, cracked tellicherry pepper, and 24-month aged parmesan.",
      image: "assets/images/truffle-fries.jpg"
    },
    {
      id: "dish-biscoff-shake",
      title: "Biscoff Anjeer Thick Milkshake",
      category: "shakes",
      price: 290,
      isJain: true,
      tag: "Indore Signature Fusion",
      desc: "Our renowned pairing: caramelized Lotus Biscoff biscuit spread churned with sun-cured Afghani figs, chilled malai cream, and biscuit crumble.",
      image: "assets/images/biscoff-latte.jpg"
    },
    {
      id: "dish-burrata-pizza",
      title: "Stone-Baked Burrata & San Marzano Pizza",
      category: "pizza",
      price: 540,
      isJain: true,
      tag: "Wood-Fired Crust",
      desc: "Naturally fermented sourdough crust topped with crushed San Marzano tomato coulis, torn creamy burrata ball, cold-pressed olive oil, and sweet basil leaves.",
      image: "assets/images/burrata-pizza.jpg"
    },
    {
      id: "dish-tagliatelle",
      title: "Truffle & Wild Shiitake Tagliatelle",
      category: "truffle",
      price: 480,
      isJain: false,
      tag: "Chef's Handcrafted",
      desc: "Hand-rolled ribbon pasta tossed in an emulsion of white truffle butter, sautéed shiitake caps, mountain thyme, and Pecorino Romano.",
      image: "assets/images/mushroom-pasta.jpg"
    },
    {
      id: "dish-hummus-bowl",
      title: "Beirut Falafel & Silk Hummus Bowl",
      category: "mains",
      price: 390,
      isJain: false,
      tag: "Solarium Mezze",
      desc: "Golden herb-crusted chickpea falafels with velvety whipped silk hummus, spiced pomegranate glaze, house pickles, and warm sourdough pita.",
      image: "assets/images/hummus-falafel.jpg"
    },
    {
      id: "dish-quattro-pizza",
      title: "Quattro Formaggi Bianca Pizza",
      category: "pizza",
      price: 560,
      isJain: false,
      tag: "Artisan Crust",
      desc: "Rich bianca base layered with smoked provolone, young gorgonzola, fresh fior di latte mozzarella, and aged grana padano shavings.",
      image: "assets/images/burrata-pizza.jpg"
    },
    {
      id: "dish-cortado",
      title: "Double-Shot Cortado & Vanilla Bean",
      category: "shakes",
      price: 240,
      isJain: true,
      tag: "Specialty Arabica",
      desc: "Equal parts intense double-shot espresso and textured steamed whole milk infused with authentic Madagascan bourbon vanilla bean.",
      image: "assets/images/biscoff-latte.jpg"
    }
  ];

  // Visual Interactive Tables by Zone
  const FLOORPLAN_DATA = {
    solarium: {
      name: "The Glasshouse Solarium (Upstairs Canopy)",
      tag: "Natural Sunlight · Cane Bistro Seating",
      tables: [
        { code: "S-01", name: "Solarium Window Skylight", seats: 2, status: "available", perks: "Direct sunbeam angle, cane chairs, reading spot" },
        { code: "S-02", name: "Glasshouse Central Cane Table", seats: 4, status: "available", perks: "Under central glass peak, panoramic sky view" },
        { code: "S-03", name: "Solarium Ficus Palm Corner", seats: 2, status: "available", perks: "Secluded leafy shade, intimate couple setup" },
        { code: "S-04", name: "Glasshouse Grand Banquet", seats: 6, status: "occupied", perks: "Spacious wooden dining for brunch gatherings" },
        { code: "S-05", name: "Tree Canopy Balcony Table", seats: 4, status: "available", perks: "Facing lush frangipani branches and breeze" },
        { code: "S-06", name: "Solarium Morning Nook", seats: 2, status: "available", perks: "Quiet corner for coffee & creative work" }
      ]
    },
    courtyard: {
      name: "The Stepped Courtyard (Open-Air Amphitheater)",
      tag: "Underlit Amber Slats · Evening Twilight Romance",
      tables: [
        { code: "C-01", name: "Underlit Step Bench (Tier 1)", seats: 2, status: "available", perks: "Built directly into illuminated timber slat steps" },
        { code: "C-02", name: "Hourglass Marble Pedestal", seats: 4, status: "available", perks: "Sculptural round table with white garden chairs" },
        { code: "C-03", name: "Frangipani Canopy Alcove", seats: 2, status: "available", perks: "Fragrant evening blooms & gentle starlight" },
        { code: "C-04", name: "Amphitheater Party Terrace", seats: 6, status: "available", perks: "Tiered seating for lively group celebrations" },
        { code: "C-05", name: "Stepped Courtyard Center", seats: 4, status: "occupied", perks: "Central garden position with warm night glow" },
        { code: "C-06", name: "Open-Sky Starlight Bench", seats: 2, status: "available", perks: "Breezy alfresco dining for quiet conversations" }
      ]
    },
    bungalow: {
      name: "The Stucco Bungalow (Indoor Dining Salon)",
      tag: "Mediterranean Lime-Wash · Sconces & Quiet Comfort",
      tables: [
        { code: "B-01", name: "Mint Gate View Salon Table", seats: 2, status: "available", perks: "Views of our signature mint iron gate" },
        { code: "B-02", name: "Stucco Fireplace Booth", seats: 4, status: "available", perks: "Acoustically plush booth with soft amber sconce" },
        { code: "B-03", name: "Quiet Library Corner", seats: 2, status: "available", perks: "Soft linen upholstery & intimate acoustic setting" },
        { code: "B-04", name: "Barista Counter High Table", seats: 4, status: "available", perks: "Aroma of fresh roasted coffee & pastries" },
        { code: "B-05", name: "Heritage Bungalow Room", seats: 6, status: "occupied", perks: "Private dining room for family dinners" },
        { code: "B-06", name: "Intimate Plaster Nook", seats: 2, status: "available", perks: "Warm minimalist alcove for quiet dates" }
      ]
    }
  };

  // State
  let currentZoneId = "solarium";
  let selectedTableData = FLOORPLAN_DATA.solarium.tables[0];
  let selectedDateString = getFormattedDate(0);
  let selectedTimeSlot = "06:30 PM";
  let guestCount = 2;
  let jainOnlyFilter = false;
  let activeMenuCategory = "all";
  let foodTray = []; // Items in pre-order tray

  // --------------------------------------------------------------------------
  // 2. HELPER UTILITIES
  // --------------------------------------------------------------------------
  function getFormattedDate(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]}`;
  }

  function showToast(message, icon = "✦") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span style="color: var(--accent-amber);">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 3. ATMOSPHERE LIGHTING TOGGLE (DAY SOLARIUM vs TWILIGHT COURTYARD)
  // --------------------------------------------------------------------------
  function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    const label = document.getElementById("theme-label-text");
    const savedTheme = localStorage.getItem("nh_theme") || "day";
    
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeLabel(savedTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "day" ? "night" : "day";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("nh_theme", next);
        updateThemeLabel(next);
        showToast(
          next === "night" 
            ? "Switched to Twilight Underlit Ambience 🌙" 
            : "Switched to Sunlit Glasshouse Solarium ☀️",
          next === "night" ? "🌙" : "☀️"
        );
      });
    }

    function updateThemeLabel(theme) {
      if (label) {
        label.textContent = theme === "night" ? "Sunlit" : "Twilight";
      }
    }
  }

  // --------------------------------------------------------------------------
  // 4. GENERATIVE AMBIENT AUDIO SOUNDSCAPE (WEB AUDIO API)
  // --------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundActive = false;
  let noiseNode = null;
  let gainNode = null;

  function initSoundscape() {
    const soundBtn = document.getElementById("soundscape-btn");
    if (!soundBtn) return;

    soundBtn.addEventListener("click", () => {
      if (!isSoundActive) {
        startSoundscape();
        soundBtn.classList.add("active");
        showToast("Glasshouse Ambient Soundscape Playing 🍃", "🎧");
      } else {
        stopSoundscape();
        soundBtn.classList.remove("active");
        showToast("Ambient Audio Muted", "🔇");
      }
      isSoundActive = !isSoundActive;
    });
  }

  function startSoundscape() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Create warm ambient pink noise (simulating soft breeze / greenhouse rain / cafe hum)
      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      // Warm low-pass filter (subtle and relaxing)
      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, audioCtx.currentTime);

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 2);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
    } catch (e) {
      console.warn("Web Audio not supported or blocked", e);
    }
  }

  function stopSoundscape() {
    if (gainNode && audioCtx) {
      gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (noiseNode) noiseNode.stop();
        if (audioCtx) audioCtx.close();
      }, 900);
    }
  }

  // --------------------------------------------------------------------------
  // 5. AMBIENT PARTICLES CANVAS (SUNBEAMS & FIREFLIES)
  // --------------------------------------------------------------------------
  function initAmbientCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 30;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      const isNight = document.documentElement.getAttribute("data-theme") === "night";

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.phase += 0.02;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (isNight) {
          // Warm amber fireflies
          ctx.fillStyle = `rgba(230, 162, 71, ${currentOpacity})`;
          ctx.shadowColor = "rgba(230, 162, 71, 0.8)";
          ctx.shadowBlur = 8;
        } else {
          // Sunlit golden dust motes
          ctx.fillStyle = `rgba(160, 185, 168, ${currentOpacity * 0.7})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      requestAnimationFrame(render);
    }

    render();
  }

  // --------------------------------------------------------------------------
  // 6. INTERACTIVE FLOORPLAN & TABLE SELECTOR
  // --------------------------------------------------------------------------
  function renderFloorplan(zoneId) {
    currentZoneId = zoneId;
    const zone = FLOORPLAN_DATA[zoneId];
    if (!zone) return;

    // Update Header
    const zoneTitleEl = document.getElementById("floorplan-zone-name");
    if (zoneTitleEl) {
      zoneTitleEl.textContent = zone.name;
    }

    // Render Table Nodes
    const container = document.getElementById("table-nodes-container");
    if (!container) return;
    container.innerHTML = "";

    zone.tables.forEach((t) => {
      const isSelected = selectedTableData && selectedTableData.code === t.code;
      const node = document.createElement("div");
      node.className = `table-node ${t.status} ${isSelected ? "selected" : ""}`;
      node.setAttribute("data-code", t.code);
      node.setAttribute("role", "button");
      node.setAttribute("tabindex", t.status === "available" ? "0" : "-1");
      node.setAttribute("aria-label", `${t.name}, ${t.seats} seats, ${t.status}`);

      node.innerHTML = `
        <span class="table-status-indicator" title="${t.status}"></span>
        <div class="table-icon-visual">
          ${t.seats <= 2 ? "🪑" : t.seats <= 4 ? "🍽️" : "🥂"}
        </div>
        <span class="table-code-tag">${t.code}</span>
        <span class="table-seats-tag">${t.seats} Guests</span>
      `;

      if (t.status === "available") {
        node.addEventListener("click", () => {
          selectTable(t);
        });
        node.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            selectTable(t);
          }
        });
      }

      container.appendChild(node);
    });

    // Make sure default selected table is set
    const availableTables = zone.tables.filter((t) => t.status === "available");
    if (availableTables.length > 0 && (!selectedTableData || !zone.tables.find(x => x.code === selectedTableData.code))) {
      selectTable(availableTables[0]);
    }
  }

  function selectTable(table) {
    selectedTableData = table;

    // Update active class on table nodes
    document.querySelectorAll(".table-node").forEach((node) => {
      if (node.getAttribute("data-code") === table.code) {
        node.classList.add("selected");
      } else {
        node.classList.remove("selected");
      }
    });

    // Update Selected Preview Bar
    const codeEl = document.getElementById("preview-table-code");
    const titleEl = document.getElementById("preview-table-title");
    const perksEl = document.getElementById("preview-table-perks");

    if (codeEl) codeEl.textContent = `Table ${table.code}`;
    if (titleEl) titleEl.textContent = table.name;
    if (perksEl) perksEl.textContent = `${table.seats} Guests · ${table.perks}`;

    // Update form hidden inputs
    const zoneInput = document.getElementById("booking-selected-zone");
    const tableInput = document.getElementById("booking-selected-table");
    if (zoneInput) zoneInput.value = FLOORPLAN_DATA[currentZoneId].name;
    if (tableInput) tableInput.value = `Table ${table.code} (${table.name})`;

    // Adjust guest stepper default if needed
    if (guestCount > table.seats) {
      guestCount = table.seats;
      updateGuestStepperUI();
    }
  }

  function initFloorplanTabs() {
    const tabs = document.querySelectorAll(".zone-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        const zoneId = tab.getAttribute("data-zone-id");
        renderFloorplan(zoneId);
      });
    });

    // Initialize first zone
    renderFloorplan("solarium");
  }

  // Global zone select trigger from "The Spaces" cards
  window.selectZoneForBooking = function (zoneName) {
    let targetZoneId = "solarium";
    if (zoneName.includes("Courtyard")) targetZoneId = "courtyard";
    else if (zoneName.includes("Bungalow")) targetZoneId = "bungalow";

    const tabToClick = document.querySelector(`.zone-tab[data-zone-id="${targetZoneId}"]`);
    if (tabToClick) tabToClick.click();

    const reservationSection = document.getElementById("reservations");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
    showToast(`Switched floor plan to ${zoneName}`, "📍");
  };

  // --------------------------------------------------------------------------
  // 7. DATE & TIME SLOTS CHIPS ENGINE
  // --------------------------------------------------------------------------
  function initDateAndTimes() {
    // 1. Date chips
    const dateContainer = document.getElementById("date-chips-container");
    const customDateInput = document.getElementById("booking-custom-date");

    if (dateContainer) {
      dateContainer.innerHTML = "";

      const dateOptions = [
        { label: "Today", text: getFormattedDate(0), days: 0 },
        { label: "Tomorrow", text: getFormattedDate(1), days: 1 },
        { label: getFormattedDate(2).split(",")[0], text: getFormattedDate(2), days: 2 },
        { label: getFormattedDate(3).split(",")[0], text: getFormattedDate(3), days: 3 },
        { label: "Custom 📅", text: "custom", days: -1 }
      ];

      dateOptions.forEach((opt, idx) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `date-chip ${idx === 0 ? "active" : ""}`;
        chip.textContent = opt.label === "Custom 📅" ? "Custom 📅" : `${opt.label} (${opt.text.split(",")[1].trim()})`;

        chip.addEventListener("click", () => {
          document.querySelectorAll(".date-chip").forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");

          if (opt.days === -1) {
            if (customDateInput) {
              customDateInput.style.display = "block";
              customDateInput.focus();
              customDateInput.onchange = () => {
                selectedDateString = customDateInput.value;
              };
            }
          } else {
            if (customDateInput) customDateInput.style.display = "none";
            selectedDateString = opt.text;
          }
        });

        dateContainer.appendChild(chip);
      });
    }

    // 2. Time slots
    const timeChips = document.querySelectorAll(".time-chip");
    const timeInput = document.getElementById("booking-selected-time");

    timeChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        timeChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        selectedTimeSlot = chip.getAttribute("data-time");
        if (timeInput) timeInput.value = selectedTimeSlot;
      });
    });

    // 3. Guest Stepper
    const minusBtn = document.getElementById("guest-minus");
    const plusBtn = document.getElementById("guest-plus");

    if (minusBtn && plusBtn) {
      minusBtn.addEventListener("click", () => {
        if (guestCount > 1) {
          guestCount--;
          updateGuestStepperUI();
        }
      });

      plusBtn.addEventListener("click", () => {
        if (guestCount < 12) {
          guestCount++;
          updateGuestStepperUI();
        }
      });
    }
  }

  function updateGuestStepperUI() {
    const display = document.getElementById("guest-count-val");
    const hiddenInput = document.getElementById("booking-guests-input");
    const text = guestCount === 1 ? "1 Guest" : `${guestCount} Guests`;
    if (display) display.textContent = text;
    if (hiddenInput) hiddenInput.value = text;
  }

  // --------------------------------------------------------------------------
  // 8. LUXURY RESERVATION PASS SUBMISSION & GENERATION
  // --------------------------------------------------------------------------
  function initReservationForm() {
    const form = document.getElementById("interactive-reservation-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("booking-name");
      const phoneInput = document.getElementById("booking-phone");
      const occasionSelect = document.getElementById("booking-occasion");
      const notesInput = document.getElementById("booking-notes");

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();

      if (!name || !phone) {
        showToast("Please provide your full name and phone number.", "⚠️");
        return;
      }

      // Collect dietary tags
      const prefTags = [];
      if (document.getElementById("pref-jain")?.checked) prefTags.push("🌿 Jain Preparation");
      if (document.getElementById("pref-candle")?.checked) prefTags.push("🕯️ Candlelight Setup");
      if (document.getElementById("pref-quiet")?.checked) prefTags.push("🔇 Quiet Corner Table");

      const occasion = occasionSelect ? occasionSelect.value : "Dinner";
      const notes = notesInput ? notesInput.value.trim() : "";

      // Generate Reference Code
      const refCode = "NH-" + Math.floor(1000 + Math.random() * 9000);

      // Construct Reservation Object
      const reservation = {
        refCode,
        name,
        phone,
        party: guestCount === 1 ? "1 Guest" : `${guestCount} Guests`,
        dateTime: `${selectedDateString} · ${selectedTimeSlot}`,
        zone: FLOORPLAN_DATA[currentZoneId].name,
        table: `Table ${selectedTableData.code} (${selectedTableData.name})`,
        occasion: `${occasion}${prefTags.length > 0 ? " · " + prefTags.join(", ") : ""}${notes ? " (" + notes + ")" : ""}`,
        createdAt: new Date().toISOString()
      };

      // Store in LocalStorage for Lookup
      saveReservation(reservation);

      // Render Modal Boarding Pass
      renderReservationPass(reservation);

      showToast(`Table confirmed! Reservation Pass #${refCode} created.`, "🎉");
    });

    // Lookup Strip Handlers
    const lookupBtn = document.getElementById("lookup-search-btn");
    const lookupInput = document.getElementById("lookup-phone-input");

    if (lookupBtn && lookupInput) {
      lookupBtn.addEventListener("click", () => {
        const query = lookupInput.value.trim();
        if (!query) {
          showToast("Please enter your phone number to check reservation", "ℹ️");
          return;
        }

        const stored = getReservationByPhone(query);
        if (stored) {
          renderReservationPass(stored);
          showToast(`Found reservation for ${stored.name}!`, "✓");
        } else {
          showToast("No active booking found for this number. Reserve a table below!", "ℹ️");
        }
      });
    }

    // Modal Close
    const closePassBtn = document.getElementById("close-pass-modal");
    const passModal = document.getElementById("pass-modal");

    if (closePassBtn && passModal) {
      closePassBtn.addEventListener("click", () => {
        passModal.classList.remove("open");
      });
      passModal.addEventListener("click", (e) => {
        if (e.target === passModal) passModal.classList.remove("open");
      });
    }
  }

  function saveReservation(reservation) {
    try {
      const history = JSON.parse(localStorage.getItem("nh_reservations") || "[]");
      history.unshift(reservation);
      localStorage.setItem("nh_reservations", JSON.stringify(history));
    } catch (e) {
      console.warn("Storage quota exceeded", e);
    }
  }

  function getReservationByPhone(phoneQuery) {
    try {
      const history = JSON.parse(localStorage.getItem("nh_reservations") || "[]");
      const cleanQuery = phoneQuery.replace(/[^0-9]/g, "");
      return history.find((res) => {
        const cleanPhone = res.phone.replace(/[^0-9]/g, "");
        return cleanPhone.includes(cleanQuery) || cleanQuery.includes(cleanPhone);
      });
    } catch (e) {
      return null;
    }
  }

  function renderReservationPass(res) {
    const modal = document.getElementById("pass-modal");
    if (!modal) return;

    document.getElementById("pass-guest-name").textContent = res.name;
    document.getElementById("pass-party-size").textContent = res.party;
    document.getElementById("pass-datetime").textContent = res.dateTime;
    document.getElementById("pass-zone").textContent = res.zone;
    document.getElementById("pass-table").textContent = res.table;
    document.getElementById("pass-occasion").textContent = res.occasion;
    document.getElementById("pass-ref-code").textContent = res.refCode;

    // Direct WhatsApp Concierge Link
    const waText = encodeURIComponent(
      `Hello Neighbourhood Cafe, Indore! 🌿\n\nI have confirmed a table booking:\n• Booking Ref: ${res.refCode}\n• Guest Name: ${res.name}\n• Party Size: ${res.party}\n• Date & Time: ${res.dateTime}\n• Assigned Zone: ${res.zone}\n• Assigned Table: ${res.table}\n• Preferences / Occasion: ${res.occasion}\n\nPlease confirm our table hold. Thank you!`
    );
    const waBtn = document.getElementById("pass-whatsapp-btn");
    if (waBtn) {
      waBtn.href = `https://wa.me/919826000000?text=${waText}`;
    }

    // Google Calendar button
    const calBtn = document.getElementById("pass-calendar-btn");
    if (calBtn) {
      calBtn.onclick = () => {
        const title = encodeURIComponent(`Dining at Neighbourhood Cafe Indore (${res.table})`);
        const details = encodeURIComponent(`Table Reservation at Neighbourhood Cafe, Saket Indore.\nRef: ${res.refCode}\nZone: ${res.zone}\nTable: ${res.table}`);
        const location = encodeURIComponent("Neighbourhood Cafe, Saket Nagar, Indore");
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
        window.open(gcalUrl, "_blank");
      };
    }

    modal.classList.add("open");
  }

  // --------------------------------------------------------------------------
  // 9. SIGNATURE MENU & PRE-ORDER TRAY ENGINE
  // --------------------------------------------------------------------------
  function renderMenuItems() {
    const grid = document.getElementById("dishes-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = MENU_DATA.filter((item) => {
      const matchCat = activeMenuCategory === "all" || item.category === activeMenuCategory;
      const matchJain = !jainOnlyFilter || item.isJain;
      return matchCat && matchJain;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p>No dishes match the selected filter. Try choosing "All Specialties".</p>
        </div>
      `;
      return;
    }

    filtered.forEach((dish) => {
      const card = document.createElement("article");
      card.className = "dish-card-luxury";
      card.innerHTML = `
        <div class="dish-thumb-wrap">
          <img src="${dish.image}" alt="${dish.title} at Neighbourhood Cafe Indore" loading="lazy" />
          <span class="dish-tag-badge">${dish.tag}</span>
          ${dish.isJain ? '<span class="dish-jain-badge">🌿 Jain Available</span>' : ""}
        </div>
        <div class="dish-content">
          <div class="dish-top-row">
            <h3 class="dish-name">${dish.title}</h3>
            <span class="dish-price">₹${dish.price}</span>
          </div>
          <p class="dish-desc">${dish.desc}</p>
          <div class="dish-footer-row">
            <span class="dish-cat-label">${dish.category}</span>
            <button class="dish-add-btn" data-dish-id="${dish.id}">
              <span>+ Add to Tray</span>
            </button>
          </div>
        </div>
      `;

      card.querySelector(".dish-add-btn").addEventListener("click", () => {
        addToTray(dish);
      });

      grid.appendChild(card);
    });
  }

  function initMenuFilters() {
    const filterBtns = document.querySelectorAll(".cat-pill");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeMenuCategory = btn.getAttribute("data-filter");
        renderMenuItems();
      });
    });

    const jainBtn = document.getElementById("jain-mode-btn");
    if (jainBtn) {
      jainBtn.addEventListener("click", () => {
        jainOnlyFilter = !jainOnlyFilter;
        jainBtn.classList.toggle("active", jainOnlyFilter);
        jainBtn.setAttribute("aria-pressed", jainOnlyFilter ? "true" : "false");
        renderMenuItems();
        showToast(
          jainOnlyFilter ? "Showing verified Jain-friendly selections 🌿" : "Showing all culinary repertoire",
          "🌿"
        );
      });
    }

    renderMenuItems();
  }

  // Tray Drawer Controls
  function addToTray(dish) {
    const existing = foodTray.find((item) => item.dish.id === dish.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      foodTray.push({ dish, quantity: 1 });
    }
    updateTrayUI();
    showToast(`Added "${dish.title}" to culinary tray`, "🍽️");
  }

  function updateTrayUI() {
    // Update counter badge
    const badge = document.getElementById("tray-count-badge");
    const totalCount = foodTray.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) badge.textContent = totalCount;

    // Render Tray List
    const container = document.getElementById("tray-items-container");
    const subtotalEl = document.getElementById("tray-subtotal-price");
    if (!container) return;

    container.innerHTML = "";

    if (foodTray.length === 0) {
      container.innerHTML = `
        <div class="tray-empty-state">
          <p>Your culinary tray is empty.</p>
          <small>Explore dishes below and pre-order to save table waiting time!</small>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "₹0";
      return;
    }

    let subtotal = 0;
    foodTray.forEach((item) => {
      const lineTotal = item.dish.price * item.quantity;
      subtotal += lineTotal;

      const row = document.createElement("div");
      row.className = "tray-item-row";
      row.innerHTML = `
        <img src="${item.dish.image}" class="tray-item-img" alt="${item.dish.title}" />
        <div class="tray-item-info">
          <div class="tray-item-name">${item.dish.title}</div>
          <div class="tray-item-price">₹${item.dish.price} × ${item.quantity}</div>
        </div>
        <div class="tray-item-qty">
          <button class="qty-btn btn-dec" data-id="${item.dish.id}">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn btn-inc" data-id="${item.dish.id}">+</button>
        </div>
      `;

      row.querySelector(".btn-dec").addEventListener("click", () => {
        modifyTrayQty(item.dish.id, -1);
      });
      row.querySelector(".btn-inc").addEventListener("click", () => {
        modifyTrayQty(item.dish.id, 1);
      });

      container.appendChild(row);
    });

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  }

  function modifyTrayQty(dishId, delta) {
    const item = foodTray.find((x) => x.dish.id === dishId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      foodTray = foodTray.filter((x) => x.dish.id !== dishId);
    }
    updateTrayUI();
  }

  function initTrayDrawer() {
    const drawer = document.getElementById("tray-drawer");
    const trigger = document.getElementById("tray-trigger-btn");
    const closeBtn = document.getElementById("close-tray-btn");
    const checkoutBtn = document.getElementById("tray-checkout-btn");

    if (trigger && drawer) {
      trigger.addEventListener("click", () => {
        drawer.classList.add("open");
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener("click", () => {
        drawer.classList.remove("open");
      });
      drawer.addEventListener("click", (e) => {
        if (e.target === drawer) drawer.classList.remove("open");
      });
    }

    if (checkoutBtn && drawer) {
      checkoutBtn.addEventListener("click", () => {
        if (foodTray.length === 0) {
          showToast("Add some dishes to your tray first!", "ℹ️");
          return;
        }
        drawer.classList.remove("open");
        const reserveSection = document.getElementById("reservations");
        if (reserveSection) reserveSection.scrollIntoView({ behavior: "smooth" });

        // Populate special requests with tray dishes
        const notesInput = document.getElementById("booking-notes");
        if (notesInput) {
          const dishNames = foodTray.map((it) => `${it.quantity}x ${it.dish.title}`).join(", ");
          notesInput.value = `Pre-ordered Dishes: ${dishNames}`;
        }
        showToast("Your food tray has been attached to your table reservation!", "✓");
      });
    }

    updateTrayUI();
  }

  // --------------------------------------------------------------------------
  // 10. MOBILE NAVIGATION & SCROLL TRACKING
  // --------------------------------------------------------------------------
  function initNavigation() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const header = document.getElementById("main-header");

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      // Close mobile drawer on link click
      mobileDrawer.querySelectorAll(".mob-link").forEach((link) => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("open");
          mobileBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Header scroll blur effect
    window.addEventListener("scroll", () => {
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initSoundscape();
    initAmbientCanvas();
    initFloorplanTabs();
    initDateAndTimes();
    initReservationForm();
    initMenuFilters();
    initTrayDrawer();
    initNavigation();
  });
})();
