---
title: Research
nav:
  order: 3
  tooltip: Research directions
---
<style>
:root{
  --card-bg:#007d99;
  --overlay-bg:rgba(255,255,255,.96);
  --radius:12px;
  --space:20px;
  --shadow:0 4px 8px rgba(0,0,0,.12);
  --shadow-md:0 6px 16px rgba(0,0,0,.18);
  --speed:.18s;
}

/* ===== 布局 ===== */
.research-grid{
  display:flex;flex-wrap:wrap;gap:40px;justify-content:flex-start
}
.research-card{
  width:calc(50% - 20px);
  background:var(--card-bg);color:#fff;text-align:left;
  font-family:sans-serif;box-shadow:var(--shadow);
  border-radius:var(--radius);overflow:hidden
}
@media (max-width:800px){.research-card{width:100%}}

.image-wrap{
  position:relative;overflow:hidden;border-radius:var(--radius) var(--radius) 0 0
}
.image-wrap:focus{outline:2px solid rgba(255,255,255,.65);outline-offset:-2px}
.research-card img{width:100%;height:auto;display:block}

/* ===== 覆盖层显示/隐藏 ===== */
.research-overlay{
  position:absolute;inset:0;background:var(--overlay-bg);color:#111;
  display:flex;opacity:0;visibility:hidden;transition:opacity var(--speed) ease-in-out;
  pointer-events:none; /* 隐藏时不拦截事件 */
}

/* 触发显示：hover/聚焦在按钮；或由 JS 加 .show/.pinned；suppress-hover 为门控 */
.research-card:not(.suppress-hover):has(.find-more:hover) .research-overlay,
.research-card:not(.suppress-hover):has(.find-more:focus) .research-overlay,
.research-overlay.show,
.research-overlay.pinned{
  opacity:1;visibility:visible;pointer-events:auto;
}

/* ===== 覆盖层内容排版 ===== */
.overlay-content{
  /* 文字排版更可读 */
  padding:18px 20px;box-sizing:border-box;width:100%;max-height:100%;
  overflow:auto;line-height:1.65;font-size:clamp(.95rem, .92rem + .2vw, 1rem);
  text-wrap:balance;word-break:normal;overflow-wrap:break-word;

  /* 宽度限制，避免过宽难读 */
  max-width:68ch;margin:0 auto;text-align:left;
  -webkit-overflow-scrolling:touch;overscroll-behavior:contain;
}

/* 强制左对齐（覆盖可能的全局居中），并修正 margin 居中带来的错觉 */
.research-grid .research-card .research-overlay .overlay-content,
.research-grid .research-card .research-overlay .overlay-content *{text-align:left !important}
.research-grid .research-card .research-overlay .overlay-content > *{
  margin-left:0 !important;margin-right:0 !important
}
/* 标题占满行，避免被居中块影响 */
.research-grid .research-card .research-overlay .overlay-content h1,
.research-grid .research-card .research-overlay .overlay-content h2,
.research-grid .research-card .research-overlay .overlay-content h3{width:100% !important}

/* 段落/列表间距更清晰 */
.overlay-content p{margin:0 0 12px}
.overlay-content p + p{margin-top:4px}
.overlay-content ul, .overlay-content ol{margin:0 0 12px 1.2em}
.overlay-title{margin:0 0 8px;font-weight:700}

/* 可选：轻微顶部/底部渐隐提示可滚动（不用 JS） */
/* .overlay-content{mask-image:linear-gradient(to bottom, rgba(0,0,0,.7), #000 24px calc(100% - 24px), rgba(0,0,0,.7))} */

/* ===== 卡片正文 ===== */
.research-card-content{padding:20px}
.research-card h3{margin:0;color:#fff;line-height:1.25}

/* ===== 按钮（触发点） ===== */
.find-more{
  background:none;border:0;color:#fff;font-weight:700;text-decoration:none;
  cursor:pointer;padding:2px 0;font-size:1rem;margin-top:14px;display:inline-flex;
  align-items:center;gap:.25em
}
.find-more:hover,.find-more:focus{text-decoration:underline;outline:none}
.find-more:focus-visible{outline:2px solid rgba(255,255,255,.85);outline-offset:2px;border-radius:4px}

/* ===== 降低动画偏好支持 ===== */
@media (prefers-reduced-motion: reduce){
  .research-overlay{transition:none}
}
</style>



## Research Topics
Our research sits at the interdisciplinary nexus of **machine learning**, **robotic surgical intelligence** and **medical image analysis**, aiming to develop innovative intelligent systems that advance diagnosis, intervention, and medical education through next-generation healthcare technologies. Our work spans embodied AI for surgical robotics, medical image understanding, robot sensing and planning in dynamic environments, agentic AI systems for clinical decision-making, LLM for education and smart XR for medical training. Representative contributions include 3D deep learning for high-dimensional image computing, domain adaptation and generalization across heterogeneous medical data, surgical video analysis with efficient spatio-temporal learning, and visual-kinematic perception and automation in surgical robotics.

Recent focus: 1) **Surgical Robotics**, 2) **Agentic AI Systems for Healthcare Applications**, 3) **Human Robots** for Elderly Care, 4) Safe **Embodied AI**, 5) **LLMs and Smart XR** for Medical Education
<br>

