---
title: Project roadmap
description: Timeline and milestones for the LarvixON project (2025)
---

Project is carried out in five main phases from June to December 2025. Each phase focuses on different aspects of the system, from foundations to full integration and optimization.

![Project timeline](../../../../assets/roadmap/roadmap.png)

---

## Timeline overview

| phase     | period             | status      |
| --------- | ------------------ | ----------- |
| phase I   | 15.06 - 13.09.2025 | completed   |
| phase II  | 20.09 - 30.09.2025 | completed   |
| phase III | 05.10 - 31.10.2025 | in progress |

---

## Phase I: foundations, structure and data preparation

**Period:** 15 June - 13 September 2025

### Main goals

- Establish a solid project foundation
- Prepare the development infrastructure
- Collect and prepare training data

### Milestones

#### 15.06.2025: data collection finalized

Status: completed

- Collection of video recordings of Galleria mellonella larvae
- Initial data cleaning
- Annotation in Roboflow
- Preparation of first training sets

#### 16.08.2025: repository creation and MVP plan

Status: completed

- creation of all project repositories:
  - Backend (Django)
  - Frontend (Flutter)
  - ML Models (Python)
  - Simulation (Unity)
  - Documentation
- definition of the MVP (minimum viable product)
- start of the first development iteration

#### 04.09.2025: authentication system (backend)

Status: completed

Implemented:

- User login
- New account registration
- Multi-factor authentication (MFA)
- Google login (OAuth 2.0)
- Session management
- Token-based authentication

#### 04.09.2025: simulation — review version

Status: completed

- First working version of the Unity simulation
- Basic larval behaviors
- Ready for code review by the team
- Validation of the biological model

#### 13.09.2025: simulation v1.0.0 — first data

Status: completed

Version 1.0.0 of the simulation ready for:

- Generation of the first test data batch
- Validation of the generation pipeline
- Testing correctness of synthetic data
- Initial training of ML models

---

## Phase II: backend, frontend and initial ML model

**Period:** 20 September - 30 September 2025

<!-- markdownlint-disable MD024 -->

### Main goals

- Frontend development
- Implementation of API and database models
- Selection and training of the first ML model
- Second generation of simulation data

### Milestones

#### 20.09.2025: login and registration screens (frontend)

Status: completed

Implemented in Flutter:

- Login screen with validation
- Registration form
- Google OAuth integration
- MFA support
- Clear UX/UI

#### 25.09.2025: landing page

Status: completed

- Application home page
- Presentation of system features
- Navigation to main sections
- Responsive design

#### 26.09.2025: final ML model selection

Status: completed

Selection process:

- Analysis of architectures (CNN, RNN, Transformer)
- Performance comparison
- Tests on synthetic data
- Selection based on:
  - Prediction accuracy
  - Inference time
  - Compute requirements

#### 30.09.2025: user panel

Status: completed

Features:

- Dashboard with summary
- History of analyses
- Sample management
- Account settings

#### 30.09.2025: training on synthetic data

Status: completed

- First phase of training on Unity data
- Baseline performance metrics
- Cross-validation
- Results analysis

#### 30.09.2025: database models and API endpoints

Status: completed

Backend (Django):

- Finalization of database models
  - User
  - Sample
  - Analysis
  - Result
  - Metadata
- Implementation of REST API endpoints
- Django REST Framework setup
- Swagger documentation

#### 30.09.2025: simulation v1.1.0 — full generation

Status: completed

Simulation v1.1.0:

- Extended scenarios
- Diverse experimental conditions
- Generation of all planned data
- Larger training set

#### 30.09.2025: ML model performance validation

Status: completed

Performance metrics:

- Accuracy
- Precision / Recall
- F1-score
- Confusion matrix
- ROC AUC
- Prediction time per sample

---

## Phase III: todo
