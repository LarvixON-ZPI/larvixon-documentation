Here are the complete Markdown files for the **Implementation** section.

### 1. DevOps & Environment

**devops-and-env.md**
`content/docs/pl/implementation/`

```markdown
---
title: Środowisko wytwórcze i CI/CD
description: Strategia branchowania, konfiguracja Docker oraz automatyzacja wdrożeń (GitHub Actions)
---

## Środowisko wytwórcze i proces kontroli wersji

Kod źródłowy systemu został zorganizowany w architekturze _multi-repo_, gdzie poszczególne komponenty systemu (backend, frontend, model ML, symulacja, serwis pacjentów, dokumentacja) znajdują się w oddzielnych repozytoriach na platformie GitHub.

### Strategia branchowania i Code Review

W projekcie zastosowano strategię _Feature Branch Workflow_. Główny branch `main` zawierał stabilną wersję produkcyjną kodu. Prace nad nowymi funkcjonalnościami odbywały się na dedykowanych branchach tworzonych od głównego.

W celu zapewnienia wysokiej jakości kodu, wprowadzono proces _Code Review_. Scalenie zmian z głównym branchem było możliwe tylko poprzez mechanizm _Pull Request_ (PR), który wymagał:

- Akceptacji przynajmniej jednego innego członka zespołu.
- Pozytywnego przejścia automatycznych testów w potoku CI.
- Rozwiązania konfliktów w kodzie.

Do wsparcia recenzji kodu wykorzystano narzędzie GitHub Copilot, które wspomagało proces wykrywania literówek i prostych błędów logicznych.

### Ciągła integracja (CI/CD)

Zaimplementowano zautomatyzowane potoki wdrażania (ang. _Pipelines_) z wykorzystaniem narzędzia **GitHub Actions**. Wdrożono następujące automatyzacje:

- **Backend (Django):** Workflow `django.yml` uruchamia środowisko Python, instaluje zależności i wykonuje testy jednostkowe. Deployment na Azure jest zautomatyzowany w osobnym pipeline.
- **Frontend (Flutter):** Workflow `flutter_ci.yml` oraz `release-build.yml` odpowiadają za analizę statyczną kodu, testy oraz budowanie artefaktów (Web, Android).
- **Symulacja (Unity):** Automatyczne budowanie projektu na platformy Linux, macOS, Windows i WebGL poprzez GitHub Releases.
- **Strona z dokumentacją:** Automatyczny deployment na GitHub Pages.
- **Serwis pacjentów:** Automatyczny deployment serwisu na Azure z wykorzystaniem Terraforma.
```

**devops-and-env.md**
`content/docs/en/implementation/`

```markdown
---
title: Dev Environment and CI/CD
description: Branching strategy, Docker configuration, and deployment automation (GitHub Actions)
---

## Development Environment and Version Control

The system's source code is organized in a _multi-repo_ architecture, where individual system components (backend, frontend, ML model, simulation, patient service, documentation) reside in separate repositories on the GitHub platform.

### Branching Strategy and Code Review

The project utilized the _Feature Branch Workflow_. The main branch `main` contained the stable production version of the code. Work on new features took place on dedicated branches created from the main branch.

To ensure high code quality, a _Code Review_ process was introduced. Merging changes into the main branch was only possible through a _Pull Request_ (PR) mechanism, which required:

- Approval from at least one other team member.
- Successful passing of automated tests in the CI pipeline.
- Resolution of code conflicts.

GitHub Copilot was used to support code reviews, aiding in the detection of typos and simple logical errors.

### Continuous Integration (CI/CD)

Automated deployment pipelines were implemented using **GitHub Actions**. The following automations were deployed:

- **Backend (Django):** The `django.yml` workflow sets up the Python environment, installs dependencies, and runs unit tests. Deployment to Azure is automated in a separate pipeline.
- **Frontend (Flutter):** The `flutter_ci.yml` and `release-build.yml` workflows handle static code analysis, tests, and artifact building (Web, Android).
- **Simulation (Unity):** Automatic project building for Linux, macOS, Windows, and WebGL platforms via GitHub Releases.
- **Documentation Site:** Automatic deployment to GitHub Pages.
- **Patient Service:** Automatic deployment of the service to Azure using Terraform.
```

---

### 2. Backend Implementation

**backend.md**
`content/docs/pl/implementation/`

````markdown
---
title: Implementacja Backend
description: Struktura aplikacji Django, zadania asynchroniczne Celery i integracja z chmurą Azure
---

Implementacja warstwy serwerowej została zrealizowana w języku Python z wykorzystaniem frameworka Django. Kod źródłowy zorganizowano w strukturę modułową (Django Apps).

## Struktura projektu

Projekt backendu podzielono na niezależne moduły zgodnie z zasadą _Separation of Concerns_:

```text
larvixon-backend/
|-- accounts/           # Obsługa użytkowników (rejestracja, logowanie)
|-- analysis/           # Zarządzanie wynikami analiz
|-- videoprocessor/     # Logika przetwarzania wideo (Celery Tasks)
|-- reports/            # Generowanie dokumentów PDF
|-- patients/           # Integracja z serwisem pacjentów
|-- larvixon_site/      # Główna konfiguracja projektu
|-- Dockerfile          # Definicja obrazu kontenera
```
````

## Konfiguracja środowiska (Docker)

Wykorzystano platformę **Docker** do zapewnienia spójności środowiska. Orkiestracja usług (Django, PostgreSQL, Redis, Celery Worker) odbywa się za pomocą **Docker Compose**.

## Asynchroniczne przetwarzanie (Celery)

Kluczowym wyzwaniem było zapewnienie płynności UI podczas analizy wideo. Zastosowano wzorzec _Task Queue_:

1. **Upload:** Serwis `VideoUploadService` zapisuje plik i tworzy rekord w bazie.
2. **Kolejkowanie:** Uruchamiane jest zadanie asynchroniczne `process_video_task`.
3. **Przetwarzanie:** Worker Celery pobiera zadanie i deleguje analizę do modelu ML.

```python
# Fragment implementacji zadania w videoprocessor/tasks.py
@shared_task
def process_video_task(analysis_id):
    try:
        # Logika komunikacji z modelem ML
        pass
    except Exception as e:
        # Obsługa błędów
        pass
```

## Generowanie raportów

Moduł `reports` wykorzystuje bibliotekę **ReportLab** do programistycznego generowania plików PDF. Dokument nie jest zapisywany na dysku, lecz zwracany jako strumień bajtów (_FileResponse_), co optymalizuje zużycie zasobów.

## Dokumentacja API

Wdrożono bibliotekę `drf-spectacular`, która automatycznie generuje schemat API zgodny ze standardem **OpenAPI 3.0**. Dzięki temu dostępny jest interfejs Swagger UI do testowania endpointów.

## Testy

Projekt implementuje warstwową strategię testowania z wykorzystaniem `pytest` oraz `unittest.mock`:

- **Testy integracyjne API:** Weryfikacja endpointów HTTP.
- **Testy warstwy biznesowej:** Testowanie serwisów w izolacji.
- **Testy asynchroniczne:** Mockowanie zadań Celery i zewnętrznych usług ML.

Pokrycie kodu testami (_code coverage_) dla głównej logiki biznesowej wynosi ok. **78%**.

````

**backend.md**
`content/docs/en/implementation/`
```markdown
---
title: Backend Implementation
description: Django application structure, Celery asynchronous tasks, and Azure cloud integration
---

The server layer implementation was realized in Python using the Django framework. The source code follows a modular structure (Django Apps).

## Project Structure

The backend project is divided into independent modules according to the *Separation of Concerns* principle:

```text
larvixon-backend/
|-- accounts/           # User management (registration, login)
|-- analysis/           # Analysis result management
|-- videoprocessor/     # Video processing logic (Celery Tasks)
|-- reports/            # PDF document generation
|-- patients/           # Patient service integration
|-- larvixon_site/      # Main project configuration
|-- Dockerfile          # Container image definition
````

## Environment Configuration (Docker)

**Docker** was used to ensure environment consistency. Service orchestration (Django, PostgreSQL, Redis, Celery Worker) is handled via **Docker Compose**.

## Asynchronous Processing (Celery)

A key challenge was ensuring UI responsiveness during video analysis. A _Task Queue_ pattern was applied:

1. **Upload:** The `VideoUploadService` saves the file and creates a database record.
2. **Queuing:** The asynchronous task `process_video_task` is triggered.
3. **Processing:** The Celery Worker picks up the task and delegates analysis to the ML model.

```python
# Snippet of task implementation in videoprocessor/tasks.py
@shared_task
def process_video_task(analysis_id):
    try:
        # Logic for communication with the ML model
        pass
    except Exception as e:
        # Error handling
        pass
```

## Report Generation

The `reports` module uses the **ReportLab** library for programmatic PDF generation. The document is not saved to disk but returned as a byte stream (_FileResponse_), optimizing resource usage.

## API Documentation

The `drf-spectacular` library was implemented to automatically generate an API schema compliant with the **OpenAPI 3.0** standard. This provides a Swagger UI interface for testing endpoints.

## Testing

The project implements a layered testing strategy using `pytest` and `unittest.mock`:

- **API Integration Tests:** Verification of HTTP endpoints.
- **Business Layer Tests:** Testing services in isolation.
- **Asynchronous Tests:** Mocking Celery tasks and external ML services.

Code coverage for the main business logic is approximately **78%**.

````

---

### 3. Frontend Implementation & Simulation

**frontend.md**
`content/docs/pl/implementation/`
```markdown
---
title: Implementacja Frontend
description: Architektura Flutter BLoC, zarządzanie stanem i integracja z symulacją Unity
---

## Interfejs Użytkownika (Flutter)

Aplikacja została zbudowana w architekturze warstwowej z wykorzystaniem **Flutter 3.35.1**. Kod podzielono na moduły funkcjonalne (*feature-based*), takie jak `auth`, `analysis`, `settings`.

### Zarządzanie stanem (BLoC)
Zastosowano bibliotekę `flutter_bloc`. Stan aplikacji jest niemutowalny i oparty na klasach rozszerzających `Equatable` w celu optymalizacji przerysowywania widoków.
*   **Events:** Zdarzenia emitowane przez UI (np. kliknięcie przycisku).
*   **States:** Stany zwracane przez BLoC (np. `Loading`, `Success`, `Error`).

### Obsługa błędów API
Zaimplementowano wzorzec **Factory Method** dla obsługi błędów. Klasa `ApiFailure` mapuje kody HTTP (z biblioteki `dio`) na błędy domenowe, co pozwala na wyświetlanie precyzyjnych komunikatów użytkownikowi (np. walidacja formularza vs błąd serwera).

### Automatyczna dokumentacja
Wykorzystano narzędzie `dartdoc` do generowania statycznej dokumentacji HTML na podstawie komentarzy w kodzie (Markdown).

### Testy akceptacyjne
Przeprowadzono testy manualne w oparciu o scenariusze (Test Cases), weryfikując m.in.:
1.  Rejestrację i walidację danych.
2.  Upload wideo i obsługę dużych plików.
3.  Responsywność interfejsu (Mobile vs Desktop).

## Implementacja Symulacji (Unity)

Symulacja (projekt `larvixon-simulation`) została zintegrowana z frontendem za pomocą wtyczki *flutter_unity_widget*.

### Algorytm fizycznego ruchu larw
Larwa jest modelowana jako 5 połączonych punktów. Algorytm ruchu opiera się na cyklicznych fazach zmian preferowanej odległości między segmentami ciała (głowa-odwłok), symulując naturalny ruch robaczkowy.

### Modyfikatory behawioralne
Wpływ ksenobiotyków na larwy jest realizowany przez klasę `MovementModifier`. Algorytm oblicza finalne parametry ruchu poprzez interpolację liniową między stanem normalnym a stanem pod wpływem narkotyku, uwzględniając czas wystąpienia (`onsetTime`) i trwania efektu (`duration`).
````

**frontend.md**
`content/docs/en/implementation/`

```markdown
---
title: Frontend Implementation
description: Flutter BLoC architecture, state management, and Unity simulation integration
---

## User Interface (Flutter)

The application was built using a layered architecture with **Flutter 3.35.1**. Code is divided into functional modules (_feature-based_), such as `auth`, `analysis`, `settings`.

### State Management (BLoC)

The `flutter_bloc` library was utilized. Application state is immutable and based on classes extending `Equatable` to optimize view rendering.

- **Events:** Events emitted by the UI (e.g., button clicks).
- **States:** States returned by the BLoC (e.g., `Loading`, `Success`, `Error`).

### API Error Handling

A **Factory Method** pattern was implemented for error handling. The `ApiFailure` class maps HTTP codes (from the `dio` library) to domain errors, allowing for precise user messaging (e.g., form validation vs. server error).

### Automatic Documentation

The `dartdoc` tool was used to generate static HTML documentation based on code comments (Markdown).

### Acceptance Testing

Manual tests were conducted based on Test Cases, verifying:

1.  Registration and data validation.
2.  Video upload and handling of large files.
3.  Interface responsiveness (Mobile vs. Desktop).

## Simulation Implementation (Unity)

The simulation (`larvixon-simulation` project) was integrated with the frontend using the _flutter_unity_widget_ plugin.

### Larva Physics Algorithm

The larva is modeled as 5 connected points. The movement algorithm is based on cyclic phases of changing the preferred distance between body segments (head-tail), simulating natural worm-like movement.

### Behavioral Modifiers

The influence of xenobiotics on larvae is implemented via the `MovementModifier` class. The algorithm calculates final movement parameters through linear interpolation between the normal state and the drugged state, taking into account the onset time (`onsetTime`) and duration (`duration`) of the effect.
```

---

### 4. Machine Learning Implementation

**ml-model.md**
`content/docs/pl/implementation/`

```markdown
---
title: Model uczenia maszynowego
description: Implementacja architektury hybrydowej CNN+LSTM w PyTorch i preprocessing wideo
---

## Implementacja modelu Larvixon ML

Model został zaimplementowany w frameworku **PyTorch**, a jego celem jest wydajne przetwarzanie czasowo-przestrzenne danych wideo.

### Architektura Hybrydowa (CNN + LSTM)

Zastosowano architekturę zoptymalizowaną do klasyfikacji sekwencji wideo:

1.  **Ekstrakcja Cech (CNN):** Wykorzystano model **ResNet18** (bez ostatnich warstw klasyfikacyjnych) jako ekstraktor cech. Każda klatka wideo jest redukowana do wektora cech (_embedding_).
2.  **Modelowanie Czasowe (LSTM):** Sekwencja wektorów z CNN trafia do sieci **LSTM**, która uczy się dynamiki ruchu w czasie.
3.  **Klasyfikacja:** Finalny wektor stanu LSTM przechodzi przez warstwy gęste (Fully Connected) z funkcją aktywacji _softmax_.

### Preprocessing danych

Proces przygotowania danych obejmuje:

- **Segmentację ROI:** Automatyczne wykrywanie szalek Petriego na wideo.
- **Próbkowanie:** Wybór reprezentatywnych klatek w równych odstępach czasu.
- **Transformacje:** Skalowanie do 112x112 pikseli, konwersja do tensorów i normalizacja (ImageNet stats).

### Trening i Wnioskowanie

- **Trening:** Realizowany w pętli iteracyjnej z wykorzystaniem funkcji straty _Cross-Entropy Loss_ i optymalizatora _Adam_.
- **Serwis predykcyjny:** Model jest serwowany poprzez API oparte na **FastAPI**. Endpoint `/predict` przyjmuje plik wideo, wykonuje preprocessing i zwraca prawdopodobieństwo wykrycia substancji.
```

**ml-model.md**
`content/docs/en/implementation/`

```markdown
---
title: Machine Learning Model
description: Implementation of the hybrid CNN+LSTM architecture in PyTorch and video preprocessing
---

## Larvixon ML Model Implementation

The model was implemented using the **PyTorch** framework, aiming for efficient spatiotemporal processing of video data.

### Hybrid Architecture (CNN + LSTM)

An architecture optimized for video sequence classification was applied:

1.  **Feature Extraction (CNN):** The **ResNet18** model (without final classification layers) was used as a feature extractor. Each video frame is reduced to a feature vector (_embedding_).
2.  **Temporal Modeling (LSTM):** The sequence of vectors from the CNN is fed into an **LSTM** network, which learns movement dynamics over time.
3.  **Classification:** The final LSTM state vector passes through Fully Connected layers with a _softmax_ activation function.

### Data Preprocessing

The data preparation process includes:

- **ROI Segmentation:** Automatic detection of Petri dishes in the video.
- **Sampling:** Selection of representative frames at equal time intervals.
- **Transformations:** Scaling to 112x112 pixels, conversion to tensors, and normalization (ImageNet stats).

### Training and Inference

- **Training:** Executed in an iterative loop using the _Cross-Entropy Loss_ function and the _Adam_ optimizer.
- **Prediction Service:** The model is served via an API based on **FastAPI**. The `/predict` endpoint accepts a video file, performs preprocessing, and returns the probability of substance detection.
```
