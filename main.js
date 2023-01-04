const btn = document.querySelector('.btn');

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);
var name,email;

function onSubmit(e) {
  e.preventDefault();
  name= document.getElementById('name').value;
  email=document.getElementById('email').value;
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    var li = document.createElement('li');
    li.setAttribute('id', 'liId')
    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
  //localStorage.setItem('name',x); 
  //localStorage.setItem('email',y);
  store(name,email);
}
var myarr=[]
function store(name,email){

  const person = {
      name: name,
      email: email
  }
  myarr.push(person);
  window.localStorage.setItem('data',JSON.stringify(myarr));  
  console.log(JSON.parse(localStorage.getItem('data')));
}