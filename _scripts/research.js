(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.research-overlay').forEach(function (overlay) {
      var box = overlay.querySelector('.overlay-content');
      if (!box) return;
      var key = overlay.id.replace('overlay-', '');
      var tpl = document.getElementById('tpl-' + key);
      if (tpl) {
        box.innerHTML = tpl.innerHTML;
        box.setAttribute('data-loaded', '1');
      }
    });
  });

  var buttons = document.querySelectorAll('.find-more');
  buttons.forEach(function (btn) {
    var key = btn.getAttribute('data-topic');
    var overlay = document.getElementById('overlay-' + key);
    if (!overlay) return;
    var card = btn.closest('.research-card');

    btn.addEventListener('mouseenter', function () { overlay.classList.add('show'); });
    btn.addEventListener('mouseleave', function () {
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
    });

    btn.addEventListener('focus', function () {
      overlay.classList.add('show');
      btn.setAttribute('aria-expanded', 'true');
    });
    btn.addEventListener('blur', function () {
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var pinned = overlay.classList.toggle('pinned');
      overlay.classList.toggle('show', pinned);
      btn.setAttribute('aria-expanded', pinned ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', pinned ? 'false' : 'true');

      if (pinned) {
        card.classList.add('suppress-hover');
      } else {
        overlay.classList.remove('show');
        btn.blur();
        card.classList.add('suppress-hover');

        var clearSuppress = function () {
          card.classList.remove('suppress-hover');
          btn.removeEventListener('mouseleave', clearSuppress);
        };
        btn.addEventListener('mouseleave', clearSuppress);

        if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
          card.classList.remove('suppress-hover');
        }
      }
    });
  });
})();
