console.log("=======WELCOME TO MY SHOP=======");
var fake = require('faker');

for(var i=0;i<10;i++){
    console.log(fake.commerce.productName()+" - "+"$"+fake.finance.amount());
}
