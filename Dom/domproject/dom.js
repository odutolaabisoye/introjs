const form = document.querySelector('form');

let val = document.querySelector('#amount');
const btnup = document.querySelector('.up-btn')

form.addEventListener('submit', e => {
    e.preventDefault()
    btnup.addEventListener('click', () => {
        newval = val.value
        let newvalue =  newval.toUpperCase();
        newval == newvalue
        console.log(newvalue)
        let result = document.querySelector('.result');
        result.innerHTML = newvalue;
        })
});
/*
let uppercase = () => {
newval = val.value
let newvalue =  newval.toUpperCase();
newval == newvalue
console.log(newvalue)
let result = document.querySelector('.result');
result.innerHTML = newvalue;
} */




