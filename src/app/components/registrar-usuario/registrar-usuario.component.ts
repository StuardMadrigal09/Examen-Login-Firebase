import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' ;
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
    registrarUsuario: FormGroup;

    constructor(private fb: FormBuilder, 
      private afAuth: AngularFireAuth) {
      this.registrarUsuario = this.fb.group({
        email: ['', Validators.required],
        contraseña: ['', Validators.required],
        repetircontraseña: ['', Validators.required],

      }
      )

    }
    ngOnInit(): void {
      
    }

 registrar(){
  const email = this.registrarUsuario.value.email;
  const contraseña = this.registrarUsuario.value.contraseña;
  const repetircontraseña = this.registrarUsuario.value.repetircontraseña;

    this.afAuth.createUserWithEmailAndPassword(email,contraseña) .then((user) =>{
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })

 }

   firebaseError(code:string) {
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
