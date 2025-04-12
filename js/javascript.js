
  /*__Google Analytics__*/
  
  function ativarAnalytics() {
    const gtagScript = document.createElement('script');
    gtagScript.setAttribute('async', '');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y0FSRDKJ91';
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y0FSRDKJ91');
    }
  }

  if (document.cookie.includes("cookies_aceitos=true")) {
    ativarAnalytics();
  }



 // Elementos
const elements = {
  header: {
    center: document.querySelector('.header_center_container'),
    icons: document.querySelector('.header_icon_container')
  },
  banner: {
    decorations: document.querySelectorAll('.banner_decorations'),
    items: {
      type1: document.querySelectorAll('.banner_decorations_item'),
      type2: document.querySelectorAll('.banner_decorations_item2'),
      type3: document.querySelectorAll('.banner_decorations_item3')
    },
    profile: document.querySelector('.profile_container')
  }
};

// Variável para controlar se já animou inicialmente
let initialAnimationDone = false;

// Função para RESETAR e ativar animações
const playAnimations = () => {
  // Remove classes primeiro para resetar
  elements.banner.decorations.forEach(container => {
    container.classList.remove('scrolled');
  });
  elements.banner.profile.classList.remove('scrolled');
  
  Object.values(elements.banner.items).forEach(items => {
    items.forEach(item => item.classList.remove('scrolled'));
  });

  // Pequeno timeout para garantir o reset
  setTimeout(() => {
    // Adiciona classes para disparar animações
    elements.banner.decorations.forEach(container => {
      container.classList.add('scrolled');
    });
    elements.banner.profile.classList.add('scrolled');
    
    Object.values(elements.banner.items).forEach(items => {
      items.forEach(item => item.classList.add('scrolled'));
    });
  }, 50);
};

// Executa ao carregar a página
window.addEventListener('load', () => {
  playAnimations();
  initialAnimationDone = true;
});

// Controle de scroll
let lastScrollPosition = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  // Verifica se está subindo E entrou na área do banner
  if (currentScroll <= 500 && currentScroll < lastScrollPosition) {
    playAnimations();
  }
  
  // Controle do header
  const shouldColorHeader = currentScroll > 680;
  elements.header.center.classList.toggle('scrolled', shouldColorHeader);
  elements.header.icons.classList.toggle('scrolled', shouldColorHeader);
  
  lastScrollPosition = currentScroll;
});