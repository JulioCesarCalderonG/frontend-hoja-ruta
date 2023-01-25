// Generated by https://quicktype.io

export interface ResultDerivacionExternas {
    ok:         boolean;
    msg:        string;
    derivacion: DerivacionExterna[];
}
export interface ResultDerivacionExterna {
    ok:         boolean;
    msg:        string;
    derivacion: DerivacionExterna;
}

export interface DerivacionExterna {
    id:               number;
    observacion:      string;
    estado_recepcion: number;
    id_accion:        number;
    codigo_tramite:   string;
    id_area:          number;
    id_respuesta:     null;
    TramiteExterno:   TramiteExterno;
}

export interface TramiteExterno {
    codigo_documento: string;
    asunto:           string;
    proveido:         number;
    observacion:      null;
    registrado:       string;
    hora:             string;
    fecha:            string;
    ano:              string;
    folio:            string;
    id_prioridad:     number;
    id_area:          number;
}
