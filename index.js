//Shira koka 214253817 Mosh Meron 206206419

let fromBase = null;
let toBase = null;


const fromBinary = document.querySelector('#from_box #binary');
const fromOctal = document.querySelector('#from_box #octal');
const fromDecimal = document.querySelector('#from_box #decimal');
const fromHex = document.querySelector('#from_box #hex');

const toBinary = document.querySelector('#to_box #binary');
const toOctal = document.querySelector('#to_box #octal');
const toDecimal = document.querySelector('#to_box #decimal');
const toHex = document.querySelector('#to_box #hex');


const inputDiv = document.getElementById('input');
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'input-number';
inputField.placeholder = 'Enter number';
inputDiv.appendChild(inputField);


const convertBtn = document.getElementById('convert');


function selectBase(divs, selectedDiv) {
    divs.forEach(div => div.classList.remove('selected'));
    selectedDiv.classList.add('selected');
}


fromBinary.addEventListener('click', () => {
    fromBase = 2;
    selectBase([fromBinary, fromOctal, fromDecimal, fromHex], fromBinary);
});
fromOctal.addEventListener('click', () => {
    fromBase = 8;
    selectBase([fromBinary, fromOctal, fromDecimal, fromHex], fromOctal);
});
fromDecimal.addEventListener('click', () => {
    fromBase = 10;
    selectBase([fromBinary, fromOctal, fromDecimal, fromHex], fromDecimal);
});
fromHex.addEventListener('click', () => {
    fromBase = 16;
    selectBase([fromBinary, fromOctal, fromDecimal, fromHex], fromHex);
});


toBinary.addEventListener('click', () => {
    toBase = 2;
    selectBase([toBinary, toOctal, toDecimal, toHex], toBinary);
});
toOctal.addEventListener('click', () => {
    toBase = 8;
    selectBase([toBinary, toOctal, toDecimal, toHex], toOctal);
});
toDecimal.addEventListener('click', () => {
    toBase = 10;
    selectBase([toBinary, toOctal, toDecimal, toHex], toDecimal);
});
toHex.addEventListener('click', () => {
    toBase = 16;
    selectBase([toBinary, toOctal, toDecimal, toHex], toHex);
});

function convert() {
    const inputValue = inputField.value.trim();

    if (fromBase == null || toBase == null) {
        alert('Please select both FROM and TO bases.');
        return;
    }

    if (inputValue === '') {
        alert('Please enter a number.');
        return;
    }

    const validInputs = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^\d+$/,
        16: /^[0-9a-fA-F]+$/
    };

    if (!validInputs[fromBase].test(inputValue)) {
        alert('Invalid number for selected base.');
        return;
    }

    const decimalValue = parseInt(inputValue, fromBase);
    let result = decimalValue.toString(toBase);

    if (toBase === 16) {
        result = result.toUpperCase(); 
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `Result: ${inputValue} (${fromBase}) = ${result} (${toBase})`;

    inputField.value = ''; 
}

convertBtn.addEventListener('click', convert);
>>>>>>> 175216a6c46150839c55ffa166d285f605bece3e
