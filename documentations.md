# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Szymon Michałowski,Jakub Gutowski
**Klasa:** 3 Technikum
**Data:** [02.03.2026]

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
*Wybór wynajmowanego pojazdu
* Wybór ilości godzin (1-8)
* Przy żaglówce okazanie patentu
* Dodatkowa opcja kapoka dla dziecka oraz możliwośc dokupienia intruktora(dodatkowo płatne)
* Wybór opcji płatności
* Akceptacja regulaminu



---
## 2. Architektura rozwiązania


---
## 3. Zarządzanie stanem (`useState`)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
| name | string | Przechowuje imię klienta |
|sprzet | string | Pobiera pojazd wybrany przez klienta |
|godziny |number | Przechowje ilość godzin wybranych przez klienta |
|czyKapok | bool | czy dobierany jest kapok |
| czyInstruktor | bool| czy dobierany jest instruktor |

---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

* **Cena bazowa:** Cena bazowa
* **Wpływ godzin:** Ilość godzin mnoży sumę przez ilość godzin
* **Opcje dodatkowe:** po przemnożeniu sumy dodajemy koszt kapoka
i jeśli wybieramy instruktora to mnożymi ilość godzin razy 50 i dodajemy do sumy
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: ...` - (opis zastosowania)
2. `...` - (opis zastosowania)
3. `...` - (opis zastosowania)
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** [WPISZ TUTAJ]
* **Czego nowego się nauczyliście?** [WPISZ TUTAJ]
* **Co byście zmienili, gdybyście mieli więcej czasu?** [WPISZ TUTAJ]
---
## 7. Checklisty (Zaznacz [x])
- [ ] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [ ] Pull Requesty zostały zaakceptowane przez partnera.
