// Fonctionnalité 1 + 1-bis :

let footer = document.querySelector("footer");

let nbrClicks = 0;

footer.addEventListener("click", function() {
  
    nbrClicks += 1;

    console.log("Clic numéro ${nbrClicks}");
  
});


// Fonctionnalité 2 :

const togg = () => {
    navbarHeader.classList.toggle('collapse');
}
const menu = document.querySelector('button').addEventListener('click', togg);



// Fonctionnalité 3 :

document.getElementsByClassName("btn-outline-secondary")[0].addEventListener('click', () => {
  
    document.getElementsByClassName("card-text")[0].style.color = 'red'
  
});
  

// Fonctionnalité 4 :

function toggGreen() {
  
   

};


// Fonctionnalité 5 :

const targLink = document.getElementsByTagName('link')[0];

const navbar = document.querySelector('header');

navbar.addEventListener('dblclick', () => {
    targLink.disabled === false ? targLink.disabled = true : targLink.disabled = false;
});


// Fonctionnalité 6 :

// Fonctionnalité 7 :

// Fonctionnalité 8 :

// Fonctionnalité 9 :
