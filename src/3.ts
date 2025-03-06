
import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[];
  constructor(private studentService: StudentService, private http: HttpClient) {}
  getStudents() {
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
      console.log(this.students);
    });
  }
}