const Collection = document.getElementsByTagName('li');

for (const i of Collection) {
    console.log(i);
}
let Title = document.getElementById('welcome-text');
Title.innerText = 'Hola';
console.log(Title);

const Fav = document.getElementsByClassName('my-fav');
console.log(Fav);