document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});




// 2. ハンバーガーの開閉＆アニメーション切り替え
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // ハンバーガーアニメーション
  mobileNav.classList.toggle('active');  // メニュー表示切替
});


window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  document.body.classList.add('loaded');

  // 少し長め（1.8秒くらい）待ってからローディング画面を消す
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 800); // フェードアウト完了後に消す
  }, 1800); // 表示しておく時間を調整
});

const profileBtn = document.querySelector('a[href="#profile"]');
const profileSection = document.getElementById('profile-section');
const closeProfileBtn = document.getElementById('close-profile');

if (profileBtn && profileSection && closeProfileBtn) {
  profileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    profileSection.style.display = 'flex';
  });

  closeProfileBtn.addEventListener('click', () => {
    profileSection.style.display = 'none';
  });
}










