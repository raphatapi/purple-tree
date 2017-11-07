var selectedStory;
var selectedChoice;
var currentStory = 0;
var currentPage = "pageStart";

// FIREBASE AUTHENTICATION
var config = {
        apiKey: "AIzaSyAWUtB7pvGbWyUCdRJl0cLuf2_Ln0dWI5A",
        authDomain: "purple-tree-5f62c.firebaseapp.com",
        databaseURL: "https://purple-tree-5f62c.firebaseio.com",
        projectId: "purple-tree-5f62c",
        storageBucket: "",
        messagingSenderId: "699925334051"
      };
      firebase.initializeApp(config);

      var provider = new firebase.auth.GithubAuthProvider();

        function githubSignin() {
           firebase.auth().signInWithPopup(provider)
           
           .then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;
                
              console.log(token)
              console.log(user)
           }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
                
              console.log(error.code)
              console.log(error.message)
           });
        }

        function githubSignout(){
           firebase.auth().signOut()
           
           .then(function() {
              console.log('Signout successful!')
           }, function(error) {
              console.log('Signout failed')
           });
        }


$(document).ready(function() {
    
	mainHTML();

    $(".bookBtn").on("click", function(event){
		selectedStory = $(this).text();

		var newStoryIndex =  $(".bookBtn").index(this);
		currentStory = newStoryIndex;
		storyHTML(currentPage);

    });

    $(".github").on("click", function(){

        githubSignin();
      })
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

// GIPHY API FOR IMAGES
// function getImage() {
//     var topic = stories[currentStory][currentPage].topic;
//     var queryURL = "https://api.giphy.com/v1/gifs/random?q=" + topic + "&api_key=6xfaAb1rplRM55HrAsCdiL6jn7DwEZLy&limit=10"
// }

function storyHTML(currentPage) {


	var storyHTML = "<h1>" + stories[currentStory].storyTitle + "</h1>";
    $(".main-area").html(storyHTML); 
    var storyImg = $("<img>");
    storyImg.addClass("inline-block img-story");
    storyImg.attr("src", "https://via.placeholder.com/350x350");
    $(".main-area").append(storyImg);
    var storyText = $("<p>");
    storyText.text(stories[currentStory][currentPage].text);
    $(".main-area").append(storyText);
        $.each(stories[currentStory][currentPage].nextPage, function(k, v) {
            //display the key and value pair
            var choiceBtn = $("<button>");
            choiceBtn.addClass("text-center btn btn-warning btn-lg choice");
            choiceBtn.text(v);
            choiceBtn.on("click", function(event){
                choiceUpdate(k);
            })
            $(".main-area").append(choiceBtn);

        });        

    
};

function choiceUpdate(choice){
    // console.log(choice);
    if (choice.indexOf("Story") > -1){
        if (choice.indexOf("Another") > -1){
            location.reload();
        } else {
            storyHTML("pageStart");
            
        }
    } else{
        storyHTML(choice);
    }
    
}

