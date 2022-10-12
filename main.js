const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("buttons");



function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    })

} 

quoteBtn.addEventListener("click", randomQuote);