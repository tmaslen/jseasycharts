## Basic Side-by-side chart ##

You can use the API with very minimal settings.  You can create a chart with just a reference to a parent element and an array of values, like so:

```
jsEasyCharts.sideBySide(
	'sideBySide1',
	[[40, 35, 30, 35, 40, 45, 50], [30, 25, 15, 20, 25, 30, 35]]
);
```


![http://chart.apis.google.com/chart?chs=150x300&chd=t:-40,-35,-30,-35,-40,-45,-50&cht=bhs&chco=&&&chds=,140&chds=-100,0&foo=.png](http://chart.apis.google.com/chart?chs=150x300&chd=t:-40,-35,-30,-35,-40,-45,-50&cht=bhs&chco=&&&chds=,140&chds=-100,0&foo=.png)
![http://chart.apis.google.com/chart?chs=150x300&chd=t:30,25,15,20,25,30,35&cht=bhs&chco=&&&chds=,140undefined&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png](http://chart.apis.google.com/chart?chs=150x300&chd=t:30,25,15,20,25,30,35&cht=bhs&chco=&&&chds=,140undefined&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png)


## Setting data with JSON, adding axisLabels and overriding labels on the chart ##

The options object will also let you override the labels too (if you so desire), as well as set a single colour which Google Chart will then use to make up all the colours in the chart.

```
jsEasyCharts.sideBySide(
	'sideBySide4',
	{
		male: {
			"65 %2B": 40, 
			"60-64": 22, 
			"55-59": 23, 
			"50-54": 24, 
			"45-49": 25, 
			"40-44": 29, 
			"35-39": 28, 
			"30-34": 23, 
			"25-29": 20, 
			"20-24": 16, 
			"15-19": 16, 
			"10-14": 15, 
			"05-09": 15
		}, 
		female: {
			"65 %2B": 40, 
			"60-64": 22, 
			"55-59": 23, 
			"50-54": 24, 
			"45-49": 25, 
			"40-44": 29, 
			"35-39": 28, 
			"30-34": 23, 
			"25-29": 20, 
			"20-24": 16, 
			"15-19": 16, 
			"10-14": 15, 
			"05-09": 15
		}
	},
	{
		labels: ["65 %2B", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39", 
			"30-34", "25-29", "20-24", "15-19", "10-14", "05-09", "00-04"],
		axisLabels: [0,10,20,30,40,50,60,70,80,90,100],
		size: '600x400',
		colour: '99cc00'
	}
);
```

![http://chart.apis.google.com/chart?chs=300x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15&cht=bhs&chco=99cc00&chxl=0:|100|90|80|70|60|50|40|30|20|10|0&chxt=x&chds=,140&chds=-100,0&foo=.png](http://chart.apis.google.com/chart?chs=300x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15&cht=bhs&chco=99cc00&chxl=0:|100|90|80|70|60|50|40|30|20|10|0&chxt=x&chds=,140&chds=-100,0&foo=.png)
![http://chart.apis.google.com/chart?chs=300x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15&cht=bhs&chco=99cc00&chxl=0:|00-04|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B|1:|0|10|20|30|40|50|60|70|80|90|100&chxt=y,x&chds=,140undefined&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png](http://chart.apis.google.com/chart?chs=300x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15&cht=bhs&chco=99cc00&chxl=0:|00-04|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B|1:|0|10|20|30|40|50|60|70|80|90|100&chxt=y,x&chds=,140undefined&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png)



## Setting data with a HTML table, adding grid lines and changing the colour ##

Not only can you use an array and a JSON object to define the data for the chart, you can also pass in a (2 row/column only) table. The options object also lets you to add grid lines and pass in a list of colours to use for the values.

| 65 %2B | 60-64 | 55-59 | 50-54 | 45-49 | 40-44 | 35-39 | 30-34 | 25-29 | 20-24	| 15-19 | 10-14 | 05-09 |
|:-------|:------|:------|:------|:------|:------|:------|:------|:------|:------|:------|:------|:------|
| 40 | 22 | 23 | 24 | 25 | 29 | 28 | 23 | 20 | 16 | 16 | 15 | 15 |
| 40 | 22 | 23 | 24 | 25 | 29 | 28 | 23 | 20 | 16 | 16 | 15 | 15 |

```
jsEasyCharts.sideBySide(
	'sideBySide3',
	'sideBySideData3',
	{
		size: '650x400',
		gridLines: true,
		colour: 'ff0000'
	}
);
```
![http://chart.apis.google.com/chart?chs=325x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15&cht=bhs&chco=ff0000&&&chds=,140&chg=10,100&chds=-100,0&foo=.png](http://chart.apis.google.com/chart?chs=325x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15&cht=bhs&chco=ff0000&&&chds=,140&chg=10,100&chds=-100,0&foo=.png)
![http://chart.apis.google.com/chart?chs=325x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15&cht=bhs&chco=ff0000&chxl=0:|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B&chxt=y&chds=,140&chg=10,100&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png](http://chart.apis.google.com/chart?chs=325x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15&cht=bhs&chco=ff0000&chxl=0:|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B&chxt=y&chds=,140&chg=10,100&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,100&foo=.png)


## Data scaling a side-by-side chart ##

By default the values that you can enter range from 0 - 100. Google Charts will ignore any value you enter which is less than 0, and cap any values higher than 100 at 100. You can override this behaviour with the use of the dataScaling parameter in the options object.

```
jsEasyCharts.sideBySide(
	'sideBySide2',
	[[40, 22, 23, 24, 25, 29, 28, 23, 20, 16, 16, 15, 15, 15], 
		[40, 22, 23, 24, 25, 29, 28, 23, 20, 16, 16, 15, 15, 15]],
	{
		dataScaling: {
			top: 50, 
			bottom: 0
		},
		gridLines: true,
		size: '500x400',
		colour: '99cc00',
		labels: ["65 %2B", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39",  
			"30-34", "25-29", "20-24", "15-19", "10-14", "05-09", "00-04"],
		axisLabels: [0,10,20,30,40,50,60,70,80,90,100]
	}
);
```
![http://chart.apis.google.com/chart?chs=250x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15,-15&cht=bhs&chco=99cc00&chxl=0:|100|90|80|70|60|50|40|30|20|10|0&chxt=x&chds=,140&chg=10,100&chds=-50,0&foo=.png](http://chart.apis.google.com/chart?chs=250x400&chd=t:-40,-22,-23,-24,-25,-29,-28,-23,-20,-16,-16,-15,-15,-15&cht=bhs&chco=99cc00&chxl=0:|100|90|80|70|60|50|40|30|20|10|0&chxt=x&chds=,140&chg=10,100&chds=-50,0&foo=.png)
![http://chart.apis.google.com/chart?chs=250x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15,15&cht=bhs&chco=99cc00&chxl=0:|00-04|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B|1:|0|10|20|30|40|50|60|70|80|90|100&chxt=y,x&chds=,140&chg=10,100&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,50&foo=.png](http://chart.apis.google.com/chart?chs=250x400&chd=t:40,22,23,24,25,29,28,23,20,16,16,15,15,15&cht=bhs&chco=99cc00&chxl=0:|00-04|05-09|10-14|15-19|20-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-64|65%20%2B|1:|0|10|20|30|40|50|60|70|80|90|100&chxt=y,x&chds=,140&chg=10,100&chm=r,FFFFFF,0,-0.01,0.001,1|r,000000,0,0.998,1,1|R,000000,0,0.999,1,1&chds=0,50&foo=.png)