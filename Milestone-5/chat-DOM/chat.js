
let c = 0;
document.getElementById('send-btn').addEventListener('click', function(){
    c++;
    
    const chatBox = document.getElementById('chat-box');
    const chatValue = chatBox.value;
    const chat = document.getElementById('chat-main');
   //  const start = document.getElementById('chat-container-start');
   //  const end = document.getElementById('chat-container-end');
    
     if (c%2===1) {
        let text = 'msg'+ c.toString();
        const newChat = document.createElement('div');
        const chatBubble = document.createElement('div');
        newChat.classList.add('chat', 'chat-start', text);
        chatBubble.classList.add('chat-bubble','chat-bubble-primary', 'mt-3');
        chatBubble.innerText = chatValue;
        chat.appendChild(newChat);
        start.appendChild(chatBubble);
        chatBox.value = '';
     } 
     else {
        let text = 'msg'+c.toString();
        const newChat = document.createElement('div');
        const chatBubble = document.createElement('div');
        newChat.classList.add('chat', 'chat-end', text);
        chatBubble.classList.add('chat-bubble','chat-bubble-success', 'mt-3');
        chatBubble.innerText = chatValue;
        chat.appendChild(newChat);
        end.appendChild(chatBubble);
        chatBox.value = '';
     }
    
    
    
    
     console.log(c);
 
})
