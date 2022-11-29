// 1 - stampa i numeri da 1 a 100 sulla console

for (let i = 1; i <= 100; i++) {
	let number = i;
	
	
	// 2 - sostituisci i numeri con le fizz o buzz a seconda del multiplo
	
	// 2.1 - sostituisci con "FizzBuzz" i multipli di 3 e 5

	if (number%3 == 0 && number%5 == 0) {
		number = `FizzBuzz`;
	}

	// 2.2 - sostituisci con "Fizz" i multipli di 3
	
	else if (number%3 == 0) {
		number = `Fizz`;
	}
	
	// 2.3 - sostituisci con "Buzz" i multipli di 5
	
	else if (number%5 == 0) {
		number = `Buzz`;
	}
	
	console.log(number);
}


