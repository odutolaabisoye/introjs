const select = document.querySelector('p');
console.log(select)
console.log(select.innerText)
console.log(select.innerHTML)

//to updat the text
select.innerText =`This is a new Text`;
select.innerText += ' THis is another one';
select.innerHTML = '<h1>This is a new one</h1>'

//working with arrays

const content = document.querySelector('p');

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;

})

//this get attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//chnage the atttribute
link.setAttribute('href', 'https"//www.spexstudio.bix');
link.innerText = `SpexWebsite`;
console.log(link.getAttribute('href'));

//get and change clsss attribute
const cla =document.querySelector('.spex');
console.log(cla.getAttribute('class'))

cla.setAttribute('class', 'studio');
cla.innerText += ` helloe`
console.log(cla.getAttribute('class'))
console.log(cla.style)

//set style
cla.setAttribute('style', 'color:green; font-size: 50px')

cla.style.margin = "50px"
cla.style.fontSize = "80px"

//to delete a style - set it to empty string
cla.style.margin = ""

