function calculateTotal() {
    const s21Price = 27000;
    const s22Price = 37000;

    const s21Quantity = document.getElementById('s21-quantity').value;
    const s22Quantity = document.getElementById('s22-quantity').value;
    const cashTendered = document.getElementById('cash-tendered').value;

    const s21Total = s21Quantity * s21Price;
    const s22Total = s22Quantity * s22Price;

    const total = s21Total + s22Total;
    const change = cashTendered - total;

    document.getElementById('order-summary').innerText = `Samsung S21: ${s21Quantity} x ${s21Price} = ${s21Total}\nSamsung S22: ${s22Quantity} x ${s22Price} = ${s22Total}`;
    document.getElementById('total').innerText = total;
    document.getElementById('change').innerText = change;
}
