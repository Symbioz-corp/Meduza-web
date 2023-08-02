export class ValueError extends Error {
    code: string | undefined
    constructor(message: string, code: string | undefined) {
        super(message);
        if (code) this.code = code
    }
}


