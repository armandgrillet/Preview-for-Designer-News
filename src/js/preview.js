/* 
* Variables (in alphabetical order). 
	* HTML shortcuts.
	* Functions variables.
*/

/* HTML shortcuts. */
var commentTextarea;
var innerPage;

/* Functions variables. */
var previewTitle;
var previewComment;

function launchPreview (stylePreviewTitle, stylePreviewComment) { // The observation of the textarea begins.
	/* Manage the title. */
	previewTitle = document.createElement("div");
	previewTitle.innerHTML = "<h1>Preview:</h1>";
	if (stylePreviewTitle != undefined)
		previewTitle.setAttribute("style", stylePreviewTitle);
	innerPage.appendChild(previewTitle);

	/* Manage the preview. */
	previewComment = document.createElement("div");
	previewComment.className = "StoryBody";
	if (stylePreviewComment != undefined)
		previewComment.setAttribute("style", stylePreviewComment);
	innerPage.appendChild(previewComment);

	/* Ready for the conversion. */
	if (previewComment.innerHTML != "")
		contentChanged();
	commentTextarea.onkeyup = contentChanged;
	commentTextarea.onpaste = contentChanged;
}

function contentChanged () { // Whenever something is done with the textarea, this function updates the preview.
	marked(commentTextarea.value, function (err, content) {  
    	previewComment.innerHTML = content; 
    });
}