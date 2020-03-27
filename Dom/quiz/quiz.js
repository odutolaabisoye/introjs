const correctAnswers = ['B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const cla =document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((useranswer, index) => {
      if ( useranswer === correctAnswers[index])
      score += 25;
    });

    scrollTo(0,0);
    cla.style.display = "block"
 //   cla.querySelector('span').textContent = `${score}%`
    let output = 0;
    const timer = setInterval(() => {
        cla.querySelector('span').textContent = `${output}%`;
        if(output ===score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
    
});

