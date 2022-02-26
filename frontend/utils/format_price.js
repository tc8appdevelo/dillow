const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const formatPrice = function(price, isDollarSign = true) {
  let arr = price.toString().split("").reverse();
  let priceStr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i > 0) {
      priceStr.unshift(",");
    }

    priceStr.unshift(arr[i]);
  }

  if (isDollarSign) {
    return "$" + priceStr.join("");
  } else {
    return priceStr.join("")
  }

}

export const reverseFormatPrice = function(priceStr) {
  let arr = priceStr.split("");
  let parsedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (nums.includes(arr[i])) {
      parsedArr.push(arr[i]);
    }
  }
  return parsedArr.join("")
}

export const formatAddress = function(listing) {
  const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
  return formated;
}