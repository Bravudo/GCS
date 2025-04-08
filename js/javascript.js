
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

    /*__Banner__*/

    const banners = [
      "./img/banner/banner1.png",
      "./img/banner/banner2.png",
      "./img/banner/banner3.png"
    ];
    
    let indiceAtual = 0;
    
    function trocarBanner() {
      indiceAtual = (indiceAtual + 1) % banners.length;
      document.getElementById("banner").src = banners[indiceAtual];
    }
    
    function trocarBannerVoltar() {
      indiceAtual = (indiceAtual - 1 + banners.length) % banners.length;
      document.getElementById("banner").src = banners[indiceAtual];
    }