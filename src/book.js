// var titles = ["Little Pig", "Puppy Dog", "Meow Kitty", "Nature Cat"];
// var choices = [["Food", "Water"], ["Bones", "Shoes"], ["Milk", "Love"], ["Nature", "Home"]];

var titles = [
	{
		topic: "Little Pig",
		choices: ["Food", "Water"]
	}, 
	{
		topic: "Puppy Dog",
		choices: ["Bones", "Shoes"]
	}
];

var selectedStory;
var selectedChoice;
var currentStory = 0;

$(document).ready(function() {

    function mainHTML() {
    	for (var i = 0; i < titles.length; i++) {
			var books = $("<button>");
			books.addClass("text-center btn btn-warning btn-lg bookBtn");
			books.attr("data-index", i);
			books.text(titles[i].topic);
			$(".main-area").append(books);
		}
	};

	mainHTML();

    $(".bookBtn").on("click", function(event){
		selectedStory = $(this).text();

		var newStoryIndex =  $(".bookBtn").index(this);
		currentStory = newStoryIndex;
		storyHTML();

    });


});

function storyHTML() {
	var storyHTML = "<img class='center-block' src='images/ouat.gif'><h1>" + titles[currentStory].topic + "</h1>";
    $(".main-area").html(storyHTML);  
    for (var j = 0; j < 2; j++) {
    	var choiceBtn = $("<button>");
    	choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
    	choiceBtn.text(titles[currentStory].choices[j]);
    	$(".main-area").append(choiceBtn);
    }

    $(".choice").on("click", function(event){
        selectedChoice = $(this).text();
        if (selectedChoice === titles[currentStory].choices) {
        	console.log(selectedChoice);
 			
          
        } else {
        	console.log(selectedChoice);
            
        };
    });
};	