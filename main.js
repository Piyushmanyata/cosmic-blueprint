import './style.css';
import { houseDistribution, elementDistribution, yogaData, dashaData, stelliumAnalysis, sadeSatiData } from './data.js';
import { createHouseChart, createElementChart, createYogaPowerChart, createDashaChart, createStelliumChart, createSadeSatiChart } from './charts.js';
import { buildNav, buildHero, buildBirthData, buildAvakhada, buildAscendant, buildPlanets, buildStellium, buildYogas, buildNakshatras, buildKP } from './sections.js';
import { buildDasha, buildAshtakavarga, buildSadeSati, buildDoshas, buildRemedies, buildSynthesis, buildFooter } from './sections2.js';

// ===== RENDER APP =====
const app = document.getElementById('app');
app.innerHTML = `
  <div class="bg-stars"></div>
  <div class="nebula-orb n1"></div>
  <div class="nebula-orb n2"></div>
  <div class="nebula-orb n3"></div>
  ${buildNav()}
  ${buildHero()}
  ${buildBirthData()}
  ${buildAvakhada()}
  ${buildAscendant()}
  ${buildPlanets()}
  ${buildStellium()}
  ${buildYogas()}
  ${buildNakshatras()}
  ${buildKP()}
  ${buildDasha()}
  ${buildAshtakavarga()}
  ${buildSadeSati()}
  ${buildDoshas()}
  ${buildRemedies()}
  ${buildSynthesis()}
  ${buildFooter()}
`;

// ===== INITIALIZE CHARTS =====
requestAnimationFrame(() => {
  setTimeout(() => {
    createHouseChart('houseChart', houseDistribution);
    createElementChart('elementChart', elementDistribution);
    createYogaPowerChart('yogaChart', yogaData);
    createDashaChart('dashaChart', dashaData);
    createStelliumChart('stelliumChart', stelliumAnalysis);
    createSadeSatiChart('sadeSatiChart', sadeSatiData);
  }, 300);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== ANIMATE METER FILLS ON SCROLL =====
const meterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.meter-fill');
      fills.forEach(fill => {
        const w = fill.style.width;
        fill.style.width = '0%';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { fill.style.width = w; });
        });
      });
      meterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.info-card, .yoga-card, .glass-card').forEach(el => {
  if (el.querySelector('.meter-fill')) meterObserver.observe(el);
});

// ===== NAV ACTIVE STATE =====
const sections = document.querySelectorAll('.section, .hero-section');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.15, rootMargin: '-80px 0px -60% 0px' });

sections.forEach(s => navObserver.observe(s));

// ===== NAV LINK CLICK — CLOSE MOBILE MENU =====
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ===== PARALLAX NEBULA ORBS =====
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const orbs = document.querySelectorAll('.nebula-orb');
      orbs.forEach((orb, i) => {
        const speed = 0.03 + i * 0.015;
        orb.style.transform = `translateY(${y * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});
