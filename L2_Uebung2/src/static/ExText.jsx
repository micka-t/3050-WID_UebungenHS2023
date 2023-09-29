export const Aufgabe1 = () => (
  <div className="Exercise">
    <h2>Aufgabe 1: Button-Stile</h2>
    <p>
      1.1) Das generische Button-Element hat keinen zugeordneten Stil. Ergänze
      das "style"-Attribut (Inline CSS). Dieses erwartet ein Objekt mit CSS
      Deklarationen. Füge die folgenden Eigenschaften hinzu:
      <ul>
        <li>Der Button soll 30 Pixel hoch und 100 Pixel breit sein</li>
        <li>
          Füge einen Rahmen hinzu, welche 1 Pixel stark ist und eine
          gestrichelte Linie in blauer Farbe hat.
        </li>
        <li>
          Gib dem Button eine weisse Hintergrundfarbe. Bestimme für die
          Schriftfarbe einen (beliebigen) Hexcode mit einem "Color Picker" aus
          dem Internet.
        </li>
        <li>Die Schrift des Buttons soll fett sein und vom Typ Arial sein</li>
        <li>
          Klickbare Elemente werden gegenüber den User auch dadurch deutlich
          gemacht, dass sich der Mauszeiger verändert. Finde die dafür
          verantwortliche Eigenschaft in einer CSS Referenz und wähle einen
          passenden Wert. Warum hast du dich für diesen entschieden? Verändert
          sich der Mauszeiger, wenn er über den Button bewegt wird?
        </li>
      </ul>
    </p>
    <p>
      1.2) Ändere den Text des Buttons, sodass dieser "Klick mich" als Inhalt
      hat.
    </p>
    <p>
      1.3) Dupliziere deinen Button und entferne das style-Attribut. Dieser soll
      nun über einen CSS Selektor Stile erhalten. Lege dazu eine neue Datei
      "Style.css" im "src"-Ordner an und importiere diese in App.jsx.
    </p>
    <p>
      1.4) Welchen Selektor würdest du verwenden, wenn a) alle Buttons b) einige
      Buttons c) nur dieser Button die Stile erhalten sollten? Wähle den
      Selektor für c) und implementiere diesen (im Element und in der CSS
      Datei). Repliziere dann die Stile aus 1.1 im Deklarationsblock des
      Selektors. Gleichen sich die beiden Buttons im Aussehen?
    </p>
    <p>
      1.5) Welchen Selektor würdest du verwenden, wenn a) alle Buttons b) einige
      Buttons c) nur dieser Button die Stile erhalten sollten? Wähle den
      Selektor für c) und implementiere diesen (im Element und in der CSS
      Datei.)
    </p>
    <p>
      1.6) Wir hatten das Style Attribut entfernt. Was würde passieren, wenn wir
      es wieder hinzufügen und dort a) eine Schriftgrösse von 20px definieren b)
      die Hintergrundfarbe auf "rot" setzen. Welche Farbe wird der Button haben
      - weiss oder rot? Überprüfe deine Annahme, indem du das Style-Attribut
      wieder hinzufügst sowie a) und b) implementierst. Warum kommt es zu diesem
      Ergebnis?
    </p>
  </div>
);
export const Aufgabe2 = () => (
  <div className="Exercise">
    <h2>Aufgabe 2: Flexbox</h2>
    <p>
      2.1) Lege 3 div-Kinderelemente für das Element mit der id "Elternelement"
      an
    </p>
    <p>
      2.2) Kinderelemente sollen 40px hoch und 60px breit sein sowie einen
      schwarzen Rahmen (1px, durchgezogene Linie) haben. Das erste Kind soll
      eine rote, das zweite eine blaue, das dritte eine grüne Hintergrundfarbe
      haben. Füge der Style.css aus Aufgabe 1 entsprechende Selektoren und
      Deklarationen hinzu. Welche Selektoren werden gebraucht?
    </p>
    <p>
      2.3) Wie werden die drei farbigen Elemente angezeigt? Warum in dieser
      Anordnung? Füge als weiteres Kind noch ein span-Element hinzu (unter
      Kind3) und kopiere die Attribute von Kind3 in das span-Element. Das
      Element soll zudem den Text "span" bekommen. Wie wird das Element mit und
      ohne Text dargestellt? Was unterscheidet es von den div-Elementen?
    </p>
    <p>
      2.4) Die vier Kinder sollen auf einer Zeile dargestellt werden. Benutze
      dazu Flex-Box Deklarationen auf dem Elternelement.
    </p>
    <p>
      2.5) Definiere die Breite des Elements mit 500px. Füge die
      "justify-content" Eigenschaft hinzu und probiere die Werte "left",
      "right", "center", "space-between" und "space-around" aus. Wie verändert
      sich die Positionierung?
    </p>
  </div>
);
