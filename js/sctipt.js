alert('fizzquiz');
//Scrivi un programma che stampi i numeri da 1 a 100,ma per i multipli di 3 stampi “Fizz” alposto del numero e per i multipli di 5 stampi Buzz.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//step 1: scrivere un programma che stampi i numeri da 1 a 100
//step 2:individua multipli di 3 e stampa 'Fizz' al posto del numero
//step 3:individua multipli di 3 e 5 ergo di 15 e stampa 'fizzbuzz'
for(var i=0; i<=100; i++){
  var contenuto = document.getElementById('listaNumeri').innerHTML;
  var testo = '<li>'+ i+ '</li>';

  if(i % 5 == 0 && i % 3 == 0){
  testo = '<li>fizzbuzz</li>';
  console.log(i, 'fizzbuzz');
  }
  else if(i % 3 == 0){
  testo = '<li>fizz</li>';
  console.log(i, 'fizz');
  }
  else if (i % 5 == 0){
  testo = '<li>Buzz</li>';
  console.log(i, 'Buzz');
  }
  document.getElementById('listaNumeri').innerHTML = contenuto + testo;
}
