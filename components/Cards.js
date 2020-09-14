// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the success data you get back, closely.
// You will be creating a card for each article in the success.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article obj and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

// import axios from "axios";




// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.





const { default: Axios } = require("axios")

function cardMaker(obj){
    // DOM  Section
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    // Class Section
    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'

    // Structure like HTML
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    // Content Sectiopn
    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorName.textContent = obj.authorName

    // Event Handler Section
    card.addEventListener('click', () => {
        console.log(obj.headline);
    })

    return card
} 

// Panel Section
const cards = document.querySelector('.cards-container')
const articleURL = 'https://lambda-times-backend.herokuapp.com/articles'

// Axios Section
Axios.get(articleURL)
.then((res) => {
    const articles = res.data.articles
    for(let obj in articles){
        articles[obj].forEach(element => {
            cards.appendChild(cardMaker(element))
        });
    }
})
