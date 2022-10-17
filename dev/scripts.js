// body height
var body = document.body,
    html = document.documentElement;
var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


// POSTS
const contentPosts = document.querySelector('.content__posts');
const singleClose  = document.querySelector('.single__close');
const post         = document.querySelectorAll('.post');
const postList     = document.querySelector('.block__list');
const singleBlock  = document.querySelector('.single__block');
const buildings    = document.querySelector('.content__img');

// close-post
singleClose.addEventListener('click', ()=>{
    closePost();
});

function fadePosts() {
    postList.classList.add('faded-posts');
    setTimeout(()=>{
        postList.classList.remove('faded-posts');
    }, 550);
}
function appearPosts() {
    postList.classList.add('appeared-posts');
    setTimeout(()=>{
        postList.classList.remove('appeared-posts');
    }, 1000);
}

function loadPost() {
    singleBlock.classList.add('open');
    contentPosts.classList.add('single')
    console.log('post appear');
}

function closePost() {
    wireDisconnect()
    singleBlock.classList.add('close');
    setTimeout(()=>{
        contentPosts.classList.remove('single');
        singleBlock.classList.remove('open', 'close');
        appearPosts();
    }, 500);
}

function wireDisconnect(){
    console.log('disconnect');
}

post.forEach(item =>{
    item.addEventListener('click', (e)=>{
        wireDisconnect();
        e.preventDefault();
        console.log('open single post');
        fadePosts();
        setTimeout(()=>{loadPost();}, 500);

    });
});
