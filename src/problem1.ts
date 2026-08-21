const getTicketPrice = (age: number): number => {
  if (age < 5) {
    return 0;
  } else if (age < 12) {
    return 100;
  } else if (age < 59) {
    return 200;
  }
  return 120;
};
// console.log(getTicketPrice(65))

// problem 2
const getStockStatus =(stock:number):string=>{
  if(stock === 0){
    return "Out of Stock"
  }else if(stock >= 1 && stock <=5 ){
    return "Almost Sold Out"
  }else if(stock >=6 && stock <=20){
    return "Available"
  }return "In Stock"
}
// console.log(getStockStatus(0))
// console.log(getStockStatus(3))
// console.log(getStockStatus(12))