import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   miFormulario:FormGroup=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    username:['',[Validators.required]],
    confirmed:[1]

   })
  constructor(public fb:FormBuilder,private authService:AuthService,private router:Router) {

   }

  ngOnInit(): void {
  }
registrar(){
  this.authService.registrar(this.miFormulario.value).subscribe(resp=>{
    console.log('usuario registrado');
this.router.navigate(['/auth'])
  })
}
}
