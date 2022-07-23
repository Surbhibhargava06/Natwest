function birthdayCakeCandles(candlesCount, candles) {
    var tallestCandle = candles[0];
    var tallestCandlesCount = 0;
    
    //To validate if correct input is provided
    if(candlesCount === candles.length) {
        //Find tallest candles from the array
        for(i=0; i<=candlesCount; i++){
            if(candles[i] > tallestCandle){
                tallestCandle = candles[i];
            }
        }
    
        //Count the number of tallest candles
        for(i=0; i<candlesCount; i++){
            if(candles[i] === tallestCandle){
                tallestCandlesCount++;
            }
        }

        return tallestCandlesCount;
    }

    return 'Please provide correct details';
};

console.log(birthdayCakeCandles(5, [4,3,2,1,3]));