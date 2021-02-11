// Using selectors inside the element
const questions = document.querySelectorAll('.question');
// console.log(questions);
questions.forEach(function(question) {
  // console.log(question);
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function() {
    questions.forEach(function(item) {
      if(item !== question) {
        item.classList.remove('show-text');
      }
    })

    question.classList.toggle('show-text');
  });
});

