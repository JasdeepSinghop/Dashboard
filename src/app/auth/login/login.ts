// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.html',
//   styleUrl: './login.css'
// })
// export class Login {

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';     // ✅ Needed for ngModel
import { RouterLink } from '@angular/router';     // ✅ Optional if using routerLink
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],                          // ✅ Use FormsModule for template-driven form
  templateUrl: './login.html',
  styleUrls: ['./login.css']                      // ✅ fixed `styleUrl` to `styleUrls`
})
export class Login {

  constructor(private router: Router) {}

  onSubmit(form: any) {
    // console.log('Login form submitted:', form.value);
    // TODO: Add your login logic or redirect

     const loginData = form.value;

  const storedUser = localStorage.getItem('user');
  
  if (storedUser) {
    const user = JSON.parse(storedUser);

    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      alert('Login successful!');
      // Redirect to dashboard
      // window.location.href = '/dashboard';                     // or use router
      this.router.navigate(['/dashboard']);                      // ✅ Go to dashboard
    } else {
      alert('Invalid email or password.');
    }
  } else {
    alert('No user found. Please sign up first.');
  }
  }
}

