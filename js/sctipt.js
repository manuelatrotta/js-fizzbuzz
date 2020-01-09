alert('fizzquiz');
//Scrivi un programma che stampi i numeri da 1 a 100,ma per i multipli di 3 stampi “Fizz” alposto del numero e per i multipli di 5 stampi Buzz.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//step 1: scrivere un programma che stampi i numeri da 1 a 100
//step 2:individua multipli di 3 e stampa 'Fizz' al posto del numero
for(var i=100; i>=0; i--){
  console.log(i);
  if(i % 3 ==0)
  console.log('fizz');
  else if (i % 5 == 0)
  console.log("Buzz");
}
