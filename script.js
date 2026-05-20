/* ==============================================
   COMPLETE JAVASCRIPT - Solar City Apo
   All functions included: Plots, Calculator, CEO Bio, Modal, Mobile Menu
   ============================================== */

// ========== DATA ==========
const plotsData = [
  { size: "170 SQM", price: 4500000, name: "3 Bedroom Terrace", badge: "Best Seller", prototype: "170 SQM 3 Bedroom Terrace" },
  { size: "250 SQM", price: 6700000, name: "4 Bedroom Semi-Detached", badge: "Fast Selling", prototype: "250 SQM 4 Bedroom Semi-Detached" },
  { size: "350 SQM", price: 9500000, name: "4 Bedroom Fully Detached", badge: "Premium", prototype: "350 SQM 4 Bedroom Fully Detached" },
  { size: "450 SQM", price: 12000000, name: "5 Bedroom Detached", badge: "Luxury", prototype: "450 SQM 5 Bedroom Detached" },
  { size: "600 SQM", price: 15900000, name: "6 Bedroom Mansion", badge: "Elite", prototype: "600 SQM 6 Bedroom Mansion" },
  { size: "1000 SQM", price: 27000000, name: "Block of Flats", badge: "Investor Choice", prototype: "1000 SQM Block of Flats" }
];

// CEO Bio Content - Full detailed writeup
const ceoBioHTML = `
<p><strong>John Abbah Adagache</strong>, popularly known as <strong>Jblingz Adagache</strong>, is a dynamic Nigerian entrepreneur, creative leader, and visionary founder with diversified interests across multiple high-impact industries. He is the <strong>Chief Executive Officer of Adagache Integrated Global Services</strong>, a multi-sector company operating in real estate, oil and gas, travel and tours, and automobile services.</p>
<p>Based in Abuja, Nigeria, John has positioned his brand at the intersection of value creation, trust, and long-term investment growth. Through his real estate ventures (including <strong>Adagache Homes</strong> and landmark projects like Solar City Apo), he is deeply committed to helping individuals and organizations secure premium spaces to live, work, and invest, with a strong emphasis on due diligence, proper documentation, and sustainable asset acquisition.</p>
<p>John is of <strong>Idoma descent</strong> from Benue State, and his work reflects a strong sense of purpose, integrity, and community upliftment. Beyond business, he is actively involved in philanthropy, supporting initiatives that empower individuals with opportunities for livelihood, stability, and personal growth.</p>
<p>In addition to his corporate pursuits, John is a music performing artist. In 2022, he released his debut project, <strong>"The King Jesus EP"</strong>, marking his entry into the music industry as a faith-driven and purpose-centered creative. His artistry reflects themes of identity, spirituality, resilience, and excellence.</p>
<p>Expanding his influence into lifestyle and culture, John is also the CEO of <strong>JESUS ABOVE EVERYTHING (JAE Unlimited)</strong>, a fashion brand built on bold expression, faith-inspired values, and contemporary design. He further leads <strong>Trillionaires Empire</strong>, an entertainment company focused on talent development, creative production, and brand expansion within the global entertainment space.</p>
<p><strong>Driven by a clear global vision</strong>, John Abbah Adagache is steadily working to position his brands on the international stage, blending entrepreneurship, creativity, and social impact. His mission is rooted in building legacy-driven enterprises that create value, inspire confidence, and uplift communities—locally and globally.</p>
`;

const pillarsArray = [
  { icon: "fas fa-building", label: "Real Estate Mogul" },
  { icon: "fas fa-chart-line", label: "Investment Strategist" },
  { icon: "fas fa-music", label: "Recording Artist" },
  { icon: "fas fa-tshirt", label: "Fashion CEO (JAE)" },
  { icon: "fas fa-hand-holding-heart", label: "Philanthropist" }
];

const featuresList = [
  "☀️ Solar Power", "🔋 EV Charging", "🏊 Swimming Pool", 
  "🛡️ 24/7 Security", "📹 CCTV Systems", "🛣️ Road Network", 
  "🛍️ Shopping Mall", "🌳 Green Areas"
];

// ========== HELPER FUNCTIONS ==========
function formatNaira(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

// ========== RENDER PLOTS ==========
function renderPlots() {
  const container = document.getElementById('plotsGrid');
  if (!container) return;
  
  container.innerHTML = plotsData.map(plot => `
    <div class="plot-card">
      <div class="plot-badge">${plot.badge}</div>
      <div class="plot-icon">🏡</div>
      <h3 class="gold-text">${plot.size}</h3>
      <h4>${plot.name}</h4>
      <a href="#" class="prototype-link" data-proto="${plot.prototype}"><i class="far fa-file-pdf"></i> View Prototype Layout</a>
      <div class="price">${formatNaira(plot.price)}</div>
      <button class="plot-btn secure-btn" data-size="${plot.size}" data-price="${formatNaira(plot.price)}" data-raw="${plot.price}">Secure Plot</button>
    </div>
  `).join('');
  
  // Add event listeners to secure buttons
  document.querySelectorAll('.secure-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openLeadModal(btn.dataset.size, btn.dataset.price);
    });
  });
  
  // Add event listeners to prototype links
  document.querySelectorAll('.prototype-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`📐 Prototype layout for ${link.dataset.proto} will be available soon. Contact us via WhatsApp for detailed architectural drawings.`);
    });
  });
}

