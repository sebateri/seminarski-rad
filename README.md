# Seminarski rad - Sebastian Terihaj

## Opis zadatka 

Zadatak je napisati web chat aplikaciju. Tehnologije za izdradu aplikacije su proizvoljne, važno je samo da je s izabranim tehnologijama moguće ostvariti sve uvjete funkcionalne specifikacije.

## Funkcionalna specifikacija

Kreirano je funkcionalno korisničko sučelje za sudionike u chatu i kreirani kod je postavljen na GitHub.

Navedena chat aplikacija:

- može kreirati nove tekstualne poruke;
- na enter ili klik na button "send" šalje poruku (prikazana na ekranu uz ime autora);
- za svakog sudionika u chatu selektirana je neka slučajna boja i ime kojih ih identificira;
- povezana je sa Scaledrone servisom te uspješno simulira razgovor svih aktivnih korisnika;
- dostupna je preko javnog GitHub računa

## Korišteni alati

- Visual Studio Code
- Google Chrome
- ReactJS
- Node.js
- Scaledrone

## Objašnjenja korištenih metoda

U sastavnim komponentama aplikacije se nalaze objašnjenja korištenih metoda i postupaka u obliku komentara pored ili ispod linije koda.

To se odnosi na slijedeće komponentne:

- random-color.js (/src/helpers)
- random-name.js (/src/helpers)
- App.js (/src)
- Input.js (/src)
- Messages.js (/src)

## Incijalizacija aplikacije

Potrebno je za putanju (path) postaviti lokaciju aplikacije te potom u konzolu napisati naredbu "npm start"