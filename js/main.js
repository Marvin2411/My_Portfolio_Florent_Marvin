document.getElementById('contactForm').addEventListener('submit', function(event){}).preventDefault();

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

if(!name || !email || !number || !subject || !message){
    alert('Veuillez remplir tous les champs!')
}
else{
    alert('Merci pour votre soumission!')
}