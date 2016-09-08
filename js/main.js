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
    $('html, body').delay(1000).animate({
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

$(".next_buttons").click(function(){
    $("#area").load("us_page/index.html #area > *");
    var src = 'us_page/js/usmain.js';
    // $('#js_switch').src = src;
    window.open("http://localhost:8000","_self",true);


    // $.getScript(src, function () {
    //     console.log('script is loaded');
    // });
    //
    // return false;
    });
$("#japan_link").click(function(){
    //window.open("http://www.loosine.com/international/japan.html");
    setTimeout('window.open(\'http://www.loosine.com/international/japan.html\')');

});

$("#inf_link").click(function(){
    //window.open("http://www.loosine.com/international/japan.html");
    setTimeout('window.open(\'http://loosine.com/informal_settlements\')');

});
$("#georgia_link").click(function(){
    //window.open("http://www.loosine.com/international/japan.html");
    setTimeout('window.open(\'http://www.loosine.com/blog/?page_id=36\')');

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
//END GLOBE//

    //
	// function refreshIframe() {
	// 	var ifr = document.getElementsByName('chile')[0];
	// 	ifr.src = ifr.src;
	// }
    //
	// function refreshIframe2() {
	// 	var ifr = document.getElementsByName('armenia')[0];
	// 	ifr.src = ifr.src;
	// }
    //
	// function refreshIframe3() {
	// 	var ifr = document.getElementsByName('architecturef')[0];
	// 	ifr.src = ifr.src;
	// }
    //
	// function refreshIframe4() {
	// 	var ifr = document.getElementsByName('gisf')[0];
	// 	ifr.src = ifr.src;
	// }



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
            // "src="http://loosine.com/international/chilemigration.html"
            $(".chile1").click(function(){
                $("#chile_frame").attr('src','http://loosine.com/international/chilemigration.html').delay(800);
            });
            $(".chile").click(function(){
                $("#chile_frame").attr('src','http://loosine.com/international/chilemigration.html').delay(800);
            });

	});

	$(document).ready(function () {
		$( ".more" ).click(function() {
		  $( ".drop2" ).toggle( "slow" );
		});


	});
