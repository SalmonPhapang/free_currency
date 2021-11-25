export interface IQuery {
    timestamp?: number;
    base_currency?: string;
}
export class Query implements IQuery {
    constructor (
        timestamp?: string,
        base_currency?: string
    ) {/**/}
}
