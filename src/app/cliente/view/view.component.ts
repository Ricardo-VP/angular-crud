import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  _id!: string;
  cliente!: Cliente;

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
  }
}
