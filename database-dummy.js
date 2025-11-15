// --------------------dieser Bereich befindet sich noch in Arbeit--------------------
// bisher implementiert:
//  dynamisches Laden von Beiträgen aus einer Dummy-Datenbank,
//  Folgen-Knopf wird nur für nicht gefolgte Kurse angezeigt, nach Klick wird der Kurs der myFollowsList[] hinzugefügt (keine persistente Speicherung, da keine echte Datenbank) und danach deaktiviert
//  Antwortmöglichkeiten auswählen mit visuellem Feedback,
//  Auswerten-Knopf blendet die Erklärung und Antwort-Feedback ein,
//  nach Auswertung werden Antwortmöglichkeiten deaktiviert
//  Multiple-Choice-Fragen lassen sich auswerten
//  Wahr-oder-Falsch-Fragen lassen sich auswerten
//  Like-Button animiert, verändert den Zähler beim Klick
//  Beitrag-speichern-Button animiert, noch keine Funktion
//  Erklärung lässt sich ein- und ausblenden

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
  },
  {
    postID: "post-3",
    postDate: new Date("2025-10-22T17:21:41Z"),
    author: "Max Mustermann",
    degree: "B.Sc. Wirtschaftsinformatik",
    course: "Seminar Software Engineering",
    questionType: "Wahr-oder-Falsch",
    question: "Diese Aussage ist wahr",  
    correctAnswer: ["trueStatement"],
    explanation: "Hier steht die Erklärung",
    privatePost: false,
    likes: 14,
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

const myFavorites = [{postID: "post-1"}, {postID: "post-2"}];

const myQuestions = [{postID: "post-1"}];



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

// when DOM content is loaded render post feed content
document.addEventListener('DOMContentLoaded', () => {
  let answerID = 1;
  let postAnswersFormID = 1;

  posts.forEach((post) => {
    let answerName = 1;

    
    function renderPostCardContent(questionType) {
      // options array
      let answerContent = [];
      // if question type is Multiple-Choice then render this content
      if(questionType === "Multiple-Choice") {
        // push answer options into answerContent[]
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
      // if question type is Wahr-oder-Falsch then render this content
      }
      if(questionType === "Wahr-oder-Falsch") {
        let answerOptions = `
        <label for="answer-option-${answerID}" class="answer-option checkmark-label">
          <input type="radio" name="trueOrFalse" value="trueStatement" id="answer-option-${answerID}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">Wahr</p>
        </label>                      
          <label for="answer-option-${answerID + 1}" class="answer-option checkmark-label">
          <input type="radio" name="trueOrFalse" value="falseStatement" id="answer-option-${answerID + 1}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">Falsch</p>
        </label>                      
        `;
        
        answerID = answerID + 2;

        // push answer options into answerContent[]
        answerContent.push(answerOptions)
        
      }
      // join answer options into a single string for rendering
      let answerOptionsContent = answerContent.join("");

      return answerOptionsContent;
    }


    // check if the user follows post.course
    let courseFollowed = myFollowList.includes(post.course);
    // follow button is rendered when course is not followed
    function renderFollowButton(followStatus) {
      let followButton = "";
      
      if(!followStatus) {                      
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
                  ${renderFollowButton(courseFollowed)}
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
                      ${renderPostCardContent(post.questionType)}
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
                        <div class="animation-item hidden">
                          <i class="material-icons like-color">favorite</i>
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
                    <button class="save-post-button user-feedback-button" title="Beitrag speichern">
                      <div class="button-icon animation-container" onclick="savePost(event)">
                        <i class="material-icons">bookmark_border</i>
                        <div class="animation-item hidden">
                          <i class="material-icons">bookmark</i>
                        </div>
                      </div>
                    </button>
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

// follow button adds a course to myFollowList[]
function followCourse(e) {
  // get course name
  let courseName = e.currentTarget.parentElement.firstElementChild.attributes[1].textContent;

  // check whether course is followed (safety measure, because follow buttons should only be rendered when course is not followed)
  let followed = myFollowList.includes(courseName);

  // add course to myFollowList[] and deactivate follow button
  if(!followed) {
    myFollowList.push(courseName);
    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }

}

// listen for post interactions
postsFeed.addEventListener('click', (e) => {
  // check if click target is a checkbox input element
  if(e.target.matches('.answer-option-input') && e.target.type === "checkbox") {
    const answerOptions = Array.from(e.target.parentElement.parentElement.children);
    const submitButton = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    
    // toggle active selection class
    e.target.parentElement.classList.toggle('answer-option-selected');
    
    // check if any selection was made
    let selectionMade = answerOptions.some((answerOption) => {
      return answerOption.matches('.answer-option-selected');
    })
    
    // if any selection was made then activate the submit button else deactive submit button
    selectionMade ? submitButton.classList.remove('button--inactive') : submitButton.classList.add('button--inactive')
    
  }
  // check if click target is a radio input element
  if(e.target.matches('.answer-option-input') && e.target.type === "radio") {
    const answerOptions = Array.from(e.target.parentElement.parentElement.children);
    const submitButton = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    
    // check if target already selected
    if (e.target.parentElement.matches('.answer-option-selected')) {
      return
    }
    // if not selected do this
    else {
      // toggle selection class on the other option
      answerOptions.forEach((option) => {
        option.matches('.answer-option-selected') ? option.classList.toggle('answer-option-selected') : null;
      })
      // toggle selection class for current selection target
      e.target.parentElement.classList.toggle('answer-option-selected');
    }
    
    // check if any selection was made
    let selectionMade = answerOptions.some((answerOption) => {
      return answerOption.matches('.answer-option-selected');
    })
    
    // if any selection was made then activate the submit button else deactive submit button
    selectionMade ? submitButton.classList.remove('button--inactive') : submitButton.classList.add('button--inactive')    
  }

  // console.log(e.target.type)

  // if(e.target.matches('.like-button')) {
  //   console.log(e.target)
  // }
  
})

// when user clicks the like button call this function to change the like count
function changeLikeCount(targetCounter, postLiked, button) {
  // check if the post has already been liked
  if(!postLiked) {
    // if not liked then add a custom like attribute to track like state
    const likeAttribute = document.createAttribute('data-liked');
    button.setAttributeNode(likeAttribute);
    // add +1 to like counter
    targetCounter.innerText++;
  } 
  // if already liked then remove like attribute and subtract -1 from counter
  else {
    button.removeAttribute('data-liked');
    targetCounter.innerText--;
  }
}
// on like button click trigger this function
function likePost(event) {
  const likeButton = event.currentTarget;
  const likeAnimationItem = likeButton.children[1];
  const counter = event.currentTarget.nextElementSibling;
  // check if the like button has the attribute "data-liked"
  const isPostLiked = likeButton.hasAttribute('data-liked');

  // display animation when button was clicked
  likeButton.firstElementChild.classList.toggle('hidden');
  likeAnimationItem.classList.toggle('hidden');
  likeAnimationItem.firstElementChild.classList.toggle('icon-animation');

  // call changeLikeCount function and pass arguments from the event
  changeLikeCount(counter, isPostLiked, likeButton);

}

// on save post button click trigger this function
function savePost(event) {
  const saveButton = event.currentTarget;
  const animationItem = saveButton.children[1];
  // const isPostLiked = likeButton.hasAttribute('data-liked');

  saveButton.firstElementChild.classList.toggle('hidden');
  animationItem.classList.toggle('hidden');
  animationItem.firstElementChild.classList.toggle('icon-animation');

  // changeLikeCount(counter, isPostLiked, likeButton);

}

// on show explanation button click trigger this function
function showExplanation(event) {
  const showSolutionButton = event.currentTarget;
  const solutionContent = showSolutionButton.parentElement.nextElementSibling;
  // check if solution content includes the class "hidden"
  let isSolutionContentHidden = solutionContent.classList.contains('hidden');
  // if content is hidden then rotate arrow icon up else down
  isSolutionContentHidden ? showSolutionButton.firstElementChild.style.rotate = "180deg" : showSolutionButton.firstElementChild.style.rotate = "0deg";
  // show or hide the solution content
  solutionContent.classList.toggle('hidden');
}

function evaluateUserAnswers(correspondingPost, questionType, entries, answerOptions) {
  let userAnswers;
  let correctAnswerOptions;
  let allCorrectAnswersSelected;
  let isUserSelectionCorrect;
  let isCorrectAnswer;

  // for multiple choice do this
  if(questionType === "Multiple-Choice") {
    userAnswers = Object.keys(entries);
    
    // filter[] for all correct answers
    correctAnswerOptions = answerOptions.filter((answerOption) => {
      let optionName = answerOption.firstElementChild.name;
      let isCorrectAnswerOption = correspondingPost.correctAnswer.includes(optionName);
      if(isCorrectAnswerOption) {
        return answerOption
      }
    });
    
    // check if all correct answers are selected
    allCorrectAnswersSelected = correctAnswerOptions.every((answer) => {
      return answer.matches('.answer-option-selected');
    });
    
    // check if any of the selected answers are false
    isUserSelectionCorrect = userAnswers.every((userAnswer) => {
      return correspondingPost.correctAnswer.includes(userAnswer);
    })
    
    // check if all conditions for the correct answer feedback are met
    isCorrectAnswer = allCorrectAnswersSelected && isUserSelectionCorrect ? true : false;
  }
  // for true or false do this
  if(questionType === "Wahr-oder-Falsch") {
    userAnswers = Object.values(entries);
    // check if user selection is correct
    isCorrectAnswer = userAnswers.every((userAnswer) => {
      return correspondingPost.correctAnswer.includes(userAnswer);
    })
  }
  
  // set the feedback message
  const answerFeedback = () => {
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
  // set the feedback message color
  const answerFeedbackColor = () => {
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

  // find the submitted answer-option and change style
  answerOptions.forEach((answer) => {
    // get the selection
    let selectedOption = answer.matches('.answer-option-selected');
    // if answer-option is selected check whether the answer is correct or wrong
    if(selectedOption && questionType === "Multiple-Choice") {
      let selectionName = answer.firstElementChild.name;
      // evaluate user answer
      let isCorrectSelection = correspondingPost.correctAnswer.includes(selectionName);
      // show correct answer in green, wrong answer in red
      isCorrectSelection ? answer.classList.add('correct-answer-option') : answer.classList.add('wrong-answer-option');
    }
    // if answer-option is selected check whether the answer is correct or wrong
    if(selectedOption && questionType === "Wahr-oder-Falsch") {
      let selectionValue = answer.firstElementChild.value;
      // evaluate user answer
      let isCorrectSelection = correspondingPost.correctAnswer.includes(selectionValue);
      // show correct answer in green, wrong answer in red
      isCorrectSelection ? answer.classList.add('correct-answer-option') : answer.classList.add('wrong-answer-option');
    }
    // disable answer selection after submit
    answer.classList.add('answer-option-disabled');
  })

  return {
    message: answerFeedback,
    color: answerFeedbackColor
  };
}

// when user submits his answer selection trigger this function
postsFeed.addEventListener('submit', (e) => {
  // stop the default submit event, data is not send to a server
  e.preventDefault();
  const postCardContent = e.target.parentElement;
  const submitButton = e.target.nextElementSibling;
  // hide the submit button
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

  // evaluate user input and return feedback message and color
  const userFeedback = evaluateUserAnswers(correspondingPost, correspondingPost.questionType, entries, answerOptions);
  
  // set answer feedback content
  let result = `
  <div class="solution-container">
    <div class="answer-feedback">
      <div class="answer-feedback-result ${userFeedback.color()}">${userFeedback.message()}</div>                
      <button class="show-solution-button button-ghost" onclick="showExplanation(event)"><i class="material-icons">keyboard_arrow_down</i>Erklärung anzeigen</button>
    </div>
    <div class="solution-content hidden">${correspondingPost.explanation}</div>
  </div>
  `;
  // render answer feedback container
  postCardContent.insertAdjacentHTML("beforeend", result);
})

