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

d3.csv('https://stephenimhoff.github.io/416website/dashboarddatafinal.csv').then(function (data) {


  const parseDate = d3.timeParse("%m/%d/%Y");
  data.forEach(d => {
    d.dates = parseDate(d.date);
    d.bottom50 = +d.Bottom50;
    d.next40 = +d.Next40;
    d.next9 = +d.Next9;
    d.next9plus = +d.RemainingTop1;
    d.top1 = +d.TopPt1;    ;
    d.ageunder40 = +d.ageunder40;
    d.age40to54 = +d.age40to54;
    d.age55to69 = +d.age55to69;
    d.age70plus = +d.age70plus;
    d.college = +d.College;
    d.hs = +d.HS;
    d.nohs = +d.NoHS;
    d.somecollege = +d.SomeCollege;
    d.babyboom = +d.BabyBoom;
    d.genx = +d.GenX;
    d.millennial = +d.Millennial;
    d.silent = +d.Silent;
    d.incpct00to20 = +d.incpct00to20;
    d.incpct20to40 = +d.incpct20to40;
    d.incpct40to60 = +d.incpct40to60;
    d.incpct60to80 = +d.incpct60to80;
    d.incpct80to99 = +d.incpct80to99;
    d.incpct99to100 = +d.incpct99to100;
    d.black = +d.Black;
    d.hispanic = +d.Hispanic;
    d.other = +d.Other;
    d.white = +d.White;

  });
  console.log(data);




  var allGroup = ['Wealth Level', 'Income', 'Education', 'Age', 'Generation', 'Race']
  console.log(allGroup);
  // add the options to the button
  d3.select("#selectButton")
    .selectAll('myOptions')
       .data(allGroup)
    .enter()
      .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

    y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.next9plus + 30000000)])
    .range([height, 0]);

  svg.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y));

    

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

    const line4054 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.age40to54));

    const line5569 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.age55to69));

    const line70 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.age70plus));

    const line40 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.ageunder40));

    const linecollege = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.college));

    const linehs = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.hs));

    const linenohs = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.nohs));

    const linesc = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.somecollege));

    const linebb = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.babyboom));

    const linex = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.genx));

    const linem = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.millennial));

    const lines = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.silent));

    const line020 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct00to20));

    const line2040 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct20to40));

    const line4060 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct40to60));

    const line6080 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct60to80));

    const line8099 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct80to99));

    const line99100 = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.incpct99to100));

    const lineblack = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.black));

    const linehispanic = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.hispanic));

    const lineother = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.other));

    const linewhite = d3.line()
    .x(d => x(d.dates))
    .y(d => y(d.white));
    


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
    .text("Click the dropdown to view Net Worth by different categories");

  svg.append("text")
    .attr("class", "source-credit")
    .attr("x", width - 1125)
    .attr("y", height + margin.bottom - 3)
    .style("font-size", "9px")
    .style("font-family", "sans-serif")
    .text("Source: Federal Reserve");

  // Call update after data is loaded and processed to set the initial y-axis domain
  //update()
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


function reset() {

    d3.selectAll("path").remove();
    svg.selectAll(".myYaxis").remove();
    d3.selectAll("text").remove();

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


}

