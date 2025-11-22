

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

addQuestionMain.addEventListener('input', (event) => {
	// console.log(event.target)
	if(event.target.value.includes('Multiple-Choice')) {
		const selectionFormField = event.target.parentElement;
		const statementInput = selectionFormField.nextElementSibling;
		const statementValue = statementInput.nextElementSibling;

		statementInput.remove();
		statementValue.remove();

		const formFields = 
		`
		<div class="form-field">
			<label for="question" class="form-field-label">Fragestellung</label>
			<textarea name="question" id="question" class="question-input input-field auto-grow-element" rows="3" placeholder="Formulieren Sie eine Frage" maxlength="400" minlength="3" required></textarea>          
		</div>          
		<div class="form-field">
			<label for="answer1-input" class="form-field-label">Antwortmöglichkeiten</label>
			<div class="flex-container flex-column gap-2 w-fill">
				<div class="possible-answers-container flex-container flex-column gap-2">              
					<div class="possible-answer">
						<label for="answer1" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
							<input type="checkbox" name="answer1" id="answer1" class="possible-answer-checkbox">
							<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						</label>
						<textarea name="contentAnswer1" id="answer1-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort 1" maxlength="200" required></textarea>
					</div>              
					<div class="possible-answer">
						<label for="answer2" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
							<input type="checkbox" name="answer2" id="answer2" class="possible-answer-checkbox">
							<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						</label>
						<textarea name="contentAnswer2" id="answer2-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort 2" maxlength="200" required></textarea>
					</div>              
				</div>
				<p class="input-field-description">Wählen Sie die richtige Antwort bzw. die richtigen Antworten aus</p>
				<button type="button" class="button-ghost button-combo m-top" onclick="addAnswerOption()">
					<i class="material-icons" style="color: inherit;">add</i>
					Antwort hinzufügen
				</button>
			</div>
		</div>
		`;

		selectionFormField.insertAdjacentHTML('afterend', formFields);

	}


	if(event.target.value.includes('Wahr-oder-Falsch')) {
		const selectionFormField = event.target.parentElement;
		const questionInput = selectionFormField.nextElementSibling;
		const possibleAnswersContainer = questionInput.nextElementSibling;

		// console.log(possibleAnswersContainer)

		questionInput.remove();
		possibleAnswersContainer.remove();

		const formFields = 
		`
		<div class="form-field">
			<label for="question" class="form-field-label">Aussage</label>
			<textarea name="question" id="question" class="question-input input-field auto-grow-element" rows="3" placeholder="Formulieren Sie eine Aussage" maxlength="400" minlength="3" required></textarea>          
		</div>
		<div class="form-field">
			<label for="answer1-input" class="form-field-label">Wahrheitswert der Aussage</label>
			<div class="flex-container flex-column gap-2 w-fill">
				<div class="possible-answers-container flex-container flex-column gap-2">              
					<label class="answer-option checkmark-label">
						<input type="radio" name="trueOrFalse" value="trueStatement" class="answer-option-input">
						<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						<p class="answer-option-content checkmark-label-content">Wahr</p>
					</label>                      
						<label class="answer-option checkmark-label">
						<input type="radio" name="trueOrFalse" value="falseStatement" class="answer-option-input">
						<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						<p class="answer-option-content checkmark-label-content">Falsch</p>
					</label>
				</div>
				<p class="input-field-description">Wählen Sie aus, ob die Aussage wahr oder falsch ist</p>              
			</div>
		</div>
		`;

		selectionFormField.insertAdjacentHTML('afterend', formFields);

	}
})

addQuestionMain.addEventListener('submit', (event) => {
	// stop the default submit event, data is not send to a server
  event.preventDefault();
  // collect user input
  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

	if(entries.questionType === "Multiple-Choice") {
		const answersInputFieldDescription = event.target.children[4].lastElementChild.children[1];
	
		// check if user marked at least one correct answer
		const correctAnswerMarked = Object.keys(entries).some((key) => key.includes('answer'));
		
		// if marked then proceed else show error message
		if (correctAnswerMarked) {
			// check if privatePost was selected
			const postStatus = Object.keys(entries).includes('privatePost');
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
				
		} else {
			answersInputFieldDescription.classList.add('input-field-error-message');
		}

	}

	if(entries.questionType === "Wahr-oder-Falsch") {
		const answersInputFieldDescription = event.target.children[4].lastElementChild.children[1];

		const correctAnswerMarked = Object.keys(entries).includes('trueOrFalse');

		if(correctAnswerMarked) {
			// check if privatePost was selected
			const postStatus = Object.keys(entries).includes('privatePost');
	
			const newPost = {
				postID: `post-${posts.length + 1}`,
				postDate: new Date(),
				author: currentUser.username,
				degree: entries.degree,
				course: entries.course,
				questionType: entries.questionType,
				question: entries.question,  
				correctAnswer: [entries.trueOrFalse],
				explanation: entries.explanation,
				privatePost: postStatus,
				likes: 0,
				comments: []
			}
	
			posts.push(newPost);
				
			sessionStorage.setItem('posts', JSON.stringify(posts));
			
			history.length > 1 ? history.go(-1) : location.assign('home.html');

		} else {
		answersInputFieldDescription.classList.add('input-field-error-message');
		}
	}
})

console.log(posts)


// --------------------add_new_question: add additional answer option--------------------
const possibleAnswersContainer = document.getElementsByClassName('possible-answers-container');

// when the button is clicked add another answer
function addAnswerOption() {
	// get the current number of answer options
	const currentNumberOfOptions = possibleAnswersContainer[0].children.length;
	
	// check before adding answer option, max number of options is 4
	if(currentNumberOfOptions < 4) {
		const answerOptionNum = currentNumberOfOptions + 1;
		
		let answerOption = 
		`
		<div class="possible-answer">
			<label for="answer${answerOptionNum}" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
				<input type="checkbox" name="answer${answerOptionNum}" id="answer${answerOptionNum}" class="possible-answer-checkbox">
				<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
			</label>
			<textarea name="contentAnswer${answerOptionNum}" id="answer${answerOptionNum}-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort ${answerOptionNum}" maxlength="200" required></textarea>
		</div>
		`;

		possibleAnswersContainer[0].insertAdjacentHTML("beforeend", answerOption);
		
		}
}

// highlight selected answer
// function highlightCorrectAnswer(checkbox) {
// 	checkbox.classList.toggle('possible-answer-checked');
// }

// event delegation: container listens for the changed checkbox
addQuestionMain.addEventListener('change', (e) => {
	// change selected option's color to represent active selection, for multiple-choice question type
	if(e.target.matches('.possible-answer-checkbox')) {
		e.target.parentElement.parentElement.classList.toggle('possible-answer-checked');
	}
	
	// change selected option's color to represent active selection, for true or false question type
	if(e.target.matches('.answer-option-input')) {
		// get previous selection
		const optionsArray = Array.from(e.target.parentElement.parentElement.children);
		// toggle active selection class on the previous selection
		optionsArray.forEach((option) => {
			option.matches('.correct-answer-option') ? option.classList.toggle('correct-answer-option'): null;
		})
		// add active selection class to the current selection
		e.target.parentElement.classList.toggle('correct-answer-option');
	}

})

// change input element's height based on content size
addQuestionMain.addEventListener('input', (e) => {
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


// --------------------add_new_question: add additional answer option--------------------
