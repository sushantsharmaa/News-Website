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

       let div = document.createElement("div");
    
       let image = document.createElement("img");
        image.src = article[0].urlToImage;

        let title = document.createElement("h2");
        title.innerHTML = article[0].title;

        let content = document.createElement("p");
        content.innerHTML = article[0].content
        
        div.append(image,title,content);
       data.append(div);

}