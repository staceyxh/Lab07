d3.select("body")
    .style("width","250px")

d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "charmander")
    .style("width", "50px")
    .style("height", "50px")
    
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "tuby")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "tuby")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "elephant")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "grass")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "monkey")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "charmander")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "grass")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "picachu")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "charmander")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "tuby")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "squirtle")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .style("width", "50px")
    .style("height", "50px")
    .on("click", function()
       {
            d3.select(this)
                .attr("src", "bomb.png")
            d3.selectAll("body")
                .append("img")
                .attr("src", "explosion.png")
                .transition().duration(5000).ease(d3.easeElastic).style("opacity",1)
                .style("position", "fixed")
                .style("width", "400px")
                .style("height", "250px")
                .style("left", "0px")
                .style("top", "30px")
            d3.select("body p")
                .text("YOU LOSE FINAL SCORE: " + total)
                .style("font-family","Impact")   
        })
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "charmander")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "grass")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "elephant")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "tuby")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "monkey")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "charmander")
    .style("width", "50px")
    .style("height", "50px")
d3.select("body")
  .append("img")
    .attr("src","background.jfif")
    .attr("class", "squirtle")
    .style("width", "50px")
    .style("height", "50px")
var total = 0;
var scoreCounter = function(total, points)
{
    return total + points;
    
}


d3.selectAll("body img.charmander")
    .on("click", function()
       {
            total = scoreCounter(total, 5)
            d3.select(this)
                .attr("src", "charmander.png")
            d3.select("body p")
                .text("Score: "+total)
    
    
        })
d3.selectAll("body img.tuby")
    .on("click", function()
       {
            total = scoreCounter(total, 10)
            d3.select(this)
                .attr("src", "tuby.jfif")
            d3.select("body p")
                .text("Score: "+total)
    
    
        })
d3.selectAll("body img.grass")
    .on("click", function()
       {
            total = scoreCounter(total, -15)
            d3.select(this)
                .attr("src", "grass.png")
             d3.select("body p")
                .text("Score: "+total)
    
    
        })
d3.selectAll("body img.elephant")
    .on("click", function()
       {
            total = scoreCounter(total, 20)
            d3.select(this)
                .attr("src", "elephant.jfif")
             d3.select("body p")
                .text("Score: "+total)
    
        })
d3.selectAll("body img.monkey")
    .on("click", function()
       {
            total = scoreCounter(total, 25)
            d3.select(this)
                .attr("src", "monkey.jfif")
             d3.select("body p")
                .text("Score: "+total)
    
        })
d3.selectAll("body img.picachu")
    .on("click", function()
       {
            total = scoreCounter(total, 50)
            d3.select(this)
                .attr("src", "picachu.jfif")
             d3.select("body p")
                .text("Score: "+total)
    
        })
d3.selectAll("body img.squirtle")
    .on("click", function()
       {
            total = scoreCounter(total, 30)
            d3.select(this)
                .attr("src", "squirtle.png")
             d3.select("body p")
                .text("Score: "+total)
    
        })

d3.select("body")
    .append("p")
    .text("Score: ")
    .style("font-size", "40")
    