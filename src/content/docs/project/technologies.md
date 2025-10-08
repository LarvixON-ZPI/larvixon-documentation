---
title: Technology stack
description: Technologies and tools used in the LarvixON AI project
---

The LarvixON AI system uses a broad set of modern technologies, from high-performance computing and machine learning to cross-platform web and mobile applications.

---

## Infrastructure

### Wrocław Supercomputing and Networking Center (WCSS)

Role: compute resources for intensive workloads

Use cases:

- Large-scale video data analysis
- Training machine learning models
- Conducting research experiments
- Performance testing
- Parallel processing of many samples

Benefits:

- Access to high-performance computing (HPC) resources
- Significant acceleration of model training
- Ability to experiment with larger datasets

---

## Python - ML core

### Primary role

Python is the main language used in the backend and ML parts of the project.

### Areas of application

1. Data processing

   - Analysis of larval movement data
   - Video preprocessing
   - Data cleaning and normalization

2. Feature extraction

   - Identification of behavioral patterns
   - Feature engineering
   - Statistical analysis

3. Machine learning

   - Implementing classification models
   - Training and validation
   - Hyperparameter optimization

### Python libraries

- NumPy — array operations and numerical computation
- pandas — tabular data manipulation and analysis
- scikit-learn — classical machine learning algorithms
- PyTorch — deep learning and neural networks
- OpenCV (likely) — image and video processing
- Matplotlib / Seaborn — data visualization

---

## Backend — Django

### Django framework

Type: a full-featured, high-level Python web framework

Characteristics:

- Scalable
- Secure
- Batteries-included approach (many features out of the box)

### Backend responsibilities

1. Data management

   - Storing analysis results
   - Managing experimental metadata
   - Keeping history of samples and patients

2. Business logic

   - Analysis workflow for samples
   - User and permissions management
   - Integration with ML models

3. REST API

   - Communication with the frontend
   - Endpoints for video uploads
   - Returning prediction results

### Features

- Authentication and authorization
  - Login and registration
  - Multi-Factor Authentication (MFA)
  - Google OAuth
- Django REST Framework
  - Building RESTful APIs
  - Serialization
  - Request validation

---

## API documentation — Swagger (OpenAPI 2.0)

### OpenAPI 2.0 (Swagger)

Features:

- Automatic API documentation
- Endpoint visualization
- Interactive API testing
- Improves frontend-backend collaboration

Benefits:

- Clear overview of available operations
- Allows testing without external tools
- Standardizes communication between teams

---

## Frontend — Flutter

### Flutter (Dart)

Google's UI toolkit for building native applications.

### Cross-platform targets

One codebase supports:

- Web
- Linux (desktop)
- macOS (desktop)
- Windows (desktop)
- Android
- iOS

### Interface features

1. Login and registration panel

   - Secure authentication
   - Google OAuth integration
   - MFA support

2. Landing page

   - Project overview
   - Clear navigation

3. User panel

   - Dashboard with analysis history
   - Sample management
   - Result preview

4. Video upload

   - Upload larva recordings
   - Progress bar
   - Format validation

5. Results presentation
   - Prediction visualization
   - Result interpretation
   - Report export

### Flutter advantages

- Fast development with hot reload
- Native-looking UI
- High performance
- Single codebase for many platforms

---

## Simulation — Unity

### Unity Engine

Purpose: generate synthetic training data

### Simulation features

1. Modeling larval behavior

   - Simulate natural movement
   - Reactions to toxic stimuli
   - Realistic behavioral patterns

2. Data generation

   - Create diverse scenarios
   - Controlled experimental conditions
   - Large datasets without biological costs

3. Simulation releases
   - v1.0.0 — initial test dataset (2025-09-13)
   - v1.1.0 — full data generation (2025-09-30)

Importance for the project:

- Complements limited real-world data
- Enables testing of various scenarios
- Augments the training dataset

---

## Data annotation — Roboflow

### Roboflow

Platform for managing visual data and annotations.

