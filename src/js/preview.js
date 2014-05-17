/* 
* Variables (in alphabetical order). 
	* HTML shortcuts.
	* Functions variables.
*/

/* HTML shortcuts. */
var storyTextarea;
var innerPage;

/* Functions variables. */
var previewTitle;
var previewContent;

/*
* Code.
*/
storyTextarea = document.getElementById("StoryComment");
innerPage = document.getElementsByClassName("InnerPage")[0];

/* Title */
previewTitle = document.createElement("div");
previewTitle.innerHTML = "<h1>Preview:</h1>";
previewTitle.style["padding-top"] = "40px";
innerPage.appendChild(previewTitle);

/* Post */
previewContent = document.createElement("div");
previewContent.className = "StoryBody";
innerPage.appendChild(previewContent);
previewContent.setAttribute('style', "font: 400 14px/24px \"Whitney SSm A\",\"Whitney SSm B\",\"Georgia\",\"Times New Roman\",Serif;");

/* Translation */
if (previewContent.innerHTML != "")
	contentChanged();
storyTextarea.onkeyup = contentChanged;
storyTextarea.onpaste = contentChanged;

/* Displays the post with the textarea is updated. */
function contentChanged () { 
	marked(storyTextarea.value, function (err, content) {  
    	previewContent.innerHTML = content; 
    });
}