export const initHeaderScrollListener = () => {
  let prevScrollPosition = window.pageYOffset;
  const header = document.querySelector('.select');
  const header_select = document.querySelector('.form-submit-effect');

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition > currentScrollPosition) {
      header.style.transform = 'translateY(0%)';
      header_select.style.transform = 'translateY(0%)';
    } else {
      header.style.transform = 'translateY(-100%)';
      header_select.style.transform = 'translateY(-100%)';
    }

    prevScrollPosition = currentScrollPosition;
  });
};
