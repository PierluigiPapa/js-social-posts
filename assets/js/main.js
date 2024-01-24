const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021" 
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

// Costante per selezionare la classe staff
const containerHtml = document.getElementById('container');
containerHtml.innerHTML = '';

// Ciclo per la creazione di un post
posts.forEach((post) => {
    containerHtml.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${imageNull(post.author.image)}"  alt="${post.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${postTime(post.created)}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>
</div>`

})

// Creo un array per vedere i miei like
const myLike = []
// Creo un array per vedere i post dove sono stati inseriti i like
const likedPost = []

// Costante per selezionare la classe likes nell'html
const like = document.querySelectorAll('.likes');
//Ciclo per far funzionare il bottone del like
like.forEach((button) => {
    const myBlock = button.querySelector('.like-button');
	myBlock.addEventListener('click', function(){
	myBlock.classList.add('like-button--liked');
    let id = myBlock.getAttribute('data-postid');
    myLike.push(id);
    button.querySelector('.js-likes-counter').innerHTML = (parseInt(button.querySelector('.js-likes-counter').innerHTML) + 1);
    console.log(button.querySelector('.js-likes-counter').innerHTML);
    console.log(myLike);
    console.log(likedPost);
    })
})

// Funzione per trasformare la data americana in quella italiana
function postTime(data) {
    const dataPost = new Date(data);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dataItaliana = dataPost.toLocaleDateString('it-IT', options);

    return `${dataItaliana}`;
}

// Funzione per generare l'immagine nulla di Luca
function imageNull(image){
    if(image === null){
        image = 'https://cdn.vectorstock.com/i/preview-1x/26/39/profile-placeholder-image-gray-silhouette-vector-22122639.jpg'
    }
    return image
}