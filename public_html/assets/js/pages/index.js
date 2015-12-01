<!-- ============================================================== -->
$(document).ready(function(){

    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 1010) {
          $(".content-page").addClass('narrow');
          console.log("sadsad");
        } else $(".content-page").removeClass('narrow');

    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


  $('.yay').click(function(){

    var qStart = $('#quickStart');

    switch($(this).prev().text()){
      case "Do you have money you can spare?": {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Are you interested in participating in the network?');
        });
        qStart.fadeIn(1000);
      }
      break;
      case "Do you have IT skills?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Receive bitcoins for your bug reports!');
          $('#finalState').children().last().append(
              "<h3>If you have IT skills, you may consider joining a bug bounty program.</h3><br>"
            + "<h5>      Many websites and software developers offer a deal by which individuals can receive "
            + "compensation for reporting bugs. These bug bounty programs "
            + "allow the developers to discover and resolve bugs before the general public is aware of "
            + "them, preventing incidents of widespread abuse.</h5>"
            + "<h4>Pros:</h4>"
            + "<h5><ul><li>Get rewarded for exposing web-based security issues</li>"
            + "<li>Be the first to learn and try out new platforms/web-based services</li>"
            + "<li>May lead to a long term career if you're good at it.</li></ul></h5>"
            + "<h4>Cons:</h4>"
            + "<h5><ul><li>Competition, other bug hounter compete with you for the reward</li>"
            + "<li>Must follow specific requirements in order to be qualified for a valid bounty</li></ul></h5>"
            + "<br>"
            + "<h5>      <a href='https://www.kraken.com/security/bug-bounty'>Kraken</a> and <a href='https://www.pay4bugs.com/'>Pay4Bugs</a> are some of the websites dedicated for this purpose.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Are you selling products or services?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Get paid in bitcoins!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Are you creative?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Publish content on Streamium!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Are you interested in participating in the network?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Start mining!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Do you need a large quantity?":  {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Buy from a bitcoin exchange!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Are you a good negotiator?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Buy bitcoins in-person!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      default: break;
    }
  });

  $('.nay').click(function(){

    var qStart = $('#quickStart');

    switch($(this).prev().prev().text()){
      case "Do you have money you can spare?": {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Do you have IT skills?');
        });
        qStart.fadeIn(1000);
      }
      break;break;
      case "Do you have IT skills?": {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Are you selling products or services?');
        });
        qStart.fadeIn(1000);
      }
      break;break;
      case "Are you selling products or services?":  {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Are you creative?');
        });
        qStart.fadeIn(1000);
      }
      break;
      case "Are you creative?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Use a bitcoin faucet!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      case "Are you interested in participating in the network?": {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Do you need a large quantity?');
        });
        qStart.fadeIn(1000);
      }
      break;
      case "Do you need a large quantity?":  {
        qStart.fadeOut(1000,function(){
        $(this).children().first().text('Are you a good negotiator?');
        });
        qStart.fadeIn(1000);
      }
      break; 
      case "Are you a good negotiator?": {
        qStart.fadeOut(1000,function(){
          $('#finalState').children().first().text('Use a bitcoin ATM!');
          $('#finalState').children().last().append(
              "<h3>Falta texto.</h3><br>"
            + "<h5>Bastante texto.</h5>");
          $('#finalState').fadeIn(1000);
        });
      }
      break;
      default: break;
    }
  });

  load_charts();
  
});

function load_charts(){

    //MORRIS
    window.morris2 = Morris.Line({
        element: 'morris-home',
        padding: 20,
        behaveLikeLine: true,
        gridEnabled: false,
        gridLineColor: '#dddddd',
        axes: true,
        resize: true,
        smooth:false,
        pointSize: 3,
        lineWidth: 2,
        fillOpacity:0.85,
        data: [
          {period: '2009 Q1', iphone: 4666, ipad: 3666, itouch: 2666},
          {period: '2009 Q2', iphone: 4441, ipad: 3441, itouch: 2441},
          {period: '2009 Q3', iphone: 16501, ipad: 14501, itouch: 12501},
          {period: '2009 Q4', iphone: 7689, ipad: 6689, itouch: 5689},
          {period: '2010 Q1', iphone: 4666, ipad: 3666, itouch: 2666},
          {period: '2010 Q2', iphone: 4441, ipad: 3441, itouch: 2441},
          {period: '2010 Q3', iphone: 6501, ipad: 4501, itouch: 2501},
          {period: '2010 Q4', iphone: 7689, ipad: 6689, itouch: 5689},
          {period: '2011 Q1', iphone: 2293, ipad: 1293, itouch: 293},
          {period: '2011 Q2', iphone: 5881, ipad: 3881, itouch: 1881},
          {period: '2011 Q3', iphone: 5588, ipad: 3588, itouch: 1588},
          {period: '2011 Q4', iphone: 15073, ipad: 8967, itouch: 5175},
          {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
          {period: '2012 Q2', iphone: 12432, ipad: 5713, itouch: 3791}
        ],
        lineColors:['#abb7b7','#ABC8E2','#183152'],
        xkey: 'period',
        redraw: true,
        ykeys: ['iphone', 'ipad'],
        labels: ['All Visitors', 'Returning Visitors'],
        hideHover: 'auto'

    });

 
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}