import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuarioService } from '../../servicios/UsuarioService';
import { AuthServiceService } from '../../servicios/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseApi } from '../../interfaces/response-api';

@Component({
  selector: 'app-login',

  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  eyeIcon: string = "pi-eye-slash";
  loginForm!: FormGroup;
  loginActive: boolean = true;
  isText: boolean = false;
  type: string = "password";
  respuesta: ResponseApi | undefined;
  constructor(private usuario: UsuarioService, private Auth: AuthServiceService, private fb: FormBuilder, private router: Router, private renderer: Renderer2) {

  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      clave: ['', Validators.required],
      correo: ['', Validators.required]
    })
  }




  hideShowPassword() {

    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "pi-eye" : this.eyeIcon = "pi-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);

      this.Auth.Login(this.loginForm.value).subscribe({
        next: (res) => {

          this.respuesta = res;
          console.log(res)

          if (this.respuesta?.status == true) {
            this.Auth.storeToken(this.respuesta.value.accessToken);
            this.router.navigate(['App'])
          }
          //this.loginForm.reset();


        },

        error: (err) => {
          alert(err?.error.message);
        }
      })
    }

    else {
      //  ValidateForm.validateAllFormFields(this.loginForm);
      console.log(this.loginForm.value)
      alert("TU FORMULARIO NO ES VALIDO");
    }
  }

}
