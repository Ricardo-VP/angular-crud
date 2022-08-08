import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  _id!: string;
  cliente!: Cliente;
  form!: FormGroup;

  constructor(
    public clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.params['clienteId'];
    this.clienteService.find(this._id).subscribe((data: Cliente) => {
      this.cliente = data;
    });

    this.form = new FormGroup({
      tipo: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      cuit: new FormControl('', Validators.required),
      tipoPago: new FormControl('', Validators.required),
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
    this.clienteService
      .update(this._id, clienteObjeto)
      .subscribe((res: any) => {
        console.log('Cliente updated successfully!');
        this.router.navigateByUrl('cliente/index');
      });
  }
}
