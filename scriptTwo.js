
//Building the graphic with chart js to the according data
const chart = new Chart(document.getElementById('chart').getContext('2d'), {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Chart',
      data: [],
      backgroundColor: [randomColor(), randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(), randomColor()],
      options: {
        responsive: true,
      }
    }]

  }

});

//function for setting a randomColor
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

async function fetchData() {
  const chartData = chart.data.datasets[0].data;
  //To start a request, calling the special function fetch()
  //resource: the URL string, or a Request object
  let response = await fetch('https://canvasjs.com/services/data/datapoints.php', {
    cache: 'no-store'
  })
  //The response object, returned by the await fetch(), is a generic placeholder for multiple data formats.
  //I will extract the JSON object from a fetch response
  //response.json() returns a promise resolved to a JSON object
  let data = await response.json();
  ////The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  data = data.map(item => ({
   x: item[0],
   y: item[1],
   
  }))

  while (chartData.length) {
    //The pop() method removes the last element of an array, and returns that element.
    chartData.pop()
  }
  ////Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
  chartData.push(...data);
  //Creating dynamic charts
  chart.update();
}

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//1000 ms = 1 second
setInterval(() => fetchData(), 1000)