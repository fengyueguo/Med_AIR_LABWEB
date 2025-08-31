---
title: Research
nav:
  order: 3
  tooltip: Research directions
---

<style>
.research-grid{
  display:flex;flex-wrap:wrap;gap:40px;justify-content:flex-start;
}
.research-card{
  width:calc(50% - 20px);
  background-color:#007d99;color:#fff;text-align:left;font-family:sans-serif;
  box-shadow:0 4px 8px rgba(0,0,0,0.1);border-radius:10px;overflow:hidden;
}
.image-wrap{position:relative;overflow:hidden;border-radius:10px 10px 0 0;}
.research-card img{width:100%;height:auto;display:block}

/* 点击后出现的白色遮罩，默认隐藏 */
.research-overlay{
  position:absolute;inset:0;background:rgba(255,255,255,0.92);color:#111;
  display:none; /* 通过 .show 切换 */
}
.research-overlay.show{display:flex}
.overlay-content{
  padding:16px 18px;box-sizing:border-box;width:100%;max-height:100%;
  overflow:auto; /* 内容过长在图片内滚动，绝不溢出 */
  line-height:1.4;font-size:0.95rem;
  /* 尽可能减少“丑”换行： */
  text-wrap:balance; /* 支持的浏览器会更匀称 */
  hyphens:auto;word-break:normal;overflow-wrap:break-word;
}
.overlay-content p{margin:0 0 8px}
.overlay-title{margin:0 0 6px;font-weight:700}

.research-card-content{padding:20px}
.find-more{
  background:none;border:0;color:#fff;font-weight:bold;text-decoration:none;
  cursor:pointer;padding:0;font-size:1rem;
}
.find-more:hover,.find-more:focus{text-decoration:underline;outline:none}
.close-overlay{
  position:absolute;top:8px;right:8px;background:#00000020;border:0;
  border-radius:6px;padding:6px 10px;cursor:pointer;color:#111;font-weight:600;
}
@media (max-width:800px){.research-card{width:100%}}
</style>

## Research Topics
Our research sits at the interdisciplinary nexus of **machine learning**, **robotic surgical intelligence** and **medical image analysis** ...
<br>

<div class="research-grid">

  <!-- Card 1 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/robotic.jpg" alt="Surgical Robotics">
      <div class="research-overlay" id="overlay-surgical-robotics" aria-hidden="true">
        <button class="close-overlay" aria-label="Close overlay">×</button>
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3 style="margin:0;color:#fff">Surgical Robotics</h3>
      <button class="find-more" data-topic="surgical-robotics" aria-expanded="false" aria-controls="overlay-surgical-robotics">› Find out more</button>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/agentic1.jpg" alt="Agentic AI Systems">
      <div class="research-overlay" id="overlay-agentic-ai" aria-hidden="true">
        <button class="close-overlay" aria-label="Close overlay">×</button>
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3 style="margin:0;color:#fff">Agentic AI Systems for Healthcare Applications</h3>
      <button class="find-more" data-topic="agentic-ai" aria-expanded="false" aria-controls="overlay-agentic-ai">› Find out more</button>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/elderlycare.png" alt="Humanoid Robots">
      <div class="research-overlay" id="overlay-elderly-care" aria-hidden="true">
        <button class="close-overlay" aria-label="Close overlay">×</button>
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3 style="margin:0;color:#fff">Humanoid Robots for Elderly Care</h3>
      <button class="find-more" data-topic="elderly-care" aria-expanded="false" aria-controls="overlay-elderly-care">› Find out more</button>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/emobioied_ai1.jpg" alt="Safe Embodied AI">
      <div class="research-overlay" id="overlay-safe-ai" aria-hidden="true">
        <button class="close-overlay" aria-label="Close overlay">×</button>
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3 style="margin:0;color:#fff">Safe Embodied AI</h3>
      <button class="find-more" data-topic="safe-ai" aria-expanded="false" aria-controls="overlay-safe-ai">› Find out more</button>
    </div>
  </div>

  <!-- Card 5 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/LLM_education.png" alt="LLMs and Smart XR">
      <div class="research-overlay" id="overlay-llm-xr" aria-hidden="true">
        <button class="close-overlay" aria-label="Close overlay">×</button>
        <div class="overlay-content"></div>
      </div>
    </div>
    <div class="research-card-content">
      <h3 style="margin:0;color:#fff">LLMs and Smart XR for Medical Education</h3>
      <button class="find-more" data-topic="llm-xr" aria-expanded="false" aria-controls="overlay-llm-xr">› Find out more</button>
    </div>
  </div>

</div>

