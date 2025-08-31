---
title: Research
nav:
  order: 3
  tooltip: Research directions
---

<style>
.research-grid{display:flex;flex-wrap:wrap;gap:40px;justify-content:flex-start}
.research-card{
  width:calc(50% - 20px);background:#007d99;color:#fff;text-align:left;
  font-family:sans-serif;box-shadow:0 4px 8px rgba(0,0,0,.1);
  border-radius:10px;overflow:hidden
}
.image-wrap{position:relative;overflow:hidden;border-radius:10px 10px 0 0}
.research-card img{width:100%;height:auto;display:block}

.research-overlay{
  position:absolute;inset:0;background:rgba(255,255,255,.92);color:#111;
  display:none
}
.research-overlay.show{display:flex}
.overlay-content{
  padding:16px 18px;box-sizing:border-box;width:100%;max-height:100%;
  overflow:auto;
  line-height:1.4;font-size:.95rem;
  text-wrap:balance;
  word-break:normal;overflow-wrap:break-word
}
.overlay-content p{margin:0 0 8px}
.overlay-title{margin:0 0 6px;font-weight:700}

.research-card-content{padding:15 20 10 20px}
.research-card h3{margin:0;color:#fff}
.find-more{
  background:none;border:0;color:#fff;font-weight:700;text-decoration:none;
  cursor:pointer;padding:0;font-size:1rem;margin-top:15px;
}
.find-more:hover,.find-more:focus{text-decoration:underline;outline:none}

@media (max-width:800px){.research-card{width:100%}}
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
  <p class="overlay-title">Data Analytics and Cognitive Augmentation</p>
  <p>It focuses on developing intelligent methods and systems that improve surgical efficiency. The work encompasses multi-modal data analysis to understand surgical scenes at multiple levels of granularity (i.e. surgical workflows, actions and anatomical structures), safety analysis to prevent adverse events during procedures, development of domain-specific large vision-language models, design of intelligent educational platforms, building augmented reality systems that provide intraoperative guidance, and virtual reality systems for immersive surgical simulation and training.</p>
  <p class="overlay-title">Embodied Intelligence for Task Autonomy</p>
  <p>It concentrates on creating autonomous robotic systems capable of performing surgical tasks with minimal human intervention and optimal outcomes. The work involves developing surgical robot simulators that provide realistic training and testing environments for AI agents, designing the semantic and depth-aware perception algorithms for automation, advancing policy learning algorithms (i.e. imitation learning and reinforcement learning), and implementing robust frameworks capable of performing specific tasks with high safety and precision.</p>
</template>

<template id="tpl-agentic-ai">
  <p>This research topic aims to develop autonomous, multi-agent AI systems that integrate clinical and patient data to enable end-to-end automation of healthcare workflows. We aim to pioneer multimodal, multi-agent AI systems to revolutionize clinical intelligence by integrating diverse data streams—including medical imaging, genomic profiles, electronic health records (EHRs), and biomedical literature—into collaborative AI networks.</p>
  <p>These systems deploy specialized agents (e.g., diagnostic, predictive, and evidence-synthesis agents) that dynamically interact to enhance precision medicine, accelerate disease detection, and generate patient-specific therapeutic insights. The core aim is to overcome data fragmentation and clinical complexity through coordinated AI cognition, ultimately advancing diagnostic accuracy, treatment personalization, and real-time decision support in high-stakes healthcare scenarios.</p>
</template>

<template id="tpl-elderly-care">
  <p>The accelerating trend of global population aging presents a pressing societal challenge: a rapidly growing demand for effective elderly care solutions that can seamlessly integrate into human-centric environments. We posit that humanoid robots, with their anthropomorphic form, are uniquely suited to this role, as they are designed to navigate spaces and use tools originally intended for people.</p>
  <p>Our research agenda is dedicated to creating intelligent humanoid assistants for these scenarios, focusing on whole-body control, bimanual dexterous manipulation, deformable object manipulation, and intuitive human–robot interaction.</p>
</template>

<template id="tpl-safe-ai">
  <p>As robotic systems become increasingly prevalent in daily life, ensuring their safety and reliability has emerged as a crucial research frontier.</p>
  <p>We study spatial-aware VLMs for reliable, constraint-aware planning; multi-modal policy learning (language+vision+tactile) for adaptive grasping with safe force control; and reinforcement learning to fine-tune VLAs for robustness under disturbances and sensor noise.</p>
</template>

<template id="tpl-llm-xr">
  <p><strong>LLMs for Medical Education</strong>: Build a new HCI paradigm in medical teaching for reliable, effective learning resources worldwide.</p>
  <p><strong>Smart XR</strong>: Develop AR/VR systems that integrate patient data, 3D modeling and interactive visualization for immersive training and intraoperative guidance, improving understanding, skill acquisition and surgical precision.</p>
</template>

<script>
(function(){
  function toggleOverlay(btn){
    var key = btn.getAttribute('data-topic');
    var overlay = document.getElementById('overlay-' + key);
    var contentBox = overlay.querySelector('.overlay-content');
    var tpl = document.getElementById('tpl-' + key);

    // 首次打开时注入模板内容
    if (tpl && !contentBox.getAttribute('data-loaded')){
      contentBox.innerHTML = tpl.innerHTML;
      contentBox.setAttribute('data-loaded','1');
    }

    var isOpen = overlay.classList.contains('show');
    overlay.classList.toggle('show', !isOpen);
    overlay.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  }

  // 绑定按钮，点击打开/关闭
  var buttons = document.querySelectorAll('.find-more');
  for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){ toggleOverlay(this); });
  }
})();
</script>
