const bt = document.getElementById('bt');
const inputText = document.getElementById('input');
const boxResult = document.getElementById('result');

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

bt.addEventListener('click', () => {
    boxResult.innerText = '';
	console.log(inputText.value);
	let element = alphabetize(inputText.value);
	console.log(element)
	for(let i = 0; i < palavras.length;i++){
		if(element === alphabetize(palavras[i])){
			const p = document.createElement('p');
			p.innerText += palavras[i];
            boxResult.appendChild(p);
		}
	}
});