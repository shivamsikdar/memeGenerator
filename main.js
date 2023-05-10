const generateMemeBtn = document.querySelector(".generator .generate-meme-btn");
const generateTitle = document.querySelector(".generator .meme-title");
const generateImg = document.querySelector(".generator img");
const generateAuthor = document.querySelector(".generator .author");

const updateDetails = (url,title,author) => {
      generateImg.setAttribute("src", url);
      generateTitle.innerHTML = title;
      generateAuthor.innerHTML = `Made By : ${author}`;
};



const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme)