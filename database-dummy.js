// --------------------dieser Bereich befindet sich noch in Arbeit--------------------
// bisher implementiert:
//  dynamisches Laden von Beiträgen aus einer Dummy-Datenbank,
//  Folgen-Knopf wird nur für nicht gefolgte Kurse angezeigt, nach Klick wird der Kurs der myFollowsList hinzugefügt (keine persistente Speicherung, da keine echte Datenbank) und danach deaktiviert
//  Antwortmöglichkeiten auswählen mit visuellem Feedback,
//  Auswerten-Knopf blendet die Erklärung und Antwort-Feedback ein,
//  nach Auswertung werden Antwortmöglichkeiten deaktiviert

const posts = [
  {
    postID: "post-1",
    postDate: new Date("2025-11-11T23:20:00Z"),
    author: "Max Mustermann",
    degree: "B.Sc. Informatik",
    course: "Requirements Engineering",
    questionType: "Multiple-Choice",
    question: "Du möchtest den Systemüberblick für deinen Projektmanager dokumentieren. Für welches UML-Diagramm entscheidest du dich?", 
    answers: ["Objektdiagramm", "Use-Case-Diagramm", "Klassendiagramm", "Sequenzdiagramm"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems.",
    privatePost: false,
    likes: 12,
    comments: [
      {
        username: "Andrea Berg", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-11T23:24:12Z"), 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      },
      {
        username: "Felix Blume", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-12T11:14:55Z"), 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      } 
    ]
  },
  {
    postID: "post-2",
    postDate: new Date("2025-10-28T12:20:11Z"),
    author: "Max Mustermann",
    degree: "B.Sc. Wirtschaftsinformatik",
    course: "Finanzierung",
    questionType: "Multiple-Choice",
    question: "Teste die unterschiedlichen Antwortkombinationen", 
    answers: ["Antwort 1 ist falsch", "Antwort 2 ist richtig", "Antwort 3 ist richtig"], 
    correctAnswer: ["answer2", "answer3"],
    explanation: "Hier steht die Erklärung",
    privatePost: false,
    likes: 25,
    comments: [
      {
        username: "Andrea Berg", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-11T23:24:12Z"), 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      },
      {
        username: "Felix Blume", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-12T11:14:55Z"), 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      } 
    ]
  }
];

function randomizeBackground() {
  return "DarkSlateGrey";
}

const myFollowList = ['Requirements Engineering', 'Wissenschaftliches Arbeiten'];

const myFavorites = [{post: 1}, {post: 2}];

const myQuestions = [{}]



// get the time difference between postDate and current time
function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { label: "Jahr", seconds: 31536000 },
    { label: "Monat", seconds: 2592000 },
    { label: "Tag", seconds: 86400 },
    { label: "Stunde", seconds: 3600 },
    { label: "Minute", seconds: 60 },
    { label: "Sekunde", seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    
    if (count >= 1) {
      switch(interval.label) {
        case "Jahr":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        case "Monat":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        case "Tag":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        default:
          return `vor ${count} ${interval.label}${count > 1 ? "n" : ""}`;
      }
    }
  }
    return "gerade eben";
}
    
// --------------------load posts feed--------------------

const postsFeed = document.getElementById('posts-feed');

document.addEventListener('DOMContentLoaded', () => {
  let answerID = 1;
  let postAnswersFormID = 1;

  posts.forEach((post) => {
    let answerName = 1;

    // options array
    let answerContent = [];
    // push answer options into answerContent array
    post.answers.forEach((answer) => {
      let answerOption = `
      <label for="answer-option-${answerID}" class="answer-option checkmark-label">
        <input type="checkbox" name="answer${answerName}" id="answer-option-${answerID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">${answer}</p>
      </label>                      
      `;
      answerID++;
      answerName++;

      answerContent.push(answerOption)
    });
    // join answer options into a single string for rendering
    let answerOptionsContent = answerContent.join("");

    // check if the user follows post.course
    let courseFollowed = myFollowList.includes(post.course);
    // follow button is rendered when course is not followed
    function renderFollowButton(followStatus) {
      let followButton = "";
      
      if(followStatus) {                      
        followButton = `
        <span>&#128900;</span>
        <div class="button-ghost" onclick="followCourse(event)">Folgen</div>                      
        `;
      }
      return followButton                    
    }

    let postContent = `
      <article id="${post.postID}" class="post">
              <div class="post-info">
                <div class="post-specifications">
                  <div class="course-name link" data-course-name="${post.course}" title="Zum Kurs wechseln">k/${post.course}</div>
                  <span>&#128900;</span>
                  <div class="post-date">${timeSince(post.postDate)}</div>
                  ${renderFollowButton(!courseFollowed)}
                </div>
                <div class="post-menu button-icon"><i class="material-icons">more_horiz</i></div>
              </div>
              <div class="post-card">
                <header class="post-card-header">
                  <h2 class="post-heading">${post.question}</h2>
                </header>
                <div class="post-card-content">
                  <form id="post-answers-form${postAnswersFormID}" class="post-answers">
                    <div class="post-card-question-type">${post.questionType}:</div>
                    <div class="answer-options-container">
                      ${answerOptionsContent}
                    </div>
                  </form>
                  <button form="post-answers-form${postAnswersFormID}" type="submit" class="submit-answer-button button-primary button--inactive">Auswerten</button>
                </div>
                <div class="divider"></div>
                <div class="post-card-footer">
                  <div class="flex-container align-center gap-0">
                    <button class="like-button user-feedback-button" title="Gefällt mir">
                      <div class="button-icon animation-container" onclick="likePost(event)">
                        <i class="material-icons">favorite_border</i>
                        <div class="animation-item hide-visibility">
                          <i class="material-icons">favorite</i>
                        </div>
                      </div>
                      <span class="user-feedback-counter">${post.likes}</span>
                    </button>                  
                    <button class="comment-button user-feedback-button" title="Kommentare anzeigen">
                      <div class="button-icon"><i class="material-icons">chat_bubble_outline</i></div>
                      <span class="user-feedback-counter">${post.comments.length}</span>
                    </button>                  
                  </div>                                  
                  <div class="flex-container align-center gap-0">
                    <button class="share-post-button user-feedback-button button-icon" title="Beitrag teilen"><i class="material-icons" style="transform: scale(-100%, 100%);">reply</i></button>
                    <button class="save-post-button user-feedback-button button-icon" title="Beitrag speichern"><i class="material-icons">bookmark_border</i></button>
                  </div>
                </div>
              </div>
            </article>
            <div class="divider"></div>
    `;

    postAnswersFormID++;

    postsFeed.insertAdjacentHTML("beforeend", postContent);

  })
})

// follow button adds a course to myFollowList
function followCourse(e) {
  // get course name
  let courseName = e.currentTarget.parentElement.firstElementChild.attributes[1].textContent;
  // check whether course is followed (safety measure, because follow buttons should only be rendered when course is not followed)
  let followed = myFollowList.includes(courseName);
  // add course to myFollowList and deactivate follow button
  if(!followed) {
    myFollowList.push(courseName);
    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }

}


postsFeed.addEventListener('click', (e) => {
  if(e.target.matches('.answer-option-input')) {
    const answerOptions = Array.from(e.target.parentElement.parentElement.children);
    const submitButton = e.target.parentElement.parentElement.parentElement.nextElementSibling;

    e.target.parentElement.classList.toggle('answer-option-selected');
    
    let selectionMade = answerOptions.some((answerOption) => {
      return answerOption.matches('.answer-option-selected');
    })

    selectionMade ? submitButton.classList.remove('button--inactive') : submitButton.classList.add('button--inactive')
    
  }

  // console.log(e.target)

  // if(e.target.matches('.like-button')) {
  //   console.log(e.target)
  // }
  
})

function changeLikeCount(targetCounter, postLiked, button) {
  if(!postLiked) {
    const likeAttribute = document.createAttribute('data-liked');
    button.setAttributeNode(likeAttribute);
    targetCounter.innerText++;
  } else {
    targetCounter.innerText--;
    button.removeAttribute('data-liked');
  }
}

function likePost(event) {
  const likeButton = event.currentTarget;
  const likeAnimationIcon = likeButton.children[1];
  const counter = event.currentTarget.nextElementSibling;
  const isPostLiked = likeButton.hasAttribute('data-liked');

  likeButton.firstElementChild.classList.toggle('hide-visibility');
  likeAnimationIcon.classList.toggle('hide-visibility');
  likeAnimationIcon.classList.toggle('like-animation');

  // const likeButtonAttributes = likeButton.attributes;
  // const likeButtonAttributesArray = Array.from(likeButtonAttributes)
  
  // const isPostLiked = likeButtonAttributesArray.some((attribute) => {
  //   return attribute.name === "data-liked";
  // })
  
  
  // const isPostLiked = likeButtonAttributesArray.length == 3;
  
  changeLikeCount(counter, isPostLiked, likeButton);

  // console.log(isPostLiked)

}


postsFeed.addEventListener('submit', (e) => {
  e.preventDefault();
  const postCardContent = e.target.parentElement;
  const submitButton = e.target.nextElementSibling;
  // hide the show result button
  submitButton.classList.add('hidden');

  const postQuestion = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText;
  const answerOptions = Array.from(e.target.children[1].children);
  
  // find the post that was submitted for evaluation
  const correspondingPost = posts.find((post) => {
    return post.question === postQuestion;
  })

  // collect user answers
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());
  const userAnswers = Object.keys(entries);
  
  // check if all user answers match correct answers
  const isUserSelectionCorrect = userAnswers.every((userAnswer) => {
    return correspondingPost.correctAnswer.includes(userAnswer);
  })

  const correctAnswerOptions = answerOptions.filter((answerOption) => {
    let optionName = answerOption.firstElementChild.name;
    let isCorrectAnswerOption = correspondingPost.correctAnswer.includes(optionName);
    if(isCorrectAnswerOption) {
      return answerOption
    }
  });
  
  const allCorrectAnswersSelected = correctAnswerOptions.every((answer) => {
    return answer.matches('.answer-option-selected');
  });
  
  
  const isCorrectAnswer = allCorrectAnswersSelected && isUserSelectionCorrect ? true : false;

  function answerFeedbackResult() {
    if(isCorrectAnswer) {
      return "Ihre Antwort ist richtig"
    }

    if(isUserSelectionCorrect && !allCorrectAnswersSelected) {
      return "Ihre Antwort ist nur teilweise richtig"
    }

    if(!isCorrectAnswer) {
      return "Ihre Antwort ist leider falsch"
    }

  }

  function feedBackResultColor() {
    if(isCorrectAnswer) {
      return "correct-answer"
    }

    if(isUserSelectionCorrect && !allCorrectAnswersSelected) {
      return "partially-correct-answer"
    }

    if(!isCorrectAnswer) {
      return "wrong-answer"
    }
  }

  // find the selected answer-option and change style depending
  answerOptions.forEach((answer) => {
    // get the selection
    let selectedOption = answer.matches('.answer-option-selected');
    // if answer-option is selected check whether the answer is correct or wrong
    if(selectedOption) {
      let selectionName = answer.firstElementChild.name;
      let isCorrectSelection = correspondingPost.correctAnswer.includes(selectionName);
      
      isCorrectSelection ? answer.classList.add('correct-answer-option') : answer.classList.add('wrong-answer-option');
    }

    answer.classList.add('answer-option-disabled');
  })
  
  let result = `
  <div class="solution-container">
    <div class="answer-feedback">
      <div class="answer-feedback-result ${feedBackResultColor()}">${answerFeedbackResult()}</div>                
      <button class="show-solution-button button-ghost"><i class="material-icons">keyboard_arrow_down</i>Erklärung anzeigen</button>
    </div>
    <div class="solution-content hidde">${correspondingPost.explanation}</div>
  </div>
  `;

  postCardContent.insertAdjacentHTML("beforeend", result);
})

// function evaluateResult(event) {
//   const postQuestion = event.currentTarget.parentElement.parentElement.firstElementChild.firstElementChild.innerText;

//   let correspondingPost = posts.find((post) => {
//     return post.question === postQuestion;
//   })

//   let result = `
//   <div class="solution-container">
//     <div class="answer-feedback">
//       <div class="answer-feedback-result correct-answer">Ihre Antwort ist richtig!</div>                
//       <button class="show-solution-button button-ghost"><i class="material-icons">keyboard_arrow_down</i>Erklärung anzeigen</button>
//     </div>
//     <div class="solution-content hidde">${correspondingPost.explanation}</div>
//   </div>
//   `;

//   event.currentTarget.parentElement.insertAdjacentHTML("beforeend", result);

//   event.currentTarget.classList.add('hidden');
// }
