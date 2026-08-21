"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age < 12) {
        return 100;
    }
    else if (age < 59) {
        return 200;
    }
    return 120;
};
// console.log(getTicketPrice(65))
// problem 2
const getStockStatus = (stock) => {
    if (stock === 0) {
        return "Out of Stock";
    }
    else if (stock >= 1 && stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock >= 6 && stock <= 20) {
        return "Available";
    }
    return "In Stock";
};
const formatUserProfile = (user) => {
    const { name, age, city } = user;
    return `${name} is ${age} years old and lives in ${city}`;
};
const calculateCartTotal = (products) => {
    const total = products.reduce((accu, item) => accu + item.price, 0);
    return total;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 },
];
const getStudentResult = (student) => {
    const mark = student.mark;
    const totalMark = mark.reduce((sum, accu) => sum + accu, 0);
    const average = totalMark / mark.length;
    const result = average >= 40 ? "pass" : "fail";
    return {
        name: student.name,
        average: average,
        result: result,
    };
};
const canEdit = (role) => {
    if (role == "admin" || "eitor")
        return true;
    return false;
};
console.log(canEdit("admin"));
//# sourceMappingURL=problem1.js.map