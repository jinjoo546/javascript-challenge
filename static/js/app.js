// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

//loop and add to the table in html
function displayTable(data){ 
    tbody.text("")
    data.forEach(function(ufoSighting){
    var row = tbody.append("tr")
    Object.entries(ufoSighting).forEach(function([key, value]){
        var cell = row.append("td").text(value)	
    })
})}

displayTable(tableData)

//user input and filter button
var button = d3.select("filter-btn")
var date = d3.select("#datetime")

// filter data with input date
function click(){
    //prevent refreshing
    d3.event.preventDefault();
    console.log(date.property("value"));
    var table = tableData.filter(ufoSighting => ufoSighting.datetime===date.property("value"))
    displayTable(table);
}
date.on("change", click)
