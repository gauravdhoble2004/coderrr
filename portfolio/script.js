 (function(){
      const typedTextElement = document.getElementById('typed-text');
      const texts = [
        'Web Developer!',
        'MERN Developer!',
        'Full Stack Developer!',
        'Problem Solver!'
      ];
      let textIndex = 0, charIndex = 0, isDeleting = false;

      function type() {
        const current = texts[textIndex];
        if (isDeleting) {
          charIndex--;
          typedTextElement.textContent = current.substring(0, charIndex);
        } else {
          charIndex++;
          typedTextElement.textContent = current.substring(0, charIndex);
        }

        // speed control
        let delay = isDeleting ? 40 : 90;
        if (!isDeleting && charIndex === current.length) {
          delay = 900;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          delay = 400;
        }

        setTimeout(type, delay);
      }

      document.addEventListener('DOMContentLoaded', () => {
        if (typedTextElement) type();
      });
    })();
    
(function(){
      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobileMenu');

      function closeMenu(){
        mobileMenu.style.display = 'none';
        hamburger.setAttribute('aria-expanded','false');
      }
      function openMenu(){
        mobileMenu.style.display = 'block';
        hamburger.setAttribute('aria-expanded','true');
      }

      hamburger.addEventListener('click', () => {
        if (mobileMenu.style.display === 'block') closeMenu(); else openMenu();
      });

      // Close mobile menu when clicking anchor links (improves UX)
      document.querySelectorAll('.mobile-menu a').forEach(a=>{
        a.addEventListener('click', ()=> closeMenu());
      });

      // Close menu on resize > 900 to avoid stuck state
      window.addEventListener('resize', ()=> {
        if (window.innerWidth > 900) {
          mobileMenu.style.display = 'none';
          hamburger.setAttribute('aria-expanded','false');
        }
      });
    })();
