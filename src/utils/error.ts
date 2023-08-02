export class ValueError extends Error {
    code: string | undefined
    constructor(code: string, message: string) {
        super(message);
        if (code) this.code = code
    }
}


