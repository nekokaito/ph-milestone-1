function Color() {
    document.body.style.backgroundColor = '#1a1b26';
   return code;
}

document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lime';
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputOne = document.getElementById('input-one');
    const valueOne = inputOne.value;
    const inputTwo = document.getElementById('input-two');
    const valueTwo = inputTwo.value;
    const textOne  = document.getElementById('text-one');
    textOne.innerText = valueOne;
    const textTwo = document.getElementById('text-two');
    textTwo.innerText = valueTwo;

    inputOne.value =  '';
    inputTwo.value = '';

    

})
