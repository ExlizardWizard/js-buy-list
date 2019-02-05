var listOfItems = $('.input-box');
var items = $('.input-box-item');

items.each(function(i, item){

	$(item).find('.add').click(function(){
		var itemAmountElem = $(item).find('.number-of-items');
		var currentAmount = itemAmountElem.val();
		itemAmountElem.val(parseInt(currentAmount) + 1);
	})

	var deductBtn = $(item).find('deduct.');
	
	deductBtn.click(function(){
		var itemAmountElem = $(item).find('.number-of-items');
		var currentAmount = itemAmountElem.val();
		itemAmountElem.val(parseInt(currentAmount) - 1);
		if (currentAmount == 2){
    		deductBtn.unbind("click");
    		deductBtn.css("opacity", 0.5);
    	}
	})
})

