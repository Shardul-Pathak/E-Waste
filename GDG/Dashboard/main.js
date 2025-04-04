const ctx = document.getElementById('recycleChart').getContext('2d');
const recycleChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'E-Waste (kg)',
      data: [300, 450, 400, 520],
      backgroundColor: '#00e676',
      borderRadius: 8,
      barThickness: 30,  // ✅ Adjusted for compact view
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#111',
        titleColor: '#00e676',
        bodyColor: '#fff',
        borderColor: '#00e676',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#ccc', font: { size: 12 } },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { 
          color: '#ccc', 
          font: { size: 12 }, 
          maxTicksLimit: 5  // ✅ Shortened y-axis scale
        },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  }
});

const ctxPie = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(ctxPie, {
  type: 'doughnut',
  data: {
    labels: ['Mobiles', 'Laptops', 'TVs', 'Others'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#00e676', '#33ff99', '#007f5f', '#005f3c'],
      borderColor: '#0d0d0d',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#ccc', font: { size: 15 } }
      },
      tooltip: {
        backgroundColor: '#111',
        titleColor: '#00e676',
        bodyColor: '#fff',
        borderColor: '#00e676',
        borderWidth: 1
      }
    }
  }
});

