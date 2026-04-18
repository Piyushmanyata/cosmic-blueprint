import { birthData, personalityTraits, lifeAreas, superPowers, careerAptitude, relationshipProfile, planetaryData, houseDistribution, elementDistribution, yogaData, nakshatraData, avakhadaSimple, stelliumAnalysis } from './data.js';

export function buildNav() {
  return `
  <nav class="nav-wrapper" id="mainNav">
    <div class="nav-inner">
      <div class="nav-logo">Cosmic Blueprint <span>· Personality Decoded</span></div>
      <div class="nav-hamburger" id="navToggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
      <div class="nav-links" id="navLinks">
        <a href="#hero">Home</a><a href="#personality">Personality</a><a href="#superpower">Superpowers</a>
        <a href="#lifearea">Life Map</a><a href="#career">Career</a><a href="#relationships">Love</a>
        <a href="#stellium">Power Core</a><a href="#yogas">Blessings</a><a href="#health">Health</a>
        <a href="#money">Money</a><a href="#timeline">Life Timeline</a><a href="#planets">Planets</a>
        <a href="#nakshatras">Stars</a><a href="#remedies">Remedies</a><a href="#synthesis">Summary</a>
      </div>
    </div>
  </nav>`;
}

export function buildHero() {
  return `
  <section class="hero-section" id="hero">
    <div class="hero-content">
      <div class="hero-badge reveal"><span class="dot"></span> Complete Personality Decoded</div>
      <h1 class="hero-title reveal reveal-delay-1">
        <span class="line1">Who Is ${birthData.name.split(' ')[0]}?</span>
        <span class="line2">The Full Blueprint</span>
      </h1>
      <p class="hero-subtitle reveal reveal-delay-2">
        A deep-dive into every dimension of personality, strengths, career destiny, love patterns, health blueprint, and life timeline — explained in the simplest possible terms.
      </p>
      <div class="hero-stats reveal reveal-delay-3">
        <div class="hero-stat"><div class="val">10</div><div class="lbl">Core Traits</div></div>
        <div class="hero-stat"><div class="val">6</div><div class="lbl">Superpowers</div></div>
        <div class="hero-stat"><div class="val">7</div><div class="lbl">Cosmic Blessings</div></div>
        <div class="hero-stat"><div class="val">9</div><div class="lbl">Life Chapters</div></div>
      </div>
    </div>
    <div class="scroll-indicator"><span>Scroll to Explore</span><div class="arrow"></div></div>
  </section>`;
}

