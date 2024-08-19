const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const enq = document.getElementById("enq")
const sup = document.getElementById("sup")
const msg = document.getElementById('message')
const cbIn = document.getElementById('cbIn')
const btn = document.querySelector('button')

const msgError = document.getElementById('msgError')
const mailError = document.getElementById('mailError')
const fnameError = document.getElementById('fnameError')
const lnameError = document.getElementById('lnameError')
const queryError = document.getElementById('queryError')
const cbError = document.getElementById('cbError')

let bool = false



btn.addEventListener('click',(e) => validate(e))

function validate(e) {
    e.preventDefault()
    if (fname.value == '') {
        fnameError.textContent = "please enter fname"
    }
    if (lname.value == '') {
        lnameError.textContent = "please enter lname"
    }
    if (email.value == '') {
        mailError.textContent = "please enter email"
    }
    if (sup.checked === false || enq.checked === false) {
        queryError.textContent = "please enter fname"
    }
    if(cbIn.checked === false){
        cbError.textContent = "Pleaswe accept terms and condition"
    }
    if(msg.value == '' ){
        msgError.textContent = "Please enter msg"
    }
    validated();
    if(bool === true){
        const markup = `  
  <div class="success">
    <div class="success-text">
      <img src="./assets/images/icon-success-check.svg" alt="" >
      <p class="align-text">Message Sent!</p>
    </div>
    <p class="text">Thanks for completing form. we'll in touch soon</p>
  </div>`
  document.querySelector('.container').insertAdjacentHTML("beforebegin",markup)    
    }

}

function validated(){
    if (fname.value) {
        fnameError.textContent = ""
    }
    if (lname.value) {
        lnameError.textContent = ""
    }
    if (email.value) {
        mailError.textContent = ""
    }
    if (sup.checked === true || enq.checked === true) {
        queryError.textContent = ""
    }
    if(cbIn.checked === true){
        cbError.textContent = ""
    }
    if(msg.value){
        msgError.textContent = ""
    }
    fname.value !='' && lname.value != '' && email.value !='' && (sup.checked === true || enq.checked === true) && msg.value != '' && cbIn.checked ===true ? bool = true: false; 
    console.log(bool)
}
setTimeout(() => {
    const successElement = document.querySelector('.success');
    if (successElement) {
        successElement.style.display = 'none';
    }
}, 1000);






