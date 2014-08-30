
//switching the image

$(function() {

	var image = $("#electrical_image");

	$("#box1")
	.mouseover(function() {
		image.fadeOut('fast', function() {
			image.attr("src","images/templatemo_blogimage03.jpg");
			image.fadeIn('fast');
		});
	})
	.mouseout(function() {
		image.fadeOut('fast', function() {
			image.attr("src","images/templatemo_blogimage02.jpg");
			image.fadeIn('fast');
		});
	});
});

$(".course_civil").click(function() {
		$(".civil").addClass('flip');
});

$(".course_min").click(function() {
		$(".min").addClass('flip');
});

$(".course_chem").click(function() {
		$(".chem").addClass('flip');
});

$(".course_elec").click(function() {
		$(".elec").addClass('flip');
});

$(".course_ind").click(function() {
		$(".ind").addClass('flip');
});


$(".panel").mouseleave(function() {
		 $(this).removeClass('flip');
});


$(function() {

	$(".topicBox")
	.mouseover(function() {
			$(this).css("background-color", "#8DA999").fadeIn(400);
	})
	.mouseout(function() {
			$(this).css("background-color", "#A5EFAE").fadeIn(400);
	});
});


$("#testing").click(function() {
    $('html,body').animate({
        scrollTop: $("#Elec_Loc").offset().top},
        'slow');
});

$("#testing2").click(function() {
    $('html,body').animate({
        scrollTop: $("#Chem_Loc").offset().top},
        'slow');
});

$("#testing3").click(function() {
    $('html,body').animate({
        scrollTop: $("#Ind_Loc").offset().top},
        'slow');
});

$("#testing4").click(function() {
    $('html,body').animate({
        scrollTop: $("#Civ_Loc").offset().top},
        'slow');
});

$("#testing5").click(function() {
    $('html,body').animate({
        scrollTop: $("#Min_Loc").offset().top},
        'slow');
});








