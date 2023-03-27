
// pour pouvoir scroller dans le body, vu qu'on a aucun lien externe
/*===== Redimensionner la barre de navigation lors du défilement=====*/
const navbar = document.querySelector(".navbar");
// lorsque le défilement est supérieur à la hauteur de la fenêtre (20), ajouter les classes autocollantes à la balise avec une classe navbar
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/*=====  =====*/
const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".menu-btn");
if(navToggle)
{
navToggle.addEventListener("click", () =>
{
    navMenu.classList.toggle("active");
})
}
// Fermeture du menu lorsque l'on clique sur un lien
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
const navMenu = document.querySelector(".menu");
navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
/*===== Scroll Section Active Link =====*/

const Section = document.querySelectorAll('section[id]')
function scrollActive()
{
const scrollY = window.pageYOffset
Section.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
        document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
    }
    else
    {
    document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
    }
})
}
window.addEventListener('scroll', scrollActive)


// === =====******Pour les fonctionnalités du CV -*******************===========
const ID = document.getElementById.bind(document);

//Objet pour le champ Ql(qualités)
const Ql = {
    input: ID("inputQl"),
    button: ID("btnSubmitQl"),
    list: document.querySelector(".listQl"),

    createItem: function(content) {

      const li = document.createElement("li");
      li.classList.add("itemQl");


      const span = document.createElement("li");
      span.innerText = content;
      span.classList = "spanAddedQl";
      console.log(span);

      const div = document.createElement("div");
      div.classList = "divAdded"
      div.style.padding = "1rem 0 0";

      const edit = document.createElement("button");
      edit.classList.add("btn-edit");
      edit.type = "button";
      edit.innerText = "Modifier";

      const remove = document.createElement("button");
      remove.classList.add("btn-remove");
      remove.type = "button";
      remove.innerText = "Supprimer";

      div.appendChild(edit);
      div.appendChild(remove);
      li.appendChild(span);
      li.appendChild(div);

      remove.addEventListener("click", function () {
        li.remove();
      }, true);

      edit.addEventListener("click", function () {
        Ql.input.value = content;
        Ql.button.innerText = "Modifier";
        li.remove();

      }, true);

      return li;
    }
  };

//Objet pour le champ Comp(compétences)
const Comp = {
  input: ID("inputComp"),
  button: ID("btnSubmitComp"),
  list: document.querySelector(".listComp"),

  createItem: function(content) {

    const li = document.createElement("li");
    li.classList ="itemComp";

    const span = document.createElement("li");
    span.innerText = content;
    span.classList = "spanAddedComp"

    const div = document.createElement("div");
    div.style.padding = "1rem 0 0";

    const edit = document.createElement("button");
    edit.classList.add("btn-edit");
    edit.type = "button";
    edit.innerText = "Modifier";

    const remove = document.createElement("button");
    remove.classList.add("btn-remove");
    remove.type = "button";
    remove.innerText = "Supprimer";

    div.appendChild(edit);
    div.appendChild(remove);
    li.appendChild(span);
    li.appendChild(div);

    remove.addEventListener("click", function () {
      li.remove();
    }, true);

    edit.addEventListener("click", function () {
      Comp.input.value = content;
      Comp.button.innerText = "Modifier";
      li.remove();
    }, true);

    return li;
  }
};

//Objet pour le champ CentreI(centre d'intérêts)
const CentreI = {
    input: ID("inputCentreI"),
    button: ID("btnSubmitCentreI"),
    list: document.querySelector(".listCentreI"),

    createItem: function(content) {

      const li = document.createElement("li");
      li.classList.add("itemCentreI");


      const span = document.createElement("li");
      span.innerText = content;
      span.classList = "spanAddedCentreI"

      const div = document.createElement("div");
      div.style.padding = "1rem 0 0";

      const edit = document.createElement("button");
      edit.classList.add("btn-edit");
      edit.type = "button";
      edit.innerText = "Modifier";

      const remove = document.createElement("button");
      remove.classList.add("btn-remove");
      remove.type = "button";
      remove.innerText = "Supprimer";

      div.appendChild(edit);
      div.appendChild(remove);
      li.appendChild(span);
      li.appendChild(div);
      
      remove.addEventListener("click", function () {
        li.remove();
      }, true);

      edit.addEventListener("click", function () {
        CentreI.input.value = content;
        CentreI.button.innerText = "Modifier";
        li.remove();
      }, true);

      return li;
    }
  };

