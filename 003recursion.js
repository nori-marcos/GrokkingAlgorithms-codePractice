const countDown = (number) => {
    console.log(number);

    // base case
    if(number <= 0){
        return
    } 
    // recursive case
    else {
        countDown(number-1)
    }
}

countDown(5);