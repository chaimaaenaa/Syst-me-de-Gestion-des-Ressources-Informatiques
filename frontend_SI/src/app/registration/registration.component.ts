import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ServicePersonService} from "../ServicePersonService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private authService: ServicePersonService,private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
      username: ['', Validators.required],
      type: ['technicien', Validators.required] // Default value
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValues = this.registrationForm.value;
      this.authService.register(
        formValues.nom,
        formValues.prenom,
        formValues.email,
        formValues.motDePasse,
        formValues.username,
        formValues.type
      ).subscribe(
        response => {
          // Redirect to login page on successful registration
          this.router.navigate(['/login']);
        },
        error => {
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
