 
# FIBONACCI FRAGEN
<p id="com-faq"></p>
### Allgemein	 	 
	
??? note "Was ist ein Fibonacci Swing und was ein Fibonacci Level?"

    Ein "Fibonacci Swing" basiert auf 
	den höchsten und niedrigsten Punkten einer Kursbewegung. Diese Punkte werden als "Swing High" (hoher Punkt) 
	und "Swing Low" (tiefer Punkt) bezeichnet. Ein Swing wird verwendet, 
	um potenzielle Unterstützungs- und Widerstandsniveaus in der Kursbewegung eines Instrumentes zu identifizieren.  
	
	Die Fibonacci-Folge ist eine mathematische Reihe, in der jede Zahl die Summe der beiden vorhergehenden Zahlen ist.
	Aus dieser Folge lassen sich Verhältnisse ableiten, die als Grundlage für die Fibonacci-Levels dienen.
	Diese Verhältnisse (z.B. 61.8%), auch Levels oder Retracements genannt, werden auf einen vorherigen Kursbereich angewendet, um horizontale Linien im Chart zu erzeugen.  
	
	MetaTrader-Panel stellt dir mehr als 20 verschiedene Fibonacci Levels zur Verfügung.
	
	
??? note "Wie nutze ich Fibonacci Levels für mein Trading?"

    Diese Frage lässt sich leider nicht in ein paar Sätzen beantworten, aber einen guten Einstieg in das Thema
	verbunden mit einem Beispiel aus der realen Welt findest du z.B. [__hier__](https://www.investopedia.com/terms/f/fibonacciretracement.asp), [__hier__]( https://www.investopedia.com/articles/active-trading/091114/strategies-trading-fibonacci-retracements.asp) oder
	 [__hier__](https://www.dukascopy.com/swiss/english/marketwatch/articles/fibonacci-trading-strategy/#:~:text=Fibonacci%20retracement%20levels%20are%20plotted,opportunity%20to%20plan%20your%20moves.).

	
??? note "Was sind die Unterschiede zwischen dem MT5 Fibonacci und MetaTrader-Panel Fibonacci?"

    Nachfolgend findest du eine Tabelle die die Unterschiede der verschiedenen Methoden zeigt.
	
	| MODUL            | MT5                           | MetaTrader-Panel                          |
	| :----------     | :----------------------------------- :|:-----------------------------------: |
	| __`Levels ohne Daten zeichnen`__     | Nein  |Ja  |
	| __`Levels beliebig wählbar`__     | Nein  |Ja  |
	| __`Externe Speicherung`__       | Nein |Ja  |
	| __`Fehlerfrei`__         | Nein |Ja |
	| __`Smart Levels`__         | Nein |Ja |  
	
	Mehr Informationen wie du das Fibonaccci Modul konfigurierst, findest du [__hier__](../features/fibonacci.md)

<br>
	
### Levels	


??? note "Was ist die Distance Einstellung und wie nutze ich sie?"

    Die __`Distance`__ Einstellung berechnet auf Basis des vorgegebenen Wertes einen Bereich in dem die Retracements gezeichnet werden.
	Am leichtesten ist das an einem Beispiel erklärt. Wir nehemen an der Dax steht bei 23500 und du nutzt eine Distance Einstellung von 2000.
	Daraus ergibt sich der Bereich 25500 bis 22000. Lässt du jetzt Retracements zeichnen, prüft der Algorithmus welche Levels in diesem Bereich liegen
	und zeichnet auch nur diese Levels.
	 
	 

??? note "Wie verhindere ich, dass mein ganzer Chart mit Fibonacci Levels bedeckt ist?"

    Nutze anstatt des MT5 Fibonacci den 'Better Fibo' des MetaTrader-Panels.
	Das gibt dir die Möglichkeit immer nur die Retracements zeichnen zu lassen die du gerade brauchst und hält deinen Chart frei.
	 
	 
??? note "Warum werden keine Retracements gezeichnet?"

    Du hast wahrscheinlich die __`Distance`__ Einstellung zu klein gewählt und in derm berechneten Bereich gibt es keine Retracements.
	Vergrößere einfach den Bereich in dem du den Wert erhöhst und lasse die Levels neu zeichnen.
	
??? note "Ich will die Daten für einen Swing ändern, geht das?"

    Ja natürlich. Wähle einfach im MetaTrader-Panel Fibonacci Dialog den dementsprechenden Swing aus 
	und passe die vorhandenen Werte an. Danach lässt du die Retracement Levels im MT5 Chart einfach neu zeichnen.
	

??? note "Kann ich konfigurieren welche Levels gezeichnet werden?"

    Ja selbstverständlich. Du kannst individuell für jedes Instrument festlegen welche Levels gezeichnet werden sollen..	

<br>

<br>
<br>	
<br>
<br>
<br>
<br>
<br>