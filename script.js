function getTableData(query, labels = false) {
  let json = {
    dataset: []

  };

  if (labels) {
    json.labels = [];
    document.querySelectorAll(query + ' tbody tr:first-child th').forEach(item => {
      if (item.innerText.length) json.labels.push(item.innerText)
    })
  }

  document.querySelectorAll(query + ' tr:not(:first-child)').forEach(item => {
    let obj = {
      label: '',
      data: [],

    };

    //The JSON.stringify() method converts a JavaScript object or value to a JSON string
    var myJSONstringifined = JSON.stringify(json.dataset)
    console.log(typeof myJSONstringifined)

    //The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
    const toJSONobj = JSON.parse(myJSONstringifined);
    console.log(typeof toJSONobj)
    console.log(toJSONobj)

    //To loop through an object array or just array in javascript, I should do the following
    for (var i = 0; i < toJSONobj.length; i++) {
      console.log(toJSONobj[i].label);
     
    }


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
  type: 'bar',


  data: {
    labels: table1data.labels,
    datasets: table1data.dataset,
  }

});

let table2data = getTableData('#table2')
let ctx2 = document.getElementById('myChartTwo').getContext('2d');
let chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2007-09', '2010-12'],
    datasets: table2data.dataset,
    

  }
});