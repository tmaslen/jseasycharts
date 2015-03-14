## Basic pie chart ##

You can use the API with very minimal settings. You can create a chart with just a reference to a parent element and an array of values, like so:

```
jsEasyCharts.pie(
        'chart1',
        [10,10,10]
);
```

![http://chart.apis.google.com/chart?chs=100x100&chd=t:10,10,10&cht=p&&chco=&foo=.png](http://chart.apis.google.com/chart?chs=100x100&chd=t:10,10,10&cht=p&&chco=&foo=.png)

## Setting data with JSON ##

As well as defining the data for the chart as an array, you can also pass in a JSON object. If you do this, the labels in the JSON object will be used in the chart. A third optional param in the method call is an options object. Here you can set the size of the chart.

```
jsEasyCharts.pie(
        'chart2',
        {
                Apricots: 10,
                Walnuts: 20,
                Hazelnut: 30,
                Almond: 40
        },
        {
                size: '500x250'
        }
);
```

![http://chart.apis.google.com/chart?chs=500x250&chd=t:10,20,30,40&cht=p&chl=Apricots|Walnuts|Hazelnut|Almond&chco=&foo=.png](http://chart.apis.google.com/chart?chs=500x250&chd=t:10,20,30,40&cht=p&chl=Apricots|Walnuts|Hazelnut|Almond&chco=&foo=.png)

## Setting data with a HTML table, changing the type of bar chart, and changing the colour ##

Not only can you use an array and a JSON object to define the data for the chart, you can also pass in a (2 row/column only) table. The options object also lets you set the type of pie chart, and pass in a list of colours to use for the values.

| Conservative | 33 |
|:-------------|:---|
| Labour |16 |
| Lib Dem |20 |

```
jsEasyCharts.pie(
        'chart3',
        'data3',
        {
                type: '3d',
                size: '650x300',
                colour: '0000ff,ff0000,ffff00'
        }
);
```

![http://chart.apis.google.com/chart?chs=650x300&chd=t:33,16,20&cht=p3&chl=Conservative|Labour|Lib%20Dem&chco=0000ff,ff0000,ffff00&foo=.png](http://chart.apis.google.com/chart?chs=650x300&chd=t:33,16,20&cht=p3&chl=Conservative|Labour|Lib%20Dem&chco=0000ff,ff0000,ffff00&foo=.png)

## Overriding labels on the chart ##

The options object will also let you override the labels too (if you so desire), as well as set a single colour which Google Chart will then use to make up all the colours in the chart.

| Internet Explorer 7 | Internet Explorer 6 | Internet Explorer 8 | Firefox	Chrome | Safari | Others |
|:--------------------|:--------------------|:--------------------|:---------------|:-------|:-------|
| 21.3 | 14.5 | 5.2 | 47.7 | 40 | 3.0 | 2.2 |

```
jsEasyCharts.pie(
        'chart4',
        'data4',
        {
                labels: ['IE7', 'IE6', 'IE8', 'FF', 'CH', 'SF', 'OTHERS'],
                size: '600x300',
                colour: '99cc00'
        }
);
```

![http://chart.apis.google.com/chart?chs=600x300&chd=t:21,14,5,47,40,3,2&cht=p&chl=IE7|IE6|IE8|FF|CH|SF|OTHERS&chco=99cc00&foo=.png](http://chart.apis.google.com/chart?chs=600x300&chd=t:21,14,5,47,40,3,2&cht=p&chl=IE7|IE6|IE8|FF|CH|SF|OTHERS&chco=99cc00&foo=.png)

## Multiple data tracks with a HTML table in a pie chart ##

| Internet Explorer 7 | Internet Explorer 6 | Internet Explorer 8 | Firefox | Chrome |
|:--------------------|:--------------------|:--------------------|:--------|:-------|
| 25 | 15 | 20 | 30 | 10 |
| 15 | 20 | 30 | 10 | 25 |

```
jsEasyCharts.pie(
        'chart5',
        'data5',
        {
                size: '600x300',
                colour: '0099cc',
                showLabels: false
        }
);
```

![http://chart.apis.google.com/chart?chs=600x300&chd=t:25,15,20,30,10|15,20,30,10,25&cht=pc&&chco=0099cc&undefined&chdl=UK|USA&foo=.png](http://chart.apis.google.com/chart?chs=600x300&chd=t:25,15,20,30,10|15,20,30,10,25&cht=pc&&chco=0099cc&undefined&chdl=UK|USA&foo=.png)