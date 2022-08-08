import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getAll().subscribe((data: Cliente[]) => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  deleteCliente(id: string | undefined) {
    this.clienteService.delete(id as string).subscribe((res) => {
      this.clientes = this.clientes.filter((item) => item._id !== id);
      console.log('Cliente deleted successfully!');
    });
  }
}
