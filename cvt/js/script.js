$( document ).ready(function() {
    console.log( "ready!" );
    $('li').click( function(){
        /*let url=$(this).attr('href');*/
        $('.content').load('index-2.html .channels');
        alert('ok');
        return false;
    });
});