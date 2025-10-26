document.addEventListener("DOMContentLoaded", () => {
  const roles = ['Computer Engineer', 'Photographer', 'Model', 'Video Editor'];
  const rolesElement = document.getElementById('roles');

  // Start with the first word
  let i = 0;
  rolesElement.textContent = roles[i];

  // On every new animation cycle, swap to the next word
  rolesElement.addEventListener('animationiteration', () => {
    i = (i + 1) % roles.length;
    rolesElement.textContent = roles[i];
    // optional: micro-reset helps some mobile browsers fully restart frame 0
    rolesElement.style.animation = 'none';
    // force reflow
    void rolesElement.offsetWidth;
    rolesElement.style.animation = '';
  });

  /* --- your existing nav code --- */
  const burger = document.getElementById('burger');
  const panel = document.getElementById('navPanel');
  if (burger && panel) {
    burger.addEventListener('click', () => {
      const open = panel.classList.toggle('show');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    window.closeMenu = function closeMenu() {
      panel.classList.remove('show');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    };
  }
});
