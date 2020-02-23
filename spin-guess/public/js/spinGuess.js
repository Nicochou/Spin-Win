
/****************************
/ type : JS;			     /
/ auteur : Nicolas BOULEIN;	 /
/ Projet : Sping Guess;		 /
/****************************/

$( document ).ready(function() {
    
    // Script pour l'affichage des méthodes
	$(".list-group").hide();
    $(".card").click(function(e){

    	e.stopPropagation();

    	$(this).children("ul").toggle();
    	$(this).children("p").toggle();
    	
    });

    // Main Script
    $('table tr td').click(function(){
    	// Initialisation
          var number = $(this).text();
          var valueWin = $(".win-methode").val();

          //$.fn.myFunction(number);

      	//$.fn.winFunction = function(number){ 
      		//var listBlackMethod = [2,4,6,8,10,11,13,15,17,20,22,24,28,29,31,33,35];
      		//console.log(listBlackMethod);
      		//if(number ==)
	        //$('.win-methode').each(function() {
        	//winValue = $('.test_class').attr('value');
       // };
    	
    });

});