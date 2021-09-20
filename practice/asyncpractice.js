//Synchronous
const makeBurger = () => {
  const veggies = getVeggies(); 
  const patty = cookPatty(veggies); 
  const buns = getBuns(); 
  const burger = putPattyBetweenBuns(buns, patty); 
  return burger; 
}

const burger = makeBurger(); 

//Make it asynchronous by using Callbacks  (example of Callback hell)
const makeBurger = () => {
  getPatty(function (patty) {
    cookPatty(patty, function (cookedPatty) {
      getBuns(function (buns) {
putPattyBetweenBuns(buns, patty, function(burger) {
          return(burger)
        })
      })
    })
  })
}

// Make the burger
const burger = makeBurger();

