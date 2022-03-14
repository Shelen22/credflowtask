let arrival = []; 
let departure = [];  
  
// arrival.sort((a,b) => a-b)
// departure.sort((a,b) => a-b)

function ArrivalAndDeparture(arrival, departure) {
  let platform = 1; // starting from one because 1 platform required 
  let res = 0;  
  let i = 1;
  let j = 0;
  while (i < arrival.length && j < departure.length) {
    if (arrival[i] <= departure[j]) {
      platform++;
      i++;
    }
    else if (arrival[i] > departure[j]){        
        platform--;
        j++;
    } 
    if (platform > res){
        res = platform;
    } 
  }
  console.log(res);
}

ArrivalAndDeparture(arrival, departure);
