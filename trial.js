const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
let x,y, data;

const svg = d3.select("#chart-container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg.append("g")
  .attr("class", "myYaxis");

d3.csv('https://stephenimhoff.github.io/416website/Networth-Levels-Final.csv').then(function (data) {


  const parseDate = d3.timeParse("%m/%d/%Y");
  data.forEach(d => {
    d.dates = parseDate(d.date);
    d.bottom50 = +d.bottom50;
    d.next40 = +d.next40;
    d.next9 = +d.next9;
    d.next9plus = +d.next9plus;
    d.top1 = +d.top1;
    console.log(d3.max(data, d => d.bottom50))
  });

 
  y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.bottom50)])
    .range([height, 0]);

  svg.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y));


// Call the setup function initially

  x = d3.scaleTime()
    .domain(d3.extent(data, d => d.dates))
    .range([0, width]);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .style("font-size", "14px")
    .call(d3.axisBottom(x)
      .tickValues(x.ticks(d3.timeYear.every(2)))
      .tickFormat(d3.timeFormat("%Y")))
    .selectAll(".tick line")
    .style("stroke-opacity", 0);

  svg.selectAll(".tick text")
    .attr("fill", "#777");

  const line = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.bottom50));

  const line2 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.next40));

    const line3 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.next9));

  const line4 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.next9plus));

    const line5 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.top1));


  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("class", "steelblue-line")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

    
    svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("class", "yellow-line")
    .attr("stroke", "yellow")
    .attr("stroke-width", 2)
    .attr("d", line3);

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("class", "purple-line")
    .attr("stroke", "purple")
    .attr("stroke-width", 2)
    .attr("d", line4);

    svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("class", "red-line")
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .attr("d", line2);

    svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("class", "green-line")
    .attr("stroke", "green")
    .attr("stroke-width", 2)
    .attr("d", line5);

  


  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .style("fill", "#777")
    .style("font-family", "sans-serif")
    .text("Net Worth ($M)");

  svg.append("text")
    .attr("class", "chart-title")
    .attr("x", margin.left - 115)
    .attr("y", margin.top - 100)
    .style("font-size", "24px")
    .style("font-weight", "bold")
    .style("font-family", "sans-serif")
    .text("Net Worth for the Bottom 50% of American Has Risen");

  svg.append("text")
    .attr("class", "source-credit")
    .attr("x", width - 1125)
    .attr("y", height + margin.bottom - 3)
    .style("font-size", "9px")
    .style("font-family", "sans-serif")
    .text("Source: Federal Reserve");

  // Call update after data is loaded and processed to set the initial y-axis domain
  //update();

 

    

  svg.append("circle").attr("cx",40).attr("cy",0).attr("r", 6).style("fill", "steelblue")
  svg.append("circle").attr("cx",40).attr("cy",30).attr("r", 6).style("fill", "green")
  svg.append("text").attr("x", 60).attr("y", 0).text("Bottom 50%").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 60).attr("y", 30).text("Top 0.1%").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",40).attr("cy",60).attr("r", 6).style("fill", "red")
  svg.append("circle").attr("cx",40).attr("cy",90).attr("r", 6).style("fill", "yellow")
  svg.append("circle").attr("cx",40).attr("cy",120).attr("r", 6).style("fill", "purple")
  svg.append("text").attr("x", 60).attr("y", 60).text("50-90%").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 60).attr("y", 90).text("90-99%").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 60).attr("y", 120).text("99-99.9%").style("font-size", "15px").attr("alignment-baseline","middle")
  

  

  document.getElementById("updateButton").addEventListener("click", update);
  document.getElementById("exploreButton").addEventListener("click", explore);
  count = 0;

  function explore(){

    location.href = "www.stephenimhoff.github.io/416website/dashboardv2.html:";
  }
  
  function update() {
 
    if (count == 1){


      svg.select(".chart-title")
        .text("The bottom 50% of Americans hold essentially no wealth compared to any other strata");
      svg.selectAll(".myYaxis").remove();
  
      // Update the y scale domain
      y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.next9plus + 30000000)])
        .range([height, 0]);
  
      // Update the lines with the new y scale
      
      // Draw the updated y-axis with the new scale
      svg.append("g")
        .attr("class", "myYaxis")
        .transition()
        .duration(3000)
        .call(d3.axisLeft(y));


        svg.select(".yellow-line")
        .datum(data)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(d => x(d.dates))
          .y(d => y(d.next9))
        );
        svg.select(".purple-line")
        .datum(data)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(d => x(d.dates))
          .y(d => y(d.next9plus))
        );
        svg.select(".red-line")
        .datum(data)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(d => x(d.dates))
          .y(d => y(d.next40))
        );

        svg.select(".steelblue-line")
        .datum(data)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(d => x(d.dates))
          .y(d => y(d.bottom50))
        );

        svg.select(".green-line")
        .datum(data)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
          .x(d => x(d.dates))
          .y(d => y(d.top1))
        );


    }
    if (count === 0) {


      

        svg.select(".chart-title")
        .text("But not nearly as quickly as the top 0.1% and still lags them in absolute terms");

      // Remove the previous y-axis elements
      svg.selectAll(".myYaxis").remove();
  
      // Update the y scale domain
      y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.top1)])
        .range([height, 0]);
  
      // Update the lines with the new y scale
      svg.select(".yellow-line")
      .datum(data)
      .transition()
      .duration(3000)
      .attr("d", d3.line()
        .x(d => x(d.dates))
        .y(d => y(d.next9))
      );
      svg.select(".purple-line")
      .datum(data)
      .transition()
      .duration(3000)
      .attr("d", d3.line()
        .x(d => x(d.dates))
        .y(d => y(d.next9plus))
      );
      svg.select(".red-line")
      .datum(data)
      .transition()
      .duration(3000)
      .attr("d", d3.line()
        .x(d => x(d.dates))
        .y(d => y(d.next40))
      );

      svg.select(".steelblue-line")
      .datum(data)
      .transition()
      .duration(3000)
      .attr("d", d3.line()
        .x(d => x(d.dates))
        .y(d => y(d.bottom50))
      );

      svg.select(".green-line")
      .datum(data)
      .transition()
      .duration(3000)
      .attr("d", d3.line()
        .x(d => x(d.dates))
        .y(d => y(d.top1))
      );
      // Draw the updated y-axis with the new scale
      svg.append("g")
        .attr("class", "myYaxis")
        .transition()
        .duration(3000)
        .call(d3.axisLeft(y));
  
      count++;
    }

  }


});


