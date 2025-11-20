

// shortend log function for faster access
function log(message) {
    console.log(message);
}

// run a function on selected elements
function actionOnEachElement(elements, elementsAction) {
    for (let i = 0; i < elements.length; i++) {
        elementsAction(elements[i]);            
    }
}

// --------------------switch between current tabs--------------------
const tabItems = document.getElementsByClassName('tabs-item');
// converting HTMLCollection to Array
const tabItemsArray = Array.from(tabItems);
const tabsContent = document.getElementsByClassName('tabs-content');

// save current state of tab content
let currentTab = tabItems[0];
let currentTabContent = tabsContent[0];

function switchCurrentTab(tabItem) {  
    tabItem.addEventListener('click', (e) => {
    // get the index of clicked tab-item
    let tabItemIndex = tabItemsArray.indexOf(e.currentTarget);

    // check if the click target is the current tab
    if(currentTab !== e.currentTarget) {
        currentTab.classList.toggle('current-tab');
        currentTab = e.currentTarget;
        e.currentTarget.classList.toggle('current-tab');
        currentTabContent.classList.toggle('current-tab-content');
    } else {
        return
    }
    // set current tab content index equal to clicked tab-item index
    currentTabContent = tabsContent[tabItemIndex];
    // show current tab content
    currentTabContent.classList.toggle('current-tab-content');
    });
}

// run function
actionOnEachElement(tabItems, switchCurrentTab);

// --------------------switch between current tabs--------------------


// --------------------filter main feed--------------------
const sortContainer = document.getElementsByClassName('sort-container');
const sortButton = document.getElementsByClassName('sort-button');

// sortButton[0].addEventListener('click', (e) => {
//     log(e.currentTarget)
//     e.currentTarget.classList.toggle('focused');
//     e.currentTarget.nextElementSibling.classList.toggle('hidden');
// })

// change color of current selection
function changeColorRadioChecked(radio) {
    radio.addEventListener('click', (e) => {
        // check if the target isnt already selected
        if(e.target.classList.contains('radio-container') && e.target.children[0].checked == false) {            
            // change the color of the previous selection
            if(e.target.parentElement.firstElementChild.innerText === "Zeitraum:") {
                currentSortTimeline.parentElement.classList.toggle('input-checked');
                currentSortTimeline = e.target.children[0];
            } else {
                currentSortOption.parentElement.classList.toggle('input-checked');
                currentSortOption = e.target.children[0];
            }
            // apply color change to selection
            e.target.classList.toggle('input-checked');                        
        }
    })
}

// actionOnEachElement(radioContainer, changeColorRadioChecked);

// --------------------filter main feed--------------------


// --------------------comment section--------------------

const userFeedbackCommentButton = document.getElementsByClassName('user-feedback-comment');

// actionOnEachElement(userFeedbackCommentButton, log);

// --------------------comment section--------------------


// <<--------------------like animation--------------------

const animationContainer = document.getElementsByClassName('animation-container');

function addAnimationToLikeButton(likeButton) {
    likeButton.addEventListener('click', (e) => {
        likeButton.firstElementChild.classList.toggle('hide-visibility');
        likeButton.children[1].classList.toggle('hide-visibility');
        likeButton.children[1].firstElementChild.classList.toggle('like-animation');
    })
    
}

actionOnEachElement(animationContainer, addAnimationToLikeButton);

// --------------------like animation-------------------->>


// --------------------auto-grow input elements--------------------
const autoGrowElements = document.getElementsByClassName('auto-grow-element');

function setElementToAutoGrow(inputElement) {
  inputElement.addEventListener('input', (e) => {
    // get element's border-width
    let inputBorder = e.currentTarget.offsetHeight - e.currentTarget.clientHeight;
    // set element's height to auto when input shrinks
    e.currentTarget.style.height = "auto";
    // set element's height when input grows
    e.currentTarget.style.height = e.currentTarget.scrollHeight + inputBorder + "px";
  })
}

actionOnEachElement(autoGrowElements, setElementToAutoGrow);
// --------------------auto-grow input elements--------------------


// --------------------set user profile pictures--------------------
const userProfilePicture = document.getElementsByClassName('user-profile-picture');

const profilePictureColors = ['crimson', 'darkcyan', 'darkolivegreen', 'darkmagenta', 'darkslateblue', 'darkslategrey', 'green', 'midnightblue'];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setUserProfilePicture(user) {
    let randomizedColor = getRndInteger(0, 7);
    user.style.backgroundColor = profilePictureColors[randomizedColor];
}

actionOnEachElement(userProfilePicture, setUserProfilePicture);

// --------------------set user profile pictures--------------------


// --------------------set modal-content height based on post-section height--------------------
const modalContent = document.getElementsByClassName('modal-content');

function setModalContentHeight(modal) {
    let postSectionHeight = modal.firstElementChild.clientHeight;

    modal.style.height = postSectionHeight +'px';
}

actionOnEachElement(modalContent, setModalContentHeight)

// --------------------set modal-content height based on post-section height--------------------


// --------------------comment section: answer feedback--------------------
const submitAnswer = document.getElementsByClassName('submit-answer');
const showSolutionButton = document.getElementsByClassName('show-solution-button');
const solutionContent = document.getElementsByClassName('solution-content');


