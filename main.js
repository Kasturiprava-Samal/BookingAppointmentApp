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

// var data = document.getElementById("data-page");
// var myForm = document.getElementById('my-form');
// var nameInput = document.getElementById('name');
// var emailInput = document.getElementById('email');

// myForm.addEventListener('submit', onClick);

// var myArr = []
// var myObj = {}
// var count = 0

// function onClick(e) {
//     e.preventDefault()

//     var button = document.createElement('BUTTON');
//     button.setAttribute('class', 'btn-delete');
//     button.innerText = 'Delete';


//     var button2 = document.createElement('BUTTON');
//     button2.setAttribute('id', 'btn-edit');
//     button2.innerText = 'Edit';

//     button.addEventListener('click', removeItem)
//     // button2.addEventListener('click', edit)  
//     myObj = {
//         name: nameInput.value,
//         email: emailInput.value
//     }
//     myArr.push(myObj);

//     for (var i = count; i < myArr.length; i++) {
//         var li = document.createElement('li');
//         li.setAttribute('id', i)
//         li.appendChild(document.createTextNode(`${myArr[i].name},${myArr[i].email} `));

//         if (myArr[i].name == '' && myArr[i].email == '') {

//             button.remove()
//         }
//         else if (myArr[i].name !== '' && myArr[i].email !== '') {
//             button.setAttribute('id', i);
//             button2.setAttribute('id', i);
//             li.appendChild(button);
//             li.appendChild(button2);
//             data.appendChild(li);
//         }

//     }
//     count += 1
//     nameInput.value = '';
//     emailInput.value = '';
// }

// function removeItem(event) {
//     //console.log("(event.srcElement.id)", event.srcElement.id)
//     var myLi = document.getElementById(event.srcElement.id);
//     myLi.remove()
// }

// task-14 

function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phoneNumber = event.target.PhoneNumber.value;
    const obj = {
        name, 
        email,
        phoneNumber
    }
    //for API
    axios.post("https://crudcrud.com/api/f6c32e1a123d4446a1b723b088eda83a/appointmentapp",obj)
    .then((Response)=>{
        showNewUserOnScreen(Response.data)
        console.log(Response);
    })
    .catch((err)=>{
        document.body.innerHTML =document.body.innerHTML+"<h4> Somethings Went wrong.</h4>"
        console.log(err)
    })
    username.value='';
    emailId.value='';
    PhoneNumber.value='';
    //for local storage

    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showNewUserOnScreen(obj)
}
window.addEventListener('DOMContentLoaded', (event) => {
    //for API

    axios.get("https://crudcrud.com/api/f6c32e1a123d4446a1b723b088eda83a/appointmentapp")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    //for local storage

    // Object.keys(localStorage).forEach(key => {
    //     const user = JSON.parse(localStorage.getItem(key))
    //     showNewUserOnScreen(user)
    // })
});

function showNewUserOnScreen(user) {
    //for API
    
    if(localStorage.getItem(user.email)!== null) {
        removeUserFromScreen(user.email);
    }
    const parentNode  = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email} - ${user.phoneNumber}
    
    <button onclick=deleteUser('${user._id}')> Delete User</button>
    <button onclick=editUserDetails('${user.name}','${user.email}','${user.phoneNumber}','${user._id}')>Edit Details</button>
    
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    //for local storage
    // console.log(localStorage.getItem(user.email));
    // if(localStorage.getItem(user.email)!== null) {
    //     removeUserFromScreen(user.email);
    // }
    // const parentNode  = document.getElementById('listOfUsers');
    // const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.phoneNumber}
    
    // <button onclick=editUserDetails('${user.name}','${user.email}','${user.phoneNumber}')>Edit Details</button>
    // <button onclick=deleteUser('${user.email}')> Delete User</button>
    // </li>`
    // parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/f6c32e1a123d4446a1b723b088eda83a/appointmentapp/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId);
    })
    .catch((err)=>{
        console.log(err)
    })
    localStorage.removeItem(userId);
    removeUserFromScreen(userId);
}
function removeUserFromScreen(userId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
function editUserDetails ( username, emailId, PhoneNumber,userId) {
    document.getElementById('username').value = username;
    document.getElementById('emailId').value = emailId;
    document.getElementById('PhoneNumber').value = PhoneNumber;

    deleteUser(userId);
}