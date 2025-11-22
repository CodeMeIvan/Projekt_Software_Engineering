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

let posts = [
  {
    postID: "post-1",
    postDate: new Date ("2025-11-11T23:20:00Z"),
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
    question: "Maximale Länge soll auf 400 Chars limitiert werden. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I negle", 
    answers: ["Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."], 
    correctAnswer: ["answer2", "answer3"],
    explanation: "Hier steht die Erklärung. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi saepe ea eos! Nihil laboriosam repellat eaque necessitatibus soluta ipsam neque, voluptates libero, suscipit minima reprehenderit vel tempore a quod deserunt adipisci voluptatibus sit sequi modi aliquid non voluptas autem. Nobis cum fuga, ducimus quas unde natus repudiandae consequuntur exercitationem sed laudantium aperiam alias illo harum, a consequatur dolorum sequi dignissimos rem deserunt eligendi ab suscipit eveniet! Exercitationem in quaerat eligendi ex corporis? Quis iure illum officiis. Optio minima aliquid sed dolore quisquam, voluptate ex nesciunt nisi distinctio, est hic fuga similique eum repellendus cum non mollitia eaque laudantium eos sequi earum sint ducimus asperiores? Eligendi quia ullam aliquid obcaecati veniam architecto consequuntur aperiam aliquam minima exercitationem nostrum, earum officia! A maiores quod itaque at, culpa totam sunt natus fugiat unde omnis sequi voluptas est dolorum, perspiciatis facere suscipit illo cumque sint autem. Mollitia nulla accusamus atque quaerat iure magnam cumque, voluptatem laborum id nisi perspiciatis ad beatae sapiente porro, delectus alias sunt optio tenetur corporis fugit illum saepe voluptatibus necessitatibus similique. Quia, blanditiis esse, aliquam provident, possimus earum expedita fuga iste rerum corrupti eligendi inventore laborum architecto minima id! Tenetur rerum hic, sed necessitatibus optio sapiente assumenda modi at aperiam. Sequi nisi adipisci saepe unde a, accusamus vel consequuntur quos. Fuga autem suscipit laborum ratione magnam, ad repellendus voluptatem similique obcaecati delectus nemo reprehenderit. Ratione quam qui illo expedita quibusdam perspiciatis, molestias tempora ipsam id praesentium accusamus. Aliquam repudiandae hic beatae placeat animi a distinctio nihil blanditiis sapiente, nostrum, quo omnis. Illo nulla, et magni quas ut aspernatur ipsam tenetur vel nemo ab ipsum, velit alias consequuntur dolorem aliquam eaque voluptatem dolor! Aliquam, explicabo vitae. Cum, eius obcaecati! Facilis minima totam quisquam accusantium iste eos ea, numquam ducimus temporibus error animi, assumenda incidunt odit quae, libero similique adipisci enim eum.",
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
      }, 
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
      }, 
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
    comments: []
  }
];

let currentUser = 
{
  username: "Tester",
  userPicture: randomizeBackground(),
  followList : ['Requirements Engineering', "Wissenschaftliches Arbeiten", "Finanzierung"], // equals posts.course
  posts: ["post-1"], // equals posts.postID
  likedPosts: [],
  comments: [],
  favoritePosts: []
};


// check if session storage has posts then setup posts in the storage
if(sessionStorage.getItem('posts') === null) {
  sessionStorage.setItem("posts", JSON.stringify(posts));

} else if(sessionStorage.getItem('postAdded')) { // if session storage has posts then update posts to include any changes on the posts item
  posts = JSON.parse(sessionStorage.getItem('posts'));
  // inform the user about action success
  alertUser('Beitrag erfolgreich erstellt!');
  // after alert remove item from storage
  sessionStorage.removeItem('postAdded');
  
} else { // if session storage has posts then update posts to include any changes on the posts item
  posts = JSON.parse(sessionStorage.getItem('posts'));  
}

// check if session storage has currentUser then setup currentUser in the storage
if(sessionStorage.getItem('currentUser') === null) {
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  // if session storage has currentUser update currentUser to include any changes on the currentUser item
} else {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

// track currently rendered post feed
let currentlyRenderedPosts;

// track scrolling behavior
let scrollingEnabled = true;

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageYOffset || document.documentElement.scrollTop;
  
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
};


