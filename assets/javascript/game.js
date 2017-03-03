
//global variables
var answerTime = 3000;
var questionTime = 30000;
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
			ques: "What is NOT an artifact that Dr. Strange uses?",
			choices: ["The Cloak of Levitation", "The Sword of Eternity", "The Eye of Agamotto", "Book of Vishinti"],
			answer:"The Sword of Eternity"
		},
		{
			ques: "Who said 'Kiss my Grits' on the show Alice?",
			choices: ["Flo", "Alice", "Vera", "Jolene"],
			answer:"Flo"
		},	
		{
			ques: "Dirk Benedict played which character in Battlestar Galactia?",
			choices: ["Boxey", "Apollo", "Starbuck", "Adama"],
			answer:"Starbuck"
		},	
		{
			ques: "Han Solo is from which planet?",
			choices: ["Dagobah", "Corellia ", "Tatooine", "Endor"],
			answer:"Corellia"
		},	
		{
			ques: "What gives a light saber its color?",
			choices: ["The Force", "It's owners personality", "Crystals", "Lasers"],
			answer:"Crystals"
		}		
];

function startGame(){
	getQuestion();
}
startGame();

function getQuestion() {
	$("#correctAnswers").html("");
	$("#countDown").html(questionTime/intervalTimer);
	startInterval();
	clearTimeout(timerAnswer);
	var randomQuestion = Math.floor((Math.random()* questionsArray.length));
	rightAnswer = questionsArray[randomQuestion].answer;
	$("#currentQuestion").html(questionsArray[randomQuestion].ques);
	// grab the choices
	for (i=0; i < 
	questionsArray[randomQuestion].choices.length; i++) {
		$("#RDO"+ i).html('<input type="radio" id="answerRDO' + i + '" onclick="userGuess()" name="answerRDO" value="' + questionsArray[randomQuestion].choices[i] + '" />&nbsp;' + questionsArray[randomQuestion].choices[i]);
	}
	askedQuestions = questionsArray.pop();
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
