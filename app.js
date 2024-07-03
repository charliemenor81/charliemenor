const products = [
    { id: "product1", qty: "qty1", price: "price1" },
    { id: "product2", qty: "qty2", price: "price2" },
    { id: "product3", qty: "qty3", price: "price3" },
    { id: "product4", qty: "qty4", price: "price4" },
    { id: "product5", qty: "qty5", price: "price5" },
    { id: "product6", qty: "qty6", price: "price6" },
    { id: "product7", qty: "qty7", price: "price7" },
    { id: "product8", qty: "qty8", price: "price8" }
];

const carts = document.getElementById("carts");
const total = document.getElementById("total");
const cash = document.getElementById("cash");
const change = document.getElementById("change");

let totalPrice = 0;

function addOrder() {
    carts.textContent = "";
    totalPrice = 0;

    products.forEach(product => {
        const productElem = document.getElementById(product.id);
        const qtyElem = document.getElementById(product.qty);
        const priceElem = document.getElementById(product.price);

        const quantity = parseFloat(qtyElem.value);
        const price = parseFloat(priceElem.textContent);

        if (quantity > 0) {
            const order = `${quantity} pc/s x ${price} ------ ${productElem.textContent} ------ Php ${(quantity * price).toFixed(2)}\n`;
            carts.textContent += order;
            totalPrice += quantity * price;
        }
    });

    total.value = `Total: Php ${totalPrice.toFixed(2)}`;
    calculateChange(); // Call this to update the change when order is added/updated
}

function calculateChange() {
    const cashTendered = parseFloat(cash.value);
    if (cashTendered >= totalPrice) {
        const changeAmount = cashTendered - totalPrice;
        change.value = `Change: Php ${changeAmount.toFixed(2)}`;
    } else {
        change.value = `Insufficient cash`;
    }
}

products.forEach(product => {
    document.getElementById(product.qty).addEventListener("input", addOrder);
});

cash.addEventListener("input", calculateChange);
