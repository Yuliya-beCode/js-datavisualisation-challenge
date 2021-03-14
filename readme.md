# Javascript Challenge : "Data Visualisation"


[Link to the challenge](https://yuliya-becode.github.io/js-datavisualisation-challenge/taskOne.html)

- repository : `js-datavisualisation-challenge`  
- mode: `solo`  
- type: `consolidation challenge`  
- Deadline: `15/03/2021 at 09h00`  
- author: `Alexandre Plennevaux`  

## Objectives
This consolidation challenge helped me to assess my ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**



## Mission

This work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, the Project Manager, sends the following task: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an **html** / **css** / **Javascript file**.

He asks to make it more *rich*, more *interactive*, more... *sexy* (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what has to be done, by adding two **interactive data visualisation graphics** using javascript.  These graphs should be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. 

### 1. Inline data (data in the document)
In this html file there are two data tables. I worked on JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

### 2. Remote data, in real-time, via ajax
There are data sitting at this URL :  [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

The data should be inserted via Ajax, a graph that refreshes every second, just below the main title (`h1`) of the article.



**Important**: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.


## How will we do this?

1. By using  a javascript library that makes it easier to do this instead of using just "Vanilla Javascript" (= using javascript without libraries).
I have used [chart.js](https://www.chartjs.org/).
2. I was trained in their use.
3. I attacket the problem by looking for a good logical path. I broke it down into **small problems**, into **progressive** steps. 
4. A method of thinking: *Reverse-engineering* of my objective: starting at the end and go up the thread of dependencies to the starting point. It gives something like this:

- To have a graph, I needed data. So I had to get them back.  
- Where is this data ?   
- To have a graph I had to find the right place in the DOM. 
...  

## Evaluation
The evaluation method chosen is a **self-evaluation** based on the following indicators:

#### 1. handling of the DOM:
- [X] I was able to find the right selector to do it.
- [X] I was able to inject the graph in the right place on the page via javascript.
- [X] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- [X] I was able to receive the answer from the remote server in json.
- [X] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [X] I was able to integrate the third-party library into my application (chart.js)
- [X] I used the documentation provided by the library.
- [X] I was able to generate the 2 bar data graphs.
- [X] I was able to generate the "remote data" graph.

### 4. Problem-solving:
- [X] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [X] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
- [X]  I was able to build a callback function to process remote data (received via ajax).
- [X]  I was able to make the realtime graph refresh in real time.
- [X]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:
- [X]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:
- [X]  If I disable javascript (trough Settings>Debugger), the user experience is satisfactory, the user has access to data and content
- [X]  If I enable javascript, the tables are enhanced with an interactive graph.


