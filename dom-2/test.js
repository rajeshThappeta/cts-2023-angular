let div=document.querySelector('div')

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(httpRes=>httpRes.json())
    .then(usersList=>{

        // for(let userObj of usersList){
        //     tbody.innerHTML+=`<tr>
        //         <td>${userObj.id}</td>
        //         <td>${userObj.name}</td>
        //         <td>${userObj.username}</td>
        //         <td>${userObj.email}</td>
        //     </tr>`
        // }

        for(let userObj of usersList){
            div.innerHTML+=`<div class='col'>
                <div class='card card-body'>
                    <h2>${userObj.id}</h2>
                    <p class='lead'>${userObj.name}</p>
                    <p class='lead'>${userObj.username}</p>
                    <p class='lead'>${userObj.email}</p>
                </div>
            </div>`
        }

    }).catch(err=>console.log(err))
}

getUsers()