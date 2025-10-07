---
title: Roadmapa Projektu
description: Harmonogram i kamienie milowe projektu LarvixON AI (2025)
---

# Roadmapa projektu LarvixON AI

Projekt realizowany jest w **trzech głównych fazach** od czerwca do października 2025 roku. Każda faza koncentruje się na różnych aspektach systemu, od fundamentów po pełną integrację i optymalizację.

---

## 📅 Przegląd czasowy

| Faza         | Okres              | Status        |
| ------------ | ------------------ | ------------- |
| **Faza I**   | 15.06 - 13.09.2025 | ✅ Zakończona |
| **Faza II**  | 20.09 - 30.09.2025 | ✅ Zakończona |
| **Faza III** | 05.10 - 31.10.2025 | 🔄 W trakcie  |

---

## 🏗️ Faza I: Fundamenty, struktura i przygotowanie danych

**Okres:** 15 czerwca - 13 września 2025

### Cele główne

- Stworzenie solidnych fundamentów projektu
- Przygotowanie infrastruktury rozwojowej
- Zebranie i przygotowanie danych treningowych

### Kamienie milowe

#### 📊 15.06.2025: Finalizacja zbioru danych

**Status:** ✅ Zakończono

- Zebranie nagrań wideo larw _Galleria mellonella_
- Wstępne oczyszczenie danych
- Adnotacja w Roboflow
- Przygotowanie pierwszych zestawów treningowych

#### 🗂️ 16.08.2025: Utworzenie repozytoriów i plan MVP

**Status:** ✅ Zakończono

- Utworzenie wszystkich repozytoriów projektu
  - Backend (Django)
  - Frontend (Flutter)
  - ML Models (Python)
  - Simulation (Unity)
  - Documentation
- Zdefiniowanie MVP (Minimum Viable Product)
- Rozpoczęcie I iteracji rozwojowej

#### 🔐 04.09.2025: System uwierzytelniania (Backend)

**Status:** ✅ Zakończono

**Zaimplementowano:**

- Logowanie użytkowników
- Rejestracja nowych kont
- Multi-Factor Authentication (MFA)
- Logowanie przez Google (OAuth 2.0)
- Zarządzanie sesjami
- Token-based authentication

#### 🎮 04.09.2025: Symulacja - wersja do recenzji

**Status:** ✅ Zakończono

- Pierwsza działająca wersja symulacji Unity
- Podstawowe zachowania larw
- Gotowa do code review przez zespół
- Walidacja poprawności modelu biologicznego

#### 🚀 13.09.2025: Symulacja v1.0.0 - Pierwsze dane

**Status:** ✅ Zakończono

**Wersja 1.0.0 symulacji gotowa do:**

- Generacji pierwszej testowej porcji danych
- Walidacji pipeline'u generowania
- Testowania poprawności danych syntetycznych
- Wstępnego trenowania modeli ML

---

## 🚀 Faza II: Backend, Frontend i wstępny model ML

**Okres:** 20 września - 30 września 2025

### Cele główne

- Rozwój interfejsu użytkownika
- Implementacja API i modeli bazodanowych
- Wybór i trenowanie pierwszego modelu ML
- Druga generacja danych z symulacji

### Kamienie milowe

#### 🖥️ 20.09.2025: Panel logowania i rejestracji (Frontend)

**Status:** ✅ Zakończono

**Zaimplementowano w Flutter:**

- Ekran logowania z walidacją
- Formularz rejestracji
- Integracja z OAuth Google
- Obsługa MFA
- Przejrzysty UX/UI

#### 🏠 25.09.2025: Landing Page

**Status:** ✅ Zakończono

- Strona główna aplikacji
- Prezentacja funkcjonalności systemu
- Nawigacja do głównych sekcji
- Responsywny design

#### 🧠 26.09.2025: Wybór finalnego modelu ML

**Status:** ✅ Zakończono

**Proces wyboru:**

