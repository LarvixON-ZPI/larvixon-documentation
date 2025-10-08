---
title: Project overview
description: Detailed description of the LarvixON AI system - goals, scope and methodology
---

## Basic information

**Wrocław University of Science and Technology**  
**Faculty of Computer Science and Telecommunications**  
Program: IST  
**Team project**

**Title:** LarvixON AI system – rapid plasma toxicity diagnostics using behavioral analysis of larvae and machine learning algorithms

**Supervisor:** dr inż. Natalia Piórkowska

**Year:** 2025

---

## 1. Synthetic description of the project

### Goal of the project

The goal of the project is to develop a rapid diagnostic system based on artificial intelligence that detects xenobiotics in patient plasma. The system analyzes movement patterns of Galleria mellonella larvae exposed to plasma samples to identify characteristic organism responses to toxic substances.

### Key assumptions

- Analysis time: not exceeding 20 minutes
- High sensitivity and specificity of classification
- Detection of subtle changes in larval motility
- Detection of drugs, narcotics, toxins, or pathogens

### Ultimate objective

Implement an innovative diagnostic method that contributes to:

- Improved treatment effectiveness
- Reduced time to medical intervention in life-threatening situations
- Rapid identification of toxic substances in a patient's organism

---

## 2. Project scope

The project includes two parallel workstreams:

### A - Research track - machine learning algorithms

Focus areas:

1. Analysis of movement data of Galleria mellonella larvae

   - Preprocessing of video recordings of larvae
   - Tracking of movement and behavior

2. Extraction of behavioral features

   - Identification of characteristic movement patterns
   - Analysis of motility changes associated with toxin exposure

3. Training classification models
   - Development of machine learning algorithms
   - Optimization for sensitivity and specificity
   - Validation on real and synthetic data

### B - Engineering track - diagnostic application

Development of a complete application to support clinical use of the system:

#### System pipeline

1. Loading video data – import of recordings with larvae
2. Analysis – automatic processing by ML algorithms
3. Prediction – classification of presence of xenobiotics
4. Presentation of results – clear user interface

#### User interface

- Simple graphical interface
- Intended for physicians and laboratory staff
- Ability to run analysis in near real time
- Fast access to diagnostic results

### C - Simulation and data generation

Additional component:

- Simple larva simulation in Unity
- Generation of synthetic data for ML models
- Support for training when real data is limited

---

## 3. Methodology

### System testing

The system will be tested with respect to:

1. Performance

   - Processing time for a single sample
   - Optimization of compute resource usage

2. Prediction accuracy

   - Sensitivity – detection of true positive cases
   - Specificity – avoidance of false alarms
   - Precision for classifying different types of xenobiotics

3. Clinical usability
   - Intuitiveness of the interface
   - Integration with laboratory/hospital workflows
   - Time required to perform a full analysis

---

## Model organism

### Why Galleria mellonella?

Galleria mellonella larvae are widely used in toxicology research because of:

- Ease of breeding and low cost
- Well-characterized immune system
- Detectable behavioral changes in response to toxic substances
- Suitability as an alternative model prior to vertebrate testing
- Short reaction time to chemical stimuli

---

## Innovation

The LarvixON AI system introduces an innovative approach by:

1. Combining biology and AI – using model organisms together with advanced algorithms
2. Fast diagnostics – results within 20 minutes
3. Noninvasiveness – plasma analysis instead of more invasive procedures
4. Automation – reducing workload for medical staff
5. Scalability – parallel processing of multiple samples
