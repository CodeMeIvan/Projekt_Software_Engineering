const posts = [
  {
    postHeader: 'Welche Antwort ist richtig? Es können mehrere Antworten richtig sein', 
    postDate: '12.10.25', 
    postAnswers: ['Antwort 1', 'Antwort 2', 'Antwort 3'], 
    correctAnswers: ['answer-1', 'answer-2']},
  {
    postHeader: 'Welche Antwort ist richtig? Es können mehrere Antworten richtig sein', 
    postDate: '14.10.25', 
    postAnswers: ['Antwort 1', 'Antwort 2', 'Antwort 3'], 
    correctAnswers: ['answer-2']}
];

const myFollowList = ['Informatik', 'Wirtschaftsinformatik'];

const myFavorites = [{post: 1}, {post: 2}];

const myQuestions = [{}]


// const possibleAnswersContainer = document.getElementsByClassName('.posssible-answers-container');

possibleAnswersContainer[0].addEventListener('change', (e) => {
  if(e.target.matches('.possible-answer-checkbox')) {
    log(posts[1].correctAnswers.keys)
  }
})

// console.log(posts[1])