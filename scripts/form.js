const form = document.getElementById("form");
const d = document;

const validateName = (name) =>{
  const regExUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const validate = regExUserName.test(name) ? true : false
  validate ? validate : alert(("El nombre solo debe incluir letras"))
  return validate
}

const validateEmail = (email) =>{
  const regExUserEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const validate = regExUserEmail.test(email) ? true : false
  validate ? validate : alert("El e-mail ingresado es incorrecto, por favor ingrese uno correcto.")
  return validate
}

const validateComments = (comments) => {
  const validate = comments.length > 10 & comments.length < 250 ? true : false
  validate ? validate : alert("El comentario debe tenerun mínimo de 10 caracteres y máximo 250 caracteres.")
  return validate
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  const user = d.getElementById("user").value;
  const email = d.getElementById("email").value;
  const comments = d.getElementById("comments").value; 

  validateName(user) & validateEmail(email) & validateComments(comments) 
  ? console.table(`user: ${user} \nemail: ${email} \ncomments: ${comments}`) : console.log("Error en el envío"); 

});