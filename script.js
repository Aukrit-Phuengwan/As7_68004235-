const video = document.getElementById("myVideo")
const password = document.getElementById("password")
const eyeIcon = document.getElementById("eyeIcon")

function playVideo(){
video.play()
}

function stopVideo(){
video.pause()
}

function togglePassword(){
if(password.type === "password"){
password.type = "text"
eyeIcon.classList.remove("bi-eye-slash")
eyeIcon.classList.add("bi-eye")
}else{
password.type = "password"
eyeIcon.classList.remove("bi-eye")
eyeIcon.classList.add("bi-eye-slash")
}
}