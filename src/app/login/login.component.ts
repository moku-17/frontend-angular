import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      usuario:[''],
      pass:['']
      }
    );
  }
  public login(): void {
    this.loginService.getLogins()
    .subscribe(res=>{
      const user = res.find((a:Login)=>{
        return a.usuario === this.loginForm.value.usuario && a.pass === this.loginForm.value.pass
      });
      if(user){
        alert("¡Ingreso exitoso!");
        this.loginForm.reset();
        this.router.navigate(['portfolio'])
      }else{
        alert("Usuario o contraseña incorrecto.");
      }
    },err=>{
      alert("Algo salió mal.")
    })
  }
}
