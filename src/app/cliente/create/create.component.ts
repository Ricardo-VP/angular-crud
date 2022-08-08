import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      apellido: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      cuit: new FormControl('', Validators.required),
      tipoPago: new FormControl('', Validators.required),
      tipo: new FormControl('regular', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    let clienteObjeto: Cliente = {
      cliente: {
        tipo: this.form.value.tipo,
        apellido: this.form.value.apellido,
        nombre: this.form.value.nombre,
        ciudad: this.form.value.ciudad,
        cuit: this.form.value.cuit,
      },
      tipoPago: this.form.value.tipoPago,
    };
    console.log(clienteObjeto);
    this.clienteService.create(clienteObjeto).subscribe((res: any) => {
      console.log('Cliente created successfully!');
      this.router.navigateByUrl('cliente/index');
    });
  }
}
