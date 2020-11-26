/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

$(window).resize(function(){
	handleTopNavAnimation();
});


function handleTopNavAnimation() {
    var top=$(window).scrollTop();
    var windowWidth = $(window).width();

	if(top>10 && windowWidth>=750.4){
        $('#site-nav').addClass('navbar-solid');
        $(".site-branding").css("opacity", "1"); 
        $('#navbar-items').css("opacity", "1");
    } 
    else if (top<10 && windowWidth>=750.4){
        $('#site-nav').removeClass('navbar-solid');
        $(".site-branding").css("opacity", "0");
        $("#navbar-items").css("opacity", "0");
    }
    else if(windowWidth<750.4){
        $('#site-nav').addClass('navbar-solid');//
        $(".site-branding").css("opacity", "1");
        $("#navbar-items").css("opacity", "1");
    }
}

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'     : $('#registration-form #fname').val(),
            'lname'     : $('#registration-form #lname').val(),
            'email'     : $('#registration-form #email').val(),
            'cell'      : $('#registration-form #cell').val(),
            'address'   : $('#registration-form #address').val(),
            'zip'       : $('#registration-form #zip').val(),
            'city'      : $('#registration-form #city').val(),
            'program'   : $('#registration-form #program').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});

/*
 * SmoothScroll
*/

smoothScroll.init();