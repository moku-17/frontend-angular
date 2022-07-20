import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habilidad } from './habilidad';
import { HabilidadService } from './habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  public habilidades: Habilidad[] | undefined;
  public editHabilidad: Habilidad | undefined;
  public deleteHabilidad: Habilidad | undefined;

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit() {
    this.getHabilidades();
  }

  public getHabilidades(): void {
    this.habilidadService.getHabilidades().subscribe(
      (response: Habilidad[]) => {
        this.habilidades = response;
        console.log(this.habilidades);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onAddHabilidad(addForm: NgForm): void {
    document.getElementById("add-habilidad-form")?.click();
    this.habilidadService.addHabilidad(addForm.value).subscribe(
      (response: Habilidad) => {
        console.log(response);
        this.getHabilidades();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateHabilidad(habilidad: Habilidad): void {
    this.habilidadService.updateHabilidad(habilidad).subscribe(
      (response: Habilidad) => {
        console.log(response);
        this.getHabilidades();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteHabilidad(habilidadId: number): void {
    this.habilidadService.deleteHabilidad(habilidadId).subscribe(
      (response: void) => {
        console.log(response);
        this.getHabilidades();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(habilidad: Habilidad | undefined, mode: string): void {
    const container = document.getElementById('skills');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addHabilidadModal');
    }
    if (mode === 'edit') {
      this.editHabilidad = habilidad;
      button.setAttribute('data-target', '#updateHabilidadModal');
    }
    if (mode === 'delete') {
      this.deleteHabilidad = habilidad;
      button.setAttribute('data-target', '#deleteHabilidadModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
