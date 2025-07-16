import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  students: any[] = [];

  showForm = false;
  isEditing = false;
  currentIndex = -1;

  formData = {
    name: '',
    contact: '',
    roll: ''
  };

  openAddForm() {
    this.isEditing = false;
    this.formData = { name: '', contact: '', roll: '' };
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.isEditing) {
      this.students[this.currentIndex] = { ...this.formData };
    } else {
      this.students.push({ ...this.formData });
    }

    this.closeForm();
  }

  editStudent(index: number) {
    this.currentIndex = index;
    this.formData = { ...this.students[index] };
    this.isEditing = true;
    this.showForm = true;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.css'
// })
// export class Home {

// }