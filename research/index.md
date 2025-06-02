---
title: Research
nav:
  order: 3
  tooltip: Research directions
---

<h2>Research</h2>

Our research sits at the interdisciplinary nexus of **medical image analysis**, **machine learning**, and **robotic surgical intelligence**, aiming to develop innovative intelligent systems that advance diagnosis, intervention, and medical education through next-generation healthcare technologies. Our work spans embodied AI for surgical robotics, medical image understanding, robot sensing and planning in dynamic environments, agentic AI systems for clinical decision-making, and LLM-powered smart XR for medical training. Representative contributions include 3D deep learning for high-dimensional image computing, domain adaptation and generalization across heterogeneous medical data, surgical video analysis with efficient spatio-temporal learning, and visual-kinematic perception and automation in surgical robotics.

Recent focus: 1) **Embodied AI** for Elderly Care Robotics, 2) **LLM and smart XR** for medical education, 3) **Agentic AI systems** for healthcare applications, 4) **Surgical Robotics**, 5) **Medical Image Analysis**.
{% 
  include figure.html 
  image="images/wordcloud.png"
  width="1000px"
%}
<br>
<h2> Topics </h2>

{% capture text %}
**Enhancing Spatial Intelligence and Risk Awareness in Vision-Language Model Planning for Elderly Care Robotics**: Current Vision-Language Models (VLMs) fall short in spatial reasoning capabilities and dynamic risk assessment required to navigate unstructured and ever-changing scenarios, such as assisting with mobility in cluttered spaces or retrieving objects in dynamic conditions. This research aims to develop advanced VLM planning frameworks that integrate spatial intelligence and real-time risk awareness. By leveraging multimodal perception and reasoning, we seek to enhance the robot's ability to interpret natural language commands, model spatial layouts, and identify potential risks in dynamic environments. The focus will be on creating a robust, task-aware planning pipeline capable of ensuring safety, efficiency, and adaptability in elderly care scenarios.

**Robust Vision-Language-Action (VLA) Models with Adaptive Force Perception and Control**: This research aims to develop robust Vision-Language-Action (VLA) models that integrate multimodal inputs and adaptive force perception to enable fine-grained interaction with elderly individuals and their environments. The focus is on building systems that can interpret complex commands, perceive subtle force feedback, and adapt their actions accordingly during tasks like assisting with dressing and feeding. By combining vision, language, and force feedback, the robots can perform precise, safe, and context-aware interactions to support both physical and cognitive needs.
{% endcapture %}
{% include feature.html image="images/research/elderlycare.png" link="publication" title="Embodied AI for Elderly Care Robotics" text=text className="feature-image" %}

{% capture text %}
We aim to reform and innovate research, applications, and design to advance the next generation of medical education. Our focus lies in creating a new paradigm for human-computer interaction in medical teaching, enabling medical students worldwide to access higher-quality, more reliable, and effective education and resources. In particular, we explore the use of Extended Reality (XR) technologies—such as Augmented Reality (AR) and Virtual Reality (VR)—to create immersive, interactive training environments that enhance engagement and understanding in both clinical and educational contexts. Beyond professional medical training, we are equally committed to promoting public health education. By designing new interactive media and information dissemination methods, we strive to deliver health knowledge and information to people worldwide—particularly in underserved and underdeveloped regions—in a more accessible and impactful way.
{% endcapture %}
{% include feature.html image="images/research/llm_healthcare.jpg" link="publication" title="LLMs and Smart XR for Medical Education" text=text flip=true className="feature-image" %}

{% capture text %}
This research topic aims to develop autonomous, multi-agent AI systems that integrate clinical and patient data to enable end-to-end automation of healthcare workflows. We aim to pioneer multimodal, multi-agent AI systems to revolutionize clinical intelligence by integrating diverse data streams—including medical imaging, genomic profiles, electronic health records (EHRs), and biomedical literature—into collaborative AI networks. These systems deploy specialized agents (e.g., diagnostic, predictive, and evidence-synthesis agents) that dynamically interact to enhance precision medicine, accelerate disease detection, and generate patient-specific therapeutic insights. The core aim is to overcome data fragmentation and clinical complexity through coordinated AI cognition, ultimately advancing diagnostic accuracy, treatment personalization, and real-time decision support in high-stakes healthcare scenarios.
{% endcapture %}
{% include feature.html image="images/research/agentic.jpg" link="publication" title="Agentic AI Systems for Healthcare Applications" text=text className="feature-image" %}

{% capture text %}
**Data Analytics and Cognitive Augmentation**: It focuses on developing intelligent methods and systems that improve surgical efficiency. The work encompasses multi-modal data analysis to understand surgical scenes at multiple levels of granularity (i.e. surgical workflows, actions and anatomical structures), safety analysis to prevent adverse events during procedures, development of domain-specific large vision-language models, design of intelligent educational platforms, building augmented reality systems that provide intraoperative guidance, and virtual reality systems for immersive surgical simulation and training.

**Embodied Intelligence for Task Autonomy**: It concentrates on creating autonomous robotic systems capable of performing surgical tasks with minimal human intervention and optimal outcomes. The work involves developing surgical robot simulators that provide realistic training and testing environments for AI agents, designing the semantic and depth-aware perception algorithms for automation, advancing policy learning algorithms (i.e. imitation learning and reinforcement learning), and implementing robust frameworks capable of performing specific tasks with high safety and precision.
{% endcapture %}
{% include feature.html image="images/research/robotic.jpg" link="publication" title="Surgical Robotics" text=text flip=true className="feature-image" %}

{% capture text %}
**Theoretical Analysis**: we focus on two key areas, federated learning and addressing label imbalance as well as noisy labels. We explore the application of federated learning techniques to train medical image analysis models while preserving data privacy. Additionally, we investigate methods to handle imbalanced label distributions in medical imaging data, improving detection and classification capabilities for underrepresented classes. Furthermore, our research delves into mitigating the impact of noisy labels, enhancing the reliability and performance of medical image analysis models.

**Clinical Application**: we aim to translate advanced analysis techniques into real-world medical practice. We concentrate on utilizing automated image analysis and recognition to assist physicians in disease diagnosis. By leveraging these techniques, we aim to support healthcare professionals in quickly and accurately determining the type and severity of diseases. Moreover, our work focuses on the development of automated disease segmentation and localization techniques, which enable the identification and precise mapping of abnormal regions in medical images.
{% endcapture %}
{% include feature.html image="images/research/research1.png" link="publication" title="Medical Image Analysis" text=text className="feature-image" %}

