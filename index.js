let username;

document.getElementById("btn").onclick=function(){
username=document.getElementById("user").value;
document.getElementById("h").textContent=`Hello ${username}`;
}