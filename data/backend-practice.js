//this code actually works the same as typing on a browser 
const xhr = new XMLHttpRequest ();

//here we are waiting for our response
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'http://supersimplebackend.dev');
xhr.send();

