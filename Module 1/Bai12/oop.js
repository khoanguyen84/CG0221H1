function Person(name, age, gender, email){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.email = email

    this.greeting = function(){
        return `Name: ${this.name}`;
    }
}

let khoa = new Person("Khoa",18, "male", "khoa.nguyen@codegym.vn");

class Human{
    constructor(name, age, gender, email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
    // greeting(){
    //     return `Name: ${this.name}, age: ${this.age}, gender: ${this.gender}, email: ${this.email}`;
    // }
    greeting = () => {
        return `Name: ${this.name}, 
                age: ${this.age}, 
                gender: ${this.gender}, 
                email: ${this.email}`;
    }

    static slogen(){
        return "still breath still alive";
    }
}

class Student extends Human{
    constructor(name, age, gender, email, pn){
        super(name,age,gender,email);
        this.phone = pn;
    }

    // introduce(){
    //     return `Name: ${this.name}, age: ${this.age}, gender: ${this.gender}, email: ${this.email}, phone number: ${this.phone}}`;
    // }
    greeting(){
        // return `${super.greeting()}, phone number: ${this.phone}`
        return `Name: ${this.name}, phone number: ${this.phone}`
    }
}

let nam = new Human("Nam", 18, "male", "nam.nguyen@codegym,.vn");
let chuong = new Student("chuong", 10, "male", "chuong.nguyen@codegym.vn",'0935737475');