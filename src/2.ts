import { Student } from './Student';

export class School {
  students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}
