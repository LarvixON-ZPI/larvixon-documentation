---
title: Stack technologiczny
description: Technologie i narzędzia wykorzystywane w projekcie LarvixON AI
---

System LarvixON AI wykorzystuje szeroki zakres nowoczesnych technologii, od obliczeń wysokiej wydajności, przez uczenie maszynowe, po wieloplatformowe aplikacje webowe i mobilne.

---

## 🖥️ Infrastruktura obliczeniowa

### Wrocławskie Centrum Superkomputerowe (WCSS)

**Rola:** Moc obliczeniowa dla intensywnych zadań

**Zastosowanie:**

- Analiza danych wideo na dużą skalę
- Trenowanie modeli uczenia maszynowego
- Przeprowadzanie eksperymentów badawczych
- Testowanie wydajności systemu
- Przetwarzanie równoległe wielu próbek

**Korzyści:**

- Dostęp do zasobów HPC (High Performance Computing)
- Znaczne przyspieszenie procesu trenowania modeli
- Możliwość eksperymentowania z większymi zbiorami danych

---

## 🐍 Python - Rdzeń systemu ML

### Główne zastosowanie

Python jest **głównym językiem** w części badawczej projektu.

### Obszary wykorzystania

1. **Przetwarzanie danych**

   - Analiza danych ruchowych larw
   - Preprocessing nagrań wideo
   - Czyszczenie i normalizacja danych

2. **Ekstrakcja cech**

   - Identyfikacja wzorców behawioralnych
   - Feature engineering
   - Analiza statystyczna

3. **Machine Learning**
   - Implementacja modeli klasyfikacyjnych
   - Trenowanie i walidacja
   - Optymalizacja hiperparametrów

### Biblioteki Python

- **NumPy** - operacje na tablicach i obliczenia numeryczne
- **pandas** - manipulacja i analiza danych tabelarycznych
- **scikit-learn** - klasyczne algorytmy uczenia maszynowego
- **PyTorch** - deep learning i sieci neuronowe
- **OpenCV** (prawdopodobnie) - przetwarzanie obrazu i wideo
- **Matplotlib/Seaborn** - wizualizacja danych

---

## 🌐 Backend - Django

### Framework Django

**Typ:** Potężny, wysokopoziomowy framework webowy w Pythonie

**Charakterystyka:**

- ✅ Skalowalny
- ✅ Bezpieczny
- ✅ "Batteries included" - pełna funkcjonalność out-of-the-box

### Odpowiedzialności backendu

1. **Zarządzanie danymi**

   - Przechowywanie wyników analiz
   - Zarządzanie metadanymi eksperymentalnymi
   - Historia pacjentów i próbek

2. **Logika biznesowa**

   - Workflow analizy próbek
   - Zarządzanie użytkownikami i uprawnieniami
   - Integracja z modelem ML

3. **API REST**
   - Komunikacja z frontendem
   - Endpoints dla przesyłania wideo
   - Zwracanie wyników predykcji

### Funkcjonalności

- **Autoryzacja i uwierzytelnianie**
  - Logowanie i rejestracja użytkowników
  - Multi-Factor Authentication (MFA)
  - Logowanie przez Google (OAuth)
- **Django REST Framework**
  - Tworzenie RESTful API
  - Serializacja danych
  - Walidacja requestów

---

## 📚 Dokumentacja API - Swagger 2

### OpenAPI 2.0 (Swagger)

**Funkcje:**

- 📖 Automatyczna dokumentacja API
- 🔍 Wizualizacja endpoints
- 🧪 Interaktywne testowanie API
- 🤝 Ułatwienie współpracy frontend-backend

**Korzyści:**

- Przejrzysty obraz dostępnych operacji
- Możliwość testowania bez zewnętrznych narzędzi
- Standaryzacja komunikacji między zespołami

---

## 📱 Frontend - Flutter

### Framework Flutter (Dart)

**Google's UI toolkit** dla budowy natywnych aplikacji

### Wieloplatformowość

Jedna baza kodu działa na:

