//get data from tables inito the json format
function getTableData(query, labels = false) {
  let json = { dataset: [] };

  //get data of years from the table
  if (labels) {
    json.labels = [];
    document.querySelectorAll(query + ' tbody tr:first-child th').forEach(item => {
      //The innerText property sets or returns the text content of the specified node, and all its descendants.
      if (item.innerText.length) json.labels.push(item.innerText)
    })
  }


  //creating for every item of dataset an object with two parameters label and data where label is a country and data is a contry's value
  let trLabel = !labels ? ' tbody tr' : ' tr:not(:first-child)';
  document.querySelectorAll(query + trLabel).forEach(item => {
    let obj = { label: '', data: [] };



    // going through all the td and check 
    //if a label is empty - add a title
    //if a label already has a title - than switch to the pushing of obj.data 
    item.querySelectorAll('td').forEach(item => {
      if (!obj.label.length) obj.label = item.innerText
      //The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
      else obj.data.push(parseFloat(item.innerText))
    })
    json.dataset.push(obj)

  })
  return json;
}


//function for setting a randomColor
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}


//Building the graphic with chart js to the table1
let table1data = getTableData('#table1', true)
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
table1data.dataset = table1data.dataset.map(item => ({ ...item, backgroundColor: randomColor() }))
let ctx = document.getElementById('myChartOne').getContext('2d');
let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: table1data.labels,
    datasets: table1data.dataset,
    options: {
      responsive: true,
    }
  }
});


//Building the graphic with chart js to the table2
let table2data = getTableData('#table2')
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
table2data.dataset = table2data.dataset.map(item => ({ ...item, backgroundColor: randomColor() }))
let ctx2 = document.getElementById('myChartTwo').getContext('2d');
let chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2007-09', '2010-12'],
    datasets: table2data.dataset,
  }
});


