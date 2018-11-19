var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f915c93dabcb403f8aa74c5b92764edc';

fetch(url)
    
    .then(response => {
        console.log(response.json());
    })
    
    .then(data => {
        let results = data.results; 
        let articleTitle = document.createElement('ul');
        let body= document.querySelector('body');
        body.appendChild(articleTitle);
        results.map(article => {
          let articleContent = document.createElement('li');
          articleContent.innerHTML = '<a href="' + article.url + '">' + "</a>" + '<div>' + article.content + '</div>';
        articleTitle.appendChild(articleContent);
        });
    })
    
    .catch(e => {
        console.log(`An error occurred: ${e}`);
    });