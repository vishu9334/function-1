

// function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// // sayMyName()

// // function addTwoNumber (Number1, Number2){
// //     console.log(Number1 + Number2);
// // }
// // const result = addTwoNumber(3, 5);
// // console.log("result:" , result); //har bar console value ko return nahi karta hai // return karne ka alag concept hai


 
// function addTwoNumber (Number1, Number2){
//     // let result = Number1 + Number2
//     // return result 
//                                     // This syntax before syntx is as to compair simple.
//     return Number1 + Number2

//      //yaha pe return value ka concept hota hai.
//     // console.log("yaha pe console nahi hoga qki return kabhi bhi return value karne ke waad koi code nahi run karta")
// }

//  addTwoNumber(3, 5);
// console.log("Result:" , addTwoNumber); // yaha pe console, value ko print nahi kar raha hai eske liye variable me store kar

// const result =addTwoNumber(3, 5);
// console.log("Result:" , result);

// function loginUserMessage(username){     // yaha pe pairameter lete hai 
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("vishal"));  // yaha pe argument lete hai.
                    // |
                    // |
            // ye return kar raha hai
            // or console.log return ko print kar raha hai.
// console.log(loginUserMessage());

// ------------------------------------------------------------------------------------------------------------

// function loginUserMessage(username){     // yaha pe pairameter lete hai 
//    if(username === undefined){
//     console.log("please enter a username");
//     return
//    }
//    return `${username} just logged in`
// }

// console.log(loginUserMessage("vishal"))
// console.log(loginUserMessage());

// ----------------------------------------------------------------------------------------------------------------

function loginUserMessage(username = "yahi pe define kiya myne ek naam vishal"){     // yaha pe pairameter lete hai // toa if wala condition run nahi hoga or agr hum koi bi return value pass nahi karege toa boa kam se kam es parameter wala chaleega
    // if(username === undefined){      //its similar both if syntx
    if(!username){                      
     console.log("please enter a username");
     return
    }
    return `${username} just logged in`
 }
 
//  console.log(loginUserMessage("vishal"))
 console.log(loginUserMessage());


 

