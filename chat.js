let chat_room_name = document.querySelector('h1');
let sender_text = document.getElementById('sender');
let btn = document.querySelector('button');
let Form = document.getElementById('myForm');
let message = document.getElementById('message');
let user = document.getElementById('user');

let message__board = document.querySelector('.message__board')

let delIcon = document.querySelectorAll('.del');

// target the trash elements
let del1 = document.getElementById('del1');
let del2 = document.getElementById('del2');
let sent__message__container1 = document.querySelector('.send_message1');
let sent__message__container2 = document.querySelector('.send_message2');

// Function to delete the message




// CODE FOR THE EMOJI TRAY


// To set the abb of the room name
// room__name__abb = localStorage.getItem('room_name');

chat_room_name.innerHTML = localStorage.getItem('room_name')
let first_val = localStorage.getItem('room_name')[0][0]

let abb = document.getElementById('abb')

abb.innerHTML = chat_room_name.innerHTML[0].toUpperCase()

let new__abb = localStorage.getItem('room_name').split(' ')
function name(){
if (localStorage.getItem('room_name').length > 1){
    let last_val = new__abb[1][0]
    last_val = ''
    abb.innerHTML =  first_val + new__abb[1][0]
    }
}




// Function to Send  a message
function Send_message(e){
    e.preventDefault()
    if (message.value.length > 0){
        // sent__message__container2.style.display = 'flex'

        // sender_text.innerHTML = message.value
        // After sending the message the value should b an empty string
        

        let d = new Date();
        let n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        let time = n.toLocaleLowerCase();

        let outer_div = document.createElement('Div');
        outer_div.classList.add('messenger');
        outer_div.classList.add('messages');
        outer_div.style.display = 'flex';
        let img = document.createElement('img');
        img.classList.add('del');
        img.setAttribute('src', './images/delete.png')
        outer_div.style.marginBottom = '25px';
        outer_div.style.alignSelf = 'flex-end'
        let inner_div = document.createElement('Div');
        inner_div.classList.add('sender__message2');
        let p = document.createElement('p');
        p.classList.add('sender');
        p.innerHTML = message.value;
        let small = document.createElement('Small');
        small.innerHTML = time;
        inner_div.appendChild(p);
        inner_div.appendChild(small);
        outer_div.appendChild(inner_div);
        outer_div.appendChild(img);
        message__board.appendChild(outer_div);

        message.value = ''
        
        delIcon = document.querySelectorAll('.del');
        delIcon.forEach(e => {
            e.setAttribute('onclick', 'deleteChat(this)')
        });

        function deleteChat(e) {
            e.parentElement.remove(e);

        }

            
        isTyping = false
        hide_Mymessage()
        clearChat()
        deleteAfterTimeOut()

        // to change the initial date to current date, get Date object 
    }
    else{
        // If nothing is in the input field the Message container shoul retain its value
        message.value = message.value
    }
    
}





delIcon.forEach(e => {
    e.setAttribute('onclick', 'deleteChat(this)')
});

function deleteChat(e) {
    e.parentElement.remove(e);

}

// getting the variables that the user sent in to the Local storage 


let user_text;
message.addEventListener('keypress', isTyping)   //Need to work on this

// Checks if the useris pressing a key then adds is typing to concat with the username

function isTyping(){
    if(message.value.length >= 0){
        user.innerHTML = localStorage.getItem('chat_name') + ' is typing' 
    }
    else{
        user.innerHTML = ''
    }
}





Form.addEventListener('submit', Send_message)

// Functions for the checkbox events

// switch is for hide chat
// Hide messages


let hide_switch = document.getElementById('switch');
hide_switch.addEventListener('change', hide_Mymessage);

function hide_Mymessage(){
    messenger = document.querySelectorAll('.messenger')
    if (hide_switch.checked == true){
        messenger.forEach((chat => {
            chat.style.display = 'none'
        }))
    }
    else{
        messenger.forEach((chat => {
            chat.style.display = 'flex'
        }))
    }
    
}


// Delete Chats

let delete__all = document.getElementById('del_all__chat')
delete__all.addEventListener('change', clearChat)
function clearChat(){
   let messages = document.querySelectorAll('.messages')
    if (delete__all.checked == true){
        messages.forEach((mes) =>{
            mes.remove()
        })
        
    }
    delete__all.checkd =false
}

// Last checkbox

let count = document.getElementById('count');


let minus = document.getElementById('minus')
minus.addEventListener('click', minusBtn)

function minusBtn(){
    count.innerHTML--
    if (count.innerHTML == -1){
        count.innerHTML = 0
    }
    else{
        document.getElementById('count').innerHTML = count.innerHTML
        
    }
    
}


let plus = document.getElementById('plus');
plus.addEventListener('click', plusBtn);

function plusBtn(){
    count.innerHTML++
    document.getElementById('count').innerHTML = count.innerHTML
    
}


//setTimeOut function

let setInt = document.getElementById('setInt');

setInt.addEventListener('change', deleteAfterTimeOut);

function deleteAfterTimeOut(){
    if(setInt.checked == true && count.innerText > 0){
        let chatbot = document.querySelectorAll('.messages');
        setTimeout((e => {
             chatbot.forEach(e => {
                e.remove();
            })
        }), (count.innerText*1000))
    }
    else{
        clearInterval(deleteAfterTimeOut)
    }
}


// Add class for that emoji box

let emoji_bucket = document.getElementById('emoji_bucket')

let emoji_icon = document.querySelector('.emoji_icon');

emoji_icon.addEventListener('click', displayEmoji)
function displayEmoji(){
    emoji_bucket.classList.toggle('emoji__tray')
}


// Add emojis to the typing  box

let sending_emojis = document.querySelectorAll('.emojis')
function addItToMessage(emoji) { 
    message.value += emoji.innerHTML
    message.focus()
}
sending_emojis.forEach(emoji => {
    emoji.addEventListener('click',() => addItToMessage(emoji))
})


// To make the settings to show
let chat = document.querySelector('.chat')
let settings = document.querySelector('.settings__button')
let advanced_settings = document.getElementById('advanced_works')

function showSettings(){
    advanced_settings.classList.toggle('like_menu')
    chat.style.display = 'none'
    advanced_settings.style.display = 'block'
}

settings.addEventListener('click', showSettings)

// Cancel button
let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', close)
function close() {
    advanced_settings.style.display = 'none'
    chat.style.display = 'block'
}