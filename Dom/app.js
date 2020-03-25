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
cla.setAttribute('style', 'color:green; font-size: 30px')

cla.style.margin = "10px"
cla.style.fontSize = "40px"

//to delete a style - set it to empty string
cla.style.margin = ""

//gET CLASS AND chnage
const contenta = document.querySelector('h2');
contenta.classList.add('error');
contenta.classList.remove('cerror');

//innerText shows all the text that are not hidden
//while the TextContent shows all the text

//We can also pick part ofthe text content and  assign a class to
const paras = document.querySelectorAll('h3');
paras.forEach(h3 => {
    if(h3.textContent.includes('error')){
        h3.classList.add('error');
    }
    if(h3.innerText.includes('success')){
        h3.classList.add('success');
    }
})