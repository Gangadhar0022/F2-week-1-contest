/** @format */

let arr = [
    { id: 1, name: "Neeraja", age: "18", marks: 80 },
    { id: 2, name: "Gangadhar", age: "20", marks: 85 },
    { id: 3, name: "Mounika", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(arr => {
      if (arr.marks > 50) {
        console.log(arr);
      }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr => {
      if (arr.marks > 50) {
        console.log(arr);
  //       .name + ' ' + arr.marks
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newData = {
      id: 4,
      name: "Sharmila",
      age: 20,
      marks: 45
    };
    arr.push(newData);
    console.log(newData)
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(student => student.marks >= 50);
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
      {id: 4, name: "Likhitha", age: 22, marks: 60},
      {id: 5, name: "Mamatha", age: 23, marks: 40},
      {id: 6, name: "Varshini", age: 24, marks: 70}
    ];
    let concatenatedArr = arr.concat(newArr);
    console.log(concatenatedArr);
  }