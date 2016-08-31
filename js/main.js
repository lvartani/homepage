var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
	//BOXES START//
	//
	// var tooltip = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received William E. Doctor Education Fund]" +  "<br/>" + "This map shows the locations of mining in Armenia.");
	//
	// var tooltip2 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received William E. Doctor Education Fund] " +  "<br/>" + "This map shows the locations of current projects of the NGO, Armenian Environmental Network.");
	//
	// var tooltip3 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received Faucett Fellowship] " +  "<br/>" + " Map geolocates where there are public and private universities in Chile and shows the percentage of women enrolled in each university.");
	//
	// var tooltip4 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received Faucett Fellowship] " +  "<br/>" + " Visualization shows the migration of university students when they begin attendence in Chile.");
	//
	// var tooltip5 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received Luskin Research Grant] " +  "<br/>" + "This web application crowdsources where there is historic building demolition in Tbilisi, Georgia.");
	//
	// var tooltip6 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received Luskin Research Grant]" +  "<br/>" + " This is a digital report about the web application, Restorative Buildings: Tbilisi");
	//
	// var tooltip7 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .html("[Received Terasaki Funding]" +  "<br/>" + "This map geolocates where student photos were taken for the Terasaki Japan Trip and shows a street view of these locations.");
	//
	//
 // 	var tooltip8 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .text("This report looks at the design of the iPad and examines how its simplicity is a testament to its success.");
	//
 // 	var tooltip9 = d3.select("body")
	// .append("div")
	// .attr("class", "tooltip2")
	// .text("Collection of past projects featuring US content.");
	//
	//
 	var tooltip10 = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "1000")
	.style ("top", "575px")
	.style("right","6%")
	.style("width", "20px")
	.style("visibility", "hidden")
	.style("font-family", "Raleway")
	.style("font-weight", "bold")
	.style("font-size", "x-large")
	.style("color","#000")
	.text("BOOKS");

 // 	var div = d3.select("body").append("div")
	// 	  .attr("class", "tooltip")
	// 	  .style("opacity", 0);
	//
	//
	// 	//Make an SVG Container
 // 	var svgContainer = d3.select("body").append("svg")
	// 					.attr("width", 250)
    //                     .attr("height", 600)
    //                     .attr ("id", "rects")
	// 					.on("mouseover", function(){return tooltip10.style("visibility", "hidden");});

 //Draw Rectangles
  // var rectangle1a = svgContainer.append("rect")
  //                       .attr("x", 30)
  //                       .attr("y", 30)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click",  function(event) { $("#armeniamine").dialog('open');})
  //                       .on("mouseover", function(){return tooltip.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip.style("visibility", "hidden");})
  // 									.transition()
  //                     	.attr("y",350)
  // 						.duration(2000) // Armenia
  // 						.delay(0);
  //
  // 	 var rectangle1b = svgContainer.append("rect")
  //                       .attr("x", 140)
  //                       .attr("y", 30)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click",  function(event) { $("#aen").dialog('open');})
  //                       .on("mouseover", function(){return tooltip2.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip2.style("visibility", "hidden");})
  // 									.transition()
  //                       .transition()
  //                     	.attr("y",350)
  // 						.duration(2000) // AEN
  // 						.delay(0);
  //
  //
  // 	 var rectangle2a = svgContainer.append("rect")
  //                       .attr("x", 30)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click",  function(event) { $("#chileenroll").dialog('open');})
  //                       .on("mouseover", function(){return tooltip3.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip3.style("visibility", "hidden");})
  // 									.transition()
  //                       .transition()
  //
  //                     	.attr("y",270)
  // 						.duration(2000) // Chile
  // 						.delay(3750);
  //
  // 	 var rectangle2b = svgContainer.append("rect")
  //                       .attr("x", 140)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click",  function(event) { $("#migration").dialog('open');})
  //                       .on("mouseover", function(){return tooltip4.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip4.style("visibility", "hidden");})
  // 									.transition()
  // 				.transition()
  //
  //                     	.attr("y",270)
  // 						.duration(2000) // Chile
  // 						.delay(3750);
  //
  // 	 var rectangle3a = svgContainer.append("rect")
  //                       .attr("x", 30)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click",  function(event) { $("#georgia").dialog('open');})
  //                       .on("mouseover", function(){return tooltip5.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip5.style("visibility", "hidden");})
  //                       .transition()
  //                     	.attr("y",190)
  // 						.duration(2000) //Georgia
  // 						.delay(7250);
  //
  //
  // 	var rectangle3b = svgContainer.append("rect")
  //                       .attr("x", 140)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                     	.on("click", function(event) {
  // 				     $("#scroller").dialog('open');})
  //                       .on("mouseover", function(){return tooltip6.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip6.style("visibility", "hidden");})
  //
  //                       .transition()
  //                     	.attr("y",190)
  // 						.duration(2000) // Georgia Scroller
  // 						.delay(7250);
  //
  //
  // 	var rectangle4 = svgContainer.append("rect")
  //                       .attr("x", 30)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click", function(event) { $("#japan").dialog('open');})
  //                       .on("mouseover", function(){return tooltip7.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip7.style("visibility", "hidden");})
  //
  //                       .transition()
  //                     	.attr("y",110)
  // 						.duration(2000) // Japan
  // 						.delay(10250);
  //
  // 	var rectangle4b = svgContainer.append("rect")
  //                       .attr("x", 140)
  //                       .attr("y", -100)
  //                       .attr("width", 95)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click", function(event) { $("#ipad").dialog('open');})
  //                       .on("mouseover", function(){return tooltip8.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip8.style("visibility", "hidden");})
  //                       .transition()
  //                     	.attr("y",110)
  // 						.duration(2000) // Device Narrative
  // 						.delay(13250);
  //
  //
  // 	var rectangle5 = svgContainer.append("rect")
  //                       .attr("x", 30)
  //                       .attr("y", -100)
  //                       .attr("width", 200)
  //                       .attr("height", 60)
  //                       .attr("rx", 7)
  //                       .attr("ry", 7)
  //                       .on("click", function() { window.open("http://loosine.com/ancestry/usmap2.html", '_self',true) })
  //                       .on("mouseover", function(){return tooltip9.style("visibility", "visible");})
  // 				.on("mouseout", function(){return tooltip9.style("visibility", "hidden");})
  //                       .transition()
  //                     	.attr("y",30)
  // 						.duration(2000) // US
  // 						.delay(13250);
  //
  //
  // 	var text1a = svgContainer.append('text').text("Armenia Map")
  //               .attr('x', 38)
  //               .attr('y', 380)
  // 		.attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#armeniamine").dialog('open');})
  //
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .delay(2000) ;
  //
  //   var text1b = svgContainer.append('text').text("AEN Map")
  //               .attr('x', 150)
  //               .attr('y', 380)
  // 		.attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#aen").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .delay(2000);
  //
  //  var text2a = svgContainer.append('text').text('Chile Map')
  //               .attr('x', 40)
  //               .attr('y', 300)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#chilenroll").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000)
  // 				.delay(5150);
  //
  // var text2b = svgContainer.append('text').text('Migration')
  //               .attr('x', 150)
  //               .attr('y', 300)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#migration").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000)
  // 				.delay(5150);
  //
  //
  //   var text3a = svgContainer.append('text').text('Georgia Map')
  //               .attr('x', 40)
  //               .attr('y', 220)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#georgia").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000)
  // 				.delay(8300);
  //
  //  var text3b = svgContainer.append('text').text('Tbilisi')
  //               .attr('x', 160)
  //               .attr('y', 220)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#scroller").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000)
  // 				.delay(8300);
  //
  //   var text4 = svgContainer.append('text').text('Japan Map')
  //               .attr('x', 40)
  //               .attr('y', 150)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //               .attr('font-weight', 'bold')
  //               .on("click",  function(event) { $("#japan").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000)
  // 				.delay(10890);
  //
  //
  //   var text5 = svgContainer.append('text').text('US Maps')
  //               .attr('x', 100)
  //               .attr('y', 70)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //                 .attr('font-weight', 'bold')
  //                  .on("click", function() { window.open("http://loosine.com/ancestry/usmap2.html", '_self',true) })
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000) //
  // 				.delay(13750);
  //
  // var text5b = svgContainer.append('text').text('iPad Essay')
  //               .attr('x', 150)
  //               .attr('y', 150)
  //               .attr('opacity', 0)
  //               .attr('font-family', 'Raleway')
  //               .attr('font-size', 'small')
  //                 .attr('font-weight', 'bold')
  //                 .on("click",  function(event) {$("#ipad").dialog('open');})
  //               .transition()
  //               .attr("opacity",1)
  //               .attr("fill","black")
  //               .duration(2000) //
  // 				.delay(13750);
     //END BOXES//





    //GLOBE START//

	  var width = 600,
	  height = 600,
	  sens = 0.25;


  //Setting projection

	  var projection = d3.geo.orthographic()
	  .scale(245)
	  .rotate([0, 0])
	  .translate([width / 2, height / 2])
	  .clipAngle(90);

	  var path1 = d3.geo.path()
	  .projection(projection);


	  var title = d3.select("#country_label");


	  //SVG container

	  var svgContainer2 = d3.select(".main").append("svg")
	  .attr("width", width)
	  .attr("height", height)
	  .on("mouseover", function(){return tooltip10.style("visibility", "hidden");})
	  .attr("class","globe");


      //Adding water

	  svgContainer2.append("path")
		  .datum({type: "Sphere"})
		  .attr("class", "water")
		  .attr("d", path1)
		  .call(d3.behavior.drag()
			  .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
		  .on("drag", function() {
			 transitioning = false;
			var rotate = projection.rotate();
			projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
			svgContainer2.selectAll("path").attr("d", path1);

		  }))


  ;

  var countryTooltip = d3.select("body").append("div").attr("class", "countryTooltip");
  //countryList = d3.select("body").append("select").attr("name", "countries")


	 queue()
		.defer(d3.json, "world.json")
		.defer(d3.csv, "world-country-names.csv")
		.defer(d3.csv, "countrynames.csv")
		.await(ready);

function ready(error, world,countryData, countryAll) {

	   var countryById = {},
		countries = topojson.feature(world, world.objects.countries).features,
		countries2 = topojson.feature(world, world.objects.countries).features,
		globe = {type: "Sphere"},
		land = topojson.feature(world, world.objects.land),
		borders = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }),
		  i = -1,
		  n = countries.length;

   ;


	countryAll.forEach(function(d) {
      countryById[d.id] = d.name;
    });

  countries = countries.filter(function(d) {
		return countryData.some(function(n) {
		  if (d.id == n.id) return d.name = n.name;
		});
		}).sort(function(a, b) {
		return a.name.localeCompare(b.name);
  });

    //Drawing countries on the globe


	var land = svgContainer2.selectAll("path.land")
	.data(countries2)
	.enter().append("path")
    .attr("class", "land")
    .attr("d", path1)

	.call(d3.behavior.drag()
    .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
    .on("drag", function() {
	     transitioning = false;
        var rotate = projection.rotate();
        projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
        svgContainer2.selectAll("path").attr("d", path1);

      }))

    //Mouse events

    .on("mouseover", function(d) {
      countryTooltip.text(countryById[d.id])
      .style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      .style("display", "block")
      .style("opacity", 1);
    })
    .on("mouseout", function(d) {
      countryTooltip.style("opacity", 0)
      .style("display", "none");
    })
    .on("mousemove", function(d) {
      countryTooltip.style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px");
    });



    var world = svgContainer2.selectAll("path.country")
    .data(countries)
    .enter().append("path")
    .attr("class", "country")
    .attr("d", path1)
	.attr("id", function(d) { return "countries" + d.id; })
    .attr("d", path1)

    //Drag event

    .call(d3.behavior.drag()
      .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
      )

    //Mouse events

    .on("mouseover", function(d) {
      countryTooltip.text(countryById[d.id])
      .style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      .style("display", "block")
      .style("opacity", 1);
    })
    .on("mouseout", function(d) {
      countryTooltip.style("opacity", 0)
      .style("display", "none");
    })
    .on("mousemove", function(d) {
      countryTooltip.style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      // title.text(countries[i].name).style("visability", "hidden");
	  .on("click",  function(event) { $("#chileenroll").dialog('open');});
    });




  (function transition() {

	d3.transition()
        .duration(1850)
        .each("start", function() {
		  i = (i + 1) % n;
          title.text(countries[i].name);
        })
        .tween("rotate", function() {
          var p = d3.geo.centroid(countries[i]),
              r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);


          return function(t) {
            projection.rotate(r(t));
			svgContainer2.selectAll("path.country").attr("d", path1);
			svgContainer2.selectAll("path.land").attr("d", path1);
          };
        })

      .transition()
        .each("end", transition);
  })();

		$( "#countries152" ).click(function() {
			$("#chileenroll").dialog('open');
				});
		$( "#countries51" ).click(function() {
			$("#armeniamine").dialog('open');
		});

		$( "#countries268" ).click(function() {
			$("#scroller").dialog('open');
		});

		$( "#countries392" ).click(function() {
			$("#japan").dialog('open');
		});
		$( "#countries840" ).click(function() {
			window.open("http://loosine.com/ancestry/usmap2.html", '_self',true)
   		});

    //     function drag {(d3.behavior.drag()
    //       .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
    //   )}

        d3.select(".chile").on("click", function transition(){ d3.transition()
            .duration(1850)
            // .each("start", function() {
    		//   i = (i + 1) % n;
            //   title.text(countries[1].name);
            // })
            // .select(title, title.text(countries[1].name) )
            .tween("rotate", function() {
              var p = d3.geo.centroid(countries[1]),
                  r = d3.interpolate(projection.rotate(), [-p[0], -p[1]])
                  title.text(countries[1].name);


              return function(t) {
                projection.rotate(r(t));
    			svgContainer2.selectAll("path.country").attr("d", path1);
    			svgContainer2.selectAll("path.land").attr("d", path1);
              };
            })

          .transition()
            // .each("end", transition)
            // .each("end", d3.behavior.drag().origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; }));

        });

    }
