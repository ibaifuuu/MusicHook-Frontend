export class Tematica {
    private _tema: string = "";
    private _descripcion: string = "";
    private _imagen?: ImageBitmap;

    constructor(tema: string, descripcion: string, imagen?: ImageBitmap) {
        this._tema = tema;
        this._descripcion = descripcion;
        this._imagen = imagen;
    }

    // Getters
    get tema(): string {
        return this._tema;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    get imagen(): ImageBitmap | undefined {
        return this._imagen;
    }

    // Setters
    set tema(value: string) {
        this._tema = value;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    set imagen(value: ImageBitmap | undefined) {
        this._imagen = value;
    }
}
