// body height
var body = document.body,
    html = document.documentElement;
var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

// POSTS
const singleClose = document.querySelector('.single__close');
const singleBlock = document.querySelector('.single__block');
const post        = document.querySelectorAll('.post');
const blockList   = document.querySelector('.block__list');

function wireDisconnect() {
    console.log("disconnect")
    wiresAnimate('disconnect'),
    panelAnimate('default')
}
function wireConnect() {
    console.log("connect"),
    wiresAnimate('connect'),
    setTimeout(function() {
        wiresAnimate("send_data"); 
    }, 2000)        
    setTimeout(function() {
        panelAnimate("send_data"); 
    }, 3500) 
}
post.forEach(e=>{
    e.addEventListener("click", e=>{
        e.preventDefault();
        wireDisconnect();   
        setTimeout(function() {
            blockList.classList.add("faded");
            singleBlock.classList.add("open");
            if (matchMedia("(max-width: 870px)").matches) {
                console.log('hide blockList to height 0');
                setTimeout(function(){
                    blockList.style.display = 'none';
                    singleBlock.style.position = 'static';
                    }, 1000);
                }
            wireConnect();
            console.log("open single post");
        }, 800) 
    })
});
// close-post
singleClose.addEventListener("click", function() {
    console.log("close");
    wireDisconnect();
    setTimeout(function() {
        singleBlock.classList.remove("open"); 
        if (matchMedia("(max-width: 870px)").matches) {
            setTimeout(function(){
                blockList.style.display = 'grid';
                singleBlock.style.position = 'absolute';
                },100);
        }   
    },500);
    setTimeout(function() {
        blockList.classList.remove("faded");
        wireConnect();
    }, 800);
});

// jQUERY

$(".content__img.projector").hover( () => { 
    wiresAnimate("send_data");
    setTimeout(function() {
        panelAnimate("send_data"); 
    }, 800)    
})

window.addEventListener('scroll', function() {
if(window.screen.width < 1370){   
    wiresAnimate("send_data");
    }
})


function wiresAnimate(state){
    if(window.screen.width >= 1370){
        switch(state){
            case 'default' : $(".content__wires").css({'background-image': "url(../images/wires.webp)"}); break;
            case 'send_data' : $(".content__wires").css({'background-image': "url(../images/wires-animate-3wawes_v2.gif)"}); break; 
            case 'disconnect' : $(".content__wires").css({'background-image': "url(../images/wires-disconect.gif" + "?p" + new Date().getTime() + ")"}); break;
            case 'connect' : $(".content__wires").css({'background-image': "url(../images/wiresconect.gif" + "?p" + new Date().getTime() + ")"}) 
        }
    }else{
        switch(state){
            case 'default' : $(".content__wires").css({'background-image': "url(../images/wires.webp)"}); break;
            case 'send_data' : $(".content__wires").css({'background-image': "url(../images/wires-mob-send.gif"}); break; 
            case 'disconnect' : $(".content__wires").css({'background-image': "url(../images/wires-mob-disconnect.gif" + "?p" + new Date().getTime() + ")"}); break;
            case 'connect' : $(".content__wires").css({'background-image': "url(../images/wires-mob-connect.gif" + "?p" + new Date().getTime() + ")"}) 
        } 
    }
}

function panelAnimate(state){
    if(window.screen.width >= 1370){
    if(state == 'default'){
        $('.block__item:nth-child(1)').css({'background-image': 'url(../images/item-screen-1.webp)'});
        $('.block__item:nth-child(2)').css({'background-image': 'url(../images/item-screen-2.webp)'});
        $('.block__item:nth-child(3)').css({'background-image': 'url(../images/item-screen-3.webp)'});
        $('.block__item:nth-child(4)').css({'background-image': 'url(../images/item-screen-4.webp)'});
        $('.block__item:nth-child(5)').css({'background-image': 'url(../images/item-screen-5.webp'});
        $('.block__item:nth-child(6)').css({'background-image': 'url(../images/item-screen-6.webp)'})
        $('.single__block').css({'background-image': 'url(../images/single.webp)'})
    }
    if(state == 'send_data'){
        $('.block__item:nth-child(1)').css({'background-image': 'url(../images/item-screen-1.gif)'});
        $('.block__item:nth-child(2)').css({'background-image': 'url(../images/item-screen-2.gif)'});
        $('.block__item:nth-child(3)').css({'background-image': 'url(../images/item-screen-3.gif)'});
        $('.block__item:nth-child(4)').css({'background-image': 'url(../images/item-screen-4.gif)'});
        $('.block__item:nth-child(5)').css({'background-image': 'url(../images/item-screen-5.gif)'});
        $('.block__item:nth-child(6)').css({'background-image': 'url(../images/item-screen-6.gif)'})
        $('.single__block').css({'background-image': 'url(../images/single.gif)'})
    }
    }
}