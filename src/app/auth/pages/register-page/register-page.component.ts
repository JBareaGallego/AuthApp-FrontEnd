import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {


    private fb = inject( FormBuilder );
    private authService = inject( AuthService )

    public myForm: FormGroup = this.fb.group({
      name:['namiii',[ Validators.required, Validators.minLength(6) ]],
      email:['nami@google.com',[ Validators.required, Validators.email ]],
      password:['321321',[ Validators.required, Validators.minLength(6) ]],
    })

    register(){

      console.log(this.myForm.value)

      const {email,name , password }= this.myForm.value;

      this.authService.register( email, name ,password)
      .subscribe({
            next: () => {
              console.log('all good')
            },
            error: (msg) => {
              Swal.fire('Error',msg, 'error')
            }
          })
    }

}
