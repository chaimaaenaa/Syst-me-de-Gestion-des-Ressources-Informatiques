import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePersonService } from '../ServicePersonService';  // Adjust path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private authService: ServicePersonService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Must be a valid email
      motDePasse: ['', Validators.required], // Must not be empty
      type: ['', Validators.required] // Must not be empty
    });
  }



  onSubmit() {
    console.log(this.loginForm); // Log the form status
    console.log(this.loginForm.errors); // Log any errors
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      this.authService.login(formValues.email, formValues.motDePasse, formValues.type).subscribe(
        response => {
          const userRole = response.role;
          this.redirectUser(userRole);
        },
        error => {
          console.error('Login error:', error);
          alert('Erreur lors de la connexion');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }


  private redirectUser(role: string) {
    switch(role) {
      case 'ROLE_USER':
        this.router.navigate(['/user-dashboard']);
        break;
      case 'ROLE_ADMIN':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'ROLE_TECHNICIEN':
        this.router.navigate(['/technicien-dashboard']);
        break;
      default:
        alert('Role non reconnu');
        break;
    }
  }
}
