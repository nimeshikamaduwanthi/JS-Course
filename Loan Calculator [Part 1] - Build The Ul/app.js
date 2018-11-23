// iisten for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//calculate results
function calculateResults(e){
    console.log('calculating...');
    //ul vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatePayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatePayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
       monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatePayments).toFixed(2);
      totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    } else {
        console.log('please check your numbers');
    }
    e.preventDefault();
}