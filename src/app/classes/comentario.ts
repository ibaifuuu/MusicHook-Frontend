import { Respuesta } from "./respuesta";

export class Comentario {
    private _texto: string = "";
    private _nombreUsuario: string = "";
    private _respuestas: Respuesta[] = [];

    constructor(texto: string, nombreUsuario: string, respuestas: Respuesta[] = []) {
        this._texto = texto;
        this._nombreUsuario = nombreUsuario;
        this._respuestas = respuestas;
    }

    // Getters
    get texto(): string {
        return this._texto;
    }

    get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    get respuestas(): Respuesta[] {
        return this._respuestas;
    }

    // Setters
    set texto(value: string) {
        this._texto = value;
    }

    set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }

    set respuestas(value: Respuesta[]) {
        this._respuestas = value;
    }
}
