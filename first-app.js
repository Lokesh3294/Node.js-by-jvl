// const fs = require('fs');
// fs.writeFileSync('Hello.txt','This is file is created using the file system modules.');

// const arrays = (...datas) => {
//     return datas;
// };

// console.log(arrays(1,2,3,4,5,5));

const myPromise = new Promise((myResovle,myReject)=>{
    //myReject();
    setTimeout(() => {
        myResovle();
    }, 3000);
})

myPromise.then(()=>{
    console.log("success");
}).catch(()=>{
    console.log("Failed");
});