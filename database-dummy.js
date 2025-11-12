const posts = [
  {
    postID: "post-1",
    postDate: "2025-10-29T14:00:00",
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
    course: "IU Design",
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


const myFollowList = ['Requirements Engineering', 'Wissenschaftliches Arbeiten'];

const myFavorites = [{post: 1}, {post: 2}];

const myQuestions = [{}]

// --------------------load posts feed--------------------

const postsFeed = document.getElementById('posts-feed');
let answerID = 1;

document.addEventListener('DOMContentLoaded', () => {
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
          return `vor ${count} ${interval.label}${count > 1 ? "n" : ""}`;
        }
      }
        return "gerade eben";
    }
    
    let postContent = `
      <article id="${post.postID}" class="post">
              <div class="post-info">
                <div class="post-specifications">
                  <div class="course-name link" data-course-name="${post.course}">k/${post.course}</div>
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

// follow button adds a course to myFollowList
function followCourse(e) {
  // get course name
  let courseName = e.currentTarget.parentElement.firstElementChild.attributes[1].textContent;
  // check whether course is followed (safety measurement, because follow buttons should only be rendered when course is not followed)
  let followed = myFollowList.includes(courseName);
  // add course to myFollowList and deactivate follow button
  if(!followed) {
    myFollowList.push(courseName);
    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }

}
