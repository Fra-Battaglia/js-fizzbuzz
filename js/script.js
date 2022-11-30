// 1 - dichiara i numeri da 1 a 100

const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
	
	// 2 - sostituisci i numeri con le fizz o buzz a seconda del multiplo
	
	// 2.1 - sostituisci con "FizzBuzz" i multipli di 3 e 5

	if (i % 3 == 0 && i % 5 == 0) {
		let number = `FizzBuzz`;
		container.innerHTML += `<div class="number fizzbuzz">${number}</div>`;
	}

	// 2.2 - sostituisci con "Fizz" i multipli di 3
	
	else if (i % 3 == 0) {
		let number = `Fizz`;
		container.innerHTML += `<div class="number fizz">${number}</div>`;
	}
	
	// 2.3 - sostituisci con "Buzz" i multipli di 5
	
	else if (i % 5 == 0) {
		let number = `Buzz`;
		container.innerHTML += `<div class="number buzz">${number}</div>`;
	}

	else {
		let number = i;
		container.innerHTML += `<div class="number">${number}</div>`;
	}
	
	// 3 - Stampa tutto

	console.log(i);
}