export function buildPersonality() {
  return `
  <section class="section" id="personality">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">01 · Who You Are</span>
        <h2 class="section-title">Core Personality Profile</h2>
        <p class="section-subtitle">These are the fundamental character traits hardwired into the personality — scored from 0 to 100 based on planetary positions.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:480px">
        <h3>Personality Trait Scores</h3>
        <canvas id="personalityChart"></canvas>
      </div>
      <div class="callout-box reveal" style="margin-top:28px">
        <div class="callout-icon">💡</div>
        <div class="callout-content">
          <h4>In Simple Terms</h4>
          <p>This person is essentially a <strong>strategic powerhouse</strong> — combining the drive of a warrior, the mind of a chess grandmaster, and the intuition of a psychic. They're intensely loyal, devastatingly analytical, and naturally gravitates toward leadership. The only areas needing conscious development are patience with others and managing a tendency to absorb emotional negativity.</p>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:28px">
        ${personalityTraits.slice(0, 6).map((t, i) => `
        <div class="info-card reveal-delay-${(i % 4) + 1}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <h3>${t.trait}</h3>
            <span class="score-badge">${t.score}/100</span>
          </div>
          <p>${t.desc}</p>
          <div class="meter-row" style="margin-top:14px"><div class="meter-track"><div class="meter-fill" style="width:${t.score}%"></div></div></div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildSuperpowers() {
  return `
  <section class="section" id="superpower">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">02 · What Makes You Rare</span>
        <h2 class="section-title">6 Cosmic Superpowers</h2>
        <p class="section-subtitle">These aren't just strengths — they're extremely rare cosmic gifts that less than 1% of people possess in combination.</p>
        <div class="section-divider"></div>
      </div>
      <div class="superpower-grid">
        ${superPowers.map((s, i) => `
        <div class="superpower-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="sp-icon">${s.icon}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildLifeAreas() {
  return `
  <section class="section" id="lifearea">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">03 · Life Area Map</span>
        <h2 class="section-title">Strength Across Every Life Domain</h2>
        <p class="section-subtitle">A radar view of how strong this chart is across all major life areas — from career to relationships to health.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-row reveal">
        <div class="chart-container" style="height:400px">
          <h3>Life Area Radar</h3>
          <canvas id="lifeAreaChart"></canvas>
        </div>
        <div class="chart-container" style="height:400px">
          <h3>Elemental Composition</h3>
          <canvas id="elementChart"></canvas>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:28px">
        ${lifeAreas.map((a, i) => `
        <div class="info-card reveal-delay-${(i % 4) + 1}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <h3>${a.icon} ${a.area}</h3>
            <span class="score-badge" style="background:${a.color}22;color:${a.color};border-color:${a.color}44">${a.score}/100</span>
          </div>
          <p>${a.desc}</p>
          <div class="meter-row" style="margin-top:14px"><div class="meter-track"><div class="meter-fill" style="width:${a.score}%;background:${a.color}"></div></div></div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildCareer() {
  return `
  <section class="section" id="career">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">04 · Professional Destiny</span>
        <h2 class="section-title">Career Aptitude Breakdown</h2>
        <p class="section-subtitle">Based on planetary positions, these are the fields where natural talent is strongest. Think of this as the career DNA.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:400px">
        <h3>Career Fit Scores</h3>
        <canvas id="careerChart"></canvas>
      </div>
      <div class="callout-box reveal" style="margin-top:28px">
        <div class="callout-icon">💼</div>
        <div class="callout-content">
          <h4>What This Means In Real Life</h4>
          <p>This person is built for <strong>high-stakes, complex, analytical work</strong>. Not routine jobs — but roles where you need to solve puzzles nobody else can, command teams, and make decisions that affect large systems. The ideal path involves research, strategy, finance, or law. The chart shows <strong>guaranteed career success</strong> — but only through Saturn's method: intense discipline, patience, and total commitment. No shortcuts, but the destination is massive.</p>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:28px">
        <div class="info-card">
          <h3>🏆 The Career Guarantee</h3>
          <p>Saturn in the 10th house (career) is an Upachaya (growing) house — meaning career results <strong>improve significantly with age</strong>. The path isn't fast, but it's unstoppable. Like compound interest — slow at first, then explosive.</p>
        </div>
        <div class="info-card">
          <h3>🌍 Global Reach</h3>
          <p>The Anuradha Nakshatra placement strongly indicates <strong>massive success far from the birthplace</strong>. International careers, foreign clients, or relocation abroad will dramatically accelerate professional growth.</p>
        </div>
        <div class="info-card">
          <h3>🧠 Intellectual Currency</h3>
          <p>Mercury as 10th cusp sub-lord means the career is powered by <strong>intellectual property and communication prowess</strong>. Multiple compounding income streams from knowledge-based work are mathematically guaranteed.</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildRelationships() {
  return `
  <section class="section" id="relationships">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">05 · Love & Relationships</span>
        <h2 class="section-title">The Relationship Blueprint</h2>
        <p class="section-subtitle">How this person loves, what they need from a partner, and where the challenges lie.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-row reveal">
        <div class="chart-container" style="height:380px">
          <h3>Relationship Profile Radar</h3>
          <canvas id="relationshipChart"></canvas>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;justify-content:center">
          ${Object.values(relationshipProfile).map(r => `
          <div class="meter-row">
            <span class="meter-label">${r.label}</span>
            <div class="meter-track"><div class="meter-fill" style="width:${r.score}%;background:${r.score > 85 ? 'var(--gradient-rose)' : r.score > 60 ? 'var(--gradient-gold)' : 'var(--gradient-accent)'}"></div></div>
            <span class="meter-val">${r.score}%</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="callout-box reveal" style="margin-top:28px">
        <div class="callout-icon">❤️</div>
        <div class="callout-content">
          <h4>The Love Pattern In Simple Terms</h4>
          <p>This person loves with <strong>absolute, volcanic intensity</strong>. There is no half-measures — it's complete devotion or nothing. They're the most fiercely loyal partner you could imagine, but they demand the same level of commitment. Their near-psychic intuition means <strong>lying to them is impossible</strong> — they'll sense dishonesty instantly. The ideal partner must be transparent, equally intense, and comfortable with someone who loves deeply but guards their own emotions behind walls of mystery.</p>
        </div>
      </div>
      <div class="dosha-status clear reveal" style="margin-top:20px">
        <span class="status-icon">✅</span>
        <div class="status-text">
          <h4>Manglik Dosha — FULLY CANCELLED</h4>
          <p>Despite Mars being in the 1st house, the Manglik Dosha is entirely neutralized by the Sun's proximity. <strong>No special marriage matching required.</strong> The intensity manifests as protective devotion, not destructive conflict.</p>
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
        <span class="section-number">06 · The Power Core</span>
        <h2 class="section-title">4 Planets in One Place</h2>
        <p class="section-subtitle">The rarest and most defining feature of this chart — four major planets packed into the house of self, creating an overwhelming concentration of cosmic power.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-row reveal">
        <div class="chart-container" style="height:380px">
          <h3>Stellium Power Distribution</h3>
          <canvas id="stelliumChart"></canvas>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;justify-content:center">
          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:16px">🔥 Why This Is Extraordinary</h3>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:16px">Imagine having <strong>the engine of a race car</strong> (Mars), <strong>the mind of a chess champion</strong> (Mercury), <strong>the authority of a CEO</strong> (Sun), and <strong>the wisdom of a sage</strong> (Jupiter) — all fused into one unified operating system.</p>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8">That's what 4 planets in the 1st house means. People with this placement are perceived as <strong>imposing and intellectually formidable</strong> from the very first meeting. The aura is so powerful, it's almost gravitational.</p>
        </div>
      </div>
      <div class="info-grid reveal" style="margin-top:28px">
        ${stelliumAnalysis.map(s => `
        <div class="info-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="width:14px;height:14px;border-radius:50%;background:${s.color};display:inline-block;box-shadow:0 0 12px ${s.color}55"></span>
            <h3 style="margin-bottom:0">${s.planet} — ${s.role}</h3>
            <span class="score-badge">${s.power}%</span>
          </div>
          <p>${s.simple}</p>
          <div class="meter-row" style="margin-top:14px"><div class="meter-track"><div class="meter-fill" style="width:${s.power}%;background:${s.color}"></div></div></div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildYogas() {
  return `
  <section class="section" id="yogas">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">07 · Cosmic Blessings</span>
        <h2 class="section-title">7 Sacred Yogas (Special Gifts)</h2>
        <p class="section-subtitle">Think of Yogas as rare cosmic cheat codes — special planetary alignments that give extraordinary advantages. This chart has an exceptional number of them.</p>
        <div class="section-divider"></div>
      </div>
      <div class="chart-container reveal" style="height:380px;margin-bottom:28px">
        <h3>Yoga Power Map</h3>
        <canvas id="yogaChart"></canvas>
      </div>
      <div class="yoga-grid">
        ${yogaData.map((y, i) => `
        <div class="yoga-card reveal reveal-delay-${(i % 4) + 1}">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="width:10px;height:10px;border-radius:50%;background:${y.color};box-shadow:0 0 10px ${y.color}55"></span>
            <span class="yoga-name">${y.name}</span>
          </div>
          <div class="yoga-type">${y.plain} · ${y.type}</div>
          <div class="yoga-formation">⚙️ How it forms: ${y.what}</div>
          <div class="yoga-desc">💡 What it means: ${y.means}</div>
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
        <span class="section-number">08 · Your Stars</span>
        <h2 class="section-title">The 5 Birth Stars</h2>
        <p class="section-subtitle">Nakshatras are the specific stars your planets sit under — think of them as the fine-tuning on your personality. They reveal the micro-details of behavior.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid">
        ${nakshatraData.map((n, i) => `
        <div class="info-card reveal reveal-delay-${(i % 4) + 1}">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="font-size:2rem">${n.symbol}</span>
            <div><h3 style="margin-bottom:2px">${n.name}</h3><span style="font-size:0.8rem;color:var(--accent-gold)">"${n.meaning}" · ${n.planets}</span></div>
          </div>
          <p>${n.simple}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildAvakhada() {
  return `
  <section class="section" id="avakhada">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">09 · Soul Blueprint</span>
        <h2 class="section-title">The Soul's Operating System</h2>
        <p class="section-subtitle">These are the foundational energetic frequencies — think of them as the default settings the soul came pre-loaded with at birth.</p>
        <div class="section-divider"></div>
      </div>
      <div class="info-grid">
        ${avakhadaSimple.map((a, i) => `
        <div class="info-card reveal reveal-delay-${(i % 4) + 1}">
          <span class="card-icon">${a.icon}</span>
          <h3>${a.field}</h3>
          <div class="card-value">${a.value}</div>
          <p style="margin-top:10px">${a.simple}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function buildPlanets() {
  return `
  <section class="section" id="planets">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-number">10 · Planet Positions</span>
        <h2 class="section-title">Where Every Planet Sits & What It Means</h2>
        <p class="section-subtitle">Each planet represents a different dimension of personality. Where they sit in the chart determines exactly how those traits manifest.</p>
        <div class="section-divider"></div>
      </div>
      <div class="data-table-wrapper reveal">
        <table class="data-table">
          <thead><tr><th>Planet</th><th>Sign</th><th>House</th><th>What It Means For You</th></tr></thead>
          <tbody>
            ${planetaryData.map(p => `<tr>
              <td><span style="color:${p.color};font-weight:600">${p.planet}</span></td>
              <td>${p.sign}</td>
              <td><span class="tag tag-violet" style="padding:2px 10px">${p.house}</span></td>
              <td style="white-space:normal;max-width:400px;font-size:0.84rem">${p.meaning}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="chart-container reveal" style="height:350px;margin-top:28px">
        <h3>Planet Distribution Across Houses</h3>
        <canvas id="houseChart"></canvas>
      </div>
    </div>
  </section>`;
}
