// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

var questions = ["In classic video game lore what Temple has caused the most broken controllers/consoles in playthrough of Zelda Ocarina of Time", "Which popular video game features an ex-Special Forces operator named Jack Carver, who is stranded in Micronesia.", 
"Which James Bond film was made into a game for the Nintendo 64 console and later for the Wii console?", "What classic beat-'em-up game featured brothers Billy Lee and Jimmy (also nicknamed Spike and Hammer)?"]

var answers = ["Water", "Spirit", "Shadow", "Forest"]

var answers2 = ["Far Cry", "Left 4 Dead", "Max Payne", "Halo 3"]

var answers3 = ["Goldfinger", "Goldeneye", "Thunderball", "Moonraker"]

var answers4 = ["Ninja Gaiden", "Smash Brothers", "Snow Brothers", "Double Dragon"]

var timer

var answersCount=0

clockRunning=false
clockRunning1=false
clockRunning2=false
clockRunning3=false

var intervalId



function clockRun(){
	if (!clockRunning) {
		intervalId=setInterval(timerDown, 500);
		clockRunning=true
	}
}	
function clockRun1(){
	if (!clockRunning1) {
		intervalId=setInterval(timerDown, 500);
		clockRunning1=true
	}
}	
function clockRun2(){
	if (!clockRunning2) {
		intervalId=setInterval(timerDown, 500);
		clockRunning2=true
	}
}	
function clockRun3(){
	if (!clockRunning3) {
		intervalId=setInterval(timerDown, 500);
		clockRunning3=true
	}
}	


function clear1() {

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(timerDown);
    clockRunning=false;
  }

function clear2() {

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(timerDown1);
    clockRunning1=false;
  }
function clear3() {
	//  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(timerDown2);
    clockRunning2=false;
}
function clear4() {
	//  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(timerDown3);
    clockRunning3=false;
}

// function timerDown() { timer--
// $(".gametitle").html(timer)
// }



$(".choices").on("click", function(){
 answersCount++;
})



function screen1() {
	if ($(".choices").on("click")){
		$(".gametitle").html("correct!")
		setTimeout(question2, 3000)
	}
	else $(".gametitle").html("Wrong!")
		setTimeout(question2, 3000)
}

function screen2() {
	if ($(".choices").on("click")){
		$(".gametitle").html("correct!")
		clockRunning1=false;
		setTimeout(question3, 3000)
	}
	else $(".gametitle").html("Wrong!")
		setTimeout(question3, 3000)
}

function screen3() {
	if ($(".choices").on("click")){
		$(".gametitle").html("correct!")
		setTimeout(question4, 3000)
	}
	else $(".gametitle").html("Wrong!")
		setTimeout(question4, 3000)
}

function screen4() {
	if ($(".choices").on("click")){
		$(".gametitle").html("correct!")
		setTimeout(finalScore, 3000)
	}
	else $(".gametitle").html("Wrong!")
		setTimeout(finalScore, 3000)
}



function timerDown() {
	clockRun()
	timer--;
	$(".gametitle").html(timer)
	if (timer===0){
		clear1();
		screen1();
	}
}

function timerDown1() {
	clockRun1()
	timer=25
	timer--;
	$(".gametitle").html(timer)
	if (timer===0){
		clear2()
		screen2();
		// clear1()
	}
}
function timerDown2() {
	clockRun2()
	timer=25
	timer--;
	$(".gametitle").html(timer)
	if (timer===0){
		clear3()
		screen3();
		// clear1()
	}

}
function timerDown3() {
	timer=25
	timer--;
	$(".gametitle").html(timer)
	if (timer===0){
		clear4()
		screen4();
		// clear1()
	}
}



function start() {

timer=25

clockRun()

timerDown()

$(".start").empty();	


$(".questions").html(questions[0])
$(".choices").html(answers[Math.floor(Math.random() *4)])
$(".choices2").html(answers[Math.floor(Math.random() *4)])
$(".choices3").html(answers[Math.floor(Math.random() *4)])
$(".choices4").html(answers[Math.floor(Math.random() *4)])

$(".allchoices").on("click", screen1)
}





function question2(){
	console.log("cat")

$(".questions").html(questions[1])
$(".choices").html(answers2[Math.floor(Math.random() *4)])
$(".choices2").html(answers2[Math.floor(Math.random() *4)])
$(".choices3").html(answers2[Math.floor(Math.random() *4)])
$(".choices4").html(answers2[Math.floor(Math.random() *4)])

$(".allchoices").on("click", screen2)

	timerDown1()

}





function question3(){
	console.log("dog")

$(".gametitle").html(timer)

$(".questions").html(questions[2])
$(".choices").html(answers3[Math.floor(Math.random() *4)])
$(".choices2").html(answers3[Math.floor(Math.random() *4)])
$(".choices3").html(answers3[Math.floor(Math.random() *4)])
$(".choices4").html(answers3[Math.floor(Math.random() *4)])

timerDown2()

$(".allchoices").on("click", screen3) 
}






function question4(){


$(".gametitle").html(timer)

$(".questions").html(questions[3])
$(".choices").html(answers4[Math.floor(Math.random() *4)])
$(".choices2").html(answers4[Math.floor(Math.random() *4)])
$(".choices3").html(answers4[Math.floor(Math.random() *4)])
$(".choices4").html(answers4[Math.floor(Math.random() *4)])


$(".allchoices").on("click", screen4) 
timerDown3()	
}





function finalScore(){
	clear4()
	$(".gametitle").html("Final Score!")
	$(".questions").empty()
	$(".allchoices").empty()
	$(".choices").html(answersCount)
}




$(document).on("click", ".start", start);

// , ".choices2", ".choices3", "choices4"

//".choices", ".choices2", ".choices3", ".choices4"