<div class="research-grid">

  <!-- Card 1 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/robotic.jpg" alt="Surgical Robotics">
      <div class="research-overlay" id="overlay-surgical-robotics" aria-hidden="true">
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3>Surgical Robotics</h3>
      <button class="find-more" data-topic="surgical-robotics" aria-expanded="false" aria-controls="overlay-surgical-robotics">› Find out more</button>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/agentic1.jpg" alt="Agentic AI Systems">
      <div class="research-overlay" id="overlay-agentic-ai" aria-hidden="true">
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3>Agentic AI Systems for Healthcare Applications</h3>
      <button class="find-more" data-topic="agentic-ai" aria-expanded="false" aria-controls="overlay-agentic-ai">› Find out more</button>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/elderlycare.png" alt="Humanoid Robots">
      <div class="research-overlay" id="overlay-elderly-care" aria-hidden="true">
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3>Humanoid Robots for Elderly Care</h3>
      <button class="find-more" data-topic="elderly-care" aria-expanded="false" aria-controls="overlay-elderly-care">› Find out more</button>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/emobioied_ai1.jpg" alt="Safe Embodied AI">
      <div class="research-overlay" id="overlay-safe-ai" aria-hidden="true">
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3>Safe Embodied AI</h3>
      <button class="find-more" data-topic="safe-ai" aria-expanded="false" aria-controls="overlay-safe-ai">› Find out more</button>
    </div>
  </div>

  <!-- Card 5 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/LLM_education.png" alt="LLMs and Smart XR">
      <div class="research-overlay" id="overlay-llm-xr" aria-hidden="true">
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3>LLMs and Smart XR for Medical Education</h3>
      <button class="find-more" data-topic="llm-xr" aria-expanded="false" aria-controls="overlay-llm-xr">› Find out more</button>
    </div>
  </div>

</div>

<template id="tpl-surgical-robotics">
  <p>Data Analytics and Cognitive Augmentation: It focuses on developing intelligent methods and systems that improve surgical efficiency. The work encompasses multi-modal data analysis to understand surgical scenes at multiple levels of granularity (i.e. surgical workflows, actions and anatomical structures), safety analysis to prevent adverse events during procedures, development of domain-specific large vision-language models, design of intelligent educational platforms, building augmented reality systems that provide intraoperative guidance, and virtual reality systems for immersive surgical simulation and training.</p>
 <p>Embodied Intelligence for Task Autonomy: It concentrates on creating autonomous robotic systems capable of performing surgical tasks with minimal human intervention and optimal outcomes. The work involves developing surgical robot simulators that provide realistic training and testing environments for AI agents, designing the semantic and depth-aware perception algorithms for automation, advancing policy learning algorithms (i.e. imitation learning and reinforcement learning), and implementing robust frameworks capable of performing specific tasks with high safety and precision.</p>
</template>

<template id="tpl-agentic-ai">
  <p>Agentic AI Systems for Healthcare Applications: This research topic aims to develop autonomous, multi-agent AI systems that integrate clinical and patient data to enable end-to-end automation of healthcare workflows. We aim to pioneer multimodal, multi-agent AI systems to revolutionize clinical intelligence by integrating diverse data streams—including medical imaging, genomic profiles, electronic health records (EHRs), and biomedical literature—into collaborative AI networks.</p>
  <p>These systems deploy specialized agents (e.g., diagnostic, predictive, and evidence-synthesis agents) that dynamically interact to enhance precision medicine, accelerate disease detection, and generate patient-specific therapeutic insights. The core aim is to overcome data fragmentation and clinical complexity through coordinated AI cognition, ultimately advancing diagnostic accuracy, treatment personalization, and real-time decision support in high-stakes healthcare scenarios.</p>
</template>

<template id="tpl-elderly-care">
 <p>Humanoid Robots for Intelligent Assistance in Elderly Care: The accelerating trend of global population aging presents a pressing societal challenge: a rapidly growing demand for effective elderly care solutions that can seamlessly integrate into human-centric environments. We posit that humanoid robots, with their anthropomorphic form, are uniquely suited to this role, as they are designed to navigate spaces and use tools originally intended for people.</p>
  <p>Our research agenda is therefore dedicated to creating intelligent humanoid assistants for these scenarios. We will focus on advancing the core capabilities essential for this vision, including robust whole-body control for mobility and physical support in cluttered homes. We will investigate bimanual dexterous manipulation to perform complex, collaborative tasks, and tackle the nuanced challenge of deformable object manipulation for handling items like clothing and bedding. Moreover, these physical competencies are underpinned by intuitive human-robot interaction and collaboration, ensuring the robot can understand and partner with its user. The ultimate objective is to provide intelligent, personalized assistance with daily activities, professional nursing support, and meaningful companionship for elderly individuals, thereby enhancing their quality of life.</p>
