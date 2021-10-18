fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dcd6423e597e4540839f006e00216ad6`)
.then(res =>{
    return res.json();
})
.then(res =>{
    appendData(res.articles);
    console.log(res);
})
.catch(err =>{
    console.log(err);
})



function appendData(article){
    let data = document.getElementById("data");   

    article.forEach(el => {
       let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.urlToImage;

        let title = document.createElement("h2");
        title.innerHTML = el.title;

        let description = document.createElement("p");
        description.innerHTML = el.description

        let link = document.createElement("a");
        link.setAttribute("href", "./html/news.html");

        link.append(image);
        div.append(link,title,description);

        data.append(div);
    })
}