//END GLOBE//


	function refreshIframe() {
		var ifr = document.getElementsByName('chile')[0];
		ifr.src = ifr.src;
	}

	function refreshIframe2() {
		var ifr = document.getElementsByName('armenia')[0];
		ifr.src = ifr.src;
	}

	function refreshIframe3() {
		var ifr = document.getElementsByName('architecturef')[0];
		ifr.src = ifr.src;
	}

	function refreshIframe4() {
		var ifr = document.getElementsByName('gisf')[0];
		ifr.src = ifr.src;
	}



  $(function() {
    $( "#aboutme" ).dialog({
    	dialogClass: 'dialogWithDropShadow',
		autoOpen: false,
  		modal:true,
		show: {
			effect: "",
			duration: 500
		},
		hide: {
			effect: "",
			duration: 1000
		},
		width: 700,
		height: 500,
		draggable: true,
		open: function(ev, ui){
              $('.ui-widget-overlay').addClass('custom-overlay');
          },

	    close: function() {
	        $('.ui-widget-overlay').removeClass('custom-overlay');
	    },

		resizable: true
    	});

    $( "#opener" ).click(function() {
		$( "#aboutme" ).dialog( "open" );
		});
     });


	$(function() {
			$( "#arcbook" ).dialog({
				dialogClass: 'dialogWithDropShadow',
				autoOpen: false,
				modal:true,
				show: {
					effect:"",
					duration: 500
				},
				hide: {
					effect: "",
					duration: 500
				},
				open: function(ev, ui){
					 $("#arcf").attr('src',"http://loosine.com/test.html");
					  $('.ui-widget-overlay').addClass('custom-overlay');
				  },

				close: function() {
					$('.ui-widget-overlay').removeClass('custom-overlay');
				},
				width: 1250,
				height: 600,
				draggable: true,
				resizable: true
				});

			$( "#arcopener" ).click(function() {
					$( "#arcbook" ).dialog( "open" );
					});
			});

	 $(function() {
			$( "#gisbook" ).dialog({
					dialogClass: 'dialogWithDropShadow',
					autoOpen: false,
					modal:true,
					show: {
						effect:"",
						duration: 500
						},
					hide: {
						effect: "",
						duration: 500
						},
					open: function(ev, ui){
							 $("#gisf").attr('src',"http://loosine.com/gis.html");
							  $('.ui-widget-overlay').addClass('custom-overlay');
						  },

					close: function() {
							$('.ui-widget-overlay').removeClass('custom-overlay');
						},
					width: 1250,
					height: 600,
					draggable: true,
					resizable: true
				});

			$( "#gisopener" ).click(function() {
				$( "#gisbook" ).dialog( "open" );
			});
     });


	  $(function() {
		$( ".dialog" ).dialog({
			  autoOpen: false,
				modal:false,
				dialogClass: 'dialogWithDropShadow',

			  show: {
				effect: "slide",
				duration: 500
			  },
			  hide: {
				effect: "slide",
				duration: 1000
			  },
			  width: 900,
			  height: 500,
			  draggable: true,
			  resizable: true
			});
		});

	  $(function() {
			$( ".dialog2" ).dialog({
			  autoOpen: false,
				modal:false,
				dialogClass: 'dialogWithDropShadow',
			  show: {
				effect: "slide",
				duration: 500
			  },
			  hide: {
				effect: "slide",
				duration: 1000
			  },
			  width: 900,
			  height: 300,
			  draggable: true,
			  resizable: true
				});
		});

	   $(function() {
			$( ".dialog3" ).dialog({
			  autoOpen: false,
				modal:false,

				dialogClass: 'dialogWithDropShadow',
			  open: function(ev, ui){
					 $('#scrollertest').attr('src','http://www.loosine.com/blog/?page_id=36');
				  },

			  show: {
				effect: "slide",
				duration: 500
			  },
			  hide: {
				effect: "slide",
				duration: 1000
			  },

			  width: 900,
			  height: 600,
			  draggable: true,
			  resizable: true
				});
			});

		 $(function() {
			$( ".dialog4" ).dialog({
				autoOpen: false,
					modal:false,

				dialogClass: 'dialogWithDropShadow',
				  open: function(ev, ui){
						 $("#ipadtest").attr('src',"http://www.scrollkit.com/s/3KNeU4l");
					  },

				show: {
					effect: "slide",

					duration: 500
					},
				hide: {
				effect: "slide",
				duration: 1000
				},

				  width: 900,
				  height: 600,
				  draggable: true,
				  resizable: true
					});
				});



		 $(function() {
			$( "#mymodal9" ).draggable();

			});


	$(document).ready(function () {
			  $( ".icon3").click(function() {
			  $( ".drop" ).toggle( "slow" );

			});

			$( ".icon2").click(function() {
			  $( ".drop2" ).toggle( "slow" );

			});

			  $( ".built").click(function() {
			  $( ".drop" ).toggle( "slow" );
			});


			$( ".photos").click(function() {
			  $( ".container" ).toggle( "slow" );
			});

			$( ".icon5").click(function() {
			  $( ".container" ).toggle( "slow" );
			});

			$( ".datasource").click(function() {
			  $( ".data" ).toggle( "slow" );
			});

			$( ".icon4").click(function() {
			  $( ".data" ).toggle( "slow" );
			});

			$( "#more1").click(function() {
			  $( "#moreinfo" ).toggle( "slow" );
			});

	});

	$(document).ready(function () {
		$( ".more" ).click(function() {
		  $( ".drop2" ).toggle( "slow" );
		});


	});
