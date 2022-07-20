import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyectos: Proyecto[] | undefined;
  public editProyecto: Proyecto | undefined;
  public deleteProyecto: Proyecto | undefined;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }

  public getProyectos(): void {
    this.proyectoService.getProyectos().subscribe(
      (response: Proyecto[]) => {
        this.proyectos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProyecto(addForm: NgForm): void {
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.addProyecto(addForm.value).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateProyecto(proyecto: Proyecto): void {
    this.proyectoService.updateProyecto(proyecto).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteProyecto(proyectoId: number): void {
    this.proyectoService.deleteProyecto(proyectoId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProyectos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(proyecto: Proyecto | undefined, mode: string): void {
    const container = document.getElementById('projects');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    }
    if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#updateProyectoModal');
    }
    if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
