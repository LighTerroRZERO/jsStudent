let studentList = [];

// переменные для внесения студентов в таблицу 
const lastName = document.getElementById('lname');
const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const studentAge = document.getElementById('age');
const studentCourse = document.getElementById('course');
const studentGenderMale = document.getElementById('genderMale');
const studentGenderFemale = document.getElementById('genderFemale');

const table = document.getElementById('student-list');

const stub = document.getElementById('stub');

// переменные для input в модальном окне
const idStud = document.getElementById('idStud');
const lastNameStud = document.getElementById('lastNameStud');
const firstNameStud = document.getElementById('firstNameStud');
const middleNameStud = document.getElementById('middleNameStud');
const ageStud = document.getElementById('ageStud');
const courseStud = document.getElementById('courseStud');
const maleGenderStud = document.getElementById('maleGenderStud');
const femaleGenderStud = document.getElementById('femaleGenderStud');

const createLineTable = () => {
  const number = studentList[studentList.length - 1].id;
  const trCreate = document.createElement('tr');
  trCreate.id = `tr${number}`;
  trCreate.value = number;
  table.append(trCreate);
  const tdCreateId = document.createElement('td');
  tdCreateId.id = `td${number}`;
  tdCreateId.innerText = `${number}`;
  trCreate.append(tdCreateId);
  const tdCreateName = document.createElement('td');
  tdCreateName.id = `name${number}`;
  tdCreateName.onclick = () => openStudWindow(number);
  tdCreateName.innerText = `${studentList[number].lname} ${studentList[number].fname[0]}. ${studentList[number].mname[0]}.`;
  trCreate.append(tdCreateName);
  const tdCreateAge = document.createElement('td');
  tdCreateAge.id = `age${number}`;
  tdCreateAge.innerText = `${studentList[number].age}`;
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
  const editStudent = {};
  document.getElementById('btnEditStudent').disabled = true;

  lastNameStud.disabled = false;
  firstNameStud.disabled = false;
  middleNameStud.disabled = false;
  ageStud.disabled = false;
  courseStud.disabled = false;
  maleGenderStud.disabled = false;
  femaleGenderStud.disabled = false;

  const footerStudWindow = document.getElementById('footerStudWindow');
  const saveButton = document.createElement('button');
  saveButton.innerText = 'Сохранить';
  saveButton.onclick = () => {

    if(lastNameStud.value == "" || firstNameStud.value == "" || 
    middleNameStud.value == "" || ageStud.value == "" || courseStud.value == "") {
      alert("Не все нужные данные введены!!!");
      return;
    }

    editStudent.id = +idStud.innerText;
    editStudent.lname =  lastNameStud.value;
    editStudent.fname = firstNameStud.value;
    editStudent.mname = middleNameStud.value;
    editStudent.age = ageStud.value;
    editStudent.course = courseStud.value;

    if(maleGenderStud.checked) {
      editStudent.gender = maleGenderStud.value;
    } else if (femaleGenderStud.checked) {
      editStudent.gender = femaleGenderStud.value;
    } else {
      editStudent.gender = "Оно";
    }

    const index = findElById(editStudent.id, studentList);

    studentList.splice(index, 1);
    studentList.push(editStudent);

    const tdEditName = document.getElementById(`name${editStudent.id}`);
    tdEditName.innerText = `${editStudent.lname} ${editStudent.fname[0]}. ${editStudent.mname[0]}.`;
    const tdEditAge = document.getElementById(`age${editStudent.id}`);
    tdEditAge.innerText = `${editStudent.age}`;

    lastNameStud.disabled = true;
    firstNameStud.disabled = true;
    middleNameStud.disabled = true;
    ageStud.disabled = true;
    courseStud.disabled = true;
    maleGenderStud.disabled = true;
    femaleGenderStud.disabled = true;
    document.getElementById('btnEditStudent').disabled = false;
    saveButton.parentNode.removeChild(saveButton);

  };
  footerStudWindow.append(saveButton);
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

const filter = document.getElementById('filter');
filter.oninput = () => {

  for(const student of studentList) {
    const trUpdate = document.getElementById(`tr${student.id}`);
    if(student.lname.includes(filter.value) == true || student.fname.includes(filter.value) == true) {
      trUpdate.style.visibility = 'visible';
    } else {
      trUpdate.style.visibility = 'hidden';
    }
    
  }
};