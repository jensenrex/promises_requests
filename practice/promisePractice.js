//Create a promise that authenticates the user. Use if and else to handle resolve and reject. Consume the promise by using .then and .catch

let userAuth = false; 
const loginPromise = new Promise((resolve, reject) => { 
  if (userAuth === true) {
    let userDetails = { 
      firstName: "Joh Blow", 
      membershipType: "Premium"
    }
    resolve(userDetails);
  } else { 
    reject("Unsuccessful login"); 
  }
});

// consume the promise
loginPromise 
  .then((res)=>{
    // do something
    console.log("Welcome page"); 

  })
  .catch((err) => {
    console.log(err);

  })