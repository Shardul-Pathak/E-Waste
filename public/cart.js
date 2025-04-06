document.getElementById('addItemButton').addEventListener('click', function() {
  const container = document.getElementById('itemsContainer');
  const newItemRow = document.createElement('div');
  newItemRow.className = 'item-row';
  newItemRow.innerHTML = `
      <select name="item[]" required>
          <option value="">Select Item</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablets">Tablets</option>
          <option value="Laptops">Laptops</option>
          <option value="Headphones">Headphones</option>
          <option value="Smart Watches">Smart Watches</option>
          <option value="Smart TVs">Smart TVs</option>
          <option value="Other">Other</option>
      </select>
      <input type="number" name="quantity[]" placeholder="Quantity" min="1" required>
  `;
  container.appendChild(newItemRow);
});

document.getElementById('cartForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
      if (formDataObject[key]) {
          if (!Array.isArray(formDataObject[key])) {
              formDataObject[key] = [formDataObject[key]];
          }
          formDataObject[key].push(value);
      } else {
          formDataObject[key] = value;
      }
  });

  fetch('/cart', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert(data.message);
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred.');
  });
});