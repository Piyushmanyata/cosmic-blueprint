import { birthData, avakhadaData, planetaryData, houseDistribution, yogaData, dashaData, sadeSatiData, kpPlanetsData, kpCuspsData, nakshatraData, elementDistribution, remedyData, stelliumAnalysis } from './data.js';

// ===== SECTION BUILDERS =====

export function buildNav() {
  return `
  <nav class="nav-wrapper" id="mainNav">
    <div class="nav-inner">
      <div class="nav-logo">Cosmic Blueprint <span>· Vedic Analysis</span></div>
      <div class="nav-hamburger" id="navToggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
      <div class="nav-links" id="navLinks">
        <a href="#hero">Home</a>
        <a href="#birth">Birth Data</a>
        <a href="#avakhada">Panchang</a>
        <a href="#ascendant">Ascendant</a>
        <a href="#planets">Planets</a>
        <a href="#stellium">Stellium</a>
        <a href="#yogas">Yogas</a>
        <a href="#nakshatras">Nakshatras</a>
        <a href="#kp">KP System</a>
        <a href="#dasha">Dasha</a>
        <a href="#sadesati">Sade Sati</a>
        <a href="#doshas">Doshas</a>
        <a href="#remedies">Remedies</a>
        <a href="#synthesis">Synthesis</a>
      </div>
    </div>
  </nav>`;
}

export function buildHero() {
  return `
  <section class="hero-section" id="hero">
    <div class="hero-content">
      <div class="hero-badge reveal"><span class="dot"></span> Vedic Astrology · Micro-Analytical Report</div>
      <h1 class="hero-title reveal reveal-delay-1">
        <span class="line1">Comprehensive Astrological</span>
        <span class="line2">Blueprint & Assessment</span>
      </h1>
      <p class="hero-subtitle reveal reveal-delay-2">
        An exhaustive, micro-level analysis of planetary alignments, zodiacal influences, sacred Yogas, and chronobiological timing systems for <strong>${birthData.name}</strong>.
      </p>
      <div class="hero-stats reveal reveal-delay-3">
        <div class="hero-stat"><div class="val">4</div><div class="lbl">1st House Planets</div></div>
        <div class="hero-stat"><div class="val">7</div><div class="lbl">Sacred Yogas</div></div>
        <div class="hero-stat"><div class="val">9</div><div class="lbl">Dasha Periods</div></div>
        <div class="hero-stat"><div class="val">12</div><div class="lbl">Planets Mapped</div></div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Scroll to Explore</span>
      <div class="arrow"></div>
    </div>
  </section>`;
}

export function buildBirthData() {
  const fields = [
    { icon: '👤', label: 'Name', value: birthData.name },
    { icon: '📅', label: 'Date of Birth', value: birthData.dob },
    { icon: '⏰', label: 'Time of Birth', value: birthData.tob },
    { icon: '📍', label: 'Place of Birth', value: birthData.pob },
    { icon: '🌐', label: 'Latitude', value: birthData.latitude },
    { icon: '🌐', label: 'Longitude', value: birthData.longitude },
    { icon: '🕐', label: 'Timezone', value: birthData.timezone },
    { icon: '🌅', label: 'Sunset', value: birthData.sunset },
    { icon: '🔭', label: 'Ayanamsha', value: birthData.ayanamsha },
    { icon: '♏', label: 'Ascendant', value: birthData.ascendant },
    { icon: '♋', label: 'Moon Sign', value: birthData.moonSign },
    { icon: '⭐', label: 'Birth Nakshatra', value: birthData.nakshatraMoon },
  ];
  return `
  <section class="section" id="birth">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 01</span>
        <h2 class="section-title">Core Astronomical Coordinates</h2>
        <p class="section-subtitle">The foundational birth parameters upon which this entire chart analysis is constructed. Every prediction and calculation originates from these exact spatiotemporal coordinates.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid">
        ${fields.map((f, i) => `
        <div class="info-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="card-icon">${f.icon}</span>
          <h3>${f.label}</h3>
          <div class="card-value">${f.value}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card reveal" style="margin-top:32px">
        <p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.8">
          Based on these coordinates, the rising sign ascending on the eastern horizon at birth is <strong style="color:var(--accent-violet)">Scorpio (Vrishchika)</strong> in <strong style="color:var(--accent-gold)">Jyeshtha Nakshatra</strong>. The Moon sits in <strong style="color:var(--accent-cyan)">Cancer (Karka)</strong>. This establishes a profound <strong>water-element dominance</strong> dictating a life of deep intuition, emotional resonance, analytical depth, and transformative psychological processes.
        </p>
      </div>
    </div>
  </section>`;
}

export function buildAvakhada() {
  return `
  <section class="section" id="avakhada">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 02</span>
        <h2 class="section-title">Panchang & Avakhada Synthesis</h2>
        <p class="section-subtitle">The five limbs of Vedic timekeeping and the energetic frequencies governing the subconscious mind, physiology, and socio-spiritual archetype.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid">
        ${avakhadaData.map((item, i) => `
        <div class="info-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="card-icon">${item.icon}</span>
          <h3>${item.field}</h3>
          <div class="card-value">${item.value}</div>
          <p style="margin-top:12px">${item.desc}</p>
        </div>`).join('')}
      </div>
      <div class="chart-row reveal" style="margin-top:32px">
        <div class="chart-container">
          <h3>Elemental Distribution</h3>
          <div class="chart-canvas-wrap"><canvas id="elementChart"></canvas></div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;justify-content:center">
          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:20px">Key Panchang Highlights</h3>
          <div style="margin-bottom:16px"><span class="tag tag-gold">Krishna Panchami</span><p style="font-size:0.85rem;color:var(--text-secondary);margin-top:6px">Waning lunar phase — highly conducive to introspection, systemic analysis, and consolidation of complex knowledge structures.</p></div>
          <div style="margin-bottom:16px"><span class="tag tag-violet">Indra Yoga</span><p style="font-size:0.85rem;color:var(--text-secondary);margin-top:6px">Cosmically destined to inhabit positions of power. Lifelong catalyst for leadership. Accumulates immense good deeds and overwhelms opposition.</p></div>
          <div><span class="tag tag-cyan">Silver Paya</span><p style="font-size:0.85rem;color:var(--text-secondary);margin-top:6px">Most universally beneficial footing. Profound protective shield guaranteeing peace, financial stability, and spiritual blessings across the lifespan.</p></div>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildAscendant() {
  return `
  <section class="section" id="ascendant">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 03</span>
        <h2 class="section-title">The Ascendant Matrix: Scorpio Rising</h2>
        <p class="section-subtitle">The physical vessel, outward personality architecture, and primary lens through which the individual interacts with the material world.</p>
        <div class="section-divider"></div>
      </div>
      <div class="glass-card reveal" style="margin-bottom:32px">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap">
          <span style="font-size:3rem">♏</span>
          <div>
            <h3 style="font-family:var(--font-display);font-size:1.5rem;font-weight:800">Scorpio (Vrishchika)</h3>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
              <span class="tag tag-rose">Fixed Sign</span>
              <span class="tag tag-blue">Water Element</span>
              <span class="tag tag-violet">Ruled by Mars</span>
              <span class="tag tag-gold">Jyeshtha Nakshatra</span>
            </div>
          </div>
        </div>
        <p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.8;margin-bottom:16px">The Scorpio rising archetype is universally characterized by <strong>profound emotional depth, relentless resilience, and a commanding, magnetic presence</strong>. The native possesses a highly critical and analytical brain, functioning as an exceptional planner with strategic, almost military precision.</p>
        <p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.8">Individuals with this placement have a natural, almost psychic ability to perceive hidden truths, instantly understanding the underlying motives and systemic currents that others miss. They are highly selective in forming alliances, guarding internal vulnerabilities behind an aura of mystery and self-control.</p>
      </div>
      <div class="info-grid reveal">
        <div class="info-card">
          <span class="card-icon">💪</span>
          <h3>Physical Constitution</h3>
          <p>Well-built, robust, and athletic physique. Broad shoulder arches, square face, sharp facial details. <strong style="color:var(--accent-rose)">Defining trait: deep, intense, penetrating eyes</strong> that are innately appealing and hypnotic. Radiates sensual energy combined with intimidating focus.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚕️</span>
          <h3>Health Vulnerabilities</h3>
          <p>Sponge-like tendency to absorb others' emotions. Must be vigilant regarding <strong style="color:var(--accent-orange)">digestive tract, metabolism, and lower abdomen</strong>. Psychological stress manifests as indigestion, cysts, or colon inflammation. Cooling diet and regular detox mandatory.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💼</span>
          <h3>Professional Trajectory</h3>
          <p>Highly suited for <strong style="color:var(--accent-cyan)">research, law, high-level finance, investigative work, or therapeutic psychology</strong>. Thrives in disciplines requiring immense patience to acquire and synthesize large volumes of facts.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">❤️</span>
          <h3>Relational Pattern</h3>
          <p>Demands <strong style="color:var(--accent-rose)">absolute, uncompromising commitment</strong>. "All or nothing" paradigm. Most fiercely loyal partner, but possesses profound intuition — impossible to deceive. Requires complete transparency from partner.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildPlanets() {
  return `
  <section class="section" id="planets">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 04</span>
        <h2 class="section-title">Planetary Placements & House Synthesis</h2>
        <p class="section-subtitle">The geometric disposition of all planetary bodies across the twelve houses — the unique karmic circuitry of the individual.</p>
        <div class="section-divider"></div>
      </div>
      <div class="data-table-wrapper reveal">
        <table class="data-table">
          <thead><tr><th>Planet</th><th>Sign</th><th>Sign Lord</th><th>House</th><th>Nakshatra</th><th>Nak. Lord</th></tr></thead>
          <tbody>
            ${planetaryData.map(p => `<tr>
              <td><span style="color:${p.color};font-weight:600">${p.planet}</span></td>
              <td>${p.sign}</td><td>${p.signLord}</td>
              <td><span class="tag tag-violet" style="padding:2px 10px">${p.house}</span></td>
              <td>${p.nakshatra}</td><td>${p.nakshatraLord}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="chart-row reveal" style="margin-top:32px">
        <div class="chart-container">
          <h3>Planets per House Distribution</h3>
          <div class="chart-canvas-wrap"><canvas id="houseChart"></canvas></div>
        </div>
        <div class="glass-card">
          <h3 style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:20px">House Significance Guide</h3>
          ${houseDistribution.filter(h => h.score > 0).map(h => `
          <div style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--border-subtle)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <span style="font-weight:700;font-size:0.9rem">House ${h.house} — ${h.label}</span>
              <span class="tag tag-violet" style="padding:2px 10px">${h.score} planet${h.score > 1 ? 's' : ''}</span>
            </div>
            <p style="font-size:0.82rem;color:var(--text-secondary)">${h.significance}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

export function buildStellium() {
  return `
  <section class="section" id="stellium">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 05</span>
        <h2 class="section-title">The 1st House Stellium</h2>
        <p class="section-subtitle">The most defining, rare, and extraordinary feature — four major planetary bodies clustered in the Ascendant, creating an overwhelming concentration of cosmic power.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-row reveal">
        <div class="chart-container">
          <h3>Stellium Power Index</h3>
          <div class="chart-canvas-wrap"><canvas id="stelliumChart"></canvas></div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;justify-content:center">
          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:16px">What Makes This Rare?</h3>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:16px">A stellium represents an <strong>overwhelming concentration of energetic focus</strong>. When located in the 1st house of personality, ego, and physical body, it creates psychological architecture defined by immense willpower, undeniable presence, and absolute personal authority.</p>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8">The rational intellect (Mercury), physical drive (Mars), and higher wisdom (Jupiter) operate as a <strong style="color:var(--accent-gold)">single, highly pressurized engine</strong> within the native's mind. This four-planet alignment indicates a karmic destiny tied to earning massive wealth through services, dispute mediation, vast social circles, and authoritative leadership.</p>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:32px">
        ${stelliumAnalysis.map(s => `
        <div class="info-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="width:12px;height:12px;border-radius:50%;background:${s.color};display:inline-block"></span>
            <h3 style="margin-bottom:0">${s.planet} — ${s.role}</h3>
          </div>
          <p>${s.desc}</p>
          <div class="meter-row" style="margin-top:16px">
            <span class="meter-label">Power</span>
            <div class="meter-track"><div class="meter-fill" style="width:${s.power}%;background:${s.color}"></div></div>
            <span class="meter-val">${s.power}%</span>
          </div>
        </div>`).join('')}
      </div>
      <div class="glass-card reveal" style="margin-top:32px">
        <h3 style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:16px">⚡ Combustion & Planetary Synthesis</h3>
        <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8">Mercury, Mars, and Jupiter are extremely close to one another, sitting within a <strong style="color:var(--accent-gold)">two-degree orb</strong> — an incredibly tight conjunction creating a fusion of base energies. Because the Sun is located further away, the other planets avoid total, debilitating combustion (Asta), allowing their highly beneficial traits to manifest strongly in the material world while being constantly illuminated by the Sun's overarching need for ego-dominance and recognition.</p>
      </div>
    </div>
  </section>`;
}

export function buildYogas() {
  return `
  <section class="section" id="yogas">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 06</span>
        <h2 class="section-title">Sacred Yogas: The Divine Combinations</h2>
        <p class="section-subtitle">Highly specific mathematical planetary combinations that override general interpretations to yield powerful, specialized results. This chart is exceptionally rich in Raj Yogas and Dhana Yogas.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="margin-bottom:32px">
        <h3>Yoga Power Radar</h3>
        <div class="chart-canvas-wrap"><canvas id="yogaChart"></canvas></div>
      </div>
      <div class="yoga-grid">
        ${yogaData.map((y, i) => `
        <div class="yoga-card reveal reveal-delay-${(i % 4) + 1}">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="width:10px;height:10px;border-radius:50%;background:${y.color}"></span>
            <span class="yoga-name">${y.name}</span>
          </div>
          <div class="yoga-type">${y.type}</div>
          <div class="yoga-formation">⚙️ ${y.formation}</div>
          <div class="yoga-desc">${y.desc}</div>
          <div class="meter-row" style="margin-top:20px">
            <span class="meter-label">Power</span>
            <div class="meter-track"><div class="meter-fill" style="width:${y.power}%;background:${y.color}"></div></div>
            <span class="meter-val">${y.power}%</span>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildNakshatras() {
  return `
  <section class="section" id="nakshatras">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 07</span>
        <h2 class="section-title">Nakshatra Analysis: The Cosmic Mansions</h2>
        <p class="section-subtitle">The 27 lunar mansions represent the specific neuro-psychological wiring and micro-frequencies of each planet. These are the real personality drivers.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid">
        ${nakshatraData.map((n, i) => `
        <div class="info-card reveal reveal-delay-${(i % 4) + 1}">
          <h3>${n.name}</h3>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin:10px 0">
            <span class="tag tag-violet">${n.planets}</span>
            <span class="tag tag-gold">Ruler: ${n.ruler}</span>
            <span class="tag tag-cyan">Deity: ${n.deity}</span>
          </div>
          <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px">Symbol: ${n.symbol}</p>
          <p>${n.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildKP() {
  return `
  <section class="section" id="kp">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 08</span>
        <h2 class="section-title">Krishnamurti Paddhati (KP) System</h2>
        <p class="section-subtitle">The highly mathematical KP system utilizes the Placidus house system and "Sub-Lords" to offer micro-level predictive accuracy beyond standard Vedic methods.</p>
        <div class="section-divider"></div>
      </div>
      <div class="glass-card reveal" style="margin-bottom:24px">
        <h3 style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:16px">📐 Sub-Lord Theory Explained</h3>
        <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8">In KP theory, the sub-lord is a proportional subdivision of a Nakshatra's 13°20' span, based on Vimshottari Dasha ratios. While the Nakshatra lord determines the <em>nature</em> of the result, the <strong style="color:var(--accent-gold)">sub-lord dictates the ultimate strength and final outcome</strong> of any planetary placement.</p>
      </div>
      <h3 class="reveal" style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:16px">KP Planetary Table</h3>
      <div class="data-table-wrapper reveal">
        <table class="data-table">
          <thead><tr><th>Planet</th><th>Cusp</th><th>Sign</th><th>Sign Lord</th><th>Star Lord</th><th>Sub Lord</th></tr></thead>
          <tbody>${kpPlanetsData.map(p => `<tr><td style="font-weight:600;color:var(--accent-violet)">${p.planet}</td><td>${p.cusp}</td><td>${p.sign}</td><td>${p.signLord}</td><td>${p.starLord}</td><td>${p.subLord}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      <h3 class="reveal" style="font-family:var(--font-display);font-size:1.1rem;margin:32px 0 16px">KP House Cusps Table</h3>
      <div class="data-table-wrapper reveal">
        <table class="data-table">
          <thead><tr><th>Cusp</th><th>Degree</th><th>Sign</th><th>Sign Lord</th><th>Star Lord</th><th>Sub Lord</th></tr></thead>
          <tbody>${kpCuspsData.map(c => `<tr><td style="font-weight:600;color:var(--accent-gold)">${c.cusp}</td><td><span style="font-family:var(--font-mono);font-size:0.8rem">${c.degree}</span></td><td>${c.sign}</td><td>${c.signLord}</td><td>${c.starLord}</td><td>${c.subLord}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="info-grid reveal" style="margin-top:32px">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h3>1st Cusp Sub-Lord: Jupiter</h3>
          <p>Extraordinarily auspicious. Signifies a <strong style="color:var(--accent-cyan)">highly protected, long life</strong>, divine shielding against major illnesses, and inherent wisdom. Personal endeavors ultimately meet massive success.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💼</span>
          <h3>10th Cusp Sub-Lord: Mercury</h3>
          <p>Career heavily reliant on <strong style="color:var(--accent-gold)">intellectual skills, strategic planning, and legal frameworks</strong>. Connected to 11th house of gains — mathematically guaranteed to be highly lucrative with multiple income streams.</p>
        </div>
      </div>
    </div>
  </section>`;
}