### Use cases

- Video data annotation
- Marking objects (larvae) on frames
- Preparing training datasets for detection models
- Tracking larval movement

### Process

1. Upload videos
2. Automatic / manual annotation of larvae
3. Export in ML formats (YOLO, COCO, etc.)
4. Integration with the training pipeline

---

## Database — PostgreSQL

### PostgreSQL

Open-source relational database.

### Stored data

1. Analysis results

   - ML model predictions
   - Probability scores
   - Analysis timestamps

2. Experimental metadata

   - Sample information
   - Experimental parameters
   - Test conditions

3. User data

   - Profiles for clinicians / lab staff
   - Activity history
   - Access permissions

4. Analysis history
   - Full audit trail
   - Ability to verify past results

### PostgreSQL benefits

- ACID compliance — reliable transactions
- Advanced data types (JSON, arrays)
- Scalability
- Rich analytical features
- Excellent integration with Django

---

## Containerization — Docker

### Docker

Platform for containerizing applications.

### Container architecture

The LarvixON AI system is composed of separate containers:

1. Backend container (Django)
2. Frontend container (Flutter web build)
3. Database container (PostgreSQL)
4. ML service container (Python + model)

### Benefits

- Isolation — each component runs in its own environment
- Portability — works the same across machines
- Consistency — identical dev and production environments
- Easy deployment — `docker-compose up`
- Scalability — scale individual services as needed

---

## Cloud hosting — Microsoft Azure

### Azure

Microsoft cloud platform for hosting applications and services.

### Services used

1. Compute

   - Virtual Machines or App Services
   - Hosting backend and frontend
   - Auto-scaling capabilities

2. Storage

   - Video storage
   - Database backups
   - Archiving results

3. Database

   - Azure Database for PostgreSQL
   - Managed database solution

4. ML & AI

   - Azure Machine Learning (potential)
   - Integration with analytics services

### Azure benefits

- High availability — strong uptime guarantees
- Scalability — flexible resources
- Security — compliance with medical standards
- Global infrastructure — low latency
- Rich ecosystem of integrations

---

## Component integration

### System architecture

```text
┌─────────────┐
│   Flutter   │ ← User interface
│  (Frontend) │
└──────┬──────┘
       │ REST API
       ↓
┌─────────────┐
│   Django    │ ← Business logic
│  (Backend)  │
└──────┬──────┘
       │
       ├──→ PostgreSQL (data)
       │
       └──→ ML Service (predictions)
                ↓
          WCSS (training)
```

### Data flow

1. A user uploads a video (Flutter)
2. The backend receives and validates the upload (Django)
3. The video is forwarded to the ML Service
4. The model analyzes the video and returns a prediction
5. The result is saved in the database (PostgreSQL)
6. The result is displayed to the user (Flutter)

---

## Development tools

### Version control

- Git — version control system
- **GitHub** — repository hosting

### CI/CD

- **GitHub Actions** — CI/CD tooling
- Automated tests
- Deployment pipelines
- Automated tests
- Deployment pipelines

### Testing

- **pytest** — backend tests
- **flutter test** — frontend tests
- Integration tests — end-to-end testing

---

## Summary of the technology stack

| Layer         | Technology      | Purpose                 |
| ------------- | --------------- | ----------------------- |
| Compute       | WCSS            | ML training             |
| ML / AI       | Python, PyTorch | Classification models   |
| Backend       | Django, DRF     | API and business logic  |
| Frontend      | Flutter         | Cross-platform UI       |
| Database      | PostgreSQL      | Data storage            |
| Simulation    | Unity           | Synthetic data          |
| Annotation    | Roboflow        | Data preparation        |
| Containers    | Docker          | Isolation and delivery  |
| Cloud         | Azure           | Hosting and scalability |
| Documentation | Swagger 2       | API docs                |

---

This diverse technology stack enables building a comprehensive, scalable, and reliable diagnostic system that combines modern advances in ML, cloud computing, and cross-platform application development.
