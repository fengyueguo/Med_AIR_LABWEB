---
title: Home
nav:
  order: 1
  tooltip: Home
---

<style>
@media (max-width: 768px) {
  html { -webkit-text-size-adjust: 100%; }
  .home-compact { line-height: 1.35; }

  .home-compact p {                             
    margin: 0.4rem 0;
  }

  .home-compact ul,
  .home-compact ol {
    margin: 0.4rem 0; 
    padding-left: 1.2rem;
  }

  .home-compact li {
    margin: 0.2rem 0;
  }

  .home-compact li > p {
    margin: 0.2rem 0;
  }

  .home-compact h1,
  .home-compact h2,
  .home-compact h3,
  .home-compact h4,
  .home-compact h5,
  .home-compact h6 {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .home-compact :where(p, ul, ol) + :where(p, ul, ol) {
    margin-top: 0.3rem;
  }

  .home-compact p:empty { display: none; }
}
</style>

<div class="home-compact">
{% include introduction.html %}
{% include news.html %}
<!-- {% include gallery.html %} -->
</div>

