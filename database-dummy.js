const posts = [
  {
    postID: "post-1",
    postDate: "12.10.25",
    author: "Max Mustermann",
    subject: "B.Sc. Informatik",
    course: "Requirements Engineering",
    questionType: "Multiple-Choice",
    question: "Du möchtest den Systemüberblick für deinen Projektmanager dokumentieren. Für welches UML-Diagramm entscheidest du dich?", 
    answers: ["Objektdiagramm", "Use-Case-Diagramm", "Klassendiagramm", "Sequenzdiagramm"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems",
    privatePost: false,
    likes: 12,
    comments: [
      {
        username: "Helene Fischer", 
        userPicture: "red",
        postDate: "12.10.25", 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      }, 
      {
        username: "Felix Blume", 
        userPicture: "blue",
        postDate: "12.10.25", 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      }, 
    ]
  },
  {
    postID: "post-2",
    postDate: "12.10.25",
    author: "Max Mustermann",
    subject: "B.Sc. Informatik",
    course: "Requirements Engineering",
    questionType: "Multiple-Choice",
    question: "Du möchtest den Systemüberblick für deinen Projektmanager dokumentieren. Für welches UML-Diagramm entscheidest du dich?", 
    answers: ["Objektdiagramm", "Use-Case-Diagramm", "Klassendiagramm"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems",
    privatePost: false,
    likes: 14,
    comments: [
      {
        username: "Helene Fischer", 
        userPicture: "red",
        postDate: "12.10.25", 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      }, 
      {
        username: "Felix Blume", 
        userPicture: "blue",
        postDate: "12.10.25", 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      }, 
    ]
  }
  
];


const myFollowList = ['Informatik', 'Wirtschaftsinformatik'];

const myFavorites = [{post: 1}, {post: 2}];

const myQuestions = [{}]

// --------------------load posts feed--------------------

const postsFeed = document.getElementById('posts-feed');
let answerID = 1;

document.addEventListener('DOMContentLoaded', () => {
  posts.forEach((post) => {
    let answerName = 1;

    let answerContent = [];
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

    let answerOptionsContent = answerContent.join("");

    let postTime;

    let postContent = `
      <article id="${post.postID}" class="post">
              <div class="post-info">
                <div class="post-specifications">
                  <div class="course-name link">k/${post.course}</div>
                  <span>&#128900;</span>
                  <div class="post-date">${post.postDate}</div>
                  <!-- <span>&#128900;</span> -->
                  <!-- <div class="button-ghost">Folgen</div> -->
                </div>
                <div class="post-menu button-icon"><i class="material-icons">more_horiz</i></div>
              </div>
              <div class="post-card">
                <header class="post-card-header">
                  <h2 class="post-heading">${post.question}</h2>
                </header>
                <div class="post-card-content">
                  <form class="post-answers">
                    <div class="post-card-question-type">${post.questionType}:</div>
                    <div class="answer-options-container">
                      ${answerOptionsContent}
                    </div>
                  </form>
                  <button type="submit" class="submit-answer-button button-primary">Auswerten</button>
                </div>
                <div class="divider"></div>
                <div class="post-card-footer">
                  <div class="flex-container align-center gap-0">
                    <button class="user-feedback-button">
                      <div class="button-icon"><i class="material-icons">favorite_border</i></div>
                      <span class="user-feedback-counter">${post.likes}</span>
                    </button>                  
                    <button class="user-feedback-button">
                      <div class="button-icon"><i class="material-icons">chat_bubble_outline</i></div>
                      <span class="user-feedback-counter">${post.comments.length}</span>
                    </button>                  
                  </div>                                  
                  <button class="user-feedback-button button-icon"><i class="material-icons">bookmark_border</i></button>
                </div>
              </div>
            </article>
    `;

    postsFeed.insertAdjacentHTML("beforeend", postContent);
  })
})

