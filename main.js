let room_name = document.getElementById('room_name');
let chat_name = document.getElementById('chat_name');
let Form = document.getElementById('myForm')
let btn = document.getElementById('btn');
let chat_input = document.querySelector('.chat__inputs')

Form.addEventListener('submit', submitForm)

room_name.focus()

function submitForm(e){
    e.preventDefault()
    if (chat_name.value.length > 0 && room_name.value.length > 0){
        localStorage.setItem('room_name', room_name.value)
        localStorage.setItem('chat_name', chat_name.value)
        window.location.href = window.location.href.replace('chat.html');      
    }else{
        chat_input.style.border = '1px solid red' 
    }
    
   
}
let main = document.querySelector('main')

let home__screen = document.querySelector('.home__screen')
setTimeout(e => {
    home__screen.style.display = 'none'
    main.style.display = 'flex'
}, 3000)