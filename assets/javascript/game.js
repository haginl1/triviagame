
$(function() {//make sure DOM  is ready

//global variables
var CORRECTANSWERS=0;
var WRONGANSWERS=0;
var NOANSWER=0;
var timer=10;
var nextQuestionIndex=0;
var questionsArray=[ {
			ques: "What is the meaning of life?",
			choices: ["42", "84", "64", "10"],
			answer:"42"
		},
			{
			ques: "What sport did Rod Stewart play professionally",
			choices: ["baseball", "rugby", "soccer", "tennis"],
			answer:"soccer"
		},
			{
			ques: "What movie was Bil Paxton NOT in?",
			choices: ["Twister", "Terminator", "Weird Science", "Alien"],
			answer:"42"
		},
			{
			ques: "What is the average velocity of a (European) laden swallow?",
			choices: ["36 mph", "24 mph", "11 mph", "100 mph"],
			answer:"24 mph"
		},	
];

		
		//startup:  Only show a Start button to start the game

			
	
	
		//load the question
		function getQuestion() {


			$("#currentQuestion").append(questionsArray[nextQuestionIndex].ques);
			
			$("#correctAnswers").append(questionsArray[nextQuestionIndex].answer);

		}
		getQuestion();



		//Let's check if the answers are correct and increment the score and load the next question
		function checkAnswers(){

			var guess = 0 //need to target the correct answer
			if (guess === questionsArray[nextQuestionIndex].answer){
				CORRECTANSWERS++;
				nextQuestionIndex++;
				$("#correct").html(CORRECTANSWERS);
			}
			else{
				WRONGANSWERS++;
				nextQuestionIndex++;
				$("#wrong").html(WRONGANSWERS);
			}

			$("#correct").html(CORRECTANSWERS);
			$("#wrong").html(WRONGANSWERS);
			$("#noAnswers").html(NOANSWER);
		}
		checkAnswers();


		//time the user has to select a question
		function intervalTime(){

		}

		//we'll call the interval timer function to reset the clock betweek each question
		function startTime(){


		} 

});//end document ready function