// ========== RENDER FEATURES ==========
function renderFeatures() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;
  
  container.innerHTML = featuresList.map(feature => {
    const icon = feature.split(' ')[0];
    const text = feature.substring(feature.indexOf(' ') + 1);
    return `
      <div class="feature-card glass">
        <div class="feature-icon">${icon}</div>
        <h3>${text}</h3>
      </div>
    `;
  }).join('');
}

// ========== RENDER CEO CONTENT ==========
function renderCEOContent() {
  const bioDiv = document.getElementById('ceoBioText');
  const pillarsDiv = document.getElementById('pillarsList');
  
  if (bioDiv) {
    bioDiv.innerHTML = ceoBioHTML;
  }
  
  if (pillarsDiv) {
    pillarsDiv.innerHTML = pillarsArray.map(p => `
      <span class="pillar-item">
        <i class="${p.icon}"></i> ${p.label}
      </span>
    `).join('');
  }
}

// ========== MODAL FUNCTIONS ==========
let currentModalPlot = { name: '', price: '' };

function openLeadModal(plotName, plotPrice) {
  currentModalPlot = { name: plotName, price: plotPrice };
  const modalTitle = document.getElementById('modalPlotTitle');
  if (modalTitle) modalTitle.innerText = plotName;
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.add('active');
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.remove('active');
}

function triggerWhatsAppLead(paymentMethod) {
  const phone = "2348030702010";
  const message = `Hi Adagache Homes, I am highly interested in securing the *${currentModalPlot.name}* priced at *${currentModalPlot.price}*.\n\nI would prefer to proceed via an *${paymentMethod}* structure. Please provide me with the available plot documentation parameters.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  closeLeadModal();
}

// ========== CALCULATOR FUNCTIONS ==========
function populatePlotSelect() {
  const select = document.getElementById('plotSelect');
  if (!select) return;
  
  select.innerHTML = plotsData.map(plot => `
    <option value="${plot.price}" data-name="${plot.size} - ${plot.name}">
      ${plot.size} - ${formatNaira(plot.price)}
    </option>
  `).join('');
}

function calculateInstallments() {
  const select = document.getElementById('plotSelect');
  const depositRange = document.getElementById('depositRange');
  const durationSelect = document.getElementById('durationSelect');
  
  if (!select || !depositRange || !durationSelect) return;
  
  const totalPrice = parseFloat(select.value);
  const selectedOption = select.options[select.selectedIndex];
  const plotDisplayName = selectedOption.getAttribute('data-name') || "Selected Plot";
  const depositPercent = parseInt(depositRange.value);
  const duration = parseInt(durationSelect.value);
  
  const depositAmount = totalPrice * (depositPercent / 100);
  const remainingBalance = totalPrice - depositAmount;
  const monthlyPayment = remainingBalance / duration;
  
  // Update display
  document.getElementById('depositPercentText').innerText = depositPercent + '%';
  document.getElementById('resTotal').innerText = formatNaira(totalPrice);
  document.getElementById('resDeposit').innerText = formatNaira(depositAmount);
  document.getElementById('resBalance').innerText = formatNaira(remainingBalance);
  document.getElementById('resMonthly').innerText = formatNaira(monthlyPayment);
  
  // Update WhatsApp button link
  const phone = "2348030702010";
  const message = `Hi Adagache Homes, I used your web calculator and would like to propose an installment plan for the *${plotDisplayName}*:\n\n` +
    `- *Total Plot Price:* ${formatNaira(totalPrice)}\n` +
    `- *My Down Payment (${depositPercent}%):* ${formatNaira(depositAmount)}\n` +
    `- *Chosen Term:* ${duration} Months\n` +
    `- *Calculated Monthly Outlay:* ${formatNaira(monthlyPayment)}\n\n` +
    `Please let me know how we can proceed with documentation!`;
  
  const waBtn = document.getElementById('calcWhatsAppBtn');
  if (waBtn) waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// ========== BIND GLOBAL EVENTS ==========
function bindGlobalEvents() {
  // Modal close button
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLeadModal);
  }
  
  // Modal overlay click
  const modalOverlay = document.getElementById('leadModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeLeadModal();
    });
  }
  
  // Modal option buttons
  document.querySelectorAll('.modal-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const payment = btn.getAttribute('data-payment');
      triggerWhatsAppLead(payment);
    });
  });
  
  // Calculator event listeners
  const plotSelect = document.getElementById('plotSelect');
  const depositRange = document.getElementById('depositRange');
  const durationSelect = document.getElementById('durationSelect');
  
  if (plotSelect) plotSelect.addEventListener('change', calculateInstallments);
  if (depositRange) depositRange.addEventListener('input', calculateInstallments);
  if (durationSelect) durationSelect.addEventListener('change', calculateInstallments);
}

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
  renderPlots();
  renderFeatures();
  renderCEOContent();
  populatePlotSelect();
  calculateInstallments();
  bindGlobalEvents();
  initMobileMenu();
  
  // Handle image fallbacks
  const logoImg = document.getElementById('siteLogo');
  if (logoImg && logoImg.complete && logoImg.naturalWidth === 0) {
    logoImg.src = 'https://placehold.co/180x60/111111/d4af37?text=ADAGACHE+HOMES';
  }
  
  const ceoImg = document.getElementById('ceoImage');
  if (ceoImg && ceoImg.complete && ceoImg.naturalWidth === 0) {
    ceoImg.src = 'https://placehold.co/800x1000/1a1a1a/d4af37?text=CEO+Photo+Jblingz';
  }
});
