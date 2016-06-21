'use strict';
// add your solution here!
function Garden(list,kids) {
  var kids = kids.sort();
	var self = this;
  let listDays = list.split("\n");
  let amount = 2;
  let kid = 0
  for(var k = 0; k < kids.length; ++k){
  	let kidArray = [];
    for(let i = 0; i < listDays.length; ++i){

      kidArray.push(listDays[i].slice(kid,amount));
    
    }
    kid += 2;
    amount += 2;
	    let array = [];
    kidArray.join("").split("").forEach(function(letter){
			switch(letter){
			 	case 'R':
			  array.push("radishes");
			  break;
			  case 'V':
			  array.push("violets");
			  break;
			  case 'G':
			  array.push("grass");
			  break;
			  case 'C':
			  array.push("clover");
			  break;
			}
	 });

    self[kids[k].toLowerCase()] = array; 
  }  
}
