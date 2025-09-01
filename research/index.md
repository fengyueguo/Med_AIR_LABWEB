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
.image-wrap:focus{outline:2px solid rgba(255,255,255,.6);outline-offset:-2px}
.research-card img{width:100%;height:auto;display:block}

/* 默认隐藏，通过透明度/可见性控制，支持过渡 */
.research-overlay{
  position:absolute;inset:0;background:rgba(255,255,255,.92);color:#111;
  display:flex;opacity:0;visibility:hidden;transition:opacity .18s ease-in-out;
  pointer-events:none;
}
.overlay-content{
  padding:16px 18px;box-sizing:border-box;width:100%;max-height:100%;
  overflow:auto;line-height:1.4;font-size:.95rem;
  text-wrap:balance; word-break:normal;overflow-wrap:break-word;
  text-align:left;
}
.overlay-content p{margin:0 0 8px}
.overlay-title{margin:0 0 6px;font-weight:700}

.research-card-content{padding:20px}
.research-card h3{margin:0;color:#fff}

/* 触发显示：1) hover/聚焦在“Find out more”按钮；2) JS 加的 .show/.pinned 状态 */
.research-card:has(.find-more:hover) .research-overlay,
.research-card:has(.find-more:focus) .research-overlay,
.research-overlay.show,
.research-overlay.pinned{
  opacity:1;visibility:visible;pointer-events:auto;
}

/* 不再隐藏按钮（删除你原来的 @media (hover:hover){ .find-more{display:none;} }） */
.find-more{
  background:none;border:0;color:#fff;font-weight:700;text-decoration:none;
  cursor:pointer;padding:0;font-size:1rem;margin-top:15px;display:inline-block;
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
  // 预加载 template 内容，避免首次显示闪烁
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.research-overlay').forEach(function(overlay){
      var box = overlay.querySelector('.overlay-content');
      if (!box) return;
      var key = overlay.id.replace('overlay-','');
      var tpl = document.getElementById('tpl-' + key);
      if (tpl) {
        box.innerHTML = tpl.innerHTML;
        box.setAttribute('data-loaded','1');
      }
    });
  });

  // 让按钮控制对应 overlay：hover/focus 显示；click 作为触屏“固定/取消固定”
  var buttons = document.querySelectorAll('.find-more');
  buttons.forEach(function(btn){
    var key = btn.getAttribute('data-topic');
    var overlay = document.getElementById('overlay-' + key);

    if (!overlay) return;

    // 鼠标移入/移出：显示/隐藏（若未被点击固定）
    btn.addEventListener('mouseenter', function(){
      overlay.classList.add('show');
    });
    btn.addEventListener('mouseleave', function(){
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
    });

    // 键盘聚焦/失焦：显示/隐藏（无障碍）
    btn.addEventListener('focus', function(){
      overlay.classList.add('show');
      btn.setAttribute('aria-expanded','true');
    });
    btn.addEventListener('blur', function(){
      if (!overlay.classList.contains('pinned')) overlay.classList.remove('show');
      btn.setAttribute('aria-expanded','false');
    });

    // 触屏/点击兜底：点击可固定/取消固定
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var pinned = overlay.classList.toggle('pinned');
      overlay.classList.toggle('show', pinned); // 固定时确保显示
      btn.setAttribute('aria-expanded', pinned ? 'true' : 'false');
    });
  });
})();
</script>


