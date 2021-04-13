$(document).ready(function(){
	$(document).on({
	    ajaxStart: function(){
	        $("body").addClass("loading"); 
	    },
	    ajaxStop: function(){ 
	    	$('#name').val('');
		 	$('#email').val('');
		 	$('#mobile').val('');
		 	$('#comment').val('');
		 	$('#country').val('none');
	    	setTimeout(function(){ 
	    		$("body").removeClass("loading"); 
	    	}, 2000);
	    	setTimeout(function(){ 
	    		$('.error_message').text(''); 
	    	}, 4000);
	    }    
	});
    $("#btn_submit").click(function(){
	 	
	 	var name = '';
	 	var email = '';
	 	var phone = '';
	 	var comment = '';
	 	var country = '';
	 	var error_count = 0;
	 	name = $('#name').val();
	 	email = $('#email').val();
	 	phone = $('#mobile').val();
	 	comment = $('#comment').val();
	 	country = $('#country').val();

	 	var name_regex = /^[a-zA-Z\s]+$/;
	 	var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 	var intRegex = /[0-9 -()+]+$/;

	 	if(name == ''){
	 		error_count++;
	 	}else{
	 		if (!name_regex.test(name)) {
                error_count++;
            }
	 	}

	 	if(email == ''){
	 		error_count++;
	 	}else{
	 		if (!email_regex.test(email)) {
                error_count++;
            }
	 	}

	 	if(phone == ''){
	 		error_count++;
	 	}else if ((phone.length != 10) || (!intRegex.test(phone))){
	 		error_count++;
	 	}

	 	if(comment == ''){
	 		error_count++;
	 	}

	 	if(country == ''){
	 		error_count++;
	 	}

	 	if(error_count == 0){
	 		$('.error_message').text('');
	 		var form = $('#contactform');
	    	var url = 'core/contack.php';
	    	$.ajax({
	            type: "POST",
	            url: url,
	            data: form.serialize(), // serializes the form's elements.
	            success: function(data)
	            {
	                // show response from the php script.
	               $('.error_message').text('Thank you for contact us, we will contact you in shortly.');
	            }
	        });	
	 	}else{
	 		$('.error_message').text('Please Enter Valid Details.');
	 	}
	});
});
