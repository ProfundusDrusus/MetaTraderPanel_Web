
<a href="../.." title="MetaTrader-Panel" aria-label="MetaTrader-Panel">
<svg class="mobile_only" width="60" height="60" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" fill="none" r="12" stroke="#1750AC" stroke-width="3">
	<animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite"/>
	<animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
  </circle>
  <circle cx="20" cy="20" fill="#3373C4" r="13"/>
  <circle cx="20" cy="20" fill="#5494DA" r="12"/>
  <circle cx="20" cy="20" fill="#1750AC" r="8"/>
  <circle cx="20" cy="20" fill="#F5F5F5" r="7"/>
</svg>
</a>
 
# FIBONACCI QUESTIONS
<p id="com-faq"></p>
### Common	 	 
	
??? note "What is a Fibonacci swing and what is a Fibonacci level?"

    A “Fibonacci swing” is based on the highest and lowest points of a price movement. These points are referred to as the “swing high” (high point) and “swing low” (low point). A swing is used to identify potential support and resistance levels in the price movement of an instrument.  
	
	The Fibonacci sequence is a mathematical series in which each number is the sum of the two preceding numbers.
	Ratios can be derived from this sequence, which serve as the basis for Fibonacci levels. These ratios (e.g., 61.8%), also known as levels or retracements, are applied to a previous price range to create horizontal lines on the chart.  
	
	The MetaTrader panel provides you with more than 20 different Fibonacci levels.
	
	
??? note "How do I use Fibonacci levels for my trading?"

    Unfortunately, this question cannot be answered in a few sentences, but you can find a good introduction to the topic
	combined with a real-world example at, for example [__here__](https://www.investopedia.com/terms/f/fibonacciretracement.asp), [__here__]( https://www.investopedia.com/articles/active-trading/091114/strategies-trading-fibonacci-retracements.asp) or
	 [__here__](https://www.dukascopy.com/swiss/english/marketwatch/articles/fibonacci-trading-strategy/#:~:text=Fibonacci%20retracement%20levels%20are%20plotted,opportunity%20to%20plan%20your%20moves.).

	
??? note "What are the differences between MT5 Fibonacci and MetaTrader Panel Fibonacci?"

    Below you will find a table showing the differences between the various methods.
	
	| SUBJECT            | MT5                           | MetaTrader-Panel                          |
	| :----------     | :----------------------------------- :|:-----------------------------------: |
	| __`Draw levels without data`__     | No  |Yes  |
	| __`Slect levels as desired`__     | No  |Yes  |
	| __`External storage`__       | No |Yes  |
	| __`Flawless`__         | No |Yes |
	| __`Smart levels`__         | No |Yes |  
	
	For more information on how to configure the Fibonacci module, see [__here__](../features/fibonacci.md).

<br>
	
### Levels	


??? note "What is the Distance setting and how do I use it?"

    The __`Distance`__ setting calculates a range in which the retracements are drawn based on the specified value. This is easiest to explain with an example. Let's assume that the DAX is at 23500 and you use a Distance setting of 2000. This results in a range from 25500 to 22000. If you now draw retracements, the algorithm checks which levels are in this range
	and only draws these levels.
	 

??? note "How do I prevent my entire chart from being covered with Fibonacci levels?"

    Instead of MT5 Fibonacci, use the __`Better Fibo`__ feature in the MetaTrader panel.
	This allows you to draw only the retracements you need at any given time and keeps your chart clear.
	 
	 
??? note "Why are retracements not drawn?"

    You have probably selected the __`Distance`__ setting too small and there are no retracements in the calculated range. Simply enlarge the range by increasing the value and let the levels redraw.
	
??? note "I want to change the data for a swing. Is that possible?"

    Yes, of course. Simply select the corresponding swing in the Fibonacci dialog box in the MetaTrader panel and adjust the existing values. Then simply redraw the retracement levels in the MT5 chart.
	

??? note "Can I configure which levels are drawn?"

    Yes, of course. You can specify individually for each instrument which levels should be drawn.

<br>

<br>
<br>	
<br>
<br>
<br>
<br>
<br>