//Fonction pour ajouter un événement de clic à un objet
function addEvent1(obj) {

  obj.button.addEventListener("click", function(e) {
    e.preventDefault();

    if(obj.input.value){
      const newItem = obj.createItem(obj.input.value);
      obj.list.append(newItem);
      obj.input.value = "";
      obj.button.innerText = "Ajouter";
    }
  }, true);
}

//Tableau d'objets à utiliser : Ql pour les qualités , Comp pour les compétences, CentreI pour les centres d'intérêts
const items1= [Ql, Comp, CentreI];

//Ajouter des événements de clic pour chaque objet dans le tableau
for(let i=0; i<items1.length; i++){
  addEvent1(items1[i]);
}



// pour les champs formations et expériences

// on va utiliser le boucle for pour ne pas repeter beaucoup de ligne de code
// on met les infos respectifs pour chaque objet en asignant un objet à une variable
const formation = {
    parent_dateDebut: document.querySelector(".date_debut_f"),
    parent_dateFin: document.querySelector(".date_fin_f"),
    parent_desc: document.querySelector(".desc_f"),
    parent_btn: document.querySelector(".btn_formation"),
    date1: document.querySelector("#date1_f"),
    date2: document.querySelector("#date2_f"),
    text: document.querySelector("#text_f"),
    btn: document.querySelector(".btn_f"),
    counter: 0,
};

const experience = {
    parent_dateDebut: document.querySelector(".date_debut_exp"),
    parent_dateFin: document.querySelector(".date_fin_exp"),
    parent_desc: document.querySelector(".desc_exp"),
    parent_btn: document.querySelector(".btn_experience"),
    date1: document.querySelector("#date1_exp"),
    date2: document.querySelector("#date2_exp"),
    text: document.querySelector("#text_exp"),
    btn: document.querySelector(".btn_exp"),
    counter: 0,
};

// fonction pour créer des listes 
function addEvent2(item) {
    item.btn.addEventListener("click", (event) => {
        event.preventDefault();
        item.counter++;

        const pClass = "line_" + item.counter;  


        const userDate1 = item.date1.value;
        const userDate2 = item.date2.value;
        const userText = item.text.value;

        const date1Text = document.createTextNode(userDate1);
        const date2Text = document.createTextNode(userDate2);
        const textText = document.createTextNode(userText);

        const p_userDate1 = document.createElement("p");
        const p_userDate2 = document.createElement("p");
        const p_userText = document.createElement("p");

        p_userDate1.classList = pClass + " pDate1"; 
        p_userDate2.classList = pClass + " pDate2"
        p_userText.classList = pClass + " pText";

        p_userDate1.appendChild(date1Text);
        p_userDate2.appendChild(date2Text);
        p_userText.appendChild(textText);

        item.parent_dateDebut.appendChild(p_userDate1);
        item.parent_dateFin.appendChild(p_userDate2);
        item.parent_desc.appendChild(p_userText);

        const p_btn = document.createElement("p");
        p_btn.classList = pClass + " pBtn";

        const btn_del = document.createElement("button");
        const btn_textDel = document.createTextNode("X");

        btn_del.appendChild(btn_textDel);
        p_btn.appendChild(btn_del);
        item.parent_btn.appendChild(p_btn);

        p_btn.addEventListener("click", (e) => {
            const delDate1 = document.querySelector("." + pClass);
            item.parent_dateDebut.removeChild(delDate1);

            const delDate2 = document.querySelector("." + pClass);
            item.parent_dateFin.removeChild(delDate2);

            const delDesc = document.querySelector("." + pClass);
            item.parent_desc.removeChild(delDesc);

            item.parent_btn.removeChild(p_btn);
        });
    });
}

const items2 = [formation, experience];

// appel de la fonction en utilisant le tableau item2 contenant les deux objets : formation et expérience
for (let i = 0; i < items2.length; i++) {
  addEvent2(items2[i]);
}


//Maintenant on va afficher les éléments à insérer ,pour avoir un CV complet

