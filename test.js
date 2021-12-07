// var fullname = "Donald Duck";
// var obj = {
//   fullname: "Donald Trump",
//   prop: {
//     fullname: "Mickey Mouse",
//     getFullname: function () {
//     //   console.log(this);

//       return this.fullname;
//     },
//   },
//   getFirstName: function () {
//     // console.log(this);

//     return this.fullname
//   },
//   getMyName: () => {
//     // console.log(this);
//     return this.fullname;
//   },

//   getLastName: (function () {
//     return this.fullname;
//   })(),
// };

// console.log(obj.prop.getFullname());
// console.log(obj.getFirstName());
// console.log(obj.getMyName());
// console.log(obj.getLastName);

// // for(var i=0; i<3;i++){
// //     setTimeout(function (){
// //         console.log(i)
// //     },100+i)
// // }

// // (function(){
// //     var a= b=5
// // })
// //         // console.log(b)
// //         console.log(a)

function newUser(name, isDeveoloper) {
  return { name, isDeveoloper };
}

console.log(newUser("beke","true"))