<script>
/* 复用你原来的 topic 文本 */
const topics = {
  "surgical-robotics": {
    title: "Surgical Robotics",
    content: `
      <p class="overlay-title">Data Analytics and Cognitive Augmentation</p>
      <p>It focuses on developing intelligent methods and systems that improve surgical efficiency. The work encompasses multi-modal data analysis to understand surgical scenes at multiple levels of granularity (i.e. surgical workflows, actions and anatomical structures), safety analysis to prevent adverse events during procedures, development of domain-specific large vision-language models, design of intelligent educational platforms, building augmented reality systems that provide intraoperative guidance, and virtual reality systems for immersive surgical simulation and training.</p>
      <p class="overlay-title">Embodied Intelligence for Task Autonomy</p>
      <p>It concentrates on creating autonomous robotic systems capable of performing surgical tasks with minimal human intervention and optimal outcomes. The work involves developing surgical robot simulators that provide realistic training and testing environments for AI agents, designing the semantic and depth-aware perception algorithms for automation, advancing policy learning algorithms (i.e. imitation learning and reinforcement learning), and implementing robust frameworks capable of performing specific tasks with high safety and precision.</p>
    `
  },
  "agentic-ai": {
    title: "Agentic AI Systems for Healthcare Applications",
    content: `
      <p>This research topic aims to develop autonomous, multi-agent AI systems that integrate clinical and patient data to enable end-to-end automation of healthcare workflows. We aim to pioneer multimodal, multi-agent AI systems to revolutionize clinical intelligence by integrating diverse data streams—including medical imaging, genomic profiles, electronic health records (EHRs), and biomedical literature—into collaborative AI networks.</p>
      <p>These systems deploy specialized agents (e.g., diagnostic, predictive, and evidence-synthesis agents) that dynamically interact to enhance precision medicine, accelerate disease detection, and generate patient-specific therapeutic insights. The core aim is to overcome data fragmentation and clinical complexity through coordinated AI cognition, ultimately advancing diagnostic accuracy, treatment personalization, and real-time decision support in high-stakes healthcare scenarios.</p>
    `
  },
  "elderly-care": {
    title: "Humanoid Robots for Intelligent Assistance in Elderly Care",
    content: `
      <p>The accelerating trend of global population aging presents a pressing societal challenge: a rapidly growing demand for effective elderly care solutions that can seamlessly integrate into human-centric environments. We posit that humanoid robots, with their anthropomorphic form, are uniquely suited to this role, as they are designed to navigate spaces and use tools originally intended for people.</p>
      <p>Our research agenda is therefore dedicated to creating intelligent humanoid assistants for these scenarios. We will focus on advancing the core capabilities essential for this vision, including robust whole-body control for mobility and physical support in cluttered homes, bimanual dexterous manipulation, and the nuanced challenge of deformable object manipulation for handling items like clothing and bedding—underpinned by intuitive human-robot interaction.</p>
    `
  },
  "safe-ai": {
    title: "Safe Embodied AI for General-Purpose Robot Manipulation",
    content: `
      <p>As robotic systems become increasingly prevalent in daily life, ensuring their safety and reliability has emerged as a crucial research frontier. We explore safe embodied AI for manipulation.</p>
      <p>We study spatial-aware VLMs for 3D understanding to enable reliable, constraint-aware task planning; multi-modal policy learning that fuses language, vision and touch for adaptive grasping with safe force control; and RL for fine-tuning VLAs to improve robustness under disturbances and sensor noise.</p>
    `
  },
  "llm-xr": {
    title: "LLMs and Smart XR for Medical Education",
    content: `
      <p><strong>LLMs for Medical Education</strong>: Build a new HCI paradigm in medical teaching for more reliable, effective learning resources worldwide.</p>
      <p><strong>Smart XR</strong>: Develop AR/VR systems that integrate patient data, 3D modeling and interactive visualization for immersive training and intraoperative guidance, improving understanding, skill acquisition and surgical precision.</p>
    `
  }
};

/* 绑定按钮，点击时只在对应图片上方显示白色遮罩与文字 */
document.querySelectorAll('.find-more').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.dataset.topic;
    const overlay = document.getElementById('overlay-'+key);
    const contentBox = overlay.querySelector('.overlay-content');

    // 首次注入内容
    if(!contentBox.dataset.loaded){
      contentBox.innerHTML = topics[key]?.content || '<p>No content</p>';
      contentBox.dataset.loaded = 'true';
    }

    const isOpen = overlay.classList.contains('show');
    overlay.classList.toggle('show', !isOpen);
    overlay.setAttribute('aria-hidden', isOpen ? 'true':'false');
    btn.setAttribute('aria-expanded', isOpen ? 'false':'true');
  });
});

/* 关闭按钮 */
document.querySelectorAll('.close-overlay').forEach(close=>{
  close.addEventListener('click', (e)=>{
    const ov = e.currentTarget.closest('.research-overlay');
    const controlBtn = document.querySelector(`[aria-controls="${ov.id}"]`);
    ov.classList.remove('show');
    ov.setAttribute('aria-hidden','true');
    if(controlBtn) controlBtn.setAttribute('aria-expanded','false');
  });
});
</script>
