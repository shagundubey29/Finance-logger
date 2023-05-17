class Invoice{
    constructor(
        readonly client : string,
        private detail : string,
        public amount : number
    ){};

    format(){
        return `${this.client} owns ${this.amount} for ${this.detail}`;
    }
};

class Payment{
    constructor(
        readonly recipeint : string,
        private detail : string,
        public amount : number
    ){};

    format(){
        return `${this.recipeint} owned ${this.amount} for ${this.detail}`;
    }
}

const inOne = new Invoice('shagun', 'washing machine', 300);
const inTwo = new Invoice('zoe', 'grooming of hair and bath', 2000);

const invoices : Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const detail = document.querySelector('#detail') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
        let doc;
        if(type.value === 'Invoice'){
            doc = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
        }else{
            doc = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
        }
        console.log(doc);
    console.log(
        type.value,
        toFrom.value,
        detail.value,
        amount.valueAsNumber
    );
});