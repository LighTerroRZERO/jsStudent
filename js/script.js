const studentList = [];

let studNum = 1;

const lastName = document.getElementById('lname');
const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const studentCourse = document.getElementById('course');
const studentGender = document.getElementById('gender');

const submitStudent = () => {
  const student = {
    number: studNum,
  };

  student.lname =  lastName.value;
  student.fname = firstName.value;
  student.mname = middleName.value;
  student.course = studentCourse.value;
  student.gender = studentGender.value;

  studentList.push(student);
};