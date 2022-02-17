
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
    reader.question("Is the first element bigger than the second element?", function(answer) {
        if (answer === "yes") {
            callback(true);
        }
        else {
            callback(false);
        }
    });
}

// askIfGreaterThan(10, 9, function(bool) {
//     console.log(bool);
//     reader.close();
// });


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps) {
    if (i === arr.length -1) {
        reader.close();
        return arr;
    }
    madeAnySwaps = false;
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.


    const greaterThan = askIfGreaterThan(arr[i], arr[i + 1], function(bool) {
        if (greaterThan) {
            arr[i], arr[i + 1] = arr[i + 1], arr[i];
            madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps);
        if (i === arr.length -1) {
            reader.close();
            return arr;
            
        }
        
    });
    // console.log('aiudhuhdjdrefw')

    // return arr;
}

innerBubbleSortLoop([5, 4, 3, 1, 2], 0, true);
