export interface Tarifa {
    id?: number;
    tipoVehiculo: 'Moto' | 'Automovil';
    tipoTarifa: 'Hora' | 'Mensual';
    monto: number;
    FechaActualizacion?: Date

}