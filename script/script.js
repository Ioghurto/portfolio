
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LA SLIDE
  let index = 0; //L'index de l'image
  
  
  $('span').click(function () {// Quand on clique sur un bouton.
    
    let indexN = $('span').index(this);// On définit un deuxième index qui prend la valeur du bouton.
  
    //L'élément html qui correspond à l'index disparait en 500 secondes. L'image correspondant au deuxième index (définit par le bouton, on rappelle) apparaît
    $('#galerie>article>img').eq(index).fadeOut(500).end().eq(indexN).fadeIn(500);
    $('#galerie>article>h3').eq(index).fadeOut(500).end().eq(indexN).fadeIn(500);
  
    
  index = indexN; //et du coup l'image qui va disparaître au prochain clic, c'est plus la première mais celle qui correspond au deuxième index.
  });



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LE MENU

const svg = document.querySelector("#nav>svg"); //La boîte pour le hover
const cercleUn = document.querySelector("#nav>svg>a:first-of-type>circle"); // le premier petit cercle
const cercleDeux = document.querySelector("#nav>svg>a:nth-of-type(2)>circle"); // le deuxième petit cercle
const cercleTrois = document.querySelector("#nav>svg>a:nth-of-type(3)>circle"); // le troisième petit cercle
const cercleQuatre = document.querySelector("#nav>svg>a:nth-of-type(4)>circle"); //le quatrième petit cercle
const cercleMain = document.querySelector("svg>circle"); //Le gros cercle principal

const legendUn = document.querySelector("#nav>p:first-of-type");
const legendDeux = document.querySelector("#nav>p:nth-of-type(2)");
const legendTrois = document.querySelector("#nav>p:nth-of-type(3)");
const legendQuatre = document.querySelector("#nav>p:nth-of-type(4)");

svg.addEventListener("mouseover", () => { //quand la souris va sur la boîte svg
  cercleMain.classList.add("class", "cercleMain"); //le gros cercle obtient une classe définit dans le css
  cercleUn.classList.add("cercle1"); // tout comme les prochains en fait.
  cercleDeux.classList.add("cercle2");
  cercleTrois.classList.add("cercle3");
  cercleQuatre.classList.add("cercle4");
});
svg.addEventListener("mouseleave", () => { // quand la souris se barre
  cercleMain.classList.remove("class", "cercleMain"); //ça leur enlève leur classe et du coup ils redeviennent comme avant.
  cercleUn.classList.remove("cercle1");
  cercleDeux.classList.remove("cercle2");
  cercleTrois.classList.remove("cercle3");
  cercleQuatre.classList.remove("cercle4"); 
});

cercleUn.addEventListener("mouseover", () => { //quand je mets ma souris sur le premier petit cercle
  legendUn.classList.add("legend"); // ça affiche la légende
});
cercleUn.addEventListener("mouseleave", () => {//Et quand je l'enlève
  legendUn.classList.remove("legend"); // ça efface la légende
});
cercleDeux.addEventListener("mouseover", () => { //et ce pour tous les cercles.
  legendDeux.classList.add("legend");
});
cercleDeux.addEventListener("mouseleave", () => {
  legendDeux.classList.remove("legend");
});
cercleTrois.addEventListener("mouseover", () => {
  legendTrois.classList.add("legend");
});
cercleTrois.addEventListener("mouseleave", () => {
  legendTrois.classList.remove("legend");
});
cercleQuatre.addEventListener("mouseover", () => {
  legendQuatre.classList.add("legend");
});
cercleQuatre.addEventListener("mouseleave", () => {
  legendQuatre.classList.remove("legend");
});

//ça c'est un code que j'ai copy paste pour que le menu fasse un glissement et pas un tp. 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LE PARRALAXE*/
document.querySelectorAll('body>div').forEach((e,index) =>{//Pour chaque div directement dans le body
 $(`body>div:nth-of-type(${index+1})`).parallaxe(.75); //On applique la méthode parallaxe
});
