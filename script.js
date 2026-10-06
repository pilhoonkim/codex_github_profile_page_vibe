// 본문과 연락처는 index.html에서 수정합니다. JavaScript는 모바일 메뉴만 관리합니다.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 640px)');

if (menuButton && navigation) {
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '메뉴 닫기' : '메뉴 열기';
    navigation.hidden = mobileViewport.matches && !open;
  };

  const syncViewport = () => {
    // 화면 크기를 줄일 때 메뉴 안의 키보드 포커스가 숨겨지지 않도록 유지합니다.
    const hasNavigationFocus = navigation.contains(document.activeElement);
    menuButton.hidden = !mobileViewport.matches;
    setMenu(mobileViewport.matches && hasNavigationFocus);
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (mobileViewport.matches && event.target.closest('a')) {
      setMenu(false);
      menuButton.focus({ preventScroll: true });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileViewport.matches && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });

  mobileViewport.addEventListener('change', syncViewport);
  syncViewport();
}
