---
title: Project roadmap
description: Timeline and milestones for the LarvixON AI project (2025)
---

Project is carried out in three main phases from June to December 2025. Each phase focuses on different aspects of the system, from foundations to full integration and optimization.

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

## Phase III: integration and optimization

Period: 5 October - 31 October 2025

### Main goals

- Connect all system components
- Optimize the ML model on real data
- Deploy the system to production
- Final testing

### Milestones

#### 05.10.2025: connect frontend with backend

Status: completed

- Integration of Flutter with Django REST API
- Implementation of HTTP communication
- Application state management
- Error handling and retry logic
- Token refresh mechanism

#### 07.10.2025: model weight optimization and backend integration

Status: in progress

Tasks:

- Fine-tuning of ML model weights
- Quantization and pruning (if needed)
- Initial API for backend ↔ ML service communication
- Testing the data flow

#### 08.10.2025: video upload functionality

Status: planned

To implement:

- Video upload from frontend
- Validation of formats (MP4, AVI, MOV)
- Upload progress indicator
- Chunked upload for large files
- Storage in Azure Storage

#### 12.10.2025: host ML model as a microservice

Status: planned

Microservice architecture:

- Separate the model from the main backend
- REST/gRPC API for predictions
- Containerization with Docker
- Deployment to Azure
- Load balancing and autoscaling

#### 15.10.2025: key integration — backend ↔ ML ↔ frontend

Status: planned

Full pipeline:

1. Frontend sends video to backend
2. Backend forwards to ML service
3. ML service processes and analyzes
4. Results return to backend
5. Backend stores results in the database
6. Frontend receives and displays the result

Critical tests:

- End-to-end flow
- Timeout handling
- Concurrent requests
- Error handling at each stage

#### 18.10.2025: retraining on real data

Status: planned

Transfer learning:

- Fine-tuning on real larval recordings
- Comparison with synthetic data results
- Validation of accuracy improvements
- A/B testing of old vs new weights
- Documentation of performance changes

#### 31.10.2025: final tests and optimization

Status: planned

Testing areas:

1. Frontend

   - UI/UX testing
   - cross-platform compatibility
   - responsive design
   - accessibility

2. Backend

   - load testing
   - security audit
   - API performance
   - database optimization

3. API

   - integration tests
   - contract testing
   - documentation completeness

4. Whole system
   - end-to-end scenarios
   - performance benchmarking
   - stress testing
   - security penetration testing

Optimizations:

- Database indexes
- Query optimization
- Caching strategies
- CDN setup
- Code refactoring

---

## Project success metrics

### Technical performance

- Analysis time per sample: < 20 minutes
- ML model accuracy: > 85%
- API response time: < 2 seconds
- Concurrent users supported: > 10

### Functionality

- Full workflow from upload to result
- Multi-platform user interface
- Secure authentication and authorization
- API and user documentation

### Quality

- Test coverage: > 70%
- Zero critical bugs in production
- Complete technical documentation
- Compliance with security requirements

---

## Current status (7 October 2025)

### Completed

- Project infrastructure
- Authentication system
- Basic user interface
- Database models and API
- Unity simulation (v1.1.0)
- First ML model trained
- Frontend-backend connection

### In progress

- ML model weight optimization
- Connecting ML service with backend
- Implementing upload functionality

### Upcoming (until 31.10)

- Hosting ML as a microservice
- Full integration of all components
- Training on real data
- Final tests and optimization

---

## Risks and mitigation

### Identified risks

1. Delay in delivery of real data

   - Mitigation: use synthetic data from Unity

2. ML model performance in production

   - Mitigation: optimization, quantization, caching

3. Component integration

   - Mitigation: early integration tests, clear API contracts

4. System scalability
   - Mitigation: microservice architecture, cloud autoscaling

---

## Next steps (next two weeks)

1. 8-9 October: Implement video upload
2. 10-12 October: Deploy ML as a microservice
3. 13-15 October: Final integration
4. 16-18 October: Training on real data
5. 19-31 October: Testing and final optimization

The roadmap is a living document and may be updated in response to challenges and opportunities that arise during project execution.
