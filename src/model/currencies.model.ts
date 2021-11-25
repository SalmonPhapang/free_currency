import {IQuery} from "@/model/Query.model";
import {IData} from "@/model/Data.model";
export interface ICurrencies {
    query?: IQuery;
    data?: IData
}
export class Currencies implements ICurrencies {
    constructor (
        query?: IQuery,
        data?: IData
    ) {/**/}
}
