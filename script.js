const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  mobile: {
    smooth: true
  },
  tablet: {
      smooth: true
  }

});

document.querySelectorAll('.v-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-scroll-to');
    if (target) {
      scroll.scrollTo(target);
    }
  });
});

// Funciones relacionadas a scroll
scroll.on('call', (value, way) => {
  // Maneja toggle fade-in y out de imágenes
  if (value.startsWith('activateImg-')) {
    const ids = value.replace('activateImg-', '').split('-');
    ids.forEach(id => {
      const img = document.getElementById(id);
      img.classList.add('active');
    });
  }
  if (value.startsWith('deactivateImg-')){
    const ids = value.replace('deactivateImg-', '').split('-');
    ids.forEach(id => {
      const img = document.getElementById(id);
      img.classList.remove('active');
    });
  }

  // Maneja toggle de estilos de texto
  if (value.startsWith('activateText-')) {
    const ids = value.replace('activateText-', '').split('-');
    ids.forEach(id => {
      const text = document.getElementById(id);
      text.classList.add('active');
    });
  }
  if (value.startsWith('deactivateText-')) {
    const ids = value.replace('deactivateText-', '').split('-');
    ids.forEach(id => {
      const text = document.getElementById(id);
      text.classList.remove('active');
    });
  }

});
