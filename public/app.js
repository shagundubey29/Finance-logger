"use strict";
class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.client} owns ${this.amount} for ${this.detail}`;
    }
}
;
class Payment {
    constructor(recipeint, detail, amount) {
        this.recipeint = recipeint;
        this.detail = detail;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipeint} owned ${this.amount} for ${this.detail}`;
    }
}
const inOne = new Invoice('shagun', 'washing machine', 300);
const inTwo = new Invoice('zoe', 'grooming of hair and bath', 2000);
const invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const detail = document.querySelector('#detail');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
    }
    console.log(doc);
    console.log(type.value, toFrom.value, detail.value, amount.valueAsNumber);
});
