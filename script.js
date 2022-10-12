const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    circleUserdBtn = document.querySelector(".circleUser");



function randomQuote() {
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading quote...";

    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading")
    });

}
soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisUtterance is a web speech api tht represents a speech request.
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speech method of speechS..


});
copyBtn.addEventListener("click", () => {
    //coping the quote on copyBtn click
    navigator.clipboard.writeText(quoteText.innerText);//writes the spec
});
circleUserdBtn.addEventListener("click", () => {
    let circleUserUrl = `https://www.linkedin.com/in/zenkarim/=${quoteText.innerText}`;
    window.open(circleUserUrl, "_blank");
});



quoteBtn.addEventListener("click", randomQuote);
