const API = "http://BACKEND_URL/api"

async function load(){
const res = await fetch(API+"/messages")
const data = await res.json()

const list = document.getElementById("messages")
list.innerHTML=""

data.forEach(m=>{
const li = document.createElement("li")
li.innerText = m
list.appendChild(li)
})
}

async function send(){

const msg = document.getElementById("msg").value

await fetch(API+"/messages",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message:msg})
})

load()
}

load()
