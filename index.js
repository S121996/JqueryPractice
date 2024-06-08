// var x=5;
// var y=x++;
// console.log(x,y);
// for(var i=55; i<=90;i++)
// {
//     console.log(String.fromCharCode(i));
// }
// console.log("Welcome Sumit");

// let a=[1,2,3,4];
// console.log(a.length)
// for(let i=0;i<a.length;i++)
// {
//     console.log('a[${i}]->',a[i]);
// }

/*
console.log('A');
(async function()
{
const x=await 5;
console.log("C");
})();
console.log("B");*/

/*console.log(a);
var a=50;
var b=40;
var c=a+++b;
var d=b+++a;
console.log(c,d);*/


const obj={
    data:[1,2,3],
    processData:function()
    {
        this.data.forEach((num)=>
        {
            console.log(num*this.factor);

        });

    },
    factor:2
};

obj.processData();