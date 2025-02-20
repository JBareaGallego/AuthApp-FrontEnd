import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private authService   = inject( AuthService )
  private fb            = inject( FormBuilder );
  private router        = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email:['josepth@gmail.com',[ Validators.required, Validators.email ]],
    password:['123123',[ Validators.required, Validators.minLength(6) ]],
  })

  login(){

    const {email, password }= this.myForm.value;

    this.authService.login( email, password)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard')
      },
      error: (msg) => {
        Swal.fire('Error',msg, 'error')
      }
    })
  }

}
