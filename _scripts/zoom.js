{
  function applyMainZoom() {
    const baseWidth = 1280;
    const scale = Math.min(window.innerWidth / baseWidth, 1);
    document.querySelector('.main-zoom-wrapper').style.transform = `scale(${scale})`;
  }

  window.addEventListener('load', applyMainZoom);
  window.addEventListener('resize', applyMainZoom);
}