- Analiza różnych architektur (CNN, RNN, Transformer)
- Porównanie wydajności
- Testy na danych syntetycznych
- Wybór optymalnego modelu pod kątem:
  - Dokładności predykcji
  - Czasu inferencji
  - Wymagań obliczeniowych

#### 👤 30.09.2025: Panel użytkownika

**Status:** ✅ Zakończono

**Funkcjonalności:**

- Dashboard z podsumowaniem
- Historia przeprowadzonych analiz
- Zarządzanie próbkami
- Ustawienia konta

#### 🤖 30.09.2025: Trenowanie modelu na danych syntetycznych

**Status:** ✅ Zakończono

- Pierwsza faza trenowania na danych z Unity
- Baseline performance metrics
- Walidacja krzyżowa
- Analiza wyników

#### 🗄️ 30.09.2025: Modele bazodanowe i API Endpoints

**Status:** ✅ Zakończono

**Backend (Django):**

- Finalizacja modeli bazodanowych
  - User
  - Sample
  - Analysis
  - Result
  - Metadata
- Implementacja REST API endpoints
- Django REST Framework setup
- Dokumentacja w Swagger

#### 🎮 30.09.2025: Symulacja v1.1.0 - Pełna generacja

**Status:** ✅ Zakończono

**Wersja 1.1.0 symulacji:**

- Rozszerzone scenariusze
- Różnorodne warunki eksperymentalne
- Generacja wszystkich planowanych danych
- Większy zbiór treningowy

#### ✅ 30.09.2025: Walidacja wydajności modelu ML

**Status:** ✅ Zakończono

**Metryki wydajności:**

- Accuracy
- Precision / Recall
- F1-score
- Confusion matrix
- ROC AUC
- Czas predykcji pojedynczej próbki

---

## 🔗 Faza III: Integracja i optymalizacja

**Okres:** 5 października - 31 października 2025

### Cele główne

- Połączenie wszystkich komponentów systemu
- Optymalizacja modelu ML na danych rzeczywistych
- Wdrożenie systemu produkcyjnego
- Testy końcowe

### Kamienie milowe

#### 🔌 05.10.2025: Połączenie Frontend z Backendem

**Status:** ✅ Zakończono

- Integracja Flutter z Django REST API
- Implementacja komunikacji HTTP
- Zarządzanie stanem aplikacji
- Obsługa błędów i retry logic
- Token refresh mechanism

#### ⚙️ 07.10.2025: Optymalizacja wag modelu i połączenie z Backend

**Status:** 🔄 **AKTUALNY MILESTONE**

**Zadania:**

- Fine-tuning wag modelu ML
- Quantization i pruning (jeśli potrzebne)
- Wstępne API do komunikacji Backend ↔ ML Service
- Testowanie przepływu danych

#### 📹 08.10.2025: Funkcjonalność przesyłania filmów

**Status:** ⏳ Planowane

**Do zaimplementowania:**

- Upload wideo z frontendu
- Walidacja formatów (MP4, AVI, MOV)
- Progress bar podczas uploadu
- Chunked upload dla dużych plików
- Przechowywanie w Azure Storage

#### 🚀 12.10.2025: Hostowanie modelu ML jako mikroserwis

**Status:** ⏳ Planowane

**Architektura mikroserwisu:**

- Odseparowanie modelu od głównego backendu
- REST/gRPC API dla predykcji
- Konteneryzacja w Dockerze
- Deploy na Azure
- Load balancing i autoscaling

#### 🔗 15.10.2025: Kluczowa integracja - Backend ↔ ML ↔ Frontend

**Status:** ⏳ Planowane

**Pełny pipeline:**

1. Frontend wysyła wideo do Backendu
2. Backend przekazuje do ML Service
3. ML Service przetwarza i analizuje
4. Wyniki wracają do Backendu
5. Backend zapisuje w bazie
6. Frontend otrzymuje i wyświetla wynik

