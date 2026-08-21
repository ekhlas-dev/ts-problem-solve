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
const getStockStatus = (stock: number): string => {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock >= 1 && stock <= 5) {
    return "Almost Sold Out";
  } else if (stock >= 6 && stock <= 20) {
    return "Available";
  }
  return "In Stock";
};
// console.log(getStockStatus(0))
// console.log(getStockStatus(3))
// console.log(getStockStatus(12))

type User = {
  name: string;
  age: number;
  city: string;
};

const formatUserProfile = (user: User): string => {
  const { name, age, city } = user;
  return `${name} is ${age} years old and lives in ${city}`;
};
// console.log(formatUserProfile({
//   name:"ekhlas",
//   age:22,
//   city:"dhaka"
// }))

type Product = {
  name: string;
  price: number;
};

const calculateCartTotal = (products: Product[]): number => {
  const total: number = products.reduce((accu, item) => accu + item.price, 0);
  return total;
};

const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "USB Cable", price: 300 },
];
// console.log(calculateCartTotal(products))

// problem 5

interface Student {
  name: string;
  mark: number[];
}
interface Result {
  name: string;
  average: number;
  result: string;
}
const getStudentResult = (student: Student): Result => {
  const mark: number[] = student.mark;
  const totalMark: number = mark.reduce((sum, accu) => sum + accu, 0);
  const average: number = totalMark / mark.length;
  const result: string = average >= 40 ? "pass" : "fail";
  return {
    name: student.name,
    average: average,
    result: result,
  };
};
// console.log(
//   getStudentResult({
//     name: "Rafi",
//     mark: [80, 75, 90, 85],
//   }),
// );

// problem 6

type Role ="admin" | "editor" | "viewer"

const canEdit=(role: Role):boolean => {
 if(role =="admin" || role=="editor")return true
 return false
    
 
}
console.log(canEdit("viewer"))