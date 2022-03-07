let arrival = [1, 2, 3, 5, 4];
let departure = [6, 6, 6, 6, 5];

function ArrivalAndDeparture(arrival, departure) {
  let platform = 1; // starting from one because 1 platform required
  let res = 1;  
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
