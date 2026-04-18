import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FONT = "'Inter', sans-serif";
const MUTED = 'rgba(220,220,240,0.4)';
const GRID = 'rgba(255,255,255,0.04)';

Chart.defaults.font.family = FONT;
Chart.defaults.color = MUTED;

export function createHouseChart(canvasId, houseData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: houseData.map(h => `H${h.house}`),
      datasets: [{
        label: 'Planets in House',
        data: houseData.map(h => h.score),
        backgroundColor: houseData.map(h => h.score > 0 ? h.color + '99' : 'rgba(255,255,255,0.05)'),
        borderColor: houseData.map(h => h.score > 0 ? h.color : 'rgba(255,255,255,0.08)'),
        borderWidth: 1,
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          titleFont: { weight: '600' },
          callbacks: {
            title: (items) => {
              const i = items[0].dataIndex;
              return `House ${houseData[i].house}: ${houseData[i].label}`;
            },
            label: (item) => {
              const h = houseData[item.dataIndex];
              return h.planets.length > 0 ? `Planets: ${h.planets.join(', ')}` : 'No planets';
            },
            afterLabel: (item) => {
              return houseData[item.dataIndex].significance.substring(0, 80) + '...';
            },
          },
        },
      },
      scales: {
        x: { grid: { color: GRID }, ticks: { font: { size: 11 } } },
        y: { grid: { color: GRID }, beginAtZero: true, max: 5, ticks: { stepSize: 1, font: { size: 11 } } },
      },
    },
  });
}

export function createElementChart(canvasId, elementData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const labels = Object.keys(elementData).map(e => e.charAt(0).toUpperCase() + e.slice(1));
  const values = Object.values(elementData).map(e => e.pct);
  const colors = ['#4da6ff', '#ff4444', '#80cbc4', '#8d6e63'];
  const bgColors = colors.map(c => c + 'cc');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: bgColors,
        borderColor: colors,
        borderWidth: 2,
        hoverOffset: 12,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '62%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 }, usePointStyle: true, pointStyleWidth: 12 } },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          callbacks: {
            label: (item) => {
              const key = Object.keys(elementData)[item.dataIndex];
              return `${item.label}: ${item.raw}% — ${elementData[key].desc}`;
            },
          },
        },
      },
    },
  });
}

export function createYogaPowerChart(canvasId, yogaData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: yogaData.map(y => y.name.split(' ')[0]),
      datasets: [{
        label: 'Yoga Power Index',
        data: yogaData.map(y => y.power),
        backgroundColor: 'rgba(168,130,255,0.15)',
        borderColor: '#a882ff',
        borderWidth: 2,
        pointBackgroundColor: yogaData.map(y => y.color),
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          callbacks: {
            title: (items) => yogaData[items[0].dataIndex].name,
            label: (item) => `Power: ${item.raw}/100`,
            afterLabel: (item) => yogaData[item.dataIndex].type,
          },
        },
      },
      scales: {
        r: {
          beginAtZero: true, max: 100, min: 0,
          ticks: { stepSize: 20, font: { size: 10 }, backdropColor: 'transparent', color: MUTED },
          grid: { color: 'rgba(255,255,255,0.06)' },
          pointLabels: { font: { size: 11, weight: '600' }, color: 'rgba(220,220,240,0.7)' },
          angleLines: { color: 'rgba(255,255,255,0.06)' },
        },
      },
    },
  });
}

export function createDashaChart(canvasId, dashaData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashaData.map(d => d.planet),
      datasets: [{
        label: 'Duration (Years)',
        data: dashaData.map(d => parseFloat(d.years)),
        backgroundColor: dashaData.map(d => {
          if (d.status === 'active') return 'rgba(66,232,213,0.7)';
          if (d.status === 'completed') return 'rgba(110,92,255,0.4)';
          return d.color + '55';
        }),
        borderColor: dashaData.map(d => d.color),
        borderWidth: 1,
        borderRadius: 6,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          callbacks: {
            title: (items) => `${dashaData[items[0].dataIndex].planet} Mahadasha`,
            label: (item) => {
              const d = dashaData[item.dataIndex];
              return [`${d.start} → ${d.end}`, `Duration: ${d.years} years`, `Status: ${d.status.toUpperCase()}`];
            },
          },
        },
      },
      scales: {
        x: { grid: { color: GRID }, beginAtZero: true, ticks: { font: { size: 11 } }, title: { display: true, text: 'Years', font: { size: 11 }, color: MUTED } },
        y: { grid: { color: GRID }, ticks: { font: { size: 12, weight: '500' } } },
      },
    },
  });
}

export function createStelliumChart(canvasId, stelliumData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: stelliumData.map(s => s.planet),
      datasets: [{
        data: stelliumData.map(s => s.power),
        backgroundColor: stelliumData.map(s => s.color + '88'),
        borderColor: stelliumData.map(s => s.color),
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 }, usePointStyle: true } },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          callbacks: {
            title: (items) => `${stelliumData[items[0].dataIndex].planet} — ${stelliumData[items[0].dataIndex].role}`,
            label: (item) => `Power Index: ${item.raw}/100`,
          },
        },
      },
      scales: {
        r: {
          beginAtZero: true, max: 100,
          ticks: { display: false },
          grid: { color: 'rgba(255,255,255,0.06)' },
        },
      },
    },
  });
}

export function createSadeSatiChart(canvasId, sadeSatiData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const statusColors = { completed: '#6e5cff', upcoming: '#ff8c42', future: '#4da6ff' };
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sadeSatiData.map(s => `${s.phase}`),
      datasets: [{
        label: 'Sade Sati Phases',
        data: sadeSatiData.map(() => 1),
        backgroundColor: sadeSatiData.map(s => statusColors[s.status] + '77'),
        borderColor: sadeSatiData.map(s => statusColors[s.status]),
        borderWidth: 1,
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,24,0.95)',
          borderColor: 'rgba(168,130,255,0.3)',
          borderWidth: 1,
          callbacks: {
            title: (items) => sadeSatiData[items[0].dataIndex].phase,
            label: (item) => {
              const s = sadeSatiData[item.dataIndex];
              return [`${s.start} → ${s.end}`, `Transit: ${s.sign}`, `Status: ${s.status.toUpperCase()}`];
            },
          },
        },
      },
      scales: {
        x: { grid: { color: GRID }, ticks: { font: { size: 10 }, maxRotation: 45 } },
        y: { display: false },
      },
    },
  });
}