function update(selectedGroup) {
    
            // Create new data with the selection?
        var dataFilter = data.filter(function(d){return d.name==selectedGroup})
      
            // Give these new data to update line

            if(selectedGroup == "Wealth Level"){
                reset();
                //remove all other lines
                svg.selectAll(".myYaxis").remove();
                d3.selectAll("path").remove();
                
                //reset x and y axis
                y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.next9plus + 30000000)])
        .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));
                //reset legend
                svg.append("circle").attr("cx",40).attr("cy",0).attr("r", 6).style("fill", "steelblue")
                svg.append("circle").attr("cx",40).attr("cy",30).attr("r", 6).style("fill", "green")
                svg.append("text").attr("x", 60).attr("y", 0).text("Bottom 50%").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("Top 0.1%").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("circle").attr("cx",40).attr("cy",60).attr("r", 6).style("fill", "red")
                svg.append("circle").attr("cx",40).attr("cy",90).attr("r", 6).style("fill", "yellow")
                svg.append("circle").attr("cx",40).attr("cy",120).attr("r", 6).style("fill", "purple")
                
                svg.append("text").attr("x", 60).attr("y", 60).text("50-90%").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("90-99%").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
                svg.append("text").attr("x", 60).attr("y", 120).text("99-99.9%").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "purplecirc")
                //populate new lines/colors
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
                
            }

            if(selectedGroup == "Income"){
                reset();

                //update legend

                svg.append("text").attr("x", 60).attr("y", 0).text("99th-100th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("80th-99th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("text").attr("x", 60).attr("y", 60).text("60th-80th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("40th-60th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
                svg.append("text").attr("x", 60).attr("y", 120).text("20th-40th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "purplecirc")
                svg.append("circle").attr("cx",40).attr("cy",150).attr("r", 6).style("fill", "navy")
                svg.append("text").attr("x", 60).attr("y", 150).text("0-20th Percentile").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "navycirc")
                //update title

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", margin.left - 115)
                .attr("y", margin.top - 100)
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .style("font-family", "sans-serif")
                .text("Wealth disparity has (intuitively) widened within income as well");

            // Update the y scale domain
            y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.incpct80to99 + 300000)])
                .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));

                svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "steelblue-line")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", line99100);

                svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "green-line")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr("d", line8099);

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "red-line")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", line6080);

    
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "yellow-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", 2)
            .attr("d", line4060);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "purple-line")
            .attr("stroke", "purple")
            .attr("stroke-width", 2)
            .attr("d", line2040);

            

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "navy-line")
            .attr("stroke", "navy")
            .attr("stroke-width", 2)
            .attr("d", line020);
                
            }

            if(selectedGroup == "Education"){
                reset();

                //update legend

                svg.append("text").attr("x", 60).attr("y", 0).text("College").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("Some College").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("text").attr("x", 60).attr("y", 60).text("High School").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("No High School").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
               
                //update title

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", margin.left - 115)
                .attr("y", margin.top - 100)
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .style("font-family", "sans-serif")
                .text("Just having some college is a benefit and graudates have astounding relative outcomes");

            // Update the y scale domain
            y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.college + 300000)])
                .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));

                svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "steelblue-line")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", linecollege);

                svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "green-line")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr("d", linesc);

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "red-line")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", linehs);

    
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "yellow-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", 2)
            .attr("d", linenohs);

       
            }

            if(selectedGroup == "Age"){
                reset();

                //update legend

                svg.append("text").attr("x", 60).attr("y", 0).text("70+").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("55-69").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("text").attr("x", 60).attr("y", 60).text("40-54").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("<40").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
               
                //update title

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", margin.left - 115)
                .attr("y", margin.top - 100)
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .style("font-family", "sans-serif")
                .text("Since 2003, older generations have fared relative to middle-aged Americans");

            // Update the y scale domain
            y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.age55to69 + 300000)])
                .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));

                svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "steelblue-line")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", line70);

                svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "green-line")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr("d", line5569);

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "red-line")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", line4054);

    
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "yellow-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", 2)
            .attr("d", line40);
                
            }

            if(selectedGroup == "Generation"){
                reset();

                //update legend

                svg.append("text").attr("x", 60).attr("y", 0).text("Silent Generation").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("Baby Boomers").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("text").attr("x", 60).attr("y", 60).text("Gen X").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("Millennials").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
               
                //update title

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", margin.left - 115)
                .attr("y", margin.top - 100)
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .style("font-family", "sans-serif")
                .text("Baby Boomers experienced tremendous growth in their wealth that other generations have not seen");

            // Update the y scale domain
            y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.babyboom + 300000)])
                .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));

                svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "steelblue-line")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", lines);

                svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "green-line")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr("d", linebb);

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "red-line")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", linex);

    
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "yellow-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", 2)
            .attr("d", linem);
                
            }

            if(selectedGroup == "Race"){
               
                reset();

                //update legend

                svg.append("text").attr("x", 60).attr("y", 0).text("White").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "bluecirc")
                svg.append("text").attr("x", 60).attr("y", 30).text("Hispanic").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "greencirc")
                svg.append("text").attr("x", 60).attr("y", 60).text("Black").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "redcirc")
                svg.append("text").attr("x", 60).attr("y", 90).text("Other").style("font-size", "15px").attr("alignment-baseline","middle").attr("class", "yellowcirc")
               
                //update title

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", margin.left - 115)
                .attr("y", margin.top - 100)
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .style("font-family", "sans-serif")
                .text("White wealth is greater and has grown quicker than the wealth of any other racial group");

            // Update the y scale domain
            y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.white + 300000)])
                .range([height, 0]);
            
              svg.append("g")
                .attr("class", "myYaxis")
                .call(d3.axisLeft(y));

                svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "steelblue-line")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", linewhite);

                svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "green-line")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr("d", linehispanic);

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "red-line")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", lineblack);

    
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("class", "yellow-line")
            .attr("stroke", "yellow")
            .attr("stroke-width", 2)
            .attr("d", lineother);
            }

          }
      
          // When the button is changed, run the updateChart function
          d3.select("#selectButton").on("change", function(d) {
              // recover the option that has been chosen
              var selectedOption = d3.select(this).property("value")
              // run the updateChart function with this selected option
              update(selectedOption)
          })

})