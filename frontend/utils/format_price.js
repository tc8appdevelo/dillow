function formatPrice(price) {
  let arr = price.toString().split("").reverse();
  let priceStr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i > 0) {
      priceStr.unshift(",");
    }

    priceStr.unshift(arr[i]);
  }

  return "$" + priceStr.join("");
}

export default formatPrice;