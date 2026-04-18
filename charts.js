import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FONT = "'Inter', sans-serif";
const MUTED = 'rgba(220,220,240,0.5)';
const GRID = 'rgba(255,255,255,0.05)';
const TIP = { backgroundColor: 'rgba(10,10,24,0.95)', borderColor: 'rgba(168,130,255,0.3)', borderWidth: 1, titleFont: { weight: '600' }, bodyFont: { size: 13 }, padding: 14, cornerRadius: 10 };

Chart.defaults.font.family = FONT;
Chart.defaults.color = MUTED;

export function createPersonalityChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.trait),
      datasets: [{
        data: data.map(d => d.score),
        backgroundColor: data.map((_, i) => {
          const colors = ['#a882ff','#f5c842','#42e8d5','#ff6b9d','#4da6ff','#ff8c42','#6e5cff','#80cbc4','#c0a0ff','#ff4444'];
          return colors[i % colors.length] + '88';
        }),
        borderColor: data.map((_, i) => {
          const colors = ['#a882ff','#f5c842','#42e8d5','#ff6b9d','#4da6ff','#ff8c42','#6e5cff','#80cbc4','#c0a0ff','#ff4444'];
          return colors[i % colors.length];
        }),
        borderWidth: 1.5, borderRadius: 8,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: (item) => `${item.raw}/100 — ${data[item.dataIndex].desc}` } } },
      scales: { x: { grid: { color: GRID }, beginAtZero: true, max: 100, ticks: { font: { size: 11 } } }, y: { grid: { display: false }, ticks: { font: { size: 12, weight: '500' } } } },
    }
  });
}

export function createLifeAreaRadar(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.map(d => d.area.split(' ')[0]),
      datasets: [{
        label: 'Life Strength',
        data: data.map(d => d.score),
        backgroundColor: 'rgba(168,130,255,0.15)',
        borderColor: '#a882ff', borderWidth: 2,
        pointBackgroundColor: data.map(d => d.color),
        pointBorderColor: '#fff', pointBorderWidth: 1, pointRadius: 6, pointHoverRadius: 9,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => data[items[0].dataIndex].area, label: (item) => [`Score: ${item.raw}/100`, data[item.dataIndex].desc.substring(0, 70) + '...'] } } },
      scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20, font: { size: 10 }, backdropColor: 'transparent' }, grid: { color: 'rgba(255,255,255,0.07)' }, pointLabels: { font: { size: 11, weight: '600' }, color: 'rgba(220,220,240,0.8)' }, angleLines: { color: 'rgba(255,255,255,0.06)' } } },
    }
  });
}

export function createCareerChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.field),
      datasets: [{
        data: data.map(d => d.score),
        backgroundColor: data.map(d => d.color + '77'),
        borderColor: data.map(d => d.color),
        borderWidth: 1.5, borderRadius: 8,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: (item) => `Aptitude: ${item.raw}/100` } } },
      scales: { x: { grid: { color: GRID }, beginAtZero: true, max: 100, ticks: { font: { size: 11 } } }, y: { grid: { display: false }, ticks: { font: { size: 12, weight: '500' } } } },
    }
  });
}

export function createElementChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  const labels = Object.keys(data).map(e => e.charAt(0).toUpperCase() + e.slice(1));
  const values = Object.values(data).map(e => e.pct);
  const colors = ['#4da6ff', '#ff4444', '#80cbc4', '#8d6e63'];
  new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data: values, backgroundColor: colors.map(c => c + 'cc'), borderColor: colors, borderWidth: 2, hoverOffset: 14 }] },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { position: 'bottom', labels: { padding: 18, font: { size: 12, weight: '500' }, usePointStyle: true } }, tooltip: { ...TIP, callbacks: { label: (item) => { const k = Object.keys(data)[item.dataIndex]; return `${item.label}: ${item.raw}% — ${data[k].desc}`; } } } },
    }
  });
}

export function createYogaChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.map(y => y.plain),
      datasets: [{
        label: 'Power', data: data.map(y => y.power),
        backgroundColor: 'rgba(245,200,66,0.12)', borderColor: '#f5c842', borderWidth: 2,
        pointBackgroundColor: data.map(y => y.color), pointBorderColor: '#fff', pointBorderWidth: 1, pointRadius: 5, pointHoverRadius: 8,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => `${data[items[0].dataIndex].name} — ${data[items[0].dataIndex].plain}`, label: (item) => `Power: ${item.raw}/100` } } },
      scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20, font: { size: 9 }, backdropColor: 'transparent' }, grid: { color: 'rgba(255,255,255,0.06)' }, pointLabels: { font: { size: 10, weight: '600' }, color: 'rgba(220,220,240,0.7)' }, angleLines: { color: 'rgba(255,255,255,0.06)' } } },
    }
  });
}

