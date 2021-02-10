// Progression #1: Greatest of the two numbers
greatestOfTwoNumbers = (num1, num2) => {
  if(num1>num2)
    return num1;
  else
    return num2;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

findScaryWord = (words) => {
  let big=0,j=0; 
  if(words.length===0)
    return null;
  for(let i=0;i<words.length;i++)
  { 
      let x=words[i];
      if(big<x.length){
        big=x.length;
        j=i;
      }
  }
  return words[j];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
netPrice=(numbers)=>{
  if(numbers.length===0)
    return 0;
  const net_price = numbers.reduce((total,amount)=>total+amount);
  return net_price;
}

add=(mixed)=>{
  let sum=0;
  for(let i=0;i<mixed.length;i++)
  {
    sum=sum+findDatatype(mixed[i]);
  }
  return sum;
}
findDatatype=(x)=>{
  if(typeof(x)==="number")
    return x;
  else if(typeof(x)==="string")
    return x.length;
  else if(typeof(x)==="boolean")
    return Number(x);
  else
    throw `Unsupported data type sir or ma'am `;       
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

midPointOfLevels=(numbersAvg)=>{
  if(numbersAvg.length===0)
    return null;
  const average = numbersAvg.reduce((total, amount, index, array) => {
    total += amount;
    if( index === array.length-1) { 
      return total/array.length;
    }else { 
      return total;
    }
  });
  return average;  
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

averageWordLength=(wordsArr)=>{
  let sum=0;
  let x=wordsArr.length;
  if(x===0)
    return null;
  for(let i=0;i<wordsArr.length;i++)
  {
    sum+=wordsArr[i].length;
  }
  return (sum/x);
}

avg=(mixed)=>{
  let sum=0;
  x=mixed.length;
  if(x===0)
    return null;
  for(let i=0;i<mixed.length;i++)
  {
    sum=sum+findDatatype(mixed[i]);
  }
  let num=sum/x;
  return Number(num.toFixed(2));
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

uniqueArray=(wordsUnique)=>{
  var arr=[];
  if(wordsUnique.length===0)
    return null;
  for (var i = 0; i < wordsUnique.length; i++) {
    for (var j = 0; j < i; j++){
      if (wordsUnique[i] == wordsUnique[j])
        break;
    }
      if (i === j)
        arr.push(wordsUnique[i]);   
  }
  return arr;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

searchElement=(wordsFind, ele)=>{
  if(wordsFind.length===0)
    return null;
  for(let i=0;i<wordsFind.length;i++){
    if(ele===wordsFind[i])
      return true;
  }
  return false;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
howManyTimesElementRepeated=(wordsCount, ele)=>{
  let count=0;  
  for(let i=0;i<wordsCount.length;i++){
    if(ele===wordsCount[i])
      count++;
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

maximumProduct=(arr)=>{
  let max = 0, result=0;
  // iterate the rows.
  for (let i = 0; i < arr.length; i++) {
    // iterate the columns.
    for (let j = 0; j < arr.length; j++) {
      if ((j - 3) >= 0) {
        result = arr[i][j] * arr[i][j - 1] *
          arr[i][j - 2] * arr[i][j - 3];
        if (max < result)
          max = result;
      }
      // check the maximum product 
      // in vertical row.
      if ((i - 3) >= 0) {
        result = arr[i][j] * arr[i - 1][j] *
          arr[i - 2][j] * arr[i - 3][j];
        if (max < result)
          max = result;
      }
      // check the maximum product in
      // diagonal (going through down - right)
      if ((i - 3) >= 0 && (j - 3) >= 0) {
        result = arr[i][j] * arr[i - 1][j - 1] *
          arr[i - 2][j - 2] * arr[i - 3][j - 3];
        if (max < result)
          max = result;
      }
      // check the maximum product in
      // diagonal (going through up - right)
      if ((i - 3) >= 0 && (j - 1) <= 0){
        result = arr[i][j] * arr[i - 1][j + 1] *
          arr[i - 2][j + 2] * arr[i - 3][j + 3];
        if (max < result)
          max = result;
      }
    }
  }

  return max;
}