---
title: Stack technologiczny
description: Technologie i narzędzia wykorzystywane w projekcie LarvixON
---

System LarvixON wykorzystuje szeroki zestaw nowoczesnych technologii, od obliczeń wysokowydajnościowych i uczenia maszynowego po wieloplatformowe aplikacje webowe i mobilne.

---

## Infrastruktura

### Wrocławskie Centrum Sieciowo-Superkomputerowe (WCSS)

Rola: zasoby obliczeniowe dla intensywnych obciążeń

Przypadki użycia:

- Analiza danych wideo na dużą skalę
- Trenowanie modeli uczenia maszynowego
- Przeprowadzanie eksperymentów badawczych
- Testy wydajnościowe
- Równoległe przetwarzanie wielu próbek

Korzyści:

- Dostęp do zasobów obliczeń wysokowydajnościowych (HPC)
- Znaczące przyspieszenie treningu modeli
- Możliwość eksperymentowania z większymi zestawami danych

---

## Python - rdzeń ML

### Podstawowa rola

Python jest głównym językiem wykorzystywanym w częściach backendowych i ML projektu.

### Obszary zastosowania

1. Przetwarzanie danych

   - Analiza danych o ruchu larw
   - Wstępne przetwarzanie wideo
   - Czyszczenie i normalizacja danych

2. Ekstrakcja cech

   - Identyfikacja wzorców behawioralnych
   - Inżynieria cech
   - Analiza statystyczna

3. Uczenie maszynowe

   - Implementacja modeli klasyfikacyjnych
   - Trenowanie i walidacja
   - Optymalizacja hiperparametrów

### Biblioteki Python

- NumPy — operacje na tablicach i obliczenia numeryczne
- pandas — manipulacja i analiza danych tabelarycznych
- scikit-learn — klasyczne algorytmy uczenia maszynowego
- PyTorch — głębokie uczenie i sieci neuronowe
- OpenCV — przetwarzanie obrazu i wideo
- Matplotlib / Seaborn — wizualizacja danych

---

## Backend — Django

### Framework Django

Typ: pełnofunkcyjny, wysokopoziomowy framework webowy Python

Charakterystyka:

- Skalowalny
- Bezpieczny
- Wiele funkcji od razu dostępnych

### Odpowiedzialności backendu

1. Zarządzanie danymi

   - Przechowywanie wyników analiz
   - Zarządzanie metadanymi eksperymentalnymi
   - Prowadzenie historii próbek i pacjentów

2. Logika biznesowa

   - Przepływ pracy analizy próbek
   - Zarządzanie użytkownikami i uprawnieniami
   - Integracja z modelami ML

3. REST API

   - Komunikacja z frontendem
   - Endpointy do przesyłania wideo
   - Zwracanie wyników predykcji

### Funkcje

- Uwierzytelnianie i autoryzacja
  - Logowanie i rejestracja
  - Uwierzytelnianie wieloskładnikowe (MFA)
  - Google OAuth
- Django REST Framework
  - Budowanie RESTful API
  - Serializacja
  - Walidacja żądań

---

## Dokumentacja API — Swagger (OpenAPI 2.0)

### OpenAPI 2.0 (Swagger)

Funkcje:

- Automatyczna dokumentacja API
- Wizualizacja endpointów
- Interaktywne testowanie API
- Poprawia współpracę frontend-backend

Korzyści:

- Przejrzysty przegląd dostępnych operacji
- Umożliwia testowanie bez zewnętrznych narzędzi
- Standaryzuje komunikację między zespołami

---

## Frontend — Flutter

### Flutter (Dart)

Zestaw narzędzi UI Google do tworzenia aplikacji natywnych.

### Cele wieloplatformowe

Jeden kod bazowy obsługuje:

- Web
- Linux (desktop)
- macOS (desktop)
- Windows (desktop)
- Android
- iOS

### Funkcje interfejsu

1. Panel logowania i rejestracji

   - Bezpieczne uwierzytelnianie
   - Integracja z Google OAuth
   - Wsparcie MFA

2. Strona docelowa

   - Przegląd projektu
   - Przejrzysta nawigacja

3. Panel użytkownika

   - Dashboard z historią analiz
   - Zarządzanie próbkami
   - Podgląd wyników

4. Przesyłanie wideo

   - Przesyłanie nagrań larw
   - Pasek postępu
   - Walidacja formatu

5. Prezentacja wyników
   - Wizualizacja predykcji
   - Interpretacja wyników
   - Eksport raportów

### Zalety Flutter

- Szybki rozwój dzięki hot reload
- UI wyglądający natywnie
- Wysoka wydajność
- Jeden kod bazowy dla wielu platform

---

## Symulacja — Unity

### Silnik Unity

Cel: generowanie syntetycznych danych treningowych

### Funkcje symulacji

1. Modelowanie zachowania larw

   - Symulacja naturalnego ruchu
   - Reakcje na bodźce toksyczne
   - Realistyczne wzorce behawioralne

2. Generowanie danych

   - Tworzenie zróżnicowanych scenariuszy
   - Kontrolowane warunki eksperymentalne
   - Duże zestawy danych bez kosztów biologicznych