export function createDashaChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => `${d.emoji} ${d.label}`),
      datasets: [{
        data: data.map(d => d.years),
        backgroundColor: data.map(d => d.status === 'active' ? 'rgba(66,232,213,0.6)' : d.status === 'completed' ? 'rgba(110,92,255,0.35)' : d.color + '44'),
        borderColor: data.map(d => d.color), borderWidth: 1.5, borderRadius: 8,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => `${data[items[0].dataIndex].planet} Mahadasha`, label: (item) => { const d = data[item.dataIndex]; return [`${d.start} → ${d.end} (${d.years} years)`, `Status: ${d.status.toUpperCase()}`]; } } } },
      scales: { x: { grid: { color: GRID }, beginAtZero: true, title: { display: true, text: 'Duration (Years)', font: { size: 11 }, color: MUTED } }, y: { grid: { display: false }, ticks: { font: { size: 11, weight: '500' } } } },
    }
  });
}

export function createHouseChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(h => `H${h.house} ${h.label}`),
      datasets: [{
        data: data.map(h => h.score),
        backgroundColor: data.map(h => h.score > 0 ? h.color + '88' : 'rgba(255,255,255,0.04)'),
        borderColor: data.map(h => h.score > 0 ? h.color : 'rgba(255,255,255,0.08)'),
        borderWidth: 1, borderRadius: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => `House ${data[items[0].dataIndex].house}: ${data[items[0].dataIndex].label}`, label: (item) => { const h = data[item.dataIndex]; return h.planets.length ? `Planets: ${h.planets.join(', ')}` : 'No planets'; } } } },
      scales: { x: { grid: { color: GRID }, ticks: { font: { size: 9 }, maxRotation: 45 } }, y: { grid: { color: GRID }, beginAtZero: true, max: 5, ticks: { stepSize: 1 } } },
    }
  });
}

export function createStelliumChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: data.map(s => `${s.planet} — ${s.role}`),
      datasets: [{ data: data.map(s => s.power), backgroundColor: data.map(s => s.color + '77'), borderColor: data.map(s => s.color), borderWidth: 2 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 }, usePointStyle: true } }, tooltip: { ...TIP, callbacks: { label: (item) => `Power: ${item.raw}/100 — ${data[item.dataIndex].simple.substring(0, 60)}...` } } },
      scales: { r: { beginAtZero: true, max: 100, ticks: { display: false }, grid: { color: 'rgba(255,255,255,0.06)' } } },
    }
  });
}

export function createHealthChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.area),
      datasets: [{
        label: 'Risk Level',
        data: data.map(d => d.risk),
        backgroundColor: data.map(d => {
          if (d.risk > 60) return 'rgba(255,107,157,0.6)';
          if (d.risk > 40) return 'rgba(255,140,66,0.5)';
          return 'rgba(66,232,213,0.5)';
        }),
        borderColor: data.map(d => d.color), borderWidth: 1.5, borderRadius: 8,
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => data[items[0].dataIndex].area, label: (item) => [`Risk: ${item.raw}/100`, data[item.dataIndex].advice] } } },
      scales: { x: { grid: { color: GRID }, beginAtZero: true, max: 100, title: { display: true, text: 'Risk Level (lower = better)', font: { size: 11 }, color: MUTED } }, y: { grid: { display: false }, ticks: { font: { size: 12, weight: '500' } } } },
    }
  });
}

export function createFinancialChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.label),
      datasets: [{
        label: 'Wealth Potential',
        data: data.map(d => d.level),
        fill: true,
        backgroundColor: 'rgba(245,200,66,0.1)',
        borderColor: '#f5c842', borderWidth: 3,
        pointBackgroundColor: data.map(d => d.level >= 90 ? '#42e8d5' : '#f5c842'),
        pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 6, pointHoverRadius: 10,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => data[items[0].dataIndex].period, label: (item) => [`Level: ${item.raw}/100`, data[item.dataIndex].desc] } } },
      scales: { x: { grid: { color: GRID }, ticks: { font: { size: 11 } } }, y: { grid: { color: GRID }, beginAtZero: true, max: 100, title: { display: true, text: 'Wealth Potential', font: { size: 11 }, color: MUTED } } },
    }
  });
}

export function createRelationshipChart(id, data) {
  const ctx = document.getElementById(id); if (!ctx) return;
  const entries = Object.values(data);
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: entries.map(e => e.label),
      datasets: [{
        data: entries.map(e => e.score),
        backgroundColor: 'rgba(255,107,157,0.15)',
        borderColor: '#ff6b9d', borderWidth: 2,
        pointBackgroundColor: '#ff6b9d', pointBorderColor: '#fff', pointBorderWidth: 1, pointRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { title: (items) => entries[items[0].dataIndex].label, label: (item) => [`Score: ${item.raw}/100`, entries[item.dataIndex].value] } } },
      scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20, font: { size: 9 }, backdropColor: 'transparent' }, grid: { color: 'rgba(255,255,255,0.06)' }, pointLabels: { font: { size: 10, weight: '600' }, color: 'rgba(220,220,240,0.7)' }, angleLines: { color: 'rgba(255,255,255,0.06)' } } },
    }
  });
}
