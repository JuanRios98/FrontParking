export interface Celda {
    id?: number;
    tipo: 'Moto'|'Automovil';
    estado: 'Ocupado'|'Libre'| 'Reservado';
    codigo: string;
}