// Add your code here
function submitData (name, email){
let users= {    
    name:name,
    email:email,
};

let configurationObject = {
 method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(users),
};

return fetch("http://localhost:3000/users", configurationObject)
.then(function (response) {
    return response.json();
})
.then(function (object) {
    let h3 = document.createElement('h3')
    h3.innerHTML = object.id;
    document.body.appendChild(h3)
    console.log(object);
})
.catch(function (error){
    let h3 = document.createElement('h3')
    document.body.appendChild(h3)
    h3.innerHTML = error.message;
    console.log(error.message)
})
};
submitData('luca', 'luca@gmail.com');