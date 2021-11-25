import axios from 'axios'
import {ICurrencies} from "@/model/currencies.model";
const apiKey = 'd9a31930-4e12-11ec-9e6e-3325446f5eb7';
export default class CurrencyService {
    public findAll(): Promise<ICurrencies> {
        return new Promise<ICurrencies>((resolve, reject) => {
            axios
                .get(`https://freecurrencyapi.net/api/v2/latest?apikey=${apiKey}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
