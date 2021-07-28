const api = {
    key: '8aaff92c256047ff8c9a0f73a694207c',
    base: "https://api.spoonacular.com/recipes/complexSearch",
    query: "pasta"

}

fetch(`${api.base}?apiKey=${api.key}&query=${api.query}`)
    .then(response =>{
        return response.json();
    }).then(function displayResults(response){
        console.log(response.results);


        // images
        let img1 = response.results[1].image;
        let img2 = response.results[4].image;
        let img3 = response.results[5].image;
        let img4 = response.results[6].image;
        let img5 = response.results[7].image;
        let img6 = response.results[9].image;

        document.getElementById('recipe-1').innerHTML = response.results[1].title;
        document.getElementById('recipe-1').style.backgroundImage =  `url(${img1})`;


        document.getElementById('recipe-2').innerHTML = response.results[4].title;
        document.getElementById('recipe-2').style.backgroundImage =  `url(${img2})`;

        document.getElementById('recipe-3').innerHTML = response.results[5].title;
        document.getElementById('recipe-3').style.backgroundImage =  `url(${img3})`;

        document.getElementById('recipe-4').innerHTML = response.results[6].title;
        document.getElementById('recipe-4').style.backgroundImage =  `url(${img4})`;

        document.getElementById('recipe-5').innerHTML = response.results[7].title;
        document.getElementById('recipe-5').style.backgroundImage =  `url(${img5})`;

        document.getElementById('recipe-6').innerHTML = response.results[9].title;
        document.getElementById('recipe-6').style.backgroundImage =  `url(${img6})`;

    });
    

