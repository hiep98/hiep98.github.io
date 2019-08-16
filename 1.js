 $(function(){
 	vitriedu = $('#edu').offset().top;
 	vitrisp = $('#khoisp').offset().top;
 	vitricm = $('#comment').offset().top;

 	$(".xuong, .kn").click(function() {
 		$('body,html').animate({ scrollTop:vitriedu },600)
 		/*cach 2 : bo dong vitriedu  va chi can go
 		$('body,html').animate({ scrollTop:$('#edu').offset().top; },600)*/
 		return false;
 	})

 	$(".sp").click(function() {
 		$('body,html').animate({ scrollTop:vitrisp },600)
 		return false;
 	})
 	
 	$(".cm").click(function() {
 		$('body,html').animate({ scrollTop:vitricm },600)
 		return false;
 	})
})  
 