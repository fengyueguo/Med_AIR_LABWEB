---
title: Research
nav:
  order: 3
  tooltip: Research directions
---

<style>
.research-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;
}

.research-card {
  width: calc(50% - 20px);
  background-color: #007d99;
  color: white;
  text-align: left;
  font-family: sans-serif;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
}

.image-wrap {
  position: relative;
}

.research-card img {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  inset: 0;
  /* 半透明遮罩，可按需调整不透明度 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55));
  display: flex;
  align-items: flex-end;
  padding: 16px;
  pointer-events: none; /* 不挡住下面按钮等交互 */
}

.image-overlay h3 {
  margin: 0;
  color: #fff;
  text-align: left;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
  font-size: 1.4rem;
}

.research-card-content {
  padding: 20px;
}

.find-more {
  background: none;
  border: 0;
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
}

.find-more:hover,
.find-more:focus {
  text-decoration: underline;
  outline: none;
}

.research-details {
  margin-top: 14px;
  background: rgba(255,255,255,0.06);
  padding: 16px;
  border-radius: 8px;
  line-height: 1.6;
}

/* 让卡片在小屏下单列显示 */
@media (max-width: 800px) {
  .research-card {
    width: 100%;
  }
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
      <div class="image-overlay">
        <h3>Surgical Robotics</h3>
      </div>
    </div>
    <div class="research-card-content">
      <button class="find-more" data-topic="surgical-robotics" aria-expanded="false">› Find out more</button>
      <div class="research-details" hidden></div>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/agentic1.jpg" alt="Agentic AI Systems">
      <div class="image-overlay">
        <h3>Agentic AI Systems for Healthcare Applications</h3>
      </div>
    </div>
    <div class="research-card-content">
      <button class="find-more" data-topic="agentic-ai" aria-expanded="false">› Find out more</button>
      <div class="research-details" hidden></div>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/elderlycare.png" alt="Humanoid Robots">
      <div class="image-overlay">
        <h3>Humanoid Robots for Elderly Care</h3>
      </div>
    </div>
    <div class="research-card-content">
      <button class="find-more" data-topic="elderly-care" aria-expanded="false">› Find out more</button>
      <div class="research-details" hidden></div>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/emobioied_ai1.jpg" alt="Safe Embodied AI">
      <div class="image-overlay">
        <h3>Safe Embodied AI</h3>
      </div>
    </div>
    <div class="research-card-content">
      <button class="find-more" data-topic="safe-ai" aria-expanded="false">› Find out more</button>
      <div class="research-details" hidden></div>
    </div>
  </div>

  <!-- Card 5 -->
  <div class="research-card">
    <div class="image-wrap">
      <img src="../images/research/LLM_education.png" alt="LLMs and Smart XR">
      <div class="image-overlay">
        <h3>LLMs and Smart XR for Medical Education</h3>
      </div>
    </div>
    <div class="research-card-content">
      <button class="find-more" data-topic="llm-xr" aria-expanded="false">› Find out more</button>
      <div class="research-details" hidden></div>
    </div>
  </div>

</div>

<script>
/* 把原来 topic.html 的内容拿到本页来做本地展开 */
const topics = {
  "surgical-robotics": {
    title: "Surgical Robotics",
    content: `
      <p><strong>Data Analytics and Cognitive Augmentation</strong>: It focuses on developing intelligent methods and systems that improve surgical efficiency. The work encompasses multi-modal data analysis to understand surgical scenes at multiple levels of granularity (i.e. surgical workflows, actions and anatomical structures), safety analysis to prevent adverse events during procedures, development of domain-specific large vision-language models, design of intelligent educational platforms, building augmented reality systems that provide intraoperative guidance, and virtual reality systems for immersive surgical simulation and training.</p>
      <p><strong>Embodied Intelligence for Task Autonomy</strong>: It concentrates on creating autonomous robotic systems capable of performing surgical tasks with minimal human intervention and optimal outcomes. The work involves developing surgical robot simulators that provide realistic training and testing environments for AI agents, designing the semantic and depth-aware perception algorithms for automation, advancing policy learning algorithms (i.e. imitation learning and reinforcement learning), and implementing robust frameworks capable of performing specific tasks with high safety and precision.</p>
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
      <p>Our research agenda is therefore dedicated to creating intelligent humanoid assistants for these scenarios. We will focus on advancing the core capabilities essential for this vision, including robust whole-body control for mobility and physical support in cluttered homes. We will investigate bimanual dexterous manipulation to perform complex, collaborative tasks, and tackle the nuanced challenge of deformable object manipulation for handling items like clothing and bedding. Moreover, these physical competencies are underpinned by intuitive human-robot interaction and collaboration, ensuring the robot can understand and partner with its user. The ultimate objective is to provide intelligent, personalized assistance with daily activities, professional nursing support, and meaningful companionship for elderly individuals, thereby enhancing their quality of life.</p>
    `
  },
  "safe-ai": {
    title: "Safe Embodied AI for General-Purpose Robot Manipulation",
    content: `
      <p>As robotic systems become increasingly prevalent in various scenarios of our daily life, ensuring their safety and reliability has emerged as a crucial research frontier. Our research will explore cutting-edge safe embodied AI technologies for robot manipulation.</p>
      <p>Specifically, we will study spatial-aware vision-language models (VLMs) to improve the robot's 3D understanding, enabling reliable task planning that is grounded in a deep awareness of object spatial relationships and the ability to satisfy precise spatial constraints. For physical interaction, we will investigate advanced multi-modal policy learning methods that fuse language instructions with visual and tactile feedback, enabling adaptive grasping with precise and safe force control. Moreover, we will study advanced reinforcement learning methods to fine-tune vision-language-action models (VLAs), enhancing their control robustness in the presence of various environmental disturbances and sensor noises. The ultimate objective is to develop intelligent robot systems with enhanced safety and robustness in planning, grasping, and motion control for general-purpose robot manipulation.</p>
    `
  },
  "llm-xr": {
    title: "LLMs and Smart XR for Medical Education",
    content: `
      <p><strong>LLMs for Medical Education</strong>: We aim to reform and innovate research, applications, and design to advance the next generation of medical education. Our focus lies in creating a new paradigm for human-computer interaction in medical teaching, enabling medical students worldwide to access higher-quality, more reliable, and effective education and resources.</p>
      <p>Beyond professional medical training, we are equally committed to promoting public health education. By designing new interactive media and information dissemination methods, we strive to deliver health knowledge and information to people worldwide—particularly in underserved and underdeveloped regions—in a more accessible and impactful way.</p>
      <p><strong>Smart XR for Medical Education and Surgery Assistant</strong>: This research topic focuses on developing intelligent XR (AR/VR) systems to enhance medical education and surgical assistance through immersive simulation and spatial computing. We aim to advance clinical training and intraoperative support by integrating patient-specific data, 3D anatomical modeling, and interactive visualization into adaptive XR environments. These systems combine real-time imaging, procedural guidance, and intuitive user interaction to improve anatomical understanding, skill acquisition, and surgical precision. The core goal is to bridge the gap between learning and practice by delivering context-aware, task-specific XR tools that elevate training quality, reduce surgical risk, and support decision-making in complex clinical settings.</p>
    `
  }
};

/* 绑定“Find out more”按钮，点击后在卡片内展开/收起内容 */
document.querySelectorAll('.find-more').forEach((btn, idx) => {
  // 给 details 一个唯一 id 以便无障碍 aria-controls
  const card = btn.closest('.research-card');
  const details = card.querySelector('.research-details');
  const detailsId = `research-details-${idx+1}`;
  details.id = detailsId;
  btn.setAttribute('aria-controls', detailsId);

  btn.addEventListener('click', () => {
    const key = btn.dataset.topic;
    const topic = topics[key];
    if (!topic) return;

    // 首次点击时注入内容（避免重复写入）
    if (!details.dataset.loaded) {
      details.innerHTML = `<h4 style="margin-top:0;color:#fff;">${topic.title}</h4>${topic.content}`;
      details.dataset.loaded = 'true';
    }

    const isHidden = details.hasAttribute('hidden');
    if (isHidden) {
      details.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = '‹ Hide details';
    } else {
      details.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '› Find out more';
    }
  });
});
</script>

