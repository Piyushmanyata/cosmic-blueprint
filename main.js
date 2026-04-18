import './style.css';
import { personalityTraits, lifeAreas, careerAptitude, elementDistribution, yogaData, dashaData, stelliumAnalysis, houseDistribution, healthData, financialProjection, relationshipProfile } from './data.js';
import { createPersonalityChart, createLifeAreaRadar, createCareerChart, createElementChart, createYogaChart, createDashaChart, createHouseChart, createStelliumChart, createHealthChart, createFinancialChart, createRelationshipChart } from './charts.js';
import { buildNav, buildHero, buildPersonality, buildSuperpowers, buildLifeAreas, buildCareer, buildRelationships, buildStellium, buildYogas, buildNakshatras, buildAvakhada, buildPlanets } from './sections.js';
import { buildHealth, buildFinancial, buildTimeline, buildDoshas, buildRemedies, buildSynthesis, buildFooter } from './sections2.js';

const app = document.getElementById('app');
app.innerHTML = `
  <div class="bg-stars"></div>
  <div class="nebula-orb n1"></div>
  <div class="nebula-orb n2"></div>
  <div class="nebula-orb n3"></div>
  ${buildNav()}
  ${buildHero()}
  ${buildPersonality()}
  ${buildSuperpowers()}
  ${buildLifeAreas()}
  ${buildCareer()}
  ${buildRelationships()}
  ${buildStellium()}
  ${buildYogas()}
  ${buildNakshatras()}
  ${buildAvakhada()}
  ${buildHealth()}
  ${buildFinancial()}
  ${buildPlanets()}
  ${buildTimeline()}
  ${buildDoshas()}
  ${buildRemedies()}
  ${buildSynthesis()}
  ${buildFooter()}
`;

// ===== CHARTS INIT =====
requestAnimationFrame(() => {
  setTimeout(() => {
    createPersonalityChart('personalityChart', personalityTraits);
    createLifeAreaRadar('lifeAreaChart', lifeAreas);
    createCareerChart('careerChart', careerAptitude);
    createElementChart('elementChart', elementDistribution);
    createYogaChart('yogaChart', yogaData);
    createDashaChart('dashaChart', dashaData);
    createHouseChart('houseChart', houseDistribution);
    createStelliumChart('stelliumChart', stelliumAnalysis);
    createHealthChart('healthChart', healthData);
    createFinancialChart('financialChart', financialProjection);
    createRelationshipChart('relationshipChart', relationshipProfile);
  }, 300);
});

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ===== METER ANIMATIONS =====
const meterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.meter-fill').forEach(f => {
        const w = f.style.width; f.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => { f.style.width = w; }));
      });
      meterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.info-card, .yoga-card, .glass-card').forEach(el => {
  if (el.querySelector('.meter-fill')) meterObs.observe(el);
});

// ===== NAV ACTIVE =====
const sections = document.querySelectorAll('.section, .hero-section');
const navLinks = document.querySelectorAll('.nav-links a');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { threshold: 0.12, rootMargin: '-80px 0px -60% 0px' });
sections.forEach(s => navObs.observe(s));

// ===== MOBILE MENU CLOSE =====
navLinks.forEach(l => l.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open')));

// ===== PARALLAX =====
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      document.querySelectorAll('.nebula-orb').forEach((orb, i) => {
        orb.style.transform = `translateY(${y * (0.03 + i * 0.015)}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ===== COUNTER ANIMATION =====
document.querySelectorAll('.hero-stat .val').forEach(el => {
  const target = parseInt(el.textContent);
  el.textContent = '0';
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 40);
      obs.unobserve(el);
    }
  }, { threshold: 0.5 });
  obs.observe(el);
});
