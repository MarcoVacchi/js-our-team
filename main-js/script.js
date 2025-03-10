const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:*/


const parentElement = document.querySelector(".team-container");
const formElement = document.getElementById("my-form")
// console.log(parentElement);
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const emailElement = document.getElementById("email");
const imgElement = document.getElementById("img");

let result = ""

let resultParent = " "

for (let i = 0; i < teamMembers.length; i++){
  
  resultParent = teamMembers[i]; 
  
  result += ` <div class="team-member">
                    <img src="${resultParent.img}" alt="">
                    <div class="info">
                        <h3>${resultParent.name}</h3>
                        <p>${resultParent.role}</p>
                        <p class="email">${resultParent.email}</p>
                    </div>
                </div>`
}
parentElement.innerHTML = result;

formElement.addEventListener("submit", function (e){
  e.preventDefault();
 // console.log("ho aggiunto un nuovo membro");
 // console.log(nameElement.value)
 //console.log(roleElement.value)
 //console.log(emailElement.value)
 //console.log(imgElement.value);
 const name = nameElement.value;
 const role = roleElement.value;
 const email = emailElement.value;
 const img = imgElement.value;

 const newMember = {
  name,
  role,
  email,
  img
 }
 teamMembers.push(newMember);
 console.log(teamMembers);
 result += ` <div class="team-member">
 <img src="${img}" alt="${name}">
 <div class="info">
     <h3>${name}</h3>
     <p>${role}</p>
     <p class="email">${email}</p>
 </div>
</div>`

parentElement.innerHTML = result;
formElement.reset()

});
