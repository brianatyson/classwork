$(document).ready(function() {

  var clickMe = function() {
    $("#puppies").show()

    $("#bulldog").animate( {
      opacity: .5,
      width: "50%"
      } , 5000);

    $("#mastiff").animate( {
      opacity: .5,
      height: "350px"
      } , 5000);

    $("h2").slideDown (5000);

    $("h4").fadeIn (5000);

    $(".ul1").animate({fontSize : "2em"});

    $("a").animate ({textIndent: "30px"});

    $("p").animate ({letterSpacing: "+=1px"});

    $("button").hide();
  }

  $('button').click(clickMe)



})
