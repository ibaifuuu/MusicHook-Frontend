export class Respuesta {
    private _texto: string = "";
    private _nombreUsuario: string = "";

    constructor(texto: string, nombreUsuario: string) {
        this._texto = texto;
        this._nombreUsuario = nombreUsuario;
    }

    // Getters
    get texto(): string {
        return this._texto;
    }

    get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    // Setters
    set texto(value: string) {
        this._texto = value;
    }

    set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }
}