function enableScroll() {
  window.onscroll = function () { };

}

function randomizeBackground() {
  const backgroundColors = ['crimson', 'darkcyan', 'darkolivegreen', 'darkmagenta', 'darkslateblue', 'darkslategrey', 'green', 'midnightblue'];
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  return backgroundColors[getRndInteger(0, 7)];
}


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
    
// --------------------load post feed--------------------

const tabs = document.getElementById('tabs');
const tabsContent = document.getElementsByClassName('tabs-content');

tabs.addEventListener('click', (event) => {
  // if not current tab is clicked do this
  if(event.target.matches('.tabs-item') && !event.target.classList.contains('current-tab')) {
    const tabItems = Array.from(event.target.parentElement.children);
    const currentTab = tabItems.find((tabItem) => {
      return tabItem.matches('.current-tab');
    })
    const indexCurrentTab = tabItems.indexOf(currentTab);
    const indexNewTab = tabItems.indexOf(event.target);

    // switch between current tab items
    currentTab.classList.toggle('current-tab');
    event.target.classList.toggle('current-tab');
    // switch between current tab content
    tabsContent[indexCurrentTab].classList.toggle('current-tab-content');
    tabsContent[indexNewTab].classList.toggle('current-tab-content');

  }
})


const postsFeed = document.getElementById('posts-feed');

function alertUser(message) {
  const feedbackMessage = 
    `
    <div class="action-feedback">${message}</div>
    `;

    document.body.insertAdjacentHTML('afterbegin', feedbackMessage);
    
    setTimeout(() => {
      document.body.firstElementChild.remove();
    }, 3000);
}

function closeCommentSection(event) {
  const isTargetModal = event.target.matches('.modal');
  const isTargetCloseButton = event.target.matches('.close-button');

  isTargetModal || isTargetCloseButton ? event.currentTarget.remove() : null;

  if(isTargetModal || isTargetCloseButton) {
    // enable scrolling
    enableScroll();
    // set scrolling state to true
    scrollingEnabled = true;
  }
}

// follow button adds a course to currentUser.followList[]
function followCourse(e) {
  // get course name
  let courseName = e.currentTarget.parentElement.firstElementChild.attributes[1].textContent;

  // check if currentUser.followList[] includes this course
  let followed = currentUser.followList.includes(courseName);

  // add course to currentUser.followList[] and deactivate follow button
  if(!followed) {
    currentUser.followList.push(courseName);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }
}

// follow button is rendered when course is not followed
function renderFollowButton(post) {
  // check if the currentUser follows post.course
  let courseFollowed = currentUser.followList.includes(post.course);

  let followButton = "";
  
  if(!courseFollowed) {                      
    followButton = `
    <span>&#128900;</span>
    <div class="button-ghost" onclick="followCourse(event)">Folgen</div>                      
    `;
  }
  return followButton                    
}


