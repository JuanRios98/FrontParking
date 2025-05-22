import { Celda } from "./celda.module";
import { Cliente } from "./cliente.module";
import { Pago } from "./pago.module";
import { Tarifa } from "./tarifa.module";
import { Vehiculo } from "./vehiculo.module";
import { Parqueo } from "./parqueo.module";

export interface vistaParqueo {
    celda?: Celda;
    vehiculo?: Vehiculo;
    cliente?: Cliente;
    tarifa?: Tarifa;
    pago?: Pago;
    parqueo?: Parqueo;

}