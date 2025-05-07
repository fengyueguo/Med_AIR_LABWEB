---
title: Research
nav:
  order: 3
  tooltip: Research directions
---

<h2>Research</h2>

Our research is at the interdisciplinary field of **medical image analysis**, **machine learning** and **robotic surgery intelligence**, aiming to create synergistic advancements for innovative intelligent systems that achieve an impact to support delivery of higher-quality medical diagnosis, intervention and education via next-generation healthcare technology. Previous representative works include 3D deep learning for high-dimensional image computing, domain adaptation and generalization on heterogeneous medical data, surgical video analysis with efficient spatial-temporal learning, and visual-kinematics surgical robotics perception and automation.

Recent focus: 1) **embodied intelligence** in surgical robots, 2) **smart mixed-reality** for robotic surgical education, 3) **multi-sensory perception** in dynamic environment, 4) **model generalization on non-iid medical images at FL/multi-center learning** in real-world.
{% 
  include figure.html 
  image="images/wordcloud.png"
  width="1000px"
%}
<br>
<h2> Topics </h2>
{% capture text %}
**Theoretical Analysis**: we focuse on two key areas, federated learning and addressing label imbalance as well as noisy labels. We explore the application of federated learning techniques to train medical image analysis models while preserving data privacy. Additionally, we investigate methods to handle imbalanced label distributions in medical imaging data, improving detection and classification capabilities for underrepresented classes. Furthermore, our research delves into mitigating the impact of noisy labels, enhancing the reliability and performance of medical image analysis models.

**Clinical application**: we aim to translate advanced analysis techniques into real-world medical practice. We concentrate on utilizing automated image analysis and recognition to assist physicians in disease diagnosis. By leveraging these techniques, we aim to support healthcare professionals in quickly and accurately determining the type and severity of diseases. Moreover, our work focuses on the development of automated disease segmentation and localization techniques, which enable the identification and precise mapping of abnormal regions in medical images. 
{% endcapture %}

{%
  include feature.html
  image="images/research/research1.png"
  link="publication"
  title="Medical Image Analysis"
  text=text
  flip=true
  className="feature-image"
%}

{% capture text %}

**Surgical Task Automation**: Surgical procedures require precision and expertise, and the integration of intelligent algorithms and robotic systems can enhance surgical outcomes. We aim to develop advanced technologies that provide real-time assistance and decision support to surgeons during operations. By leveraging machine learning, computer vision, and robotic control, their research aims to improve surgical accuracy, reduce complications, and enhance patient safety.

**Intelligent Cognitive Assistance for Surgery**: Automation of routine surgical tasks can streamline procedures, reduce surgical time, and improve overall efficiency. Through the development of autonomous robotic systems, we aim to automate specific surgical tasks, such as suturing or tissue manipulation, to augment the capabilities of surgeons and enhance surgical outcomes.

{% endcapture %}

{%
  include feature.html
  image="images/research/research2.jpeg"
  link="publication"
  title="Surgical Robotics"
  text=text
  className="feature-image"
%}

{% capture text %}

Augmented Reality (AR) and Virtual Reality (VR) technologies have great potential in the medical field. We explore the application of AR/VR in various medical domains, including surgical simulation, medical education, and visualization of medical images. By creating immersive and interactive experiences, these technologies can enhance medical training, improve surgical planning, and facilitate better communication between healthcare professionals and patients. 

This research direction encompass a wide range of interdisciplinary studies, combining expertise in medical image analysis, robotics, and AR/VR technologies. We not only addresses critical challenges in healthcare but also strives to push the boundaries of innovation, ultimately contributing to improved diagnostics, enhanced surgical procedures, and better patient outcomes.

{% endcapture %}

{%
  include feature.html
  image="images/research/research3.gif"
  link="publication"
  title="AR/VR in Medicine"
  text=text
  flip=true
  className="feature-image"
%}