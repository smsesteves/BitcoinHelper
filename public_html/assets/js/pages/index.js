<!-- ============================================================== -->
$(document).ready(function(){

/*  $( window ).resize(function() {
  if($( document.body ).hasClass( "smallscreen" )){
    $(".content-page").css({"margin-left":"50px!important"});
    console.log("lal2");
  }
});*/

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