</template>

<template id="tpl-safe-ai">
  <p>Safe Embodied AI for General-Purpose Robot Manipulation: As robotic systems become increasingly prevalent in various scenarios of our daily life, ensuring their safety and reliability has emerged as a crucial research frontier. Our research will explore cutting-edge safe embodied AI technologies for robot manipulation.</p>
  <p>Specifically, we will study spatial-aware vision-language models (VLMs) to improve the robot's 3D understanding, enabling reliable task planning that is grounded in a deep awareness of object spatial relationships and the ability to satisfy precise spatial constraints. For physical interaction, we will investigate advanced multi-modal policy learning methods that fuse language instructions with visual and tactile feedback, enabling adaptive grasping with precise and safe force control. Moreover, we will study advanced reinforcement learning methods to fine-tune vision-language-action models (VLAs), enhancing their control robustness in the presence of various environmental disturbances and sensor noises. The ultimate objective is to develop intelligent robot systems with enhanced safety and robustness in planning, grasping, and motion control for general-purpose robot manipulation.</p>
</template>

<template id="tpl-llm-xr">
  <p>LLMs for Medical Education: We aim to reform and innovate research, applications, and design to advance the next generation of medical education. Our focus lies in creating a new paradigm for human-computer interaction in medical teaching, enabling medical students worldwide to access higher-quality, more reliable, and effective education and resources. Beyond professional medical training, we are equally committed to promoting public health education. By designing new interactive media and information dissemination methods, we strive to deliver health knowledge and information to people worldwide—particularly in underserved and underdeveloped regions—in a more accessible and impactful way.</p>
  <p>Smart XR: This research topic focuses on developing intelligent XR (AR/VR) systems to enhance medical education and surgical assistance through immersive simulation and spatial computing. We aim to advance clinical training and intraoperative support by integrating patient-specific data, 3D anatomical modeling, and interactive visualization into adaptive XR environments. These systems combine real-time imaging, procedural guidance, and intuitive user interaction to improve anatomical understanding, skill acquisition, and surgical precision. The core goal is to bridge the gap between learning and practice by delivering context-aware, task-specific XR tools that elevate training quality, reduce surgical risk, and support decision-making in complex clinical settings.</p>
</template>

<script>
(function(){
  // 预加载 template 内容（保留你的原逻辑）
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.research-overlay').forEach(function(overlay){
      var box = overlay.querySelector('.overlay-content');
      if (!box) return;
      var key = overlay.id.replace('overlay-','');
      var tpl = document.getElementById('tpl-' + key);
      if (tpl) { box.innerHTML = tpl.innerHTML; box.setAttribute('data-loaded','1'); }
    });
  });

  var buttons = document.querySelectorAll('.find-more');
  buttons.forEach(function(btn){
    var key = btn.getAttribute('data-topic');
    var overlay = document.getElementById('overlay-' + key);
    if (!overlay) return;
    var card = btn.closest('.research-card');

    // hover 显示 / 离开隐藏（未固定时）
    btn.addEventListener('mouseenter', function(){ overlay.classList.add('show'); });
    btn.addEventListener('mouseleave', function(){
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
    });

    // 键盘无障碍：focus 显示 / blur 隐藏（未固定时）
    btn.addEventListener('focus', function(){
      overlay.classList.add('show');
      btn.setAttribute('aria-expanded','true');
    });
    btn.addEventListener('blur', function(){
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
      btn.setAttribute('aria-expanded','false');
    });

    // 点击：切换“手动模式”（固定/取消固定）
    btn.addEventListener('click', function(e){
      e.preventDefault();

      var pinned = overlay.classList.toggle('pinned');
      overlay.classList.toggle('show', pinned);
      btn.setAttribute('aria-expanded', pinned ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', pinned ? 'false' : 'true');

      if (pinned) {
        // 进入手动模式：禁止 hover 干扰
        card.classList.add('suppress-hover');
      } else {
        // 退出手动模式：先隐藏，并暂时抑制 hover，直到鼠标离开按钮
        overlay.classList.remove('show');
        btn.blur(); // 防止 :focus 触发再次显示
        card.classList.add('suppress-hover');

        var clearSuppress = function(){
          card.classList.remove('suppress-hover');
          btn.removeEventListener('mouseleave', clearSuppress);
        };
        btn.addEventListener('mouseleave', clearSuppress);

        // 触屏设备（无 hover）：直接解除抑制
        if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
          card.classList.remove('suppress-hover');
        }
      }
    });
  });
})();
</script>



