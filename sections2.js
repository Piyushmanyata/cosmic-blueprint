import { dashaData, sadeSatiData, remedyData, healthData, financialProjection, kpPlanetsData, kpCuspsData } from './data.js';

export function buildHealth() {
  return `
  <section class="section" id="health">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">11 · Health Blueprint</span>
        <h2 class="section-title">Physical & Mental Health Map</h2>
        <p class="section-subtitle">Every chart has specific health tendencies. These aren't predictions of illness — they're areas that need extra attention for peak performance.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:350px;margin-bottom:28px">
        <h3>Health Risk Areas (Lower = Better)</h3>
        <canvas id="healthChart"></canvas>
      </div>
      <div class="info-grid reveal">
        ${healthData.map((h, i) => `
        <div class="info-card reveal-delay-${(i % 3) + 1}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <h3>${h.area}</h3>
            <span class="score-badge" style="background:${h.risk > 60 ? 'rgba(255,107,157,0.15)' : h.risk > 40 ? 'rgba(255,140,66,0.15)' : 'rgba(66,232,213,0.15)'};color:${h.risk > 60 ? '#ff6b9d' : h.risk > 40 ? '#ff8c42' : '#42e8d5'};border-color:${h.risk > 60 ? 'rgba(255,107,157,0.3)' : h.risk > 40 ? 'rgba(255,140,66,0.3)' : 'rgba(66,232,213,0.3)'}">${h.risk > 60 ? 'Watch' : h.risk > 40 ? 'Moderate' : 'Strong'}</span>
          </div>
          <p>${h.advice}</p>
          <div class="meter-row" style="margin-top:14px"><div class="meter-track"><div class="meter-fill" style="width:${h.risk}%;background:${h.color}"></div></div><span class="meter-val">${h.risk}%</span></div>
        </div>`).join('')}
      </div>
      <div class="callout-box reveal" style="margin-top:28px">
        <div class="callout-icon">⚕️</div>
        <div class="callout-content">
          <h4>The Bottom Line</h4>
          <p>Overall physical vitality is <strong>exceptionally strong</strong> — Mars in its own sign gives near-superhuman stamina and recovery ability. The main vulnerabilities are stress-related digestive issues (Scorpio absorbs emotional tension in the gut) and the risk of burnout from the Pitta fire constitution driving relentless ambition. <strong>Prevention strategy:</strong> cooling diet, emotional boundaries, and scheduled rest (not optional, mandatory).</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildFinancial() {
  return `
  <section class="section" id="money">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">12 · Wealth Trajectory</span>
        <h2 class="section-title">Financial Projection Over Lifetime</h2>
        <p class="section-subtitle">Based on the Dasha (life chapter) system, this is how wealth potential rises and falls across different life periods.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:350px;margin-bottom:28px">
        <h3>Wealth Potential Across Life Chapters</h3>
        <canvas id="financialChart"></canvas>
      </div>
      <div class="callout-box gold reveal">
        <div class="callout-icon">💰</div>
        <div class="callout-content">
          <h4>The Money Story</h4>
          <p>The current Mercury period (ending 2029) is building the intellectual capital and networks that will generate future wealth. After a brief Ketu spiritual reset (2029-2036), the <strong style="color:var(--accent-gold)">Venus Golden Era (2036-2056)</strong> activates — a full 20 years of maximum wealth accumulation, luxury, and financial dominance. This is when the Lakshmi Yoga fires at full power, mathematically guaranteeing the native becomes a true "Lord of Wealth."</p>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:24px">
        <div class="info-card">
          <h3>💎 3 Wealth Guarantees</h3>
          <p><strong>1.</strong> Lakshmi Yoga — named after the Goddess of Wealth, guarantees massive fortune<br><strong>2.</strong> Mercury rules the 11th house of gains — multiple income streams<br><strong>3.</strong> Venus in 2nd house of wealth — deep capacity for luxury accumulation</p>
        </div>
        <div class="info-card">
          <h3>⚠️ Financial Warning</h3>
          <p>During the current Mercury period, there's a strong tendency toward <strong>extravagance and impulsive spending</strong>. The chart strongly advises: prioritize saving over spending, seek second opinions before major financial decisions, and avoid high-risk speculation until after 2036.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildTimeline() {
  return `
  <section class="section" id="timeline">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">13 · Life Timeline</span>
        <h2 class="section-title">The 9 Chapters of Life</h2>
        <p class="section-subtitle">Vedic astrology divides life into chapters called "Dashas" — each ruled by a different planet, bringing completely different themes, challenges, and opportunities.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:420px;margin-bottom:28px">
        <h3>Life Chapter Duration Comparison</h3>
        <canvas id="dashaChart"></canvas>
      </div>
      <div class="timeline reveal">
        ${dashaData.map(d => `
        <div class="timeline-item ${d.status === 'active' ? 'active' : ''}">
          <div class="timeline-dot" style="${d.status === 'active' ? `background:${d.color};box-shadow:0 0 16px ${d.color}88` : ''}"></div>
          <div class="timeline-dates">${d.start} → ${d.end} (${d.years} years)</div>
          <div class="timeline-title" style="color:${d.color}">
            ${d.emoji} ${d.label}
            ${d.status === 'active' ? '<span class="tag tag-cyan" style="margin-left:8px;font-size:0.65rem;vertical-align:middle">⚡ HAPPENING NOW</span>' : ''}
            ${d.status === 'completed' ? '<span class="tag tag-violet" style="margin-left:8px;font-size:0.65rem;vertical-align:middle">✓ COMPLETED</span>' : ''}
          </div>
          <div class="timeline-desc">${d.simple}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card reveal" style="margin-top:32px">
        <h3 style="font-family:var(--font-display);font-size:1.1rem;margin-bottom:12px">🔮 The Sade Sati Challenge (2032-2039)</h3>
        <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:16px">Sade Sati is a 7.5-year period of intense testing by Saturn — think of it as life's final exam before graduation. <strong>Rising Phase (2032-2034):</strong> Financial restructuring needed. <strong>Peak Phase (2034-2036):</strong> Maximum emotional pressure but maximum growth. <strong>Resolution (2036-2039):</strong> Everything crystallizes into permanent authority.</p>
        <div class="dosha-status clear">
          <span class="status-icon">🛡️</span>
          <div class="status-text">
            <h4>Silver Paya Protection Active</h4>
            <p>The Silver Paya footing ensures that even during this intense period, the native experiences <strong>sudden gains, property acquisition, and cosmic protection</strong> against catastrophic losses. The storm passes, and what remains is stronger than ever.</p>
          </div>
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
        <span class="section-number">14 · Chart Flaws Check</span>
        <h2 class="section-title">Dosha (Flaw) Analysis</h2>
        <p class="section-subtitle">Doshas are challenging patterns in a chart. The good news? This chart is clean on both major ones.</p>
        <div class="section-divider"></div>
      </div>
      <div class="dosha-status clear reveal">
        <span class="status-icon">✅</span>
        <div class="status-text">
          <h4>Manglik Dosha — CANCELLED</h4>
          <p>Mars is in the 1st house which normally creates friction in marriage. But here it's <strong>fully neutralized</strong> by the Sun — meaning all the intensity becomes protective leadership, not destructive conflict. <strong>No special marriage matching needed.</strong></p>
        </div>
      </div>
      <div class="dosha-status clear reveal">
        <span class="status-icon">✅</span>
        <div class="status-text">
          <h4>Kalsarpa Dosha — NOT PRESENT</h4>
          <p>This chart is <strong>completely free</strong> from the restrictive Kalsarpa pattern. Meaning: efforts translate directly into proportional results. No hidden cosmic brakes on progress. Full green signal.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildRemedies() {
  return `
  <section class="section" id="remedies">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">15 · Power-Ups</span>
        <h2 class="section-title">Recommended Cosmic Remedies</h2>
        <p class="section-subtitle">Think of these as performance enhancers — specific gemstones and sacred beads that amplify the chart's strengths and shield against weaknesses.</p>
        <div class="section-divider"></div>
      </div>
      <div class="remedy-grid">
        ${remedyData.map((r, i) => `
        <div class="remedy-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="remedy-icon">${r.icon}</span>
          <h3>${r.name}</h3>
          <div class="remedy-sub">${r.subtitle} · Amplifies ${r.planet}</div>
          <p><strong style="color:var(--accent-cyan)">What it does:</strong> ${r.benefits}</p>
          <div class="protocol">
            <h4>📋 How to Use</h4>
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
        <span class="section-number">Final · The Complete Picture</span>
        <h2 class="section-title">The Full Synthesis</h2>
        <p class="section-subtitle">Everything combined into one clear conclusion.</p>
        <div class="section-divider"></div>
      </div>
      <div class="synthesis-box reveal">
        <p>This chart reveals a person <strong style="color:var(--accent-violet)">engineered by the cosmos</strong> for profound societal impact, unparalleled intellectual dominance, and commanding leadership.</p>
        <p>The 4-planet stellium in the 1st house creates a personality that is <strong style="color:var(--accent-rose)">intense, magnetic, strategic, and virtually unstoppable</strong>. Mars provides the engine, Sun provides the direction, Mercury provides the genius-level brain, and Jupiter provides the wisdom to use it all for good.</p>
        <p>With <strong style="color:var(--accent-gold)">7 sacred Yogas</strong> — including the Lakshmi Yoga (wealth guarantee), Ruchaka Yoga (warrior king), and Indra Yoga (royal destiny) — this life trajectory completely bypasses the ordinary.</p>
        <p>The <strong style="color:var(--accent-cyan)">Venus Golden Era (2036-2056)</strong> will be the peak — 20 years of maximum wealth, luxury, and influence. The current Mercury period is building the intellectual foundation for that explosion.</p>
        <p>The Silver Paya acts as a <strong>lifetime cosmic insurance policy</strong> — ensuring that even during the toughest periods, protection, gains, and resilience are always present.</p>
        <p style="font-weight:700;color:var(--text-primary);font-size:1.15rem;margin-top:24px;line-height:1.6">The bottom line: this is a chart of <span style="background:var(--gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent">absolute self-mastery, limitless material abundance, and a historically enduring legacy</span>. The only requirement is patience, discipline, and trust in the process.</p>
      </div>
    </div>
  </section>`;
}

export function buildFooter() {
  return `
  <footer class="footer">
    <p style="margin-bottom:8px;font-family:var(--font-display);font-size:1.1rem;font-weight:700;background:var(--gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Cosmic Blueprint</p>
    <p>Comprehensive Vedic Astrology Analysis · Decoded in Plain English · ${new Date().getFullYear()}</p>
  </footer>`;
}
