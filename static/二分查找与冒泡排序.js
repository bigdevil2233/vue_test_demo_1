function fn2 (key,arr) {
  let high=arr.length-1;
  let low=0;
  while(low<=high){
    let mid=Math.floor((high+low)/2);
    if(key===arr[mid]){
      return mid;
    }
    else if(key<arr[mid]){
      high=mid-1;
    }
    else if(key>arr[mid]){
      low=mid+1;
    }
  }
  return -1;
}

function fn1 (key,arr,callback) {
  let length=arr.length;
  let arry=[];
  for(let i=0;i<length-1;i++){
    for(let j=0;j<length-i-1;j++) {
      if (arr[j] > arr[j + 1]) {
        let raw = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = raw;
      }
    }
  }
  //由于上面的代码，arr已经不再是数组而是对象了，所以不能直接传给fn2()
  //用下面这种方式可以从对象获取数组
  for(let i=0;i<length;i++){
    arry.push(arr[i]);
  }
  // console.log(arry);
  // return arr;

  return callback(key,arry);
}

let arry=[1,3,5,1,5,1,6,2,4,3,6,2,4,4,7,2,4];
let arr2=[1,2,4,5,7,8,21];
let result=fn1(7,arry,fn2);
// result=fn2(7,arr2);
console.log('结果输出：'+result);
// console.log(result);
