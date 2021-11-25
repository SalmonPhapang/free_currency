import Component from 'vue-class-component'
import { Vue } from "vue-property-decorator";
import CurrencyService from "@/service/currency.service";
import {Currencies, ICurrencies} from "@/model/currencies.model";

@Component
export default class HomeComponent extends Vue {
    private currencyService : CurrencyService = new CurrencyService();
    public currencies: ICurrencies = new Currencies();
    loading = true;
    mounted() : void {
        this.findCurrencies();
    }

    private findCurrencies():void{

        this.currencyService.findAll()
            .then((response) =>{
                this.currencies = response;
                this.loading = false;
            })
    }

    private refreshCurrencies(){
        this.loading = true;
        this.findCurrencies();
    }

}
