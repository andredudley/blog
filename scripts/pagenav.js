document.querySelectorAll('.tab-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Stop page jump

    // 1. Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = 'none';
    });

    // 2. Show only the target section
    const targetId = this.getAttribute('href'); 
    document.querySelector(targetId).style.display = 'block';
  });
});
