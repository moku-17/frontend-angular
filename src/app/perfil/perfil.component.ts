import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Perfil } from './perfil';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public perfiles: Perfil[] | undefined;
  public editPerfil: Perfil | undefined;

  constructor(private perfilService: PerfilService) { }
  ngOnInit() {
    this.getPerfiles();
  }
  public getPerfiles(): void {
    this.perfilService.getPerfiles().subscribe(
      (response: Perfil[]) => {
        this.perfiles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onUpdatePerfil(perfil: Perfil): void {
    this.perfilService.updatePerfil(perfil).subscribe(
      (response: Perfil) => {
        console.log(response);
        this.getPerfiles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(perfil: Perfil | undefined, mode: string): void {
    const container = document.getElementById('profile');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editPerfil = perfil;
      button.setAttribute('data-target', '#updatePerfilModal');
    }
    container?.appendChild(button);
    button.click();
  }

}