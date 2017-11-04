var selectedStory;
var selectedChoice;
var currentStory = 0;

$(document).ready(function() {
    
	mainHTML();

    $(".bookBtn").on("click", function(event){
		selectedStory = $(this).text();

		var newStoryIndex =  $(".bookBtn").index(this);
		currentStory = newStoryIndex;
		storyHTML();

    });
});

function mainHTML() {
       	for (var i = 0; i < stories.length; i++) {
			var books = $("<button>");
			books.addClass("text-center btn btn-warning btn-lg bookBtn");
			books.attr("data-index", i);
			books.text(stories[i].storyTitle);
			$(".main-area").append(books);
		}
	};

function storyHTML() {
	var storyHTML = "<img class='center-block' src='images/ouat.gif'><h1>" + stories[currentStory].storyTitle + "</h1>";
    $(".main-area").html(storyHTML); 
    var storyImg = $("<img>");
    storyImg.addClass("inline-block img-story");
    storyImg.attr("src", "http://via.placeholder.com/350x350");
    $(".main-area").append(storyImg);
    var storyText = $("<p>");
    storyText.text(stories[currentStory].pageStart.text);
    $(".main-area").append(storyText);
    for (var j = 0; j < 2; j++) {
    	var choiceBtn = $("<button>");
    	choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
    	choiceBtn.text(stories[currentStory].pageStart.nextpage[j]);
    	$(".main-area").append(choiceBtn);
    }

    $(".choice").on("click", function(event){
        selectedChoice = $(this).text();
        if (selectedChoice === stories[currentStory].pageStart.nextpage[0]) {
        	console.log(selectedChoice);
          	choiceA();
        } else if (selectedChoice === stories[currentStory].pageStart.nextpage[1]) {
        	console.log(selectedChoice);
        	choiceB();
            
        };
    });
};

function choiceA() {
	var choiceA = "<h1>Page 1" + stories[currentStory].storyTitle + "</h1>";
    $(".main-area").html(choiceA); 
    var storyImg = $("<img>");
    storyImg.addClass("inline-block img-story");
    storyImg.attr("src", "http://via.placeholder.com/350x350");
    $(".main-area").append(storyImg);
    var storyText = $("<p>");
    storyText.text(stories[currentStory].pageOne.text);
    $(".main-area").append(storyText);
    for (var j = 0; j < 2; j++) {
    	var choiceBtn = $("<button>");
    	choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
    	choiceBtn.text(stories[currentStory].pageOne.nextpage[j]);
    	$(".main-area").append(choiceBtn);
    }

    $(".choice").on("click", function(event){
        selectedChoice = $(this).text();
        if (selectedChoice === stories[currentStory].pageOne.nextpage[0]) {
        	console.log(selectedChoice);
          	//choiceC();
        } else if (selectedChoice === stories[currentStory].pageOne.nextpage[1]) {
        	console.log(selectedChoice);
        	//choiceD();
            
        };
    });
};

function choiceB() {
	var choiceB = "<h1>Page2 " + stories[currentStory].storyTitle + "</h1>";
    $(".main-area").html(choiceB); 
    var storyImg = $("<img>");
    storyImg.addClass("inline-block img-story");
    storyImg.attr("src", "http://via.placeholder.com/350x350");
    $(".main-area").append(storyImg);
    var storyText = $("<p>");
    storyText.text(stories[currentStory].pageTwo.text);
    $(".main-area").append(storyText);
    for (var j = 0; j < 2; j++) {
    	var choiceBtn = $("<button>");
    	choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
    	choiceBtn.text(stories[currentStory].pageTwo.nextpage[j]);
    	$(".main-area").append(choiceBtn);
    }

    $(".choice").on("click", function(event){
        selectedChoice = $(this).text();
        if (selectedChoice === stories[currentStory].pageTwo.nextpage[0]) {
        	console.log(selectedChoice);
          	//choiceE();
        } else if (selectedChoice === stories[currentStory].pageTwo.nextpage[1]) {
        	console.log(selectedChoice);
        	//choiceF();
            
        };
    });
};