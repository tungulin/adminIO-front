import { Knex as KnexLib, knex } from 'knex';


export class Knex {
    private connections: KnexLib.Config[] = []

    constructor(config: KnexLib.Config[] = []) {
        this.connections.push(...config)
    }

    addConnection(config: KnexLib.Config) {
        this.connections.push(config)
    }
    
}