- 🌐 **Web** - aplikacja w przeglądarce
- 🐧 **Linux** - natywna aplikacja desktopowa
- 🍎 **macOS** - natywna aplikacja desktopowa
- 🪟 **Windows** - natywna aplikacja desktopowa
- 📱 **Android** - aplikacja mobilna
- 📱 **iOS** - aplikacja mobilna

### Funkcjonalności interfejsu

1. **Panel logowania i rejestracji**

   - Bezpieczne uwierzytelnianie
   - Integracja z Google OAuth
   - Obsługa MFA

2. **Landing page**

   - Informacje o systemie
   - Przejrzysta nawigacja

3. **Panel użytkownika**

   - Dashboard z historią analiz
   - Zarządzanie próbkami
   - Podgląd wyników

4. **Przesyłanie wideo**

   - Upload nagrań larw
   - Progress bar
   - Walidacja formatu

5. **Wyświetlanie wyników**
   - Wizualizacja predykcji
   - Interpretacja wyników
   - Eksport raportów

### Zalety Flutter

- ⚡ Szybki rozwój dzięki hot reload
- 🎨 Piękne, natywne UI
- 🚀 Wysoka wydajność
- 📦 Jeden kod = wiele platform

---

## 🎮 Symulacja - Unity

### Unity Engine

**Przeznaczenie:** Generowanie syntetycznych danych treningowych

### Funkcje symulacji

1. **Modelowanie zachowania larw**

   - Symulacja ruchu naturalnego
   - Reakcje na bodźce toksyczne
   - Realistyczne wzorce behawioralne

2. **Generacja danych**

   - Tworzenie różnorodnych scenariuszy
   - Kontrolowane warunki eksperymentalne
   - Duże ilości danych bez kosztów biologicznych

3. **Wersje symulacji**
   - **v1.0.0** - pierwsza testowa porcja danych (13.09.2025)
   - **v1.1.0** - generacja wszystkich danych (30.09.2025)

### Znaczenie dla projektu

- 🔄 Uzupełnienie ograniczonych danych rzeczywistych
- 🧪 Testowanie różnych scenariuszy
- 📊 Augmentacja zbioru treningowego

---

## 🏷️ Anotacja danych - Roboflow

### Roboflow

**Platforma** do zarządzania danymi wizualnymi i anotacji

### Zastosowanie

- 📹 Anotacja danych wideo
- 🔍 Oznaczanie obiektów (larw) na klatkach filmu
- 🎯 Przygotowanie danych treningowych dla modeli detekcji
- 📊 Tracking ruchu larw

### Proces

1. Upload nagrań wideo
2. Automatyczna/manualna anotacja larw
3. Eksport w formatach ML (YOLO, COCO, itp.)
4. Integracja z pipeline treningowym

---

## 🗄️ Baza danych - PostgreSQL

### PostgreSQL

**Relacyjna baza danych** open-source

### Przechowywane dane

1. **Wyniki analiz**

   - Predykcje modelu ML
   - Probability scores
   - Timestamp analiz

2. **Metadane eksperymentalne**

   - Informacje o próbkach
   - Parametry eksperymentalne
   - Warunki testów

3. **Dane użytkowników**

   - Profile lekarzy/laborantów
   - Historia aktywności
   - Uprawnienia dostępu

4. **Historia analiz**
   - Pełny audit trail
   - Możliwość weryfikacji wstecznej

### Zalety PostgreSQL

- ✅ ACID compliance - niezawodność transakcji
- ✅ Zaawansowane typy danych (JSON, arrays)
- ✅ Skalowalność
- ✅ Rozbudowane funkcje analityczne
- ✅ Doskonała integracja z Django

---

## 🐳 Konteneryzacja - Docker

### Docker

**Platforma** do konteneryzacji aplikacji

### Architektura kontenerów

System LarvixON AI składa się z odseparowanych kontenerów:

1. **Backend container** (Django)
2. **Frontend container** (Flutter web build)
3. **Database container** (PostgreSQL)
4. **ML service container** (Python + model)

### Korzyści

