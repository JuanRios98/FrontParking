export interface Cliente {
    id?: number;
    tipoPlan: 'Mensual' | 'Ocasional';
    fechaInicio?: Date;
    fechaFin?: Date | null;
    nombre: string;
    apellido: string;
}