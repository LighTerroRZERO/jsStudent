let studentList = [];

const lastName = document.getElementById('lname');
const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const studentAge = document.getElementById('age');
const studentCourse = document.getElementById('course');
const studentGenderMale = document.getElementById('genderMale');
const studentGenderFemale = document.getElementById('genderFemale');
const table = document.getElementById('student-list');

const createLineTable = () => {
  const number = studentList.length;
  const trCreate = document.createElement('tr');
  trCreate.id = `tr${number}`;
  table.append(trCreate);
  const tdCreateNum = document.createElement('td');
  tdCreateNum.id = `0${number}`;
  tdCreateNum.innerHTML = number;
  trCreate.append(tdCreateNum);
  const tdCreateName = document.createElement('td');
  tdCreateName.id = `name${number}`;
  tdCreateName.innerHTML = `${studentList[number-1].lname} ${studentList[number-1].fname[0]}. ${studentList[number-1].mname[0]}.`;
  trCreate.append(tdCreateName);
  const tdCreateAge = document.createElement('td');
  tdCreateAge.id = `age${number}`;
  tdCreateAge.innerHTML = `${studentList[number-1].age}`;
  trCreate.append(tdCreateAge);
};

const listBuilding = (arr = []) => {
  
};

const submitStudent = () => {
  const student = {};
  
  if(lastName.value == "" || firstName.value == "" || 
    middleName.value == "" || studentAge.value == "" || studentCourse.value == "") {
    alert("Не все нужные данные введены!!!");
    return;
  }

  student.lname =  lastName.value;
  student.fname = firstName.value;
  student.mname = middleName.value;
  student.age = studentAge.value;
  student.course = studentCourse.value;

  lastName.value = "";
  firstName.value = "";
  middleName.value = "";
  studentAge.value = "";
  studentCourse.value = "";
  
  if(studentGenderMale.checked) {
    student.gender = studentGenderMale.value;
  } else if (studentGenderFemale.checked) {
    student.gender = studentGenderFemale.value;
  } else {
    student.gender = "Оно";
  }

  studentList.push(student);

  createLineTable(); 
};