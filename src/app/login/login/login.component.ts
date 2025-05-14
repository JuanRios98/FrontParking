import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  constructor(private _loginService: LoginService, private Router: Router){}

  loginRequest = {
    email: '',
    password: ''
  }

  onlogin(){
    this._loginService.login(this.loginRequest).subscribe({
      next: (rs)=>{
        console.log('Inicio correctamente',rs);
        // this.Router.navigate(['']);
      },error: (e) =>{
        console.log('Error al iniciar sesion',e);
        Swal.fire({
          title: ('Credenciales invalidadas'),
          icon: 'error',
          denyButtonText: 'aceptar',
          
        })
        
      }
    })
  }

}
