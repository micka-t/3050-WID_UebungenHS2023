//  Übung Lektion 1

// Gegeben ist ein folgendes Array:

const einkaufswagen = [
    {
      id: 1,
      name: "Die unendliche Geschichte - Buch",
      aufLager: true,
      lieferZeitTage: 1,
      menge: 3,
      preis: "12.99€",
      hersteller: {
        name: "BookSales",
        rating: 3,
      },
    },
    {
      id: 2,
      name: "The Beatles - Abbey Road CD",
      aufLager: false,
      lieferZeitTage: 4,
      menge: 1,
      preis: "14.80€",
      hersteller: {
        name: "CDSales",
        rating: 5,
      },
    },
    {
      id: 3,
      name: "Harry Potter und der Stein der Weisen - Blu-ray",
      aufLager: true,
      lieferZeitTage: 2,
      menge: 2,
      preis: "18.50€",
      hersteller: {
        name: "BookSales",
        rating: "",
      },
    },
    {
      id: 4,
      name: "Kindle Paperwhite",
      aufLager: true,
      lieferZeitTage: 1,
      menge: 1,
      preis: "119.99€",
      hersteller: {
        name: "Amazon",
        rating: 3,
      },
    },
    {
      id: 5,
      name: "Sony WH-1000XM4 Kopfhörer",
      aufLager: false,
      lieferZeitTage: 7,
      menge: 1,
      preis: "279.90€",
      hersteller: {
        name: "Sony",
        rating: 4,
      },
    },
  ];
  
  // AUFGABE 1
  // ---------
  // - Gib die Namen aller Artikel im Einkaufswagen aus.
  console.log("Aufgabe 1")

  const artikelNamen = einkaufswagen.map((artikel) => artikel.name);
  console.log("Namen aller Artikel im Einkaufswagen:", artikelNamen);
  // - Berechne den Gesamtbetrag des Einkaufswagens. (Hinweis: Achte auf den Datentyp der Preise!)
  let total = 0
  for (let i = 0; i < einkaufswagen.length; i ++) {
    total += Number(einkaufswagen[i].preis.replace("€", "")) * einkaufswagen[i].menge
  };
  console.log(total);

  
  // (_Hinweis_: `preisString.replace("€", "")` kann in eine Zahl konvertiert werden)
  
  // AUFGABE 2
  // ---------
  // - Finde alle Artikel, die auf Lager (`aufLager: true`) sind.
  console.log("")
  console.log("Aufgabe 2")

  let verfugbar = ""
  for (let i = 0; i < einkaufswagen.length; i ++) {
    if (einkaufswagen[i].aufLager == true) {
      verfugbar += String(einkaufswagen[i].name) + ", ";
    } else {}
  }
  console.log("Alle verfügbaren Artikel:", verfugbar)
  // - Zeige die Artikel an, die länger als 3 Tage Lieferzeit benötigen.

  let lieferdauer = ""
  for (let i = 0; i < einkaufswagen.length; i ++) {
    if (einkaufswagen[i].lieferZeitTage < 3) {
    } else {
      lieferdauer += String(einkaufswagen[i].name) + ", ";
    }
    }
    console.log("Artikel mit einer Lieferzeit meher als 3 Tage:", lieferdauer)
  // AUFGABE 3
  // ---------
  // - Erstelle eine Liste aller Hersteller-Namen aus dem Einkaufswagen.
  console.log("")
  console.log("Aufgabe 3")

  let Hersteller = []
  for (let i = 0; i < einkaufswagen.length; i ++) {
    Hersteller += String(einkaufswagen[i].hersteller.name) + ", "
  }
  console.log("Hersteller der Produkte:", Hersteller)
  // - Finde alle Artikel von dem Hersteller "BookSales".

  let BestHersteller = ""
  for (let i = 0; i < einkaufswagen.length; i ++) {
    if (einkaufswagen[i].hersteller.name == "BookSales") {
      BestHersteller += String(einkaufswagen[i].name) + ", "
    } else {}
  }
    console.log("Artikel von BookSales:", BestHersteller)


  // - Bonus: verwende Objekt-Zerlegung (Destructuring)
  
  // AUFGABE 4
  // ---------
  console.log("")
  console.log("Aufgabe 4")
  
  // - Verwende die `map` Methode, um einen neuen Array zu erstellen, der nur die Namen und Preise der Artikel enthält.
  const result = einkaufswagen.map((elem) =>({
    name: elem.name,
    preis: elem.preis,
  }));
  console.log(result);
  
  
  // - Verwende die `filter` Methode, um alle Artikel herauszufiltern, die mehr als 100€ kosten.
  const result2 = einkaufswagen.filter((elem) => {
    const preis2 = Number(elem.preis.replace("€", ""));
    return preis2 > 100;
  });
  console.log(result2);
  // - Erstelle eine Funktion, die den durchschnittlichen Preis der Artikel im Einkaufswagen berechnet (For-Schleife).
  gesamtbetrag = 0
for ( let i=0; i < einkaufswagen.length; i++){
    preis2 = Number(einkaufswagen[i].preis.replace("€", ""))
    gesamtbetrag = preis2 + gesamtbetrag
}
duchschnitt = gesamtbetrag/einkaufswagen.length
console.log(duchschnitt);