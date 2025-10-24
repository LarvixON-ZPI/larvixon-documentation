---
title: Przegląd projektu
description: Szczegółowy opis systemu LarvixON - cele, zakres i metodologia
---

## Informacje podstawowe

**Politechnika Wrocławska**  
**Wydział Informatyki i Telekomunikacji**  
Kierunek: IST  
**Projekt zespołowy**

**Tytuł:** System LarvixON – szybka diagnostyka toksyczności plazmy wykorzystująca analizę behawioralną larw i algorytmy uczenia maszynowego

**Promotor:** dr inż. Natalia Piórkowska

**Rok:** 2025

---

## 1. Syntetyczny opis projektu

### Cel projektu

Celem projektu jest opracowanie szybkiego systemu diagnostycznego opartego na sztucznej inteligencji, który wykrywa ksenobiotyki w plazmie pacjenta. System analizuje wzorce ruchu larw Galleria mellonella eksponowanych na próbki plazmy w celu identyfikacji charakterystycznych reakcji organizmu na substancje toksyczne.

### Kluczowe założenia

- Czas analizy: nieprzekraczający 20 minut
- Wysoka czułość i specyficzność klasyfikacji
- Wykrywanie subtelnych zmian w ruchliwości larw
- Wykrywanie leków, narkotyków, toksyn lub patogenów

### Cel ostateczny

Wdrożenie innowacyjnej metody diagnostycznej, która przyczynia się do:

- Poprawy skuteczności leczenia
- Skrócenia czasu do interwencji medycznej w sytuacjach zagrożenia życia
- Szybkiej identyfikacji substancji toksycznych w organizmie pacjenta

---

## 2. Zakres projektu

Projekt obejmuje dwa równoległe nurty pracy:

### A - Algorytmy uczenia maszynowego

Obszary zainteresowania:

1. Analiza danych o ruchu larw Galleria mellonella

   - Przetwarzanie wstępne nagrań wideo larw
   - Śledzenie ruchu i zachowania

2. Ekstrakcja cech behawioralnych

   - Identyfikacja charakterystycznych wzorców ruchu
   - Analiza zmian ruchliwości związanych z ekspozycją na toksyny

3. Trenowanie modeli klasyfikacyjnych
   - Opracowanie algorytmów uczenia maszynowego
   - Optymalizacja pod kątem czułości i specyficzności
   - Walidacja na danych rzeczywistych i syntetycznych

### B - Aplikacja diagnostyczna

Rozwój kompletnej aplikacji wspierającej kliniczne wykorzystanie systemu:

#### Pipeline systemu

1. Ładowanie danych wideo – import nagrań z larwami
2. Analiza – automatyczne przetwarzanie przez algorytmy ML
3. Predykcja – klasyfikacja obecności ksenobiotyków
4. Prezentacja wyników – przejrzysty interfejs użytkownika

#### Interfejs użytkownika

- Prosty interfejs graficzny
- Przeznaczony dla lekarzy i personelu laboratoryjnego
- Możliwość uruchamiania analiz w czasie zbliżonym do rzeczywistego
- Szybki dostęp do wyników diagnostycznych

### C - Symulacja i generowanie danych

Dodatkowy komponent:

- Prosta symulacja larw w Unity
- Generowanie syntetycznych danych dla modeli ML
- Wsparcie treningu przy ograniczonej ilości rzeczywistych danych

---

## 3. Metodologia

### Testowanie systemu

System będzie testowany pod poniższymi względami:

1. Wydajność

   - Czas przetwarzania pojedynczej próbki
   - Optymalizacja wykorzystania zasobów obliczeniowych

2. Dokładność predykcji

   - Czułość – wykrywanie prawdziwie pozytywnych przypadków
   - Specyficzność – unikanie fałszywych alarmów
   - Precyzja klasyfikacji różnych typów ksenobiotyków

3. Użyteczność kliniczna
   - Intuicyjność interfejsu
   - Integracja z przepływami pracy laboratorium/szpitala
   - Czas wymagany do przeprowadzenia pełnej analizy

---

## Organizm modelowy

### Dlaczego Galleria mellonella?

Larwy Galleria mellonella są szeroko wykorzystywane w badaniach toksykologicznych ze względu na:

- Łatwość hodowli i niski koszt
- Dobrze scharakteryzowany system immunologiczny
- Wykrywalne zmiany behawioralne w odpowiedzi na substancje toksyczne
- Przydatność jako model alternatywny przed testami na kręgowcach
- Krótki czas reakcji na bodźce chemiczne

---

## Innowacyjność

System LarvixON wprowadza innowacyjne podejście poprzez:

1. Łączenie biologii i AI – wykorzystanie organizmów modelowych wraz z zaawansowanymi algorytmami
2. Szybka diagnostyka – wyniki w ciągu 20 minut
3. Nieinwazyjność – analiza plazmy zamiast bardziej inwazyjnych procedur
4. Automatyzacja – zmniejszenie obciążenia pracą personelu medycznego
5. Skalowalność – równoległe przetwarzanie wielu próbek
