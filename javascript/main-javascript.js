document.getElementById("hamburger").addEventListener("click", function(){
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});

// ABOUT ME JSON

fetch("https://raw.githubusercontent.com/machonach/CompSciPortfolio/1fb2c44043b3b6db7b7b957b053be99aa3ca0c49/about-me.json")
.then(response =>{
    if (!response.ok){
        throw new Error("Error fetching data");
    }else{
        return response.json();
    };
})

.then(data =>{
    const interestsList = document.getElementById("interests-list");
    data.interests.forEach(interest =>{
        const li = document.createElement("li");
        li.textContent = interest;
        interestsList.appendChild(li);
    });

    const languagesList = document.getElementById("coding-languages-list");
    data.codingLanguages.forEach(codingLanguage =>{
        const li = document.createElement("li");
        li.textContent = codingLanguage;
        languagesList.appendChild(li);
    });
        
    document.getElementById("years-coding-value").textContent = data.yearsCoding;
})

.catch(error => {
    console.error("Error fetching data");

    const interestsList = document.getElementById("interests-list");
    const interestError = document.createElement("li");
    interestError.textContent = "Failed to load information";
    interestsList.appendChild(interestError);
});

// JOKE OF THE MOMENT

fetch("https://icanhazdadjoke.com/",{
    method:"GET",
    headers:{
        "Accept":"application/json",
        "User-Agent":"Portfolio Website CS Team Audition Project (https://github.com/machonach/CompSciPortfolio)"
    }
})

.then(response =>{
    if (!response.ok){
        throw new Error("Error fetching data");
    }else{
        return response.json();
    };
})

.then(data =>{
    console.log(data)
    const jokeText = document.getElementById("joke-text");

    jokeText.textContent = data.joke;
})

.catch(error =>{
    console.error(error)

    const jokeText = document.getElementById("joke-text");
    jokeText.textContent = "Failed to load joke.";
});