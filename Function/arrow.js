//with one parameter
const caclArea = radius => {
    return 3.14 * radius ** 2;
  };
  
  const area = caclArea(5);
  console.log("area is:", area);
  
  //Single line
  const calcArea2 = radius => 3.14 * radius ** 2;
  const area2 = calcArea2(5);
  console.log(area2);
  
  //with no parameter
  const greet = () => "hello, world";
  console.log(greet());
  
  //with two parameters
  const total = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i] + products[i] * tax;
    }
    return total;
  };
  console.log(total([10, 15, 30]), 0.2);
  