**Krytyczne testy:**

- End-to-end flow
- Handling timeoutów
- Concurrent requests
- Error handling na każdym etapie

#### 🎯 18.10.2025: Przetrenowanie na prawdziwych danych

**Status:** ⏳ Planowane

**Transfer learning:**

- Fine-tuning na rzeczywistych nagraniach larw
- Porównanie z wynikami na danych syntetycznych
- Walidacja poprawy accuracy
- A/B testing starych vs nowych wag
- Dokumentacja zmian w performance

#### 🧪 31.10.2025: Testy końcowe i optymalizacja

**Status:** ⏳ Planowane

**Obszary testowania:**

1. **Frontend**

   - UI/UX testing
   - Cross-platform compatibility
   - Responsive design
   - Accessibility

2. **Backend**

   - Load testing
   - Security audit
   - API performance
   - Database optimization

3. **API**

   - Integration tests
   - Contract testing
   - Documentation completeness

4. **Całość systemu**
   - End-to-end scenarios
   - Performance benchmarking
   - Stress testing
   - Security penetration testing

**Optymalizacje:**

- Database indexes
- Query optimization
- Caching strategies
- CDN setup
- Code refactoring

---

## 📊 Metryki sukcesu projektu

### Wydajność techniczna

- ⏱️ Czas analizy pojedynczej próbki: **< 20 minut**
- 🎯 Accuracy modelu ML: **> 85%**
- 🚀 Czas odpowiedzi API: **< 2 sekundy**
- 💾 Obsługa równoczesnych użytkowników: **> 10**

### Funkcjonalność

- ✅ Pełny workflow od uploadu do wyniku
- ✅ Wieloplatformowy interfejs użytkownika
- ✅ Bezpieczne uwierzytelnianie i autoryzacja
- ✅ Dokumentacja API i użytkownika

### Jakość

- 🧪 Pokrycie testami: **> 70%**
- 🐛 Zero critical bugs w produkcji
- 📖 Pełna dokumentacja techniczna
- 🔒 Compliance z wymogami bezpieczeństwa

---

## 🎯 Aktualny status (7 października 2025)

### ✅ Zakończone

- Infrastruktura projektu
- System uwierzytelniania
- Podstawowy interfejs użytkownika
- Modele bazodanowe i API
- Symulacja Unity (v1.1.0)
- Pierwszy model ML wytrenowany
- Połączenie Frontend-Backend

### 🔄 W trakcie

- Optymalizacja wag modelu ML
- Połączenie ML Service z Backendem
- Implementacja upload funkcjonalności

### ⏳ Nadchodzące (do 31.10)

- Hostowanie ML jako mikroserwis
- Pełna integracja wszystkich komponentów
- Trenowanie na danych rzeczywistych
- Testy końcowe i optymalizacja
- Deployment produkcyjny

---

## 🚧 Ryzyka i mitigation

### Zidentyfikowane ryzyka

1. **Opóźnienie w dostawie prawdziwych danych**

   - _Mitigation:_ Użycie danych syntetycznych z Unity

2. **Wydajność modelu ML w produkcji**

   - _Mitigation:_ Optymalizacja, quantization, caching

3. **Integracja komponentów**

   - _Mitigation:_ Wczesne testy integracyjne, jasne API contracts

4. **Skalowalność systemu**
   - _Mitigation:_ Architektura mikroserwisowa, cloud autoscaling

---

## 📈 Następne kroki (najbliższe 2 tygodnie)

1. **8-9 października:** Implementacja upload wideo
2. **10-12 października:** Deploy ML jako mikroserwis
3. **13-15 października:** Integracja końcowa
4. **16-18 października:** Trenowanie na prawdziwych danych
5. **19-31 października:** Testy i optymalizacja finalna

---

Roadmapa jest żywym dokumentem i może być aktualizowana w odpowiedzi na pojawiające się wyzwania i możliwości w trakcie realizacji projektu.
