{
  function applyMainZoom() {
    const baseWidth = 1600;
    const wrapper = document.querySelector('.main-zoom-wrapper');
    if (!wrapper) return;

    const parentWidth = wrapper.parentElement.clientWidth;
    const scale = Math.min(parentWidth / baseWidth, 1); // 不放大
    wrapper.style.transform = `scale(${scale})`;
  }

  window.addEventListener('load', applyMainZoom);
  window.addEventListener('resize', applyMainZoom);
}
