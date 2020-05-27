var risposta = document.getElementById('risposta');
for (var i = 1; i<= 100; i++) {
 if ( (i % 3 == 0) && (i % 5 == 0) ) {
   risposta.innerHTML += '  <li> FizzBuzz </li>';
 } else if ((i % 3 == 0)) {
   risposta.innerHTML += '<li> Fizz </li>';
 } else if (i % 5 == 0) {
   risposta.innerHTML += '<li> Buzz </li>';
 }else {
   risposta.innerHTML += '<li>' + i + '</li>';
 }
}
