// Fibonacci. Rumus Fn = (Fn-1) + (Fn-2)
function fibo(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibo(n - 1) + fibo(n - 2);
	}
}

// Faktorial. Rumus n! = n * (n-1) * (n-2) * ...
function fact(n) {
	if (n === 0) return 1;
	return n * fact(n-1);
}
