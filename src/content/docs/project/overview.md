---
title: Opis projektu
description: Szczegółowy opis systemu LarvixON AI - cele, zakres i metodologia
---

## Informacje podstawowe

**Politechnika Wrocławska**  
**Wydział Informatyki i Telekomunikacji**  
Kierunek: IST  
**Zespołowe Przedsięwzięcie Informatyczne**

**Tytuł:** System LarvixON AI – szybka diagnostyka toksyczności osocza z wykorzystaniem analizy behawioralnej larw i algorytmów uczenia maszynowego

**Opiekun pracy:** dr inż. Natalia Piórkowska

**Rok:** 2025

---

## 1. Syntetyczny opis projektu

### Cel projektu

Celem projektu jest opracowanie **szybkiego systemu diagnostycznego opartego na sztucznej inteligencji**, umożliwiającego wykrywanie ksenobiotyków w osoczu pacjentów. System ten ma analizować wzorce ruchowe larw _Galleria mellonella_, którym podano próbki osocza, w celu identyfikacji charakterystycznych reakcji organizmu na toksyczne substancje.

### Kluczowe założenia

- ⏱️ **Czas analizy:** nieprzekraczający 20 minut
- 🎯 **Wysoka czułość i specyficzność** klasyfikacji
- 🔬 **Rozpoznawanie subtelnych zmian** w motoryce larw
- 💊 **Detekcja:** leków, narkotyków, toksyn lub patogenów

### Cel ostateczny

Wdrożenie nowatorskiej metody diagnostycznej, która przyczyni się do:

- Poprawy skuteczności leczenia
- Skrócenia czasu interwencji medycznej w stanach zagrożenia życia
- Szybkiej identyfikacji substancji toksycznych w organizmie pacjenta

---

## 2. Zakres projektu

Projekt obejmuje dwa równoległe nurty działania:

### A. Część badawcza - Algorytmy uczenia maszynowego

Koncentruje się na:

1. **Analizie danych ruchowych** larw _Galleria mellonella_

   - Przetwarzanie danych wideo z obserwacji larw
   - Tracking ruchu i zachowania

2. **Ekstrakcji cech behawioralnych**

   - Identyfikacja charakterystycznych wzorców ruchowych
   - Analiza zmian w motoryce związanych z ekspozycją na toksyny

3. **Trenowaniu modeli klasyfikacyjnych**
   - Rozwój algorytmów uczenia maszynowego
   - Optymalizacja pod kątem czułości i specyficzności
   - Walidacja na danych rzeczywistych i syntetycznych

### B. Część inżynierska - Aplikacja diagnostyczna

Opracowanie kompletnej aplikacji wspierającej kliniczne wykorzystanie systemu:

#### Pipeline systemu

1. **Wczytanie danych wideo** - import nagrań z analizowanymi larwami
2. **Analiza** - automatyczne przetwarzanie przez algorytmy ML
3. **Predykcja** - klasyfikacja obecności ksenobiotyków
4. **Prezentacja wyniku** - przejrzysty interfejs dla użytkownika

#### Interfejs użytkownika

- Prosty interfejs graficzny
- Dedykowany dla lekarzy i laborantów
- Przeprowadzenie analizy w czasie rzeczywistym
- Szybkie uzyskanie wyniku diagnostycznego

### C. Symulacja i generacja danych

Dodatkowy komponent projektu:

- Prosta **symulacja larw w Unity**
- Generowanie **syntetycznych danych** dla modelu ML
- Wsparcie procesu trenowania w przypadku ograniczonej dostępności danych rzeczywistych

---

## 3. Metodologia

### Testowanie systemu

System zostanie przetestowany pod kątem:

1. **Wydajności**

   - Czas przetwarzania pojedynczej próbki
   - Optymalizacja wykorzystania zasobów obliczeniowych

2. **Dokładności predykcji**

   - Czułość (sensitivity) - wykrywanie prawdziwie pozytywnych przypadków
   - Specyficzność (specificity) - unikanie fałszywych alarmów
   - Precyzja klasyfikacji różnych typów ksenobiotyków

3. **Użyteczności klinicznej**
   - Intuicyjność interfejsu
   - Integracja z workflow laboratorium/szpitala
   - Czas wymagany na przeprowadzenie pełnej analizy

---

## Model organizmu modelowego

### Dlaczego _Galleria mellonella_?

Larwy _Galleria mellonella_ (barczatki większej) są szeroko wykorzystywane w badaniach toksykologicznych ze względu na:

- ✅ Prostotę hodowli i niski koszt
- ✅ Dobrze poznany układ odpornościowy
- ✅ Wykrywalne zmiany behawioralne w odpowiedzi na substancje toksyczne
- ✅ Akceptowalne alternatywne modele przed testami na kręgowcach
- ✅ Krótki czas reakcji na bodźce chemiczne

---

## Innowacyjność

System LarvixON AI wprowadza nowatorskie podejście poprzez:

1. **Kombinację biologii i AI** - wykorzystanie organizmów modelowych w połączeniu z zaawansowanymi algorytmami
2. **Szybkość diagnostyki** - wyniki w czasie nieprzekraczającym 20 minut
3. **Nieinwazyjność** - analiza próbki osocza zamiast bardziej inwazyjnych metod
4. **Automatyzacja** - zmniejszenie obciążenia personelu medycznego
5. **Skalowalność** - możliwość równoległego przetwarzania wielu próbek
