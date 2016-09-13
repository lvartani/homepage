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

$(document).on('click','.searchbychar', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $(target).show();
    $('html, body').delay(500).animate({
        scrollTop: $(target).offset().top
    }, 1500);
});
$(document).on('click','.searchbychar_fast', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1500);
});

$(".next").click(function(){
    // $("#area").load("http://loosine.com #area > *");
    var src = 'us_page/js/usmain.js';
    window.open("http://localhost:8000","_self",true);


    // $.getScript(src, function () {
    //     console.log('script is loaded');
    // });
    //
    // return false;
    });
$("#japan_link").click(function(){
    //window.open("http://www.loosine.com/international/japan.html");
    setTimeout('window.open(\'http://www.loosine.com/international/japan.html\'), 1500');

});

$("#inf_link").click(function(){
    setTimeout('window.open(\'http://loosine.com/informal_settlements\'),');

});
$("#georgia_link").click(function(){
    setTimeout('window.open(\'http://www.loosine.com/blog/?page_id=36\', 1500)');

});

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


     //END BOXES//





    //GLOBE START//

	  var width = 530,
	  height = 600,
	  sens = 0.25;


  //Setting projection

	  var projection = d3.geo.orthographic()
	  .scale(235)
	  .rotate([0, 0])
	  .translate([width / 2, height / 2])
	  .clipAngle(90);

	  var path1 = d3.geo.path()
	  .projection(projection);


	  var title = d3.select("#country_label");


	  //SVG container

	  var svgContainer2 = d3.select(".globe").append("svg")
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
		  i = -1;

          console.log(countries2);
          console.log(countries);
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
        n = countries.length;
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
    .on("click", function(d){
        console.log(d);
        if(d.name=="Georgia") {
            scroll_country(georgia_scroll);
        }
        else if(d.name=="Armenia"){
            scroll_country(armenia_scroll);
        }
        else if(d.name=="Chile"){
            scroll_country(chile_scroll);
        }
        else if(d.name=="Japan"){
            scroll_country(japan_scroll);
        }
        else if(d.name=="United States"){
            window.open("#");
        }

    })
    .on("mousemove", function(d) {
      countryTooltip.style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      // title.text(countries[i].name).style("visability", "hidden");

    });




  (function transition() {

  d3.transition()
        .duration(1850)
        .each("start", function() {
    title.text(countries[i = (i + 1) % n].name);
        console.log(n);

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

		// $( "#countries152" ).click(function() {
        //     $("#chile_scroll").show();
        //     $('html, body').animate({
        //            scrollTop: $("#chile_scroll").offset().top
        //        }, 1000);
        //
		// 	});
		// $( "#countries51" ).click(function() {
        //     $("#armenia_scroll").show();
        //     $('html, body').animate({
        //            scrollTop: $("#armenia_scroll").offset().top
        //        }, 1000);
		// 	});
		// $( "#countries268" ).click(function() {
        //     $("#georgia_scroll").show();
        //     $('html, body').animate({
        //            scrollTop: $("#georgia_scroll").offset().top
        //        }, 1000);
		// 	});
		// $( "#countries392" ).click(function() {
        //     $("#japan_scroll").show();
        //     $('html, body').animate({
        //            scrollTop: $("#japan_scroll").offset().top
        //        }, 1000);
        //
		//       });
		// $( "#countries840" ).click(function() {
		// 	window.open("http://loosine.com/ancestry/usmap2.html", '_self',true)
  //  		   });

        d3.select(".infset").on("click", function(d){
            d3.selectAll(".land").style("stroke", "white").style("stroke-width","2");
        });
        d3.select(".infset").on("mouseover", function(d){
            d3.selectAll(".land").style("stroke", "white").style("stroke-width","2");
        });
        d3.select(".infset").on("mouseout", function(d){
            d3.selectAll(".land").style("stroke", "lightgrey").style("stroke-width","1");
        });

        function stop_transition() {
            console.log("stop");
        }

        function click_transition(i){
            d3.transition()
            .duration(1850)
            .tween("rotate", function() {
              var p = d3.geo.centroid(countries[i]),
                  r = d3.interpolate(projection.rotate(), [-p[0], -p[1]])
                  title.text(countries[i].name);
                  console.log(countries[i].name);
                  console.log(countries.length);

              return function(t) {
                projection.rotate(r(t));
    			svgContainer2.selectAll("path.country").attr("d", path1);
    			svgContainer2.selectAll("path.land").attr("d", path1);
              };
            })
          .transition()
          .each("end", stop_transition);

        }




        d3.select(".armenia").on("click", function(d,i){
            click_transition(0);
        });
        d3.select(".chile").on("click", function(d,i){
            click_transition(1);
        });
        d3.select(".chile1").on("click", function(d,i){
            click_transition(1);
        });
        d3.select(".georgia").on("click", function(d,i){
            click_transition(2);
        });
        d3.select(".japan").on("click", function(d,i){
            click_transition(3);
        });
        d3.select(".stopspin").on("click", function(d,i){
            click_transition(4);
        });

    }
    function scroll_country(scroll){
        $(scroll).show();
        $('html, body').animate({
               scrollTop: $(scroll).offset().top
           }, 1000);
    }
//END GLOBE//

    //
	// function refreshIframe() {
	// 	var ifr = document.getElementsByName('chile')[0];
	// 	ifr.src = ifr.src;
	// }
    //



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




	$(document).ready(function () {

			$( ".icon2").click(function() {
			  $( ".drop2" ).toggle( "slow" );
			});
			$( ".built").click(function() {
			  $( ".drop" ).toggle( "slow" );
			});
            $( ".more" ).click(function() {
              $( ".drop2" ).toggle( "slow" );
            });

            $(".chile").click(function(){
                $("#chile_frame").attr('src','http://loosine.com/international/chilemigration.html').delay(800);
            });

	});
