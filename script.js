
function getTableData(query, labels = false) {
  let json = { dataset: [] };

  if (labels) {
    json.labels = [];
    document.querySelectorAll(query + ' tbody tr:first-child th').forEach(item => {
      if (item.innerText.length) json.labels.push(item.innerText)
    })
  }

  document.querySelectorAll(query + ' tr:not(:first-child)').forEach(item => {
    let obj = { label: '', data: [] };

    item.querySelectorAll('td').forEach(item => {
      if (!obj.label.length) obj.label = item.innerText
      else obj.data.push(parseFloat(item.innerText))
    })
    json.dataset.push(obj)
  })
  return json;
}

let table1data = getTableData('#table1', true)
let ctx = document.getElementById('myChartOne').getContext('2d');
let chart = new Chart(ctx, {
  type: 'radar',
  
  data: {
    labels: table1data.labels,
    
     datasets: table1data.dataset,
     borderColor: 'red'

  }
});




let table2data = getTableData('#table2')
let ctx2 = document.getElementById('myChartTwo').getContext('2d');
let chart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['2007-09', '2010-12'],
    backgroundColor: 'red',
            
    datasets: table2data.dataset,

  }
});


