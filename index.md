---
title: Home
nav:
  order: 1
  tooltip: Home
---

<style>
/* 仅在移动端收紧：段落、列表、标题的空白与行高 */
@media (max-width: 768px) {
  html { -webkit-text-size-adjust: 100%; }      /* 防止 iOS 自动放大导致行距变松 */
  .home-compact { line-height: 1.35; }          /* 稍微紧凑的行高 */

  .home-compact p {                             
    margin: 0.4rem 0;                           /* 段落上下间距 */
  }

  .home-compact ul,
  .home-compact ol {
    margin: 0.4rem 0;                           /* 列表上下间距 */
    padding-left: 1.2rem;                       /* 减小缩进（可按需调 1.0–1.4rem） */
  }

  .home-compact li {
    margin: 0.2rem 0;                           /* 列表项之间更紧凑 */
  }

  .home-compact li > p {
    margin: 0.2rem 0;                           /* 列表项里段落也收紧 */
  }

  .home-compact h1,
  .home-compact h2,
  .home-compact h3,
  .home-compact h4,
  .home-compact h5,
  .home-compact h6 {
    margin-top: 0.8rem;                         /* 标题上下间距更小 */
    margin-bottom: 0.4rem;
  }

  /* 连续文本块之间再贴一点（段落/列表互相相邻时） */
  .home-compact :where(p, ul, ol) + :where(p, ul, ol) {
    margin-top: 0.3rem;
  }

  /* 偶发的空 <p> 当作空行，直接隐藏 */
  .home-compact p:empty { display: none; }
}
</style>

<div class="home-compact">
{% include introduction.html %}
{% include news.html %}
<!-- {% include gallery.html %} -->
</div>

