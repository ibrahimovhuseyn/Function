let istifadeci = document.getElementById("istifadeci")
let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
let btn = document.getElementById("btn")
let clear = document.getElementById("clear")
let tablebody = document.querySelector("table tbody")
let div = document.getElementById("div")

let userlist = [{
    id: 1,
    fullname: "Huseyn Ibrahimov",
    email: "Huseyn@mail.ru",
    delete: "<button>Silmek</button>"
}]

function render(){
    tablebody.innerHTML = ""
    userlist.forEach(item => {
        tablebody.innerHTML +=  ` <tr>
                    <th>${item.id}</th>
                    <td>${item.fullname}</td>
                    <td>${item.email}</td>
                </tr>`
    })
    istifadeci.value = ""
    fullname.value = ""
    email.value = ""
}
btn.addEventListener("click", additem)

function additem(){
    if( istifadeci.value && fullname.value && email.value){
        div.classList.remove("alert","alert-dark")
        div.innerHTML=""
        userlist.push({
            id: istifadeci.value ,
            fullname: fullname.value ,
            email: email.value ,
            delete: "<button>Silmek</button>",
        })
        render()
    }else{
        div.classList.add("alert","alert-dark")
        div.innerHTML="Xananani doldur"
    }
}

function sifirla(){
    istifadeci.value = ""
    fullname.value = ""
    email.value = ""
}
render()
clear.addEventListener("click", sifirla)