function showAnswerFeedback(submitAnswerButton) {
    submitAnswerButton.addEventListener('click', (e) => {
        // let postSectionHeight = submitAnswerButton.parentElement.parentElement.parentElement.parentElement.clientHeight;

        submitAnswerButton.classList.add('hidden');
        submitAnswerButton.parentElement.parentElement.nextElementSibling.classList.remove('hidden');

        // submitAnswerButton.parentElement.parentElement.parentElement.parentElement.style.height = postSectionHeight +'px';
    })

    // submitAnswerButton.addEventListener('click', (e) => {
    //     submitAnswerButton.parentElement.parentElement.nextElementSibling.scrollIntoView();
    // })
}

actionOnEachElement(submitAnswer, showAnswerFeedback);

function showSolution(solutionButton) {
    solutionButton.addEventListener('click', (e) => {
        if(solutionButton.parentElement.nextElementSibling.classList.contains('hidden')) {
            log('is hidden')
            solutionButton.firstElementChild.style.transform = 'rotate(180deg)';
        } else {
            solutionButton.firstElementChild.style.transform = 'rotate(0deg)';
        }

        log(solutionButton)
        let postSectionHeight = solutionButton.parentElement.parentElement.parentElement.parentElement.clientHeight;

        solutionButton.parentElement.nextElementSibling.classList.toggle('hidden');
        
        solutionButton.parentElement.parentElement.parentElement.parentElement.style.height = postSectionHeight +'px';
    })

    solutionButton.addEventListener('click', (e) => {
        solutionButton.parentElement.nextElementSibling.scrollIntoView();
    })
}

actionOnEachElement(showSolutionButton, showSolution);

// --------------------comment section: answer feedback--------------------

// --------------------add_new_question: cancel progress and go back--------------------
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

function cancelPostCreation() {
	const body = document.body;
	const alert = 
	`
	<div class="modal" onclick="confirmCancellation(event)">
      <div class="alert">
        <p class="alert-message">Sind Sie sicher, dass Sie die Erstellung jetzt abbrechen wollen?</p>
        <div class="flex-container gap-2">
          <button type="button" class="reject-button button-tertiary">Nicht abbrechen</button>
          <button type="button" class="confirm-button button-primary">Ja, abbrechen</button>
        </div>
      </div>
    </div>
	`;

	body.insertAdjacentHTML('afterbegin', alert);

}
// --------------------add_new_question: cancel progress and go back--------------------
const addQuestionMain = document.getElementById('add-question');
const currentUser = {username: "Tester"};
const posts = JSON.parse(sessionStorage.getItem('posts'));

addQuestionMain.addEventListener('submit', (event) => {
	// stop the default submit event, data is not send to a server
  event.preventDefault();

  // collect user input
  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

	// check if privatePost was selected
	const postStatus = Object.keys(entries).includes("privatePost") ? true : false;
	const submittedAnswers = [];
	// get answer contents and push to submittedAnswers[]
	Object.entries(entries).filter((element) => element[0].includes('content')).forEach((answerContent) => submittedAnswers.push(answerContent[1]));
	// get correct answers options selected by the user
	const correctAnswer = Object.keys(entries).filter((key) => key.includes('answer'));

	const newPost = {
    postID: `post-${posts.length + 1}`,
    postDate: new Date(),
    author: currentUser.username,
    degree: entries.degree,
    course: entries.course,
    questionType: entries.questionType,
    question: entries.question, 
    answers: submittedAnswers, 
    correctAnswer: correctAnswer,
    explanation: entries.explanation,
    privatePost: postStatus,
    likes: 0,
    comments: []
  };
	
	posts.push(newPost);
	
	sessionStorage.setItem('posts', JSON.stringify(posts));

	history.length > 1 ? history.go(-1) : location.assign('home.html');
})

console.log(posts)


// --------------------add_new_question: add additional answer option--------------------
const possibleAnswersContainer = document.getElementsByClassName('possible-answers-container');

// get the number of possible answers
let currentNumberOfOptions = 2;

// highlight selected answer
function highlightCorrectAnswer(checkbox) {
    checkbox.classList.toggle('possible-answer-checked');
}
// event delegation: container listens for the changed checkbox
possibleAnswersContainer[0].addEventListener('change', (e) => {
    if(e.target.matches('.possible-answer-checkbox')) {
        highlightCorrectAnswer(e.target.parentElement.parentElement);
    }
})

possibleAnswersContainer[0].addEventListener('input', (e) => {
    if(e.target.matches('.auto-grow-element')) {
        const autoGrowElement = e.target;
        // get element's border-width
        let inputBorder = autoGrowElement.offsetHeight - autoGrowElement.clientHeight;
        // set element's height to auto when input shrinks
        autoGrowElement.style.height = "auto";
        // set element's height when input grows
        autoGrowElement.style.height = autoGrowElement.scrollHeight + inputBorder + "px";
    }
})

// when the button is clicked add another answer
function addAnswerOption() {
    // check before adding answer option, max number of options is 4
    if(currentNumberOfOptions < 4) {
        let answerOption = `
        <div class="possible-answer">
            <label for="answer-${currentNumberOfOptions + 1}" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
                <input type="checkbox" name="answer-${currentNumberOfOptions + 1}" id="answer-${currentNumberOfOptions + 1}" class="possible-answer-checkbox">
                <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
            </label>
            <textarea name="" id="answer-${currentNumberOfOptions + 1}-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort ${currentNumberOfOptions + 1}"></textarea>
        </div>
        `;
        possibleAnswersContainer[0].insertAdjacentHTML("beforeend", answerOption);
    
        currentNumberOfOptions++;
    }
}

// --------------------add_new_question: add additional answer option--------------------
