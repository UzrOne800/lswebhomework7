//Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y ;
  }
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if(language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  if (Math.floor(num) === num) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if(num % 5 === 0) {
    return 'buzz';
  } else if(num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
}

function isPrime(num) {
  if (num > 1) {
    for (var i = num - 1; i > 1; i--) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr.pop();
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  if (arr.indexOf(item) > -1) {
    return true;
  } else {
    return false;
  }
}

function addNumbers(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function averageTestScore(testScores) {
  var result = 0;
  for (var i = 0; i < testScores.length; i++) {
    result += testScores[i];
  }
  return result / testScores.length;
}

function largestNumber(numbers) {
  var result = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

function makeCat(name, age) {
  var cat = {
    name: name,
    age: age,
    meow: function() { return 'Meow!';}
  };
  return cat;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  var newObject = {
    name: name,
    email: email,
    password: password
  };
  return newObject;
}

function hasEmail(user) {
  if (user['email']) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  if (user['password'] === password) {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  user['password'] = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++) {
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var result = 0;
  for (var i = 0; i < 'posts'.length; i++) {
    result += user.posts[i].likes;
  }
  return result;
}

function addCalculateDiscountPriceMethod(storeItem) {

  storeItem['calculateDiscountPrice'] = function() {
    var discountedPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    return discountedPrice;
  };
  return storeItem;
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
