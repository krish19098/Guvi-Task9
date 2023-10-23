document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');
    const table = document.getElementById('data-table');

    const foodCheckboxes = document.querySelectorAll('input[name="food"]');
    let checkedFoodCount = 0;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Count the number of checked food items
        checkedFoodCount = 0;
        const selectedFoodItems = [];
        foodCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedFoodCount++;
                selectedFoodItems.push(checkbox.value);
            }
        });

        if (checkedFoodCount !== 2) {
            alert('Please select exactly 2 food items.');
            return;
        }

        const food = selectedFoodItems.join(', ');

        const newRow = table.insertRow(-1);
        const cells = [
            newRow.insertCell(0),
            newRow.insertCell(1),
            newRow.insertCell(2),
            newRow.insertCell(3),
            newRow.insertCell(4),
            newRow.insertCell(5),
            newRow.insertCell(6),
            newRow.insertCell(7)
        ];

        cells[0].textContent = firstName;
        cells[1].textContent = lastName;
        cells[2].textContent = address;
        cells[3].textContent = pincode;
        cells[4].textContent = gender;
        cells[5].textContent = food;
        cells[6].textContent = state;
        cells[7].textContent = country;

        form.reset();
    });

    // Add an event listener to validate food checkboxes
    foodCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (checkedFoodCount >= 2 && this.checked) {
                this.checked = false;
                alert('You can only select 2 food items.');
            } else if (this.checked) {
                checkedFoodCount++;
            } else {
                checkedFoodCount--;
            }
        });
    });
});
