var btn = document.getElementsByClassName("btn-primary")
var btn = document.getElementsByClassName ("modal")

btn.onclick = function(){
    const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
}