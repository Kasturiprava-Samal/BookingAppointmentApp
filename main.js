// const btn = document.querySelector('.btn');

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');


// myForm.addEventListener('submit', onSubmit);
// var name,email;

// function onSubmit(e) {
//   e.preventDefault();
//   name= document.getElementById('name').value;
//   email=document.getElementById('email').value;
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     var li = document.createElement('li');
//     li.setAttribute('id', 'liId')
//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
//   //localStorage.setItem('name',x); 
//   //localStorage.setItem('email',y);
//   store(name,email);
// }
// var myarr=[]
// function store(name,email){

//   const person = {
//       name: name,
//       email: email
//   }
//   myarr.push(person);
//   window.localStorage.setItem('data',JSON.stringify(myarr));  
//   console.log(JSON.parse(localStorage.getItem('data')));
// }

// task-13

var data = document.getElementById("data-page");
var myForm = document.getElementById('my-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');

myForm.addEventListener('submit', onClick);

var myArr = []
var myObj = {}
var count = 0

function onClick(e) {
    e.preventDefault()

    var button = document.createElement('BUTTON');
    button.setAttribute('class', 'btn-delete');
    button.innerText = 'Delete';


    var button2 = document.createElement('BUTTON');
    button2.setAttribute('id', 'btn-edit');
    button2.innerText = 'Edit';

    button.addEventListener('click', removeItem)
    // button2.addEventListener('click', edit)  
    myObj = {
        name: nameInput.value,
        email: emailInput.value
    }
    myArr.push(myObj);

    for (var i = count; i < myArr.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('id', i)
        li.appendChild(document.createTextNode(`${myArr[i].name},${myArr[i].email} `));

        if (myArr[i].name == '' && myArr[i].email == '') {

            button.remove()
        }
        else if (myArr[i].name !== '' && myArr[i].email !== '') {
            button.setAttribute('id', i);
            button2.setAttribute('id', i);
            li.appendChild(button);
            li.appendChild(button2);
            data.appendChild(li);
        }

    }
    count += 1
    nameInput.value = '';
    emailInput.value = '';
}

function removeItem(event) {
    //console.log("(event.srcElement.id)", event.srcElement.id)
    var myLi = document.getElementById(event.srcElement.id);
    myLi.remove()
}