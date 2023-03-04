
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' ;
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginUsuario: FormGroup;

  constructor (
      private fb: FormBuilder,
      private afAuth: AngularFireAuth,
      private router: Router ,
  ){
    this.loginUsuario = this.fb.group({
      email: ['',Validators.required],
      contraseña: ['', Validators.required]

    })

  }

  ngOnInit(): void {}

  login(){
  const email = this.loginUsuario.value.email;
  const contraseña = this.loginUsuario.value.contraseña;

  this.afAuth.signInWithEmailAndPassword(email,contraseña).then((user) =>{
    console.log(user);
    this.router.navigate(['/dashboard']);
  }).catch((error) => {
    console.log(error);
  })
  } 

  firebaseErrorCode(code:string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/week-password':
        return 'La contraseña es muy debil' ;
      case 'auth/invalid-email':
        return 'El correo es invalido'
     default: 
      return 'Error desconocido';
    }
   }
 
}
