

// function for add new student data
function addStudent(id,name,className,age,gender) {
    studentDetals.push(id,name,className,age,gender);
    return studentDetals;
}

//  delete student function 
function deletestudent (id){
    studentDetals.pop();
    return studentDetals;
}

let studentDetals = [
    {
        id: 1,
        name: "amol",
        class: "Ty bcs",
        age: 21,
        gender: "male"
    },
    {
        id: 2,
        name: "sachin",
        class: "Ty bcs",
        age: 21,
        gender: "male"
    },
    {
        id: 3,
        name: "Rakesh",
        class: "Sy bcs",
        age: 20,
        gender: "male"
    },
    {
        id: 4,
        name: "sushila",
        class: "Ty bcs",
        age: 21,
        gender: "female"
    },

];



 const result=addStudent(5,"sangna","Sy bcs",22,"female");

 const afterdelet =deletestudent(1);

console.log(afterdelet);