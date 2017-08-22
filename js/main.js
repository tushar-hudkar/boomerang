$(function(){

	$('.table-nav ul li').click(function(){

		var number = $(this).index();
		console.log(number);

		$(this).addClass('nav-active');
		$(this).siblings().removeClass('nav-active');

		var optimise = $('.table-cont').find('.details-tab').eq(number);

		optimise.show();
		optimise.siblings().hide();

	});

// 
        ////////////////DRAGGING ROWS //////////////////////
    var fixHelperModified = function(e, tr) {
    var $originals = tr.children();
    var $helper = tr.clone();
     // console.log('sort started');
    $helper.children().each(function(index) {
        $(this).outerWidth($originals.eq(index).outerWidth())
    });
    return $helper;
}   

$("#sort>tbody").sortable({
 handle: ".drag",
    helper: fixHelperModified
}).disableSelection();

}) //self invoking function ends here