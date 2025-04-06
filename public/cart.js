document.getElementById('addItemButton').addEventListener('click', function() {
  const container = document.getElementById('itemsContainer');
  const newItemRow = document.createElement('div');
  newItemRow.className = 'item-row';
  newItemRow.innerHTML = `
      <select name="item[]" required>
          <option value="">Select Item</option>
          <option value="Plastic Bottles">Plastic Bottles</option>
          <option value="Aluminum Cans">Aluminum Cans</option>
          <option value="Cardboard Boxes">Cardboard Boxes</option>
          <option value="Glass Jars">Glass Jars</option>
          <option value="Newspapers">Newspapers</option>
          <option value="Magazines">Magazines</option>
          <option value="Electronics">Electronics</option>
      </select>
      <input type="number" name="quantity[]" placeholder="Quantity" min="1" required>
  `;
  container.appendChild(newItemRow);
});

document.getElementById('recyclingForm').addEventListener('submit', function(event) {
});