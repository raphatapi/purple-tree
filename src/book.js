var selectedStory;
var selectedChoice;
var currentStory = 0;
var currentPage = "pageStart";
var json = stories[currentStory].pageStart.nextPage;

$(document).ready(function() {
    
	mainHTML();

    $(".bookBtn").on("click", function(event){
		selectedStory = $(this).text();

		var newStoryIndex =  $(".bookBtn").index(this);
		currentStory = newStoryIndex;
		storyHTML(currentPage);

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

function storyHTML(currentPage) {
	var storyHTML = "<img class='center-block' src='images/ouat.gif'><h1>" + stories[currentStory].storyTitle + "</h1>";
    $(".main-area").html(storyHTML); 
    var storyImg = $("<img>");
    storyImg.addClass("inline-block img-story");
    storyImg.attr("src", "http://via.placeholder.com/350x350");
    $(".main-area").append(storyImg);
    var storyText = $("<p>");
    storyText.text(stories[currentStory][currentPage].text);
    $(".main-area").append(storyText);
        $.each(stories[currentStory][currentPage].nextPage, function(k, v) {
            //display the key and value pair
            var choiceBtn = $("<button>");
            choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
            // choiceBtn.attr("id", k);
            choiceBtn.text(v);
            choiceBtn.on("click", function(event){
                // selectedChoice = k;
                // console.log(selectedChoice);
                choiceUpdate(k);
            })
            $(".main-area").append(choiceBtn);

            // $(".choice").on("click", function(event){
            //     selectedChoice = $(this).attr("id");
            //     // storyHTML(selectedChoice);
            //     console.log(selectedChoice);
            //     // if (selectedChoice === v) {
            //     //     console.log(selectedChoice);
            //     //     choiceA();
            //     // } else if (selectedChoice === v) {
            //     //     console.log(selectedChoice);
            //     //     choiceB();
                    
            //     // };
            // });
        });        

    
};

function choiceUpdate(choice){
    if (choice.indexOf("Story") > -1){
        console.log(choice);
    } else{
        storyHTML(choice);
    }
    
}

