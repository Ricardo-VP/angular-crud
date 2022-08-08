export interface Cliente {
  _id?: string;
  cliente: {
    tipo: string;
    apellido: string;
    nombre: string;
    ciudad: string;
    cuit: number;
  };
  tipoPago: string;
  fechaEmision?: Date;
  item?: [
    {
      album: string;
      anio: number;
      cantidad: number;
      precio: number;
      artista: string;
    }
  ];
  nroFactura?: string;
  intereses?: [string];
}
