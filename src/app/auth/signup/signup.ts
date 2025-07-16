// import { Component } from '@angular/core';
// import { ReactiveFormsModule,FormGroup,FormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   imports: [ReactiveFormsModule],
//   // imports: [RouterLink,ReactiveFormsModule],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css'
// })
// export class Signup {
// onSubmit(form: any) {
//     console.log('Signup form submitted:', form.value);}
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { RouterLink } from '@angular/router'; // Optional: if you use routerLink in HTML
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],                                  // ✅ Include FormsModule here
  // imports: [FormsModule, RouterLink],                   // ✅ Include FormsModule here
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],                            // ✅ fixed typo (was styleUrl)
})
export class Signup {
  constructor(private router: Router) {}
  onSubmit(form: any) {
    // console.log('Signup form submitted:', form.value);
    const user = form.value;

    // Save user object to localStorage
    localStorage.setItem('user', JSON.stringify(user));   // ✅ Store safely as string

    alert('Signup successful! Now login.');
    this.router.navigate(['/login']);
  }
}