Znaczenie dla projektu:

- Uzupełnia ograniczone dane rzeczywiste
- Umożliwia testowanie różnych scenariuszy
- Augmentuje zestaw treningowy

---

## Adnotacje danych — Roboflow

### Roboflow

Platforma do zarządzania danymi wizualnymi i adnotacjami.

### Przypadki użycia

- Adnotacje danych wideo
- Oznaczanie obiektów (larw) na klatkach
- Przygotowywanie zestawów treningowych dla modeli detekcji
- Śledzenie ruchu larw

### Proces

1. Przesyłanie wideo
2. Manualne adnotowanie larw
3. Eksport w formatach ML TODO
4. Integracja z pipeline'em treningowym

---

## Baza danych — PostgreSQL

### PostgreSQL

Relacyjna baza danych open-source.

### Przechowywane dane

1. Wyniki analiz

   - Predykcje modelu ML
   - Wyniki prawdopodobieństwa
   - Znaczniki czasu analiz

2. Metadane eksperymentalne

   - Informacje o próbkach
   - Parametry eksperymentalne
   - Warunki testów

3. Dane użytkowników

   - Profile klinicystów / personelu laboratoryjnego
   - Historia aktywności
   - Uprawnienia dostępu

4. Historia analiz
   - Pełny dziennik audytu
   - Możliwość weryfikacji przeszłych wyników

### Zalety PostgreSQL

- Zgodność z ACID — niezawodne transakcje
- Zaawansowane typy danych (JSON, tablice)
- Skalowalność
- Bogate funkcje analityczne
- Doskonała integracja z Django

---

## Konteneryzacja — Docker

### Docker

Platforma do konteneryzacji aplikacji.

### Architektura kontenerów

System LarvixON składa się z oddzielnych kontenerów:

1. Kontener backendu (Django)
2. Kontener frontendu (build web Flutter)
3. Kontener bazy danych (PostgreSQL)
4. Kontener usługi ML (Python + model)

### Korzyści

- Izolacja — każdy komponent działa we własnym środowisku
- Przenośność — działa tak samo na różnych maszynach
- Spójność — identyczne środowiska dev i produkcyjne
- Łatwe wdrożenie — `docker-compose up`
- Skalowalność — skalowanie poszczególnych usług według potrzeb

---

## Hosting w chmurze — TODO

Platforma chmurowa TODO do hostingu aplikacji i usług.

### Wykorzystywane usługi

1. Obliczenia

   - Maszyny wirtualne lub App Services
   - Hosting backendu i frontendu
   - Możliwości auto-skalowania

2. Pamięć masowa

   - Przechowywanie wideo
   - Kopie zapasowe bazy danych
   - Archiwizacja wyników

### Zalety TODO

- Wysoka dostępność — solidne gwarancje czasu pracy
- Skalowalność — elastyczne zasoby
- Bezpieczeństwo — zgodność ze standardami medycznymi
- Globalna infrastruktura — niskie opóźnienia
- Bogaty ekosystem integracji

---

## Integracja komponentów

### Architektura systemu

TODO: a graphic representation

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
       └──→ Usługa ML (predykcje)
                ↓
          WCSS (trenowanie)
```

### Przepływ danych

1. Użytkownik przesyła wideo (Flutter)
2. Backend odbiera i waliduje przesłanie (Django)
3. Wideo jest przekazywane do Usługi ML
4. Model analizuje wideo i zwraca predykcję
5. Wynik jest zapisywany w bazie danych (PostgreSQL)
6. Wynik jest wyświetlany użytkownikowi (Flutter)

---

## Narzędzia deweloperskie

### Kontrola wersji

- Git — system kontroli wersji
- **GitHub** — hosting repozytoriów

### CI/CD

- **GitHub Actions** — narzędzia CI/CD
- Automatyczne testy
- Pipeline'y wdrożeniowe

### Testowanie

- **pytest** — testy backendu
- **flutter test** — testy frontendu
- Testy integracyjne — testowanie end-to-end

---

## Podsumowanie stacku technologicznego

| Warstwa      | Technologia     | Cel                     |
| ------------ | --------------- | ----------------------- |
| Obliczenia   | WCSS            | Trenowanie ML           |
| ML / AI      | Python, PyTorch | Modele klasyfikacyjne   |
| Backend      | Django, DRF     | API i logika biznesowa  |
| Frontend     | Flutter         | UI wieloplatformowe     |
| Baza danych  | PostgreSQL      | Przechowywanie danych   |
| Symulacja    | Unity           | Dane syntetyczne        |
| Adnotacje    | Roboflow        | Przygotowanie danych    |
| Kontenery    | Docker          | Izolacja i dostarczanie |
| Chmura       | Azure           | Hosting i skalowalność  |
| Dokumentacja | Swagger 2       | Dokumentacja API        |

---

Ten zróżnicowany stack technologiczny umożliwia budowę kompleksowego, skalowalnego i niezawodnego systemu diagnostycznego, który łączy nowoczesne osiągnięcia w ML, obliczeniach chmurowych i tworzeniu aplikacji wieloplatformowych.
