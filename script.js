function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Usamos classList en lugar de style.display para que funcione con CSS
    nav.classList.toggle('show');
    menuIcon.classList.toggle('active');
  }
  
  // Cierra el menú y aplica fade al hacer clic en un enlace
  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Cierra el menú
      document.getElementById('navMenu').classList.remove('show');
      document.querySelector('.menu-icon').classList.remove('active');
      
      // Aplica el efecto fade
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    });
  });