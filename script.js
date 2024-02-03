const labels = [];

const data = {
    labels: labels,
    datasets: [{
      label: 'Value',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const config = {
    type: 'line',
    data: data,
  };

  const lineChart = document.getElementById("dy-chart");

  let chartview = new Chart(lineChart,config);

  function dynamicData() {
    chartview.data.labels.push(chartview.data.labels.length*200);
    chartview.data.datasets[0].data.push(Math.random()*100);
    chartview.update();
  }
  
  setInterval(dynamicData,1000);    