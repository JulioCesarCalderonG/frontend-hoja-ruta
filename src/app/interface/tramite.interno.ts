// Generated by https://quicktype.io

export interface ResultTramiteInternos {
  ok:             boolean;
  msg:            string;
  tramiteInterno: TramiteInterno[];
}
export interface ResultTramiteInterno {
  ok:             boolean;
  msg:            string;
  tramiteInterno: TramiteInterno;
}
export interface TramiteInterno {
  codigo_documento: string;
  asunto:           string;
  observacion:      string;
  registrado:       string;
  hora:             string;
  fecha:            string;
  ano:              string;
  folio:            string;
  id_prioridad:     number;
  id_area:          number;
  Prioridad:        Prioridad;
}

export interface Prioridad {
  id:     number;
  nombre: string;
  estado: number;
}
