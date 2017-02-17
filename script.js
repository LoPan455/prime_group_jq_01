//current list of desired fruit[apple, orange, banana, pear, starfruit];
function AddFruit (name, inventoryCount, currentPrice, averagePrice){
	this.name = name;
	this.inventoryCount = inventoryCount;
	this.currentPrice = currentPrice;
	this.averagePrice = averagePrice;
	this.priceAdjuster = function() { //this method will be called every 15 seconds to adjust each fruit's price
			var priceAdjustment = (randomNumber(1 , 25) * .01) //the amount to adjust each price per interval
			priceAdjustment = priceAdjustment.toFixed(2); //rounding to two decimal places
			priceAdjustment = Number(priceAdjustment); //converting the previous value to a number
			if(randomNumber(0,1) == 0) { //randomly choose whether to increment or decrement the value
				this.currentPrice += priceAdjustment
			} else {
				this.currentPrice -= priceAdjustment
			}
		}
	}

//Build out the fruit objects
var apple = new AddFruit ('apple', 0, 5, 5 );
var orange = new AddFruit ('orange', 0, 3, 3 );
var banana = new AddFruit ('banana', 0, 1, 1 );
var pear = new AddFruit ('pear', 0, 6, 1 );
//build our array of fruit objects
var fruitBowl = [apple, orange, banana, pear];



// var newPrice = setInterval(priceAdjuster, 4000); //every 15 seconds



$(document).ready(function(){

	//  writing values for each fruit's current price and inventory, writing each fruit to the DOM
	fruitBowl.forEach(function(fruit){
		$('#tableHead').append('<th>' + fruit.name + '</th>');
		$('#currentPriceRow').append('<td class="currentPrice">$' + fruit.currentPrice + '</td>');
		$('#buyButtonRow').append('<td><button class="buyButton" data-currentprice="'+fruit.currentPrice+'" data-averageprice="' + fruit.averagePrice + '" data-fruit="'+ fruit.name +'">Buy</button></td>');
		$('#averagePriceRow').append('<td>$' + fruit.averagePrice + '</td>');
		$('#inventoryCountRow').append('<td>' + fruit.inventoryCount + '</td>');
		fruit.priceAdjuster();
		console.log('The' + fruit.name + 'price is now' + fruit.currentPrice);

	});
// setInterval(console.log('The apple current price is: ', apple.currentPrice),1500);
});
//
// // $(this).data('fruit')
//
// 	//this is where our event listener is - buy button
// 	$('.buyButton').on('click', function(){
// 		console.log('The ' + $(this).data('fruit') + ' fruit was clicked.' );
// 		console.log('The current price value of this button is: ',$(this).data('currentprice'));
// 		console.log('The averagePrice value of this button is: ',$(this).data('averageprice'));
// 		console.log($(this.data('fruit')[name]);
// 		// var clickedAveragePrice = $(this).data('currentprice') / 2;
// 		// clickedAveragePrice = clickedAveragePrice.toFixed(2);
// 		// clickedAveragePrice = Number(clickedAveragePrice);
// 		// console.log('average price:' , clickedAveragePrice);
// 		// $(this).inventoryCount ++;
// 		// console.log('inventory count' , $(this).inventoryCount);
// 		//
// 		// return clickedAveragePrice;
// 	});
//
//
// });
//
//
// //do we go up or down:
// function priceAdjuster(fruit){
//
// 	var priceAdjustment = (randomNumber(1 , 25) * .01)
// 	priceAdjustment = priceAdjustment.toFixed(2);
// 	priceAdjustment = Number(priceAdjustment);
// 	if(randomNumber(0,1) == 0) {
// 		// $(this).currentPrice += (randomNumber(1 , 25) * .01); //thse all need to be fixed to grab the current price HTML element
//     // $(this).currentPrice += (randomNumber(1 , 25) * .01); //thse all need to be fixed to grab the current price HTML element
// 		// $(this).currentPrice = $(this).currentPrice.toFixed(2);
// 		// $(this).currentPrice = Number($(this).currentPrice);
// 		this.currentPrice += priceAdjustment
// 	} else {
// 		// $(this).currentPrice -= (randomNumber(1 , 25) * .01);
// 		// $(this).currentPrice = $(this).currentPrice.toFixed(2);
// 		// $(this).currentPrice = Number($(this).currentPrice);
// 		this.currentPrice -= priceAdjustment
// 	}
// 	// minMax();
// 	// console.log('currentPrice' ,fruit.name, fruit.currentPrice);
// 	// $('.currentPrice').text(currentPrice);
// 	// return this.currentPrice;
// }
//
// // function minMax(){
// // 	if ($(this).currentPrice < .5) {
// // 		$(this).currentPrice = .5;
// // 	} else if ($(this).currentPrice > 9.99) {
// // 		$(this).currentPrice = 9.99;
// // 	}
// // }



function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
