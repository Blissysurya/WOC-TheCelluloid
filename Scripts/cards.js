
document.addEventListener('DOMContentLoaded', function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    
    
    const title = urlParams.get('title');
    
    const vote=urlParams.get("pop")
    const image = urlParams.get('image');
    const paragraph=urlParams.get('para');


   const voteDiv=document.createElement("div");
    const votes=document.createElement("h3");
    votes.textContent="Vote Average : "+vote;
    voteDiv.append(votes);



    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    const searchDiv=document.createElement("div");
    const paraDiv=document.createElement("div");
    const parag=document.createElement("p");
    parag.textContent=paragraph;

    titleElement.style.color="#ffc300";
   parag.style.color="#ffc300"
    votes.style.color="#ffc300"

    const imgElement = document.createElement('img');
    imgElement.src = image;

    voteDiv.classList.add("voted");
    searchDiv.classList.add("searchImage");
    paraDiv.appendChild(parag);
    paraDiv.classList.add("text-block");
    

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(titleElement);
    searchDiv.appendChild(imgElement);
    contentDiv.appendChild(searchDiv);
    contentDiv.appendChild(paraDiv);
    contentDiv.appendChild(voteDiv);
    
});
