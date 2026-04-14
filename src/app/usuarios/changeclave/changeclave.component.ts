import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface pass {

  passwordNow: string,
  password: boolean,
  confirmpassword: string,



}
@Component({
  selector: 'app-changeclave',
  standalone: false,
  templateUrl: './changeclave.component.html',
  styleUrl: './changeclave.component.css',
  providers: [MessageService]
})
export class ChangeclaveComponent implements OnInit {
  formulario!: FormGroup;
  activatedButton: boolean = true;
  pass: pass = {
    passwordNow: '',

    password: false,
    confirmpassword: ''
  }
  constructor(private fb: FormBuilder,  private fbactivateForm: FormBuilder,  private router: Router, private renderer: Renderer2, private messageService: MessageService) {
  
  }

  ngOnInit(): void {

    this.formulario = this.fbactivateForm.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      password3: ['', Validators.required]
    });

  }

  get claveActual() {
    var v = this.formulario.get("password1")?.invalid && this.formulario.get('password1')?.touched;

    return v;
  }
  get clave2() {
    return this.formulario.get("password2")?.invalid && this.formulario.get('password2')?.touched;
  }
  get clave3() {
    return this.formulario.get("password3")?.invalid && this.formulario.get('password3')?.touched;
  }


  get activeButton() {
    if (this.claveActual == false && this.clave2 == false && this.clave3 == false) {
      this.activatedButton = false;
      return this.activatedButton;
    }
    else {
      this.activatedButton = true;

      return this.activatedButton;
    }
  }

  activeCount() {

    if (this.formulario.get('password2')?.value == '' || this.formulario.get('password3')?.value == '' || this.formulario.get('password1')?.value == '') {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Faltan campos por completar" });
      console.log("vacio")
    }



    else {
      if (this.formulario.get('password2')?.value == this.formulario.get('password3')?.value) {

        this.pass.passwordNow = this.formulario.get('password1')?.value
        this.pass.password = this.formulario.get('password2')?.value;
        this.pass.confirmpassword = this.formulario.get('password3')?.value;
        


        
      }

      else {

        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Las contraseñas no coinciden" });
      }
    }


  }
}
