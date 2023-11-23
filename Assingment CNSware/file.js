document.addEventListener('DOMContentLoaded', function() {
    const mainGrid = document.getElementById('mainGrid');
    const subGrid = document.getElementById('subGrid');
  
    mainGrid.addEventListener('click', function(event) {
      if (event.target.classList.contains('grid-item')) {
        const cellContent = event.target.textContent;
        showSubGrid(cellContent);
      }
    });
})
  