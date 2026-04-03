for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (7 + Math.random() * 8) + 's';
    p.style.animationDelay  = (Math.random() * 10) + 's';
    p.style.width  = (5 + Math.random() * 7) + 'px';
    p.style.height = (8 + Math.random() * 9) + 'px';
    p.style.opacity = 0.3 + Math.random() * 0.25;
    document.body.appendChild(p);
  }

  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    }, 80);
  });