const btn_valider = document.querySelector(".btn_valider") 
btn_valider.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.value

    // pour l'affichage de la  raison du cv 
    const cvRaison = document.querySelector("#cvRaison").value
    let cvR= document.createTextNode(cvRaison)
    let spanCVRaison = document.createElement("span")
    spanCVRaison.appendChild(cvR)

    const titre1 = document.querySelector(".titre1")
    titre1.appendChild(spanCVRaison)

    // pour afficher le nom de la pers
    const nom = document.querySelector("#nom").value
    let nomPers = document.createTextNode(nom)
    let spannom = document.createElement("span")
    spannom.appendChild(nomPers)

    const nomVal = document.querySelector(".nomVal")
    nomVal.appendChild(spannom)



    // pour afficher l'email de la pers 
    const email = document.querySelector("#email").value
    let emailPers = document.createTextNode(email)
    let spanEmail = document.createElement("span")
    spanEmail.appendChild(emailPers)

    const emailVal = document.querySelector(".emailVal")
    emailVal.appendChild(spanEmail)


    // pour afficher l'addresse de la pers
    const addresse = document.querySelector("#addresse").value
    let addressePers = document.createTextNode(addresse)
    let spanAddresse = document.createElement("span")
    spanAddresse.appendChild(addressePers)

    const addresseVal = document.querySelector(".addresseVal")
    addresseVal.appendChild(spanAddresse)

    // pour affihcer le genre de la personne
    const genreVal = document.querySelector('.genreVal')
    const genreChecked = document.querySelector('input[name="genre"]:checked');
    if (genreChecked) {
        genreVal.textContent = genreChecked.value;
    }
    const genrePers = document.querySelectorAll('input[name="genre"]');
    genrePers.forEach(genre => {
        genre.addEventListener("click", () => {
            if (genreChecked) {
                genreVal.textContent = genreChecked.value;
            }
        })
    })


    // pour affihcher le profil de la personne
    const profil = document.querySelector("#profil").value
    let profilPers = document.createTextNode(profil)
    let divProfil = document.createElement("div")
    divProfil.style.marginTop = "50px"
    divProfil.appendChild(profilPers)

    const profilCR = document.querySelector(".content_profilCR")
    profilCR.appendChild(divProfil)

    // affichage de qualité , compétences, centre d'intérêts
     // utilisation d'un tableau sections qui contient des objets pour chaque section du document (qualités, compétences, centres d'intérêts) 
    const sections = [  
      {
        sectionName: 'qlCR',
        className: 'itemQl',
        selector: '.spanAddedQl',
      },
      {
        sectionName: 'compCR',
        className: 'itemComp',
        selector: '.spanAddedComp',
      },
      {
        sectionName: 'centreICR',
        className: 'itemCentreI',
        selector: '.spanAddedCentreI',
      },
    ];
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionEl = document.querySelector(`.${section.sectionName}`);
      const renduItems = document.querySelectorAll(section.selector);
      const removeItems = document.querySelectorAll(`.${section.className}`);
    
      removeItems.forEach(function(item) {
        item.parentNode.removeChild(item);
      });
    
      renduItems.forEach(function(item) {
        sectionEl.appendChild(item);
      });
    }
    
    // affichage de formations et experience
    const formationCR = {
      date_debutCR: document.querySelector(".date_debut_fCR"),
      date_finCR: document.querySelector(".date_fin_fCR"),
      descCR: document.querySelector(".desc_fCR"),
    };
    
    const experienceCR = {
      date_debutCR: document.querySelector(".date_debut_expCR"),
      date_finCR: document.querySelector(".date_fin_expCR"),
      descCR: document.querySelector(".desc_expCR"),
    };
    
    // création d'une fonction pour ne pas répéter plusieurs ligne de code
    function formationExpCR(elmt) {


      const div_userDate1CR = document.createElement("div")
      const div_userDate2CR = document.createElement("div")
      const div_userDescCR = document.createElement("div")

      const pDate1CR = document.querySelectorAll(".pDate1")
      const pDate2CR = document.querySelectorAll(".pDate2")
      const pDescCR = document.querySelectorAll(".pText")
      const pBtnCR = document.querySelectorAll(".pBtn")

   

      pDate1CR.forEach(function(pDate1) {
        div_userDate1CR.appendChild(pDate1);
      });
      elmt.date_debutCR.appendChild(div_userDate1CR);

      pDate2CR.forEach(function(pDate2) {
        div_userDate2CR.appendChild(pDate2);
      });
      elmt.date_finCR.appendChild(div_userDate2CR);

      pDescCR.forEach(function(pDesc) {
        div_userDescCR.appendChild(pDesc);
      });
      elmt.descCR.appendChild(div_userDescCR);

      pBtnCR.forEach(function(pBtn) {
        pBtn.parentNode.removeChild(pBtn);
      });

    }
    
    
    const elements = [formationCR, experienceCR];
  
    for (let k = 0; k < elements.length; k++) {
      formationExpCR(elements[k]);
    }
})