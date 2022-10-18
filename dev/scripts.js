// body height
var body = document.body,
    html = document.documentElement;
var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

// POSTS
const singleClose = document.querySelector('.single__close');
const singleBlock = document.querySelector('.single__block');
const post        = document.querySelectorAll('.post');
const blockList   = document.querySelector('.block__list');

// appearing posts

function wireDisconnect(){
    console.log('disconnect');
}

post.forEach(item =>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        blockList.classList.add('faded');
        singleBlock.classList.add('open');

        // blockList.classList.remove('faded');
        // openSinglePost.play();
        console.log('open single post');
    });
});

// ANIME
    const platformMove = anime({
        targets: '.projector-light',
        opacity: Math.random() * 0.8 / 1,
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration: 1000
    });

    // const openSinglePost = anime.timeline({
    //     autoplay: false,
    //     easing: 'easeInOutQuad',
    // }).add({
    //     targets: '.block__item',
    //     scale: 0,
    //     opacity: 0.5,
    //     duration: 500,
    //     delay: anime.stagger(100, {start:500, from:'center', easing: 'easeOutQuad'}),
    // }).add({
    //     targets: '.single__block',
    //     zIndex:5,
    //     opacity:1,
    //     scale: [0.5,1],
    //     rotate: ['10deg', '0deg'],
    //     delay:250,
    //     duration: 100
    // }, 300);

    // const closeSinglePost = anime.timeline({
    //     autoplay: false,
    //     easing: 'easeInOutQuad',
    //     duration:200
    // }).add({
    //     targets: '.single__block',
    //     opacity:0,
    //     zIndex:0,
    //     scale: 0,
    //     rotate: ['0deg', '3deg']
    // }).add({
    //     targets: '.block__item',
    //     scale: 1,
    //     opacity: 1,
    //     // delay: anime.stagger(100, {from:'center', easing: 'easeOutQuad'}),
    // });

// close-post
    singleClose.addEventListener('click', function(){
        // closeSinglePost.play();
        console.log('close');
        blockList.classList.remove('faded');
        setTimeout(function(){
            singleBlock.classList.remove('open');
        }, 200);

    });
