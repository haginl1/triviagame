
$(function() {//make sure DOM  is ready

//global variables
var CORRECTANSWERS=0;
var WRONGANSWERS=0;
var NOANSWER=0;
var timer=10;
CURRENTQUESTION=0
var questionsArray=[ {
			ques: "What is the meaning of life?",
			choices: ["42", "84", "64", "10"],
			answer: 0
		},
			{
			ques: "What sport did Rod Stewart play professionally",
			choices: ["baseball", "rugby", "soccer", "tennis"],
			answer: "soccer"
		},
			{
			ques: "What movie was Bil Paxton NOT in?",
			choices: ["Twister", "Terminator", "Weird Science", "Alien"],
			answer: "Alien"
		},
			{
			ques: "What is the average velocity of a (European) laden swallow?",
			choices: ["36 mph", "24 mph", "11 mph", "100 mph"],
			answer: "24"
		},	
];

		
		//startup:  Only show a Start button to start the game

			
	
	
		//load the question
		function getQuestion() {	
			
			$("#currentQuestion").append(questionsArray[CURRENTQUESTION].ques);
			CURRENTQUESTION++;
			if (CURRENTQUESTION==questionsArray.length) {
			//push results .append
			}
		else {
			//show next question
			}
		}
		//end time function	{
			CURRENTQUESTION++;
			//getquesiton function
// }
		getQuestion();

		//Let's check if the answers are correct and increment the score and load the next question
		function checkAnswers(){

			var guess = 0 //need to target the correct answer
			if (guess === questionsArray[i].answer) {
				CORRECTANSWERS++;
				$("#correct").append(CORRECTANSWERS);
			}
			else{
				WRONGANSWERS++;
				$("#wrong").append(WRONGANSWERS);
			}

			$("#correct").append(CORRECTANSWERS);
			$("#wrong").append(WRONGANSWERS);
			$("#noAnswers").append(NOANSWER);
		}
		checkAnswers();


		//time the user has to select a question
		function intervalTime(){

		}

		//we'll call the interval timer function to reset the clock betweek each question
		function startTime(){


		} 

});//end document ready function

