var len = 4;
var num = pickNum(len);
var round = 0;
var guess;
var count = {fijas:0, picas:0};



function pickNum(len) {
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  nums.sort(function(){return Math.random() - 0.5});
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i].toString();
  }
  return nums.slice(0, len);
}

$("#userNum").keypress(function(event) {
  if (event.which == 13) {
    guess = Array.from($(this).val());

    var warning = guess.filter(function(value,index,self){ return (self.indexOf(value) !== index )});

    if ((!(guess.length == 4)) || warning.length>1) {
    	$(".alert").removeClass("hidden");
    } 

    jugar();
    $(".table").removeClass("hidden");
    $("tbody").append("<tr><td>"+round+"</td><td>"+guess.join("")+"</td><td>"+count.picas+"</td><td>"+count.fijas+"</td></tr>");
  }
});

function clearCount() {
	count.picas = 0;
	count.fijas = 0;
}

function jugar() {
	clearCount();
	function win() {
		if (count.fijas == 4) {
			$(".results").prepend("<p class=winner >¡GANASTE EN <span class=numGuesses >"+round+"</span> INTENTOS!</p>");
			console.log("Ganaste!");
		}
	}
	for (var i = 0; i < len; i++) {
    if (num[i] == guess[i]) { 
      count.fijas = count.fijas + 1;
    } else if (num.includes(guess[i])) {
      count.picas = count.picas + 1;
    } 
	}
	round = round + 1;
	win();

	//Borrar después: ________

	console.log(num);
	console.log(guess);
	console.log(count);
	console.log("Intento " + round);
} 

