function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (!weight || !height) {
        document.getElementById('result').textContent = 'Please enter valid values.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';

    document.getElementById('result').textContent = `Your BMI is ${bmi}. Category: ${category}.`;
}