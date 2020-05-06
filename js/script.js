let studentList = [];

const lastName = document.getElementById('lname');
const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const studentAge = document.getElementById('age');
const studentCourse = document.getElementById('course');
const studentGenderMale = document.getElementById('genderMale');
const studentGenderFemale = document.getElementById('genderFemale');
const table = document.getElementById('student-list');
const stub = document.getElementById('stub');
const idStud = document.getElementById('idStud');

const createLineTable = () => {
  const number = studentList[studentList.length - 1].id;
  const trCreate = document.createElement('tr');
  trCreate.id = `tr${number}`;
  trCreate.value = number;
  table.append(trCreate);
  const tdCreateId = document.createElement('td');
  tdCreateId.id = `td${number}`;
  tdCreateId.innerHTML = `${number}`;
  trCreate.append(tdCreateId);
  const tdCreateName = document.createElement('td');
  tdCreateName.id = `name${number}`;
  tdCreateName.onclick = () => openStudWindow(number);
  tdCreateName.innerHTML = `${studentList[number].lname} ${studentList[number].fname[0]}. ${studentList[number].mname[0]}.`;
  trCreate.append(tdCreateName);
  const tdCreateAge = document.createElement('td');
  tdCreateAge.id = `age${number}`;
  tdCreateAge.innerHTML = `${studentList[number].age}`;
  trCreate.append(tdCreateAge);
};

const submitStudent = () => {
  const student = {};
  
  if(lastName.value == "" || firstName.value == "" || 
    middleName.value == "" || studentAge.value == "" || studentCourse.value == "") {
    alert("Не все нужные данные введены!!!");
    return;
  }

  student.id = studentList.length;
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

const closeWindow = () => {
  stub.className = 'stub';
};

const openStudWindow = (number) => {
  const lastNameStud = document.getElementById('lastNameStud');
  const firstNameStud = document.getElementById('firstNameStud');
  const middleNameStud = document.getElementById('middleNameStud');
  const ageStud = document.getElementById('ageStud');
  const courseStud = document.getElementById('courseStud');
  const maleGenderStud = document.getElementById('maleGenderStud');
  const femaleGenderStud = document.getElementById('femaleGenderStud');
  
  const index = findElById(number, studentList);

  idStud.innerText = number;
  lastNameStud.value = studentList[index].lname;
  firstNameStud.value = studentList[index].fname;
  middleNameStud.value = studentList[index].mname;
  ageStud.value = studentList[index].age;
  courseStud.value = studentList[index].course;
  if(studentList[index].gender == 'Мужской') {
    maleGenderStud.checked = true;
  } else if (studentList[index].gender == 'Женский') {
    femaleGenderStud.checked = true;
  }

  stub.className += ' openWindow';
};

const editStudent = () => {
  
};

const deleteStudent = () => {
  const id = +idStud.innerText;
  const trDelete = document.getElementById(`tr${id}`);
  const index = findElById(id, studentList);
  studentList.splice(index, 1);
  stub.className = 'stub';
  trDelete.parentNode.removeChild(trDelete);
};

const findElById = (id, arr = []) => {
  return arr.findIndex(el => el.id === id);
};