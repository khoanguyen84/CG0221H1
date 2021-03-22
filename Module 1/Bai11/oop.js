// let binh = {};
// binh.name = "Bình Hụ";
// binh.age = 18;
// binh.gender = "male";
// binh.getInfo = function(){
//     return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
// }


// let khanh = {
//     name : "Khánh",
//     age: 18,
//     gender : "male",
//     getInfo : function(){
//         return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
//     }
// }

function Student(n, a, g, e){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.email = e;
    this.getInfo = function(){
        return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, email: ${this.email}`;
    }
}

let khanh = new Student('Khánh', 18, "male", 'a@b.com');
let binh = new Student('Bình', 18, "male", 'b@c.com');

function Human(){
    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name.toUpperCase();
    }
    this.setPhoneNumber = function(pn){
        this.phoneNumer = pn;
    }
    this.getPhoneNumber = function(){
        return `${this.phoneNumer.substring(0,this.phoneNumer.length-3)}XXX`;
    }
    this.getFullPN = function(){
        return this.phoneNumer;
    }
}

let quang = new Human();
quang.setName('Quang Rọm');
quang.setPhoneNumber('0935737475');