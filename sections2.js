import { dashaData, sadeSatiData, remedyData } from './data.js';

export function buildDasha() {
  return `
  <section class="section" id="dasha">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 09</span>
        <h2 class="section-title">Vimshottari Dasha: Chronology of Karma</h2>
        <p class="section-subtitle">The precise 120-year chronological cycle dictating exactly when planetary potentials, yogas, and karmic debts physically manifest in life.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="margin-bottom:32px">
        <h3>Mahadasha Duration Comparison</h3>
        <div class="chart-canvas-wrap"><canvas id="dashaChart"></canvas></div>
      </div>
      <div class="timeline reveal">
        ${dashaData.map(d => `
        <div class="timeline-item ${d.status === 'active' ? 'active' : ''}">
          <div class="timeline-dot"></div>
          <div class="timeline-dates">${d.start} → ${d.end} (${d.years} years)</div>
          <div class="timeline-title" style="color:${d.color}">
            ${d.planet} Mahadasha
            ${d.status === 'active' ? '<span class="tag tag-cyan" style="margin-left:8px;font-size:0.65rem;vertical-align:middle">ACTIVE NOW</span>' : ''}
            ${d.status === 'completed' ? '<span class="tag tag-violet" style="margin-left:8px;font-size:0.65rem;vertical-align:middle">COMPLETED</span>' : ''}
          </div>
          <div class="timeline-desc">${d.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildAshtakavarga() {
  return `
  <section class="section" id="ashtakavarga">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 10</span>
        <h2 class="section-title">Ashtakavarga & Shadbala</h2>
        <p class="section-subtitle">Advanced mathematical systems quantifying planetary strength and transit potential through eight-fold division and six-fold strength metrics.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid reveal">
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h3>SAV Mechanics</h3>
          <p>Total score across the zodiac is a constant of <strong style="color:var(--accent-gold)">337 points</strong>. Baseline average is <strong>28 points per house</strong>.</p>
          <div class="meter-row" style="margin-top:16px"><span class="meter-label">Below 25</span><div class="meter-track"><div class="meter-fill rose" style="width:30%"></div></div><span class="meter-val" style="color:var(--accent-rose)">Weak</span></div>
          <div class="meter-row"><span class="meter-label">25-28</span><div class="meter-track"><div class="meter-fill gold" style="width:55%"></div></div><span class="meter-val" style="color:var(--accent-gold)">Mixed</span></div>
          <div class="meter-row"><span class="meter-label">Above 28</span><div class="meter-track"><div class="meter-fill" style="width:85%"></div></div><span class="meter-val" style="color:var(--accent-violet)">Strong</span></div>
          <div class="meter-row"><span class="meter-label">Above 30</span><div class="meter-track"><div class="meter-fill" style="width:100%;background:linear-gradient(90deg,var(--accent-cyan),var(--accent-violet))"></div></div><span class="meter-val" style="color:var(--accent-cyan)">Power</span></div>
        </div>
        <div class="info-card">
          <span class="card-icon">⚖️</span>
          <h3>Shadbala (Six-Fold Strength)</h3>
          <p>Measures inherent planetary capacity through six dimensions:</p>
          <div class="meter-row" style="margin-top:12px"><span class="meter-label">Positional</span><div class="meter-track"><div class="meter-fill" style="width:92%"></div></div><span class="meter-val">92%</span></div>
          <div class="meter-row"><span class="meter-label">Temporal</span><div class="meter-track"><div class="meter-fill gold" style="width:78%"></div></div><span class="meter-val">78%</span></div>
          <div class="meter-row"><span class="meter-label">Directional</span><div class="meter-track"><div class="meter-fill" style="width:95%"></div></div><span class="meter-val">95%</span></div>
          <div class="meter-row"><span class="meter-label">Motional</span><div class="meter-track"><div class="meter-fill gold" style="width:70%"></div></div><span class="meter-val">70%</span></div>
          <div class="meter-row"><span class="meter-label">Aspectual</span><div class="meter-track"><div class="meter-fill" style="width:85%"></div></div><span class="meter-val">85%</span></div>
          <div class="meter-row"><span class="meter-label">Natural</span><div class="meter-track"><div class="meter-fill" style="width:80%"></div></div><span class="meter-val">80%</span></div>
        </div>
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h3>Strategic Implications</h3>
          <p>High SAV points in the 1st house grant an <strong style="color:var(--accent-violet)">unbreakable magnetic personality</strong> and immense vitality. High points in the 11th house (over 30) signify <strong style="color:var(--accent-gold)">absolute fulfillment of desires</strong>, vast financial networking, and resource accumulation.</p>
          <p style="margin-top:12px">When benefics (Jupiter, Venus) transit high-scoring SAV houses, execute <strong style="color:var(--accent-cyan)">major life decisions, investments, or career shifts</strong>.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildSadeSati() {
  return `
  <section class="section" id="sadesati">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 11</span>
        <h2 class="section-title">Shani Sade Sati Transit</h2>
        <p class="section-subtitle">The transformative 7.5-year period when Saturn crosses the 12th, 1st, and 2nd houses from natal Moon (Cancer). Feared yet profoundly transformative.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="margin-bottom:32px">
        <h3>Sade Sati Phases Timeline</h3>
        <div class="chart-canvas-wrap"><canvas id="sadeSatiChart"></canvas></div>
      </div>
      <div class="data-table-wrapper reveal">
        <table class="data-table">
          <thead><tr><th>Phase</th><th>Start</th><th>End</th><th>Transit Sign</th><th>Status</th></tr></thead>
          <tbody>${sadeSatiData.map(s => `<tr>
            <td style="font-weight:600">${s.phase}</td><td>${s.start}</td><td>${s.end}</td><td>${s.sign}</td>
            <td><span class="tag ${s.status === 'completed' ? 'tag-violet' : s.status === 'upcoming' ? 'tag-orange' : 'tag-blue'}">${s.status}</span></td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="info-grid reveal" style="margin-top:32px">
        <div class="info-card">
          <span class="card-icon">🌅</span>
          <h3>Rising Phase (2032-2034)</h3>
          <p>Saturn in Gemini (12th from Moon). Financial restructuring, potential domestic shifts. <strong style="color:var(--accent-orange)">Rein in unnecessary expenditures. Avoid high-risk ventures.</strong></p>
        </div>
        <div class="info-card">
          <span class="card-icon">⛰️</span>
          <h3>Peak Phase (2034-2036)</h3>
          <p>Saturn directly over natal Moon in Cancer. <strong style="color:var(--accent-rose)">Maximum psychological pressure</strong>. Rigorous emotional endurance tests. Spiritual surrender provides immense relief.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🌄</span>
          <h3>Setting Phase (2036-2039)</h3>
          <p>Saturn over natal 10th house placements. <strong style="color:var(--accent-cyan)">Resolution phase</strong> — grueling lessons crystallize into immense professional authority and stabilized wealth.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🛡️</span>
          <h3>Silver Paya Mitigation</h3>
          <p>The Silver Paya ensures that despite intense pressure, the native experiences <strong style="color:var(--accent-gold)">sudden gains in wealth, property, and cosmic protection</strong> against catastrophic losses during this transit.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildDoshas() {
  return `
  <section class="section" id="doshas">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 12</span>
        <h2 class="section-title">Dosha Analysis</h2>
        <p class="section-subtitle">Evaluation of specific planetary alignments forming challenging karmic patterns, particularly regarding marriage and life progression.</p>
        <div class="section-divider"></div>
      </div>
      <div class="dosha-status clear reveal">
        <span class="status-icon">✅</span>
        <div class="status-text">
          <h4>Manglik Dosha — CANCELLED</h4>
          <p>Mars is in 1st house (typically Manglik), but advanced analysis confirms it is <strong>entirely cancelled</strong> due to Mars's exact proximity to the Sun (combustion). Destructive marital impacts nullified; protective leadership traits preserved.</p>
        </div>
      </div>
      <div class="dosha-status clear reveal">
        <span class="status-icon">✅</span>
        <div class="status-text">
          <h4>Kalsarpa Dosha — NOT PRESENT</h4>
          <p>This Kundli is <strong>completely free</strong> from Kalsarpa Dosha. All seven planets are NOT hemmed between Rahu-Ketu axis. The native's efforts will yield proportionate and unobstructed results throughout life.</p>
        </div>
      </div>
      <div class="glass-card reveal" style="margin-top:24px">
        <h3 style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:12px">🔎 What This Means</h3>
        <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8">The absence of both major doshas is exceptionally favorable. <strong style="color:var(--accent-cyan)">Manglik Dosha cancellation</strong> means the native can pursue marriage without specialized matching requirements. <strong style="color:var(--accent-cyan)">Freedom from Kalsarpa</strong> ensures no systemic life delays or restrictions — efforts directly translate into proportional results.</p>
      </div>
    </div>
  </section>`;
}

export function buildRemedies() {
  return `
  <section class="section" id="remedies">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 13</span>
        <h2 class="section-title">Karmic Remedies & Gemstone Therapeutics</h2>
        <p class="section-subtitle">Highly specific astrological therapeutics to harmonize intense planetary energies, mitigate malefic afflictions, and amplify the profound Yogas present in the chart.</p>
        <div class="section-divider"></div>
      </div>
      <div class="remedy-grid">
        ${remedyData.map((r, i) => `
        <div class="remedy-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="remedy-icon">${r.icon}</span>
          <h3>${r.name}</h3>
          <div class="remedy-sub">${r.subtitle} · ${r.planet}</div>
          <p><strong style="color:var(--accent-gold)">Significance:</strong> ${r.significance}</p>
          <p><strong style="color:var(--accent-cyan)">Benefits:</strong> ${r.benefits}</p>
          <div class="protocol">
            <h4>📋 Wearing Protocol</h4>
            <p>${r.protocol}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildSynthesis() {
  return `
  <section class="section" id="synthesis">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">Section 14</span>
        <h2 class="section-title">Comprehensive Synthesis</h2>
        <p class="section-subtitle">The final, holistic integration of all astrological findings — the cosmic blueprint decoded.</p>
        <div class="section-divider"></div>
      </div>
      <div class="synthesis-box reveal">
        <p>The exhaustively detailed astrological analysis of this Kundli reveals an individual <strong style="color:var(--accent-violet)">mathematically and cosmically engineered</strong> for profound societal impact, unparalleled intellectual dominance, and highly authoritative leadership.</p>
        <p>The synthesis of the <strong style="color:var(--accent-rose)">Scorpio Ascendant</strong> with the formidable, densely packed <strong>1st-house stellium</strong> (Sun, Mars, Mercury, Jupiter) generates a core personality defined by intense drive, strategic brilliance, and an unbreakable magnetic power.</p>
        <p>The presence of high-order planetary alignments — <strong style="color:var(--accent-gold)">Ruchaka, Budhaditya, Lakshmi, and Indra Yogas</strong> — guarantees a life trajectory that completely bypasses the ordinary. It is a path explicitly marked by significant wealth accumulation, undisputed professional authority, and enduring societal respect.</p>
        <p>The highly protective grace of the <strong style="color:var(--accent-cyan)">Cancer Moon in the 9th house</strong>, combined with the <strong style="color:var(--accent-gold)">Silver Paya</strong>, ensures intense ambition is perfectly balanced by profound spiritual wisdom, ethical grounding, and ultimate karmic protection against total ruin.</p>
        <p>While the 10th house Saturn-Ketu conjunction demands cycles of grueling hard work and ego-detachment, these are merely the required <strong>karmic crucibles for forging lasting, invincible success</strong>.</p>
        <p style="font-weight:600;color:var(--text-primary);font-size:1.1rem;margin-top:16px">By consciously navigating the Vimshottari Dasha periods and utilizing the prescribed remedies, the native is cosmically positioned to achieve <span style="background:var(--gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent">absolute self-mastery, limitless material abundance, and a historically enduring legacy</span>.</p>
      </div>
    </div>
  </section>`;
}

export function buildFooter() {
  return `
  <footer class="footer">
    <p style="margin-bottom:8px;font-family:var(--font-display);font-size:1rem;font-weight:600;background:var(--gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Cosmic Blueprint</p>
    <p>Comprehensive Vedic Astrology Analysis · ${new Date().getFullYear()}</p>
    <p style="margin-top:8px;font-size:0.7rem">Based on traditional Vedic Astrological calculations, Krishnamurti Paddhati (KP), Ashtakavarga, and Vimshottari Dasha systems.</p>
  </footer>`;
}
