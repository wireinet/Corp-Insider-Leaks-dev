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
        console.log('open single post');
    });
});

// close-post
    singleClose.addEventListener('click', function(){
        // closeSinglePost.play();
        console.log('close');
        blockList.classList.remove('faded');
        setTimeout(function(){
            singleBlock.classList.remove('open');
        }, 200);

    });
