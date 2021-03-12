
  const chart = new Chart(document.getElementById('chart').getContext('2d'), {
    type: 'scatter',
    data: {
      datasets: [{ label: 'Chart', data: [], backgroundColor: ['rgb(255, 99, 132)','rgb(0, 255, 0)','rgb(255, 99, 132)','rgb(128, 255, 0)','rgb(0, 255, 255)','rgb(255, 255, 0)','rgb(255, 255, 128)', 'red', 'green'] }]
      
    }
    
  });
  
  
  async function fetchData() {
    const chartData = chart.data.datasets[0].data;
    let response = await fetch('https://canvasjs.com/services/data/datapoints.php', { cache: 'no-store' })
    let data = await response.json();
    data = data.map(item => ({ x: item[0], y: item[1] }))
  
    while (chartData.length) { chartData.pop() }
    chartData.push(...data);
    chart.update();
  }
  
  setInterval(() => fetchData(), 1000)