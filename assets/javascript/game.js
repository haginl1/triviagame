
//global variables
var answerTime = 3000;
var questionTime = 10000;
var intervalTimer = 1000;
var timerAnswer="";
var totalQuestion = 5;
var interval="";
var rightAnswer = "";
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
			answer:"Alien"
		},
			{
			ques: "What is the average velocity of a (European) laden swallow?",
			choices: ["36 mph", "24 mph", "11 mph", "100 mph"],
			answer:"24 mph"
		}	
];

function startGame(){
	
	getQuestion();
}

function getQuestion() {
	$("#correctAnswers").html("");
	$("#countDown").html(questionTime/intervalTimer);
	startInterval();
	clearTimeout(timerAnswer);
	var randomQuestion = Math.floor((Math.random()* questionsArray.length));
	rightAnswer = questionsArray[randomQuestion].answer;
	$("#currentQuestion").html(questionsArray[randomQuestion].ques);
	// grab the choices
	for (i=0; i < questionsArray[randomQuestion].choices.length; i++) {
		$("#RDO"+ i).html('<input type="radio" id="answerRDO' + i + '" onclick="userGuess()" name="answerRDO" value="' + questionsArray[randomQuestion].choices[i] + '" />&nbsp;' + questionsArray[randomQuestion].choices[i]);
	}
}

function checkAnswers(answer){
	$("#correctAnswers").html(rightAnswer);
	var incrementResult=0;
	if (answer== "noAnswer"){
		incrementResult= parseInt($("#noAnswers").text()) +1 ;
		$("#noAnswers").html(incrementResult);
	}else if(answer == rightAnswer){
		incrementResult= parseInt($("#correct").text()) +1 ;
		$("#correct").html(incrementResult);	
	}else if (answer != rightAnswer){
		incrementResult= parseInt($("#wrong").text()) +1 ;
		$("#wrong").html(incrementResult);
	}
	timerAnswer= setTimeout(function(){
		getQuestion();	
	}, answerTime);
}



function startInterval(){
    start = parseInt($("#countDown").html());
    interval = setTimeout(function(){
      $("#countDown").html(start-1);
      if($("#countDown").html()!= 0){
		startInterval();
	  }else{
		stopInterval(interval);
		$("#countDown").html("Time is Up!");
		checkAnswers("noAnswer");
	  }
    }, intervalTimer );
}

function stopInterval(interval){
	clearTimeout(interval);
}

function userGuess(){

	stopInterval(interval);
	$('#countDown').html("");
	$("input:radio[name='answerRDO']").prop('disabled', true);
	var answer= $("input:radio[name ='answerRDO']:checked").val();
	checkAnswers(answer);
}