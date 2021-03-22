class Student{
    constructor(name, age, gender, email){
        this.id = increment++;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    // greeting = () => {
    //     // return `Name: ${this.name}, 
    //     //         age: ${this.age}, 
    //     //         gender: ${this.gender}, 
    //     //         email: ${this.email}`;
    //     return `<tr>
    //                 <td>${this.id}</td>
    //                 <td>${this.name}</td>
    //                 <td>${this.age}</td>
    //                 <td>${this.gender}</td>
    //                 <td>${this.email}</td>
    //             </tr>`;
    // }
}
let increment = 1;
let students = [];

// let duong = new Student("Duong", 18, "male", "duong.vo@codegym.vn");
// let phong = new Student("Phong", 18, "male", "phong.pham@codegym.vn");
// let thien = new Student("thien", 18, "male", "thien.nguyen@codegym.vn");
// students = [duong, phong, thien];
debugger;
if(window.localStorage.getItem('students') !=null){
    students = JSON.parse(window.localStorage.getItem('students'));
}
else{
    
    let duong = new Student("Duong", 18, "male", "duong.vo@codegym.vn");
    let phong = new Student("Phong", 18, "male", "phong.pham@codegym.vn");
    let thien = new Student("thien", 18, "male", "thien.nguyen@codegym.vn");
    students = [duong, phong, thien];
    window.localStorage.setItem('students', JSON.stringify(students));
}

function showStudent(){
    let tbStudent = document.getElementById('tbStudent');
    tbStudent.innerHTML = "";
    students.forEach(function(item, index){
        tbStudent.innerHTML += `<tr>
                            <td>${index+1}</td>
                            <td>${students[index].name}</td>
                            <td>${item.age}</td>
                            <td>${item.gender}</td>
                            <td>${item.email}</td>
                        </tr>`;
        // tbStudent.innerHTML += item.greeting();
    });

}

function ready(){
    showStudent();
}

ready();