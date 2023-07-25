const url = "https://api.quotable.io/random"

const quote = document.querySelector('p')

const by = document.querySelector('h2')

const btn = document.querySelector('button')

function getQuote() {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        quote.textContent = item.content
        by.textContent = item.author
    })
}

getQuote()


btn.addEventListener('click', getQuote)