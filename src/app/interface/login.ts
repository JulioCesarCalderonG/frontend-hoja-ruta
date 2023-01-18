// Generated by https://quicktype.io

export interface ResultLogin {
    ok:      boolean;
    msg:     string;
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    id:       number;
    id_rol:   number;
    id_area:  number;
    dni:      string;
    nombre:   string;
    apellido: string;
    password: string;
    estado:   number;
    Rol:      Rol;
}

export interface Rol {
    id:     number;
    nombre: string;
    sigla:  string;
    estado: number;
}