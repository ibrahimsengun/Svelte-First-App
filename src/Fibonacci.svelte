<script>
	let numbers = [0, 1, 1];

	function addNumber() {
	  numbers[numbers.length] = sum;
	}

	$: sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];
</script>

<style>
	button {
	  background-color: #ff3e00;
	  color: white;
	  border: none;
	  padding: 12px 16px;
	  border-radius: 3px;
    }

    button:hover{
        background-color: #68453a;
    }
    #spanSum{
        color: #ff3e00;
        background-color: #d6bdb5;
        padding: 5px;
        border-radius: 10px;
    }
</style>

<h4>Fibonacci Dizisinin {numbers.length}. Elemanı</h4>

<p>{numbers.join(' + ')} = <span id="spanSum">{sum}</span></p>

<button on:click={addNumber}>
  Hesapla
</button>