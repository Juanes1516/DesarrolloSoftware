
import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudents} from './dataStudent.js'



let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentsTbody: HTMLElement = document.getElementById('infoStudents')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();

renderStudentTable(dataStudents);
renderCoursesInTable(dataCourses);


totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function renderStudentTable(students: Student[]):void{
  console.log('Desplegando estudiante');
  students.forEach((student)=> {

    let trElementCodigo = document.createElement("tr");
    trElementCodigo.innerHTML = `<td>Código</td>
                             <td>${student.codigo}</td>`
    let trElementCedula = document.createElement("tr");                         
    trElementCedula.innerHTML = `<td>Cédula</td>
                             <td>${student.cedula}</td>`
    let trElementEdad = document.createElement("tr");
    trElementEdad.innerHTML = `<td>Edad</td>
                             <td>${student.edad}</td>`
    let trElementDireccion = document.createElement("tr");
    trElementDireccion.innerHTML = `<td>Dirección</td>
                             <td>${student.direccion}</td>`
    let trElementTelefono = document.createElement("tr");
    trElementTelefono.innerHTML = `<td>Teléfono</td>
                             <td>${student.telefono}</td>`;

    studentsTbody.appendChild(trElementCodigo);
    studentsTbody.appendChild(trElementCedula);
    studentsTbody.appendChild(trElementEdad);
    studentsTbody.appendChild(trElementDireccion);
    studentsTbody.appendChild(trElementTelefono);

    
  });
}

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}