function renderPostFeed(postsDataset) {
  let answerID = 1;
  let postAnswersFormID = 1;
  
  postsDataset.forEach((post) => {
    const postID = post.postID;
    let answerName = 1;
    let postDate = new Date(post.postDate);
    const isPostLiked = currentUser.likedPosts.includes(postID);
    const isPostSaved = currentUser.favoritePosts.includes(postID);

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
  
    let postContent = `
      <article id="${post.postID}" class="post">
        <div class="post-info">
          <div class="post-specifications">
            <div class="course-name link" data-course-name="${post.course}" title="Zum Kurs wechseln">k/${post.course}</div>
            <span>&#128900;</span>
            <div class="post-date">${timeSince(postDate)}</div>
            ${renderFollowButton(post)}
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
            <button form="post-answers-form${postAnswersFormID}" type="submit" data-post-id="${post.postID}" class="submit-answer-button button-primary button--inactive">Auswerten</button>
          </div>
          <div class="divider"></div>
          <div class="post-card-footer">
            <div class="flex-container align-center gap-0">
              <button class="like-button user-feedback-button" title="Gefällt mir">
                <div class="button-icon animation-container" data-post-id="${post.postID}" onclick="likePost(event)">
                  <i class="material-icons ${isPostLiked ? "hidden" : ""}">favorite_border</i>
                  <div class="animation-item ${!isPostLiked ? "hidden" : ""}">
                    <i class="material-icons like-color">favorite</i>
                  </div>
                </div>
                <span class="user-feedback-counter">${post.likes}</span>
              </button>                  
              <button class="comment-button user-feedback-button" title="Kommentare anzeigen">
                <div class="button-icon" data-post-id="${postID}" onclick="openCommentSection(event)"><i class="material-icons">chat_bubble_outline</i></div>
                <span class="user-feedback-counter">${post.comments.length}</span>
              </button>
            </div>
            <div class="flex-container align-center gap-0">
              <button class="share-post-button user-feedback-button button-icon" title="Beitrag teilen">
                <i class="material-icons" style="transform: scale(-100%, 100%);">reply</i>
              </button>
              <button class="save-post-button user-feedback-button" title="Beitrag speichern">
                <div class="button-icon animation-container" data-post-id="${post.postID}" onclick="savePost(event)">
                  <i class="material-icons ${isPostSaved ? "hidden" : ""}">bookmark_border</i>
                  <div class="animation-item ${!isPostSaved ? "hidden" : ""}">
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

}


// when DOM content is loaded render post feed content
document.addEventListener('DOMContentLoaded', () => {
  
  // render post feed for the home page
  if (document.location.pathname.includes('home')) {
    const homePostFeed = posts.filter((post) => {
      return currentUser.followList.find((courseName) => courseName === post.course) 
      || currentUser.posts.find((userPosts) => userPosts === post.postID) 
      ? post : null;
    })
    // sort homePostFeed by date in descending order -> newest first
    currentlyRenderedPosts = homePostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);    
  }

  // render post feed for the explore page
  if (document.location.pathname.includes('explore')) {
    const explorePostFeed = posts;
    
    // sort explorePostFeed by date in descending order -> newest first
    currentlyRenderedPosts = explorePostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);
  }

  // render post feed for "my questions" page
  if (document.location.pathname.includes('my-questions')) {
    const myQuestionsPostFeed = posts.filter((post) => {
      return currentUser.posts.find((postID) => postID === post.postID) ? post : null;
    })
    currentlyRenderedPosts = myQuestionsPostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);    
  }

  // render post feed for "my favorites" page
  if (document.location.pathname.includes('my-favorites')) {
    const favoritesPostFeed = posts.filter((post) => {
      return currentUser.favoritePosts.find((postID) => postID === post.postID) ? post : null;
    })
    currentlyRenderedPosts = favoritesPostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);   
  }


})


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

})

postsFeed.addEventListener('input', (e) => {
  // get input border height
  let inputBorder = e.target.offsetHeight - e.target.clientHeight;

  // set element's height to auto when input shrinks
  e.target.style.height = "auto";

  // set element's height when input grows
  e.target.style.height = e.target.scrollHeight + inputBorder + "px";
})

function toggleLike(list, id) {
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);       // add post to user's likedPosts
  } else {
    list.splice(index, 1); // remove post from user's likedPosts
  }

  return list;
}

// on like button click trigger this function
function likePost(event) {
  const likeButton = event.currentTarget;
  const likeAnimationItem = likeButton.children[1];
  const counter = event.currentTarget.nextElementSibling;
  
  const postID = likeButton.attributes['data-post-id'].value;
  const correspondingPost = posts.find((post) => post.postID === postID);
  const postLikedByCurrentUser = currentUser.likedPosts.includes(postID);
  
  // check if the post has already been liked
  if(!postLikedByCurrentUser) {
    // display animation when button was clicked
    likeButton.firstElementChild.classList.toggle('hidden');
    likeAnimationItem.classList.toggle('hidden');
    likeAnimationItem.firstElementChild.classList.add('icon-animation');

    // add +1 to like counter
    counter.innerText++;
    correspondingPost.likes++;
    sessionStorage.setItem('posts', JSON.stringify(posts));

    currentUser.likedPosts = toggleLike(currentUser.likedPosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

  } 
  // if already liked then remove like attribute and subtract -1 from counter
  else {
    // display animation when button was clicked
    likeButton.firstElementChild.classList.toggle('hidden');
    likeAnimationItem.classList.toggle('hidden');
    likeAnimationItem.firstElementChild.classList.remove('icon-animation');

    counter.innerText--;
    correspondingPost.likes--;
    sessionStorage.setItem('posts', JSON.stringify(posts));

    currentUser.likedPosts = toggleLike(currentUser.likedPosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
    
}

function setCommentSectionHeight() {
  if(postsFeed.firstElementChild.children[1].children[1].matches('.comment-section')) {
    const postSectionHeight = postsFeed.firstElementChild.children[1].firstElementChild.clientHeight;
    const commentSection = postsFeed.firstElementChild.children[1].children[1];
    const postHeaderHeight = postsFeed.firstElementChild.children[1].firstElementChild.lastElementChild.firstElementChild.clientHeight;
    const postCardContent = postsFeed.firstElementChild.children[1].firstElementChild.lastElementChild.children[1];
    
    // similar to CSS settings (100% - 2rem)
    const modalContentMaxHeight = window.innerHeight - 32;

    postCardContent.style.maxHeight = `${(modalContentMaxHeight - postSectionHeight) + postSectionHeight - 110 - postHeaderHeight}px`;

    commentSection.style.height = `${postSectionHeight}px`;
  }
  
}

function openCommentSection(event) {
  const postID = event.currentTarget.attributes["data-post-id"].value;
  const correspondingPost = posts.find((post) => {
    return post.postID === postID;
  })
  const postDate = new Date(correspondingPost.postDate);
  const isPostLiked = currentUser.likedPosts.includes(postID);
  const isPostSaved = currentUser.favoritePosts.includes(postID);

  const answerOptions = event.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.children;
  const answerOptionsArray = Array.from(answerOptions);
  
  function renderPostCardContent(questionType) {
    let answerName = 1;
    // options array
    let answerContent = [];
    // if question type is Multiple-Choice then render this content
    if(questionType === "Multiple-Choice") {
      // push answer options into answerContent[]
      correspondingPost.answers.forEach((answer, index) => {
        const correspondingAnswerID = answerOptionsArray[index].attributes['for'].value;          

        let answerOption = `
        <label for="${correspondingAnswerID}" class="answer-option checkmark-label">
          <input type="checkbox" name="answer${answerName}" id="${correspondingAnswerID}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">${answer}</p>
        </label>                      
        `;

        answerName++;
  
        answerContent.push(answerOption)
      });
    }

    // if question type is Wahr-oder-Falsch then render this content
    if(questionType === "Wahr-oder-Falsch") {
      const trueStatementID = answerOptionsArray[0].attributes['for'].value;
      const falseStatementID = answerOptionsArray[1].attributes['for'].value;
      let answerOptions = `
      <label for="${trueStatementID}" class="answer-option checkmark-label">
        <input type="radio" name="trueOrFalse" value="trueStatement" id="${trueStatementID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">Wahr</p>
      </label>                      
        <label for="${falseStatementID}" class="answer-option checkmark-label">
        <input type="radio" name="trueOrFalse" value="falseStatement" id="${falseStatementID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">Falsch</p>
      </label>                      
      `;
      
      answerContent.push(answerOptions)
      
    }

    // join answer options into a single string for rendering
    let answerOptionsContent = answerContent.join("");

    return answerOptionsContent;
  }
 
  function renderComments() {
    const commentsArray = [];

    correspondingPost.comments.forEach((comment) => {
      const postDate = new Date(comment.postDate);
      let userComment = 
      `
      <div class="user-comment">
        <div class="user-profile-picture" style="background-color: ${randomizeBackground()};">${comment.username.charAt(0)}</div>
        <div class="user-comment-info">
          <div class="flex-container align-center gap-0">
            <h4 class="comment-username">${comment.username}</h4>
            <span>&#128900;</span>
            <span class="comment-post-date">${timeSince(postDate)}</span>
          </div>
          <button class="comment-menu button-icon"><i class="material-icons">more_vert</i></button>
        </div>
        <p class="user-comment-content">${comment.content}</p>
      </div>
      `;

      commentsArray.push(userComment);
    })

    const commentsContent = commentsArray.join('');
  
    if(commentsContent.length > 0) {
      return commentsContent;
    }
    else {
      let emptyCommentSection = 
      `
      <p class="empty-comment-section-content">Noch keine Kommentare</p>
      `;

      return emptyCommentSection;
    }

  }

  let postContent = 
  `
  <div class="modal" onclick="closeCommentSection(event)">
    <button class="close-button button-icon"><i class="material-icons">close</i></button>
    <div class="modal-content">
        <div class="post-section">
          <div class="post-info">
            <div class="post-specifications">
              <div class="course-name link" title="Zum Kurs wechseln">k/${correspondingPost.course}</div>
              <span>&#128900;</span>
              <div class="post-date">${timeSince(postDate)}</div>
              ${renderFollowButton(correspondingPost)}
            </div>
            <div class="post-menu button-icon">
              <i class="material-icons">more_horiz</i>
            </div>
          </div>
          <div class="post-card">
            <header class="post-card-header">
              <h2 class="post-heading">${correspondingPost.question}</h2>
            </header>
            <div class="post-card-content">
              <form id="post-answers-form" class="post-answers">
                <div class="post-card-question-type">${correspondingPost.questionType}</div>
                <div class="answer-options-container">
                  ${renderPostCardContent(correspondingPost.questionType)}
                </div>
              </form>
              <button form="post-answers-form" type="submit" data-post-id="${correspondingPost.postID}" class="submit-answer-button button-primary button--inactive">Auswerten</button>                        
            </div>                      
            <div class="post-card-footer">
              <div class="flex-container align-center gap-0">
                <button class="like-button user-feedback-button" title="Gefällt mir">
                  <div class="button-icon animation-container" data-post-id="${correspondingPost.postID}" onclick="likePost(event)">
                    <i class="material-icons ${isPostLiked ? "hidden" : ""}">favorite_border</i>
                    <div class="animation-item ${!isPostLiked ? "hidden" : ""}">
                      <i class="material-icons like-color">favorite</i>
                    </div>
                  </div>
                  <span class="user-feedback-counter">${correspondingPost.likes}</span>
                </button>                  
                <label for="comment-input" class="comment-button user-feedback-button" title="Kommentar schreiben">
                  <div class="button-icon"><i class="material-icons">chat_bubble_outline</i></div>              
                </label>
              </div>
              <div class="flex-container align-center gap-0">
                <button class="share-post-button user-feedback-button button-icon" title="Beitrag teilen">
                  <i class="material-icons" style="transform: scale(-100%, 100%);">reply</i>
                </button>
                <button class="save-post-button user-feedback-button" title="Beitrag speichern">
                  <div class="button-icon animation-container" data-post-id="${correspondingPost.postID}" onclick="savePost(event)">
                    <i class="material-icons ${isPostSaved ? "hidden" : ""}">bookmark_border</i>
                    <div class="animation-item ${!isPostSaved ? "hidden" : ""}">
                      <i class="material-icons">bookmark</i>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>                    
        </div>
        <div class="comment-section">
          <div class="comment-section-header">
            <h3 class="comment-section-heading">Kommentare<span class="comments-counter">${correspondingPost.comments.length}</span>
            </h3>
            <button type="button" class="button-icon"><i class="material-icons" style="font-size: 28px;">sort</i></button>
          </div>
            <div class="comment-section-content">                    
              ${renderComments()}                          
            </div>
            <div class="comment-section-footer">                    
              <form action="" id="user-comment-form" class="user-comment-form">
                <textarea name="commentInput" id="comment-input" class="comment-input auto-grow-element" placeholder="Kommentar hinzufügen" rows="1" required></textarea>
                <button type="submit" class="submit-user-comment button-secondary" data-post-id="${correspondingPost.postID}">Posten</button>
              </form>
            </div>
        </div>
    </div>
  </div>
  `;

  postsFeed.insertAdjacentHTML("afterbegin", postContent);
  
  setCommentSectionHeight();

  // check if scrolling is enabled and switch between on and off
  scrollingEnabled ? disableScroll() : enableScroll();
  // set scrolling state to true or false
  scrollingEnabled = !scrollingEnabled;
}

function toggleFavorite(list, id) {
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);       // add post to user's favoritePosts
  } else {
    list.splice(index, 1); // remove post from user's favoritePosts
  }

  return list;
}

// on save post button click trigger this function
function savePost(event) {
  const saveButton = event.currentTarget;
  const animationItem = saveButton.children[1];


  const postID = saveButton.attributes['data-post-id'].value;
  const postSavedByCurrentUser = currentUser.favoritePosts.includes(postID);
  const isUserPost = currentUser.posts.includes(postID);
  
  // check if currentUser.favoritePosts includes this post
  if(!postSavedByCurrentUser && !isUserPost) {
    // display animation when button was clicked
    saveButton.firstElementChild.classList.toggle('hidden');
    animationItem.classList.toggle('hidden');
    animationItem.firstElementChild.classList.add('icon-animation');

    // add post to currentUser.favoritePosts[]
    currentUser.favoritePosts = toggleFavorite(currentUser.favoritePosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
  } 
  // if saved remove from the list
  else if(postSavedByCurrentUser) {
    // display animation when button was clicked
    saveButton.firstElementChild.classList.toggle('hidden');
    animationItem.classList.toggle('hidden');
    animationItem.firstElementChild.classList.remove('icon-animation');
  
    // add post to currentUser.favoritePosts[]
    currentUser.favoritePosts = toggleFavorite(currentUser.favoritePosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
  } else {
    alertUser('Sie können Ihren eigenen Beitrag nicht speichern');
  }
  

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
  // console.log(solutionContent.innerText)
  showSolutionButton.scrollIntoView({behavior: "smooth", block: "center"});
  setCommentSectionHeight();
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

postsFeed.addEventListener('submit', (e) => {
  // stop the default submit event, data is not send to a server
  e.preventDefault();

  // collect user input
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());

  
  // when user submits his answer selection trigger this function
  if(e.submitter.matches('.submit-answer-button')) {    
    const postCardContent = e.target.parentElement;
    const submitButton = e.target.nextElementSibling;
    // hide the submit button
    submitButton.classList.add('hidden');
    
    // const postID = e.target.parentElement.parentElement.parentElement.id;
    const postID = e.submitter.attributes['data-post-id'].value;
    const answerOptions = Array.from(e.target.children[1].children);
    
    // find the post that was submitted for evaluation
    const correspondingPost = posts.find((post) => {
      
      return post.postID === postID;
    })
    
  
    // evaluate user input and return feedback message and color
    const userFeedback = evaluateUserAnswers(correspondingPost, correspondingPost.questionType, entries, answerOptions);
    
    // set answer feedback content
    let result = `
    <div class="solution-container">
      <div class="answer-feedback">
        <div class="answer-feedback-result ${userFeedback.color()}">${userFeedback.message()}</div>                
        <button class="show-solution-button button-ghost" onclick="showExplanation(event)">Erklärung anzeigen<i class="material-icons">keyboard_arrow_down</i></button>
      </div>
      <div class="solution-content hidden">${correspondingPost.explanation}</div>
    </div>
    `;
    // render answer feedback container
    postCardContent.insertAdjacentHTML("beforeend", result);
  }

  if(e.submitter.matches('.submit-user-comment')) {
    const userCommentContent = entries.commentInput;
    const submitButton = e.target.lastElementChild;
    const submittedPostID = submitButton.attributes['data-post-id'].value;
    const correspondingPost = posts.find((post) => {
      return post.postID === submittedPostID;
    })
    const commentSectionContent = e.target.parentElement.previousElementSibling;

    // reset form inputs after submit
    e.target.reset();
    const inputField = e.target.firstElementChild;
    inputField.style.height = "36px";
    
    // create a new user comment{object} 
    let newUserComment = 
    {
        username: currentUser.username, 
        userPicture: currentUser.userPicture,
        postDate: new Date(),
        content: `${userCommentContent}`
      } ;
    
    // add the new comment to the corresponding post  
    correspondingPost.comments.push(newUserComment);
    sessionStorage.setItem('posts', JSON.stringify(posts));
    
    // create a new user-comment component
    let userCommentOutput = 
      `
      <div class="user-comment">
        <div class="user-profile-picture" style="background-color: ${newUserComment.userPicture};">${newUserComment.username.charAt(0)}</div>
        <div class="user-comment-info">
          <div class="flex-container align-center gap-0">
            <h4 class="comment-username">${newUserComment.username}</h4>
            <span>&#128900;</span>
            <span class="comment-post-date">${timeSince(newUserComment.postDate)}</span>
          </div>
          <button class="comment-menu button-icon"><i class="material-icons">more_vert</i></button>
        </div>
        <p class="user-comment-content">${newUserComment.content}</p>
      </div>
      `;
    
    // check if corresponding post has no comments yet then remove the message if true
    if(commentSectionContent.firstElementChild.matches('.empty-comment-section-content')) {
      commentSectionContent.firstElementChild.remove();
    }
    // render the new comment
    commentSectionContent.insertAdjacentHTML('beforeend', userCommentOutput);
    
  }
  
})


document.body.addEventListener('click', (event) => {
  // if user clicks on the sort button run this code
  if(event.target.matches('.sort-button')) {
    const popover = event.target.nextElementSibling;
    const popoverContent = event.target.parentElement.lastElementChild;

    // toggle focused class for the sort button
    event.target.classList.toggle('sort-button-focused');
    // change z-index of the sort button
    event.target.classList.toggle('z-index-200');
    // hide or show popover & popover-content
    popover.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');

    // check if scrolling is enabled and switch between on and off
    scrollingEnabled ? disableScroll() : enableScroll();
    // set scrolling state to true or false
    scrollingEnabled = !scrollingEnabled;
  }
  
  if(event.target.matches('.popover')) {
    const popoverContent = event.target.nextElementSibling;
    
    // change z-index of the sort button
    event.target.previousElementSibling.classList.toggle('z-index-200');
    // remove focused class
    event.target.previousElementSibling.classList.toggle('sort-button-focused');
    // hide popover & popover-content
    event.target.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');

    // enable scrolling
    enableScroll();
    // set scrolling state to true
    scrollingEnabled = true;
  }
})

document.body.addEventListener('submit', (event) => {
  if (event.target.matches('.sort-feed-form')) {
    // stop default submit event
    event.preventDefault();

    const popover = event.target.parentElement.previousElementSibling;
    const popoverContent = event.target.parentElement;
    const sortButton = event.target.parentElement.previousElementSibling.previousElementSibling;

    // collect user input
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    const sortBy = entries.sortBy;
    const sortOrder = entries.sortOrder;

    // check if user selected descending or ascending order
    const descendingOrder = sortOrder === "descending" ? true : false;
    
    // create a new array from posts with new sort order
    let sortedFeed;

    // sort posts based on user selection
    switch (sortBy) {
      case "date":
        // check order type and sort by order type
        descendingOrder ? 
        sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
          return new Date(b.postDate) - new Date(a.postDate);
        }) 
        : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
          return new Date(a.postDate) - new Date(b.postDate);
        });
        
        break;
        case "likes":
          
          descendingOrder ? 
          sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
            return b.likes - a.likes;
          }) 
          : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
            return a.likes - b.likes;
          });
          
          break;
          case "comments":
            
            descendingOrder ? 
            sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
              return b.comments.length - a.comments.length;
            }) 
            : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
              return a.comments.length - b.comments.length;
            });

        break;
    }
    
    // delete previous post feed    
    postsFeed.innerHTML = "";
    // render new post feed
    renderPostFeed(sortedFeed);

    // enable scrolling
    enableScroll();

    // set scrolling state to true
    scrollingEnabled = true;

    // change z-index of the sort button to initial
    sortButton.classList.toggle('z-index-200');
    // remove focused classed
    sortButton.classList.toggle('sort-button-focused');
    // hide popover & popover-content
    popover.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');
  }
})

function confirmCancellation(event) {
  const isTargetModal = event.target.matches('.modal');
  const isTargetRejectButton = event.target.matches('.reject-button');
	const isTargetConfirmButton = event.target.matches('.confirm-button');
  
	// check if click target is modal or reject button then close the alert
  isTargetModal || isTargetRejectButton ? event.currentTarget.remove() : null;
	// check if history exists then go back 1 page else go to home page
	if (isTargetConfirmButton && history.length > 1) {
		history.go(-1);
	} else if(isTargetConfirmButton) {
		location.assign('home.html');
	}
}

function closePage() {
	const body = document.body;
	const alert = 
	`
	<div class="modal" onclick="confirmCancellation(event)">
		<div class="alert">
			<p class="alert-message">Sind Sie sicher, dass Sie die Änderungen verwerfen wollen?</p>
			<div class="flex-container gap-2">
				<button type="button" class="reject-button button-tertiary">Nicht abbrechen</button>
				<button type="button" class="confirm-button button-primary">Ja, abbrechen</button>
			</div>
		</div>
	</div>
	`;

	body.insertAdjacentHTML('afterbegin', alert);

}