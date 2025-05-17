export interface Parqueo {
    id: number;
    vehiculoId: number;
    celdaId: number;
    tarifaId: number;
    fechaEntrada: Date;
    fechaSalida?: Date;
    totalPagado?: number;
    estado: 'Activo' | 'Finalizado';
}