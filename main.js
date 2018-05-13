/*
var x=5;
var str="world";
var nl=null;
var undef=undefined;
var arr1=[3,5,7,9,11,13];
var arr2=new Array(1,2,3,4,5,6,7);
var arr3=new Array(7);

for(i=0;i<arr3.length;i++)
{
    arr3[i] = Number(prompt("Введите число", 100));
}

var n = Number(prompt("Какой элемент вы ходите изменить?", 100));
arr3[n] = Number(prompt("новое значение", 100));
console.log(typeof arr3, arr3);
alert(typeof arr1 + " " + arr1);
*/

/*
var at=[9,8,7,6,5];
console.log(at);
var i=0;
while(i<at.length)
{
    at[i]=Number(prompt('Введите число',100));
    i++;
}
console.log(at);
*/

/*
var am = new Array(5);
var i=6;
do{
am[i]=Number(prompt("Enter your number",100));
i=am.length+1;
}while(i<am.length)
console.log(am);
*/

/*
var c = {
    model:"accent",
    age:5,
    weight:2
}

console.log(c);

function car(model,age,weight)
{
    this.model=model;
    this.age=age;
    this.weight=weight;
}

var car1= new car("priora",10,3);

console.log(car1);

alert(car1.model);
*/

/*
var cont = [
    {name:"Carl",family:"Marks",status:"Death"},
    {name:"Denis",family:"Morohovsky",status:"Live"},
    {name:"Segrey",family:"Ivanov",status:"Death"},
]

console.log(cont); */

/* var detii = {
    name:"Lev",
    age:3,
    humor:"cool"
};

console.log(detii);

var detiii = {
    name:"Nazar",
    age:16,
    humor:"trist"
};

console.log(detiii);

function deti(name,age,humor)
{
    this.name=name;
    this.age=age;
    this.humor=humor;
}

var deti1 = new deti("Lev",3,"cool");
var deti2 = new deti("Nazar",16,"trist");
var deti3 = new deti("Sergey",8,"good");

console.log(deti1);
console.log(deti2);
console.log(deti3);
 */
/* 
function deti(name,age,humor)
{
    this.name=name;
    this.age=age;
    this.humor=humor;
}

var deti1 = new deti("Lev",3,"cool");
var deti2 = new deti("Nazar",16,"trist");
var deti3 = new deti("Sergey",8,"good");

alert(deti1.name + " " + deti1.age + " " + deti1.humor);
console.log(deti2);
console.log(deti3);
 */



var btn = document.getElementById("button");
var txt = document.getElementById("text");
var pdps = document.getElementById("podpiska")


function clickk()
{
    
    if(btn.style.color=="white")
    {
        btn.style.color="red";
        btn.style.backgroundColor="orange";
        pdps.innerHTML="Оформлена подписка для пользователя "+prompt("Ведите ваше имя", "Ваше имя") +" "+
        prompt("Ведите вашу фамилию", "Ваша фамилия") +", "+
        prompt("Ведите ваш возраст", "Сколько вам лет?")+" лет!";

    }   
    else
    {
        btn.style.color="white";
        btn.style.backgroundColor= "rgb(110, 105, 141)";
    }
} 


var x = 5;

/* 
var obj = {
    name: "Denis",
    surname: "Morohovsky",
    age: 25,
    height: 185,
    weight: 77
};

console.log(x);
console.log(obj);

alert(x);
alert(obj.name+" "+obj.surname+" Age: "+obj.age); 
*/
/*
 x=Number(prompt("Сколько вам лет?","100"));
if(x != null)
{
    if(x>=18)
    {
        alert("Вы уже взрослый, поздравляем, вы допущены");
    }
    else
    {
        alert("Вам меньше 18 лет, вы не допущены");
    }
}
else 
{
    alert("Вы не допущены");
    console.log(x);
} 
*/

/* var mass1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var mass2 = [1, 1, 3, 2, 5, 3, 7, 4, 9, 5];
var mass3 = new Array(10);

console.log(mass1);
console.log(mass2);
console.log(mass3);

    for (var i = 0; i < mass1.length; i++) {
       mass3[i]=mass1[i]*mass2[i];
    }

console.log(mass3); */

