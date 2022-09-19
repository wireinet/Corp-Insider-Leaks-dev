// body height
var body = document.body,
    html = document.documentElement;
var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

// $(function(){$(body).click(function(){alert();})});

// ADDITIONS
const blockItem = document.querySelectorAll('.block__item');
window.onkeydown = function( event ) {
    if ( event.keyCode == 49 ) {
        blockItem.forEach((item) =>{
            item.classList.remove('additions');
        });
        
    }
};