export class ValueError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValueError';
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