- 🔒 **Izolacja** - każdy komponent w osobnym środowisku
- 📦 **Przenośność** - "działa na moim" → "działa wszędzie"
- ⚙️ **Spójność** - identyczne środowisko dev/prod
- 🚀 **Łatwe wdrożenie** - `docker-compose up`
- 📈 **Skalowalność** - łatwe skalowanie poszczególnych usług

### Docker Compose

Orkiestracja wszystkich kontenerów w ramach jednego środowiska:

```yaml
# Przykładowa struktura
services:
  backend:
    # Django API
  frontend:
    # Flutter app
  database:
    # PostgreSQL
  ml-service:
    # Model ML
```

---

## ☁️ Cloud hosting - Microsoft Azure

### Azure

**Platforma chmurowa** Microsoft do hostowania aplikacji i usług

### Usługi wykorzystywane

1. **Compute**

   - Virtual Machines lub App Services
   - Hosting backendu i frontendu
   - Możliwość autoscalingu

2. **Storage**

   - Przechowywanie nagrań wideo
   - Backup bazy danych
   - Archiwizacja wyników

3. **Database**

   - Azure Database for PostgreSQL
   - Zarządzane rozwiązanie bazodanowe

4. **ML & AI**
   - Azure Machine Learning (potencjalnie)
   - Integracja z usługami analitycznymi

### Zalety Azure

- ☁️ **Wysoka dostępność** - uptime 99.9%
- 📈 **Skalowalność** - elastyczne zasoby
- 🔐 **Bezpieczeństwo** - compliance z medycznymi standardami
- 🌍 **Globalna infrastruktura** - niska latencja
- 🔧 **Integracje** - bogaty ekosystem usług

---

## 🔗 Integracja komponentów

### Architektura systemu

```text
┌─────────────┐
│   Flutter   │ ← Interfejs użytkownika
│  (Frontend) │
└──────┬──────┘
       │ REST API
       ↓
┌─────────────┐
│   Django    │ ← Logika biznesowa
│  (Backend)  │
└──────┬──────┘
       │
       ├──→ PostgreSQL (dane)
       │
       └──→ ML Service (predykcje)
                ↓
          WCSS (trenowanie)
```

### Przepływ danych

1. Użytkownik przesyła wideo (Flutter)
2. Backend odbiera i waliduje (Django)
3. Wideo przekazywane do ML Service
4. Model analizuje i zwraca predykcję
5. Wynik zapisywany w bazie (PostgreSQL)
6. Rezultat wyświetlany użytkownikowi (Flutter)

---

## 🛠️ Narzędzia rozwojowe

### Kontrola wersji

- **Git** - system kontroli wersji
- **GitHub** - hosting repozytoriów

### CI/CD

- **GitHub Actions** / **Azure Pipelines** (prawdopodobnie)
- Automatyczne testy
- Deployment pipeline

### Testowanie

- **pytest** - testy backendu
- **Flutter test** - testy frontendu
- **Integration tests** - testy end-to-end

---

## 📊 Podsumowanie stosu technologicznego

| Warstwa          | Technologia     | Cel                    |
| ---------------- | --------------- | ---------------------- |
| **Compute**      | WCSS            | Trenowanie ML          |
| **ML/AI**        | Python, PyTorch | Modele klasyfikacyjne  |
| **Backend**      | Django, DRF     | API i logika           |
| **Frontend**     | Flutter         | UI wieloplatformowy    |
| **Database**     | PostgreSQL      | Przechowywanie danych  |
| **Symulacja**    | Unity           | Dane syntetyczne       |
| **Anotacja**     | Roboflow        | Przygotowanie danych   |
| **Kontenery**    | Docker          | Izolacja i deployment  |
| **Cloud**        | Azure           | Hosting i skalowalność |
| **Dokumentacja** | Swagger 2       | API docs               |

---

Ten zróżnicowany stack technologiczny pozwala na stworzenie kompleksowego, skalowalnego i niezawodnego systemu diagnostycznego, łączącego najnowsze osiągnięcia w dziedzinie ML, cloud computing i rozwoju aplikacji multiplatformowych.
