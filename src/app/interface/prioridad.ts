// Generated by https://quicktype.io

export interface ResultPrioridades {
    ok:        boolean;
    msg:       string;
    prioridad: Prioridad[];
}
export interface ResultPrioridad {
    ok:        boolean;
    msg:       string;
    prioridad: Prioridad;
}

export interface Prioridad {
    id:     number;
    nombre: string;
    estado: number;
}
