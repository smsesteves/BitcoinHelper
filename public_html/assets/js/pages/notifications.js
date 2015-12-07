function notify(style,position) {
    if(style == "error"){
        icon = "fa fa-exclamation";
    }else if(style == "warning"){
        icon = "fa fa-warning";
    }else if(style == "success"){
        icon = "fa fa-check";
    }else if(style == "info"){
        icon = "fa fa-question";
    }else{
        icon = "fa fa-circle-o";
    }
    $.notify({
        title: 'Sample Notification',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae orci ut dolor scelerisque aliquam.',
        image: "<i class='"+icon+"'></i>"
    }, {
        style: 'metro',
        className: style,
        globalPosition:position,
        showAnimation: "show",
        showDuration: 0,
        hideDuration: 0,
        autoHide: false,
        clickToHide: true
    });
}
 
function notify2(style,position) {
    $(".autohidebut").notify({
        text: '<i class="fa fa-comment-o"></i> Hi buddy. I\'m here!'
    }, {
        style: 'metro',
        className: 'nonspaced',
        elementPosition:position,
        showAnimation: "show",
        showDuration: 0,
        hideDuration: 0,
        autoHide: false,
        clickToHide: true
    });
}
 
function autohidenotify(style,ttl,txt,duration) {
    if(style == "blue"){
        cn = "info";
    }else if(style == "yellow"){
        cn = "warning";
    }else if(style == "green"){
        cn = "success";
    }else if(style == "red"){
        cn = "danger";
    }else{
        cn = "success";
    }

    icon = "fa fa-exclamation";
    
    $.notify({
        title: '<b>'+ttl+'</b>',
        text: txt,
        image: "<i class='fa fa-exclamation'></i>"
    }, {
        style: 'metro',
        className: cn,
        globalPosition:'top center',
        showAnimation: "show",
        showDuration: 0,
        hideDuration: 0,
        autoHideDelay: duration,
        autoHide: true,
        clickToHide: true
    });
}
 
function nconfirm() {
    $.notify({
        title: 'Are you nuts?!',
        text: 'Are you sure you want to do nothing?<div class="clearfix"></div><br><a class="btn btn-sm btn-default yes">Yes</a> <a class="btn btn-sm btn-danger no">No</a>',
        image: "<i class='fa fa-warning'></i>"
    }, {
        style: 'metro',
        className: "cool",
        showAnimation: "show",
        showDuration: 0,
        hideDuration: 0,
        autoHide: false,
        clickToHide: false
    });
}
 
$(function(){
    //listen for click events from this style
    $(document).on('click', '.notifyjs-metro-base .no', function() {
      //programmatically trigger propogating hide event
      $(this).trigger('notify-hide');
    });
    $(document).on('click', '.notifyjs-metro-base .yes', function() {
      //show button text
      alert($(this).text() + " clicked!");
      //hide notification
      $(this).trigger('notify-hide');
    });
})