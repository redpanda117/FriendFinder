/*This is the code that get the data the user input and sends it to the friends.js file to hold the data.*/

$("#submit").on("click", function(event) {
        
//making sure all the questions have an answer and none is empty.
    function validation(){
        isValid = true
//validating the multiple choice.Also validating if a name and picture link was given. 
        $(".form-control").each(function() {
		if ( $(this).val() === "" )
			isValid = false;
		})
        return isValid;
    }
        
    if (validation()== true){
        event.preventDefault();
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#image").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(),$("#q7").val(),$("#q8").val(),$("#q9").val(),$("#q10").val()]
        };
    
        // Grab the URL of the website
    	var currentURL = window.location.origin;

    	// AJAX post the data to the friends API. 
    	$.post(currentURL + "/api/friends", newFriend, function(data){

    		// get the result and display the name and image of user best match.
            //getting the most compatible friend name to appear
    		$("#compatibleName").html(data.name);
            //changing the src of the placeholder image with the most compatible friend image
    		$("#compatiblePhoto").attr("src", data.photo);

	    	// Show the modal  
	    	$("#myResult").modal('toggle');
        
    	})
    }else{
        $("#needAnswer").modal('toggle');
        /*alert("Please answer all the questions.")*/
    }
})
    