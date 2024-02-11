document.getElementById('send-btn').addEventListener('click', function(){
   
    const chatBox = document.getElementById('chat-box');
    const chatValue = chatBox.value;
    const chatContainer = document.getElementById('chat-container');
    const newChat = document.createElement('div');
    
    newChat.classList.add('chat-bubble','chat-bubble-primary', 'mt-3');

    newChat.innerText = chatValue;
    chatContainer.appendChild(newChat);
    chatBox.value = '';
 
})