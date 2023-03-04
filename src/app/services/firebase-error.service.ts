import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() {}

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

   

