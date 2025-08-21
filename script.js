document.getElementById('si-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    let simpleInterest = (principal * rate * time) / 100;
    document.getElementById('result').textContent = `Simple Interest = ${simpleInterest.toFixed(2)}`;
});
