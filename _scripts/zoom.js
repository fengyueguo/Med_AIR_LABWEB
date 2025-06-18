{
  function applyMainZoom() {
    const baseWidth = 1280;
    const wrapper = document.querySelector('.main-zoom-wrapper');
    const parent = wrapper.parentElement;
    const parentWidth = parent.clientWidth;

    let scale = parentWidth / baseWidth;

    // 设置缩放比例上下限，避免跳变或太小
    scale = Math.min(Math.max(scale, 0.8), 1); // 缩小下限 0.8，放大上限 1

    wrapper.style.transform = `scale(${scale})`;
  }

  window.addEventListener('load', applyMainZoom);
  window.addEventListener('resize', applyMainZoom);
}
