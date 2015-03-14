## Basic line chart ##

You can use the API with very minimal settings. You can create a chart with just a reference to a parent element and an array of values, like so:

```
jsEasyCharts.line(
        'line1',
        [80,15,45,11,70,55]
);
```

![http://chart.apis.google.com/chart?chs=100x100&chd=t:80,15,45,11,70,55&cht=lc&&chco=&foo=.png](http://chart.apis.google.com/chart?chs=100x100&chd=t:80,15,45,11,70,55&cht=lc&&chco=&foo=.png)

## Setting data with JSON, sizing and colouring ##

As well as defining the data for the chart as an array, you can also pass in a JSON object. If you do this, the labels in the JSON object will be used in the chart. Note that if labels are supplied for the chart, then axis labels will be added also.

A third optional param in the method call is an options object. Here you can set the size and colouring of the chart.

```
jsEasyCharts.line(
        document.getElementById('line2'),
        {
                January: 70,
                Febuary: 54,
                March: 51,
                April: 60,
                May: 33,
                June: 30
        },
        {
                colour: 'ff0000',
                size: '110x110'
        }
);
```

![http://chart.apis.google.com/chart?chs=300x150&chd=t:70,54,51,60,33,30&cht=lc&chxl=0:|January|Febuary|March|April|May|June&chco=99cc00&chxt=x,y&foo=.png](http://chart.apis.google.com/chart?chs=300x150&chd=t:70,54,51,60,33,30&cht=lc&chxl=0:|January|Febuary|March|April|May|June&chco=99cc00&chxt=x,y&foo=.png)

## Defining labels and setting data with a HTML table ##

You can define the data for the chart using a (2 row/column only) table. The options object also allows you to override the labels (from the data source) and set axis labels for the chart.

| 2009-02-01 | 36 |
|:-----------|:---|
| 2009-02-02 | 42 |
| 2009-02-03 | 53 |
| 2009-02-04 | 40 |
| 2009-02-05 | 39 |
| 2009-02-06 | 30 |
| 2009-02-07 | 36 |
| 2009-02-08 | 45 |
| 2009-02-09 | 50 |

```
jsEasyCharts.line(
        'line3',
        'dataLine3',
        {
                size: '200x120',
                labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'],
                axisLabels: ['0%', '25%', '50%', '75%', '100%']
        }
);
```

![http://chart.apis.google.com/chart?chs=200x120&chd=t:36,42,53,40,39,30,36,45,50&cht=lc&chxl=0:|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|1:|0%|25%|50%|75%|100%&chco=&chxt=x,y&foo=.png](http://chart.apis.google.com/chart?chs=200x120&chd=t:36,42,53,40,39,30,36,45,50&cht=lc&chxl=0:|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|1:|0%|25%|50%|75%|100%&chco=&chxt=x,y&foo=.png)

## Data scaling a line chart ##

By default the values that you can enter range from 0 - 100. Google Charts will ignore any value you enter which is less than 0, and cap any values higher than 100 at 100. You can override this behaviour with the use of the dataScaling parameter in the options object.

```
jsEasyCharts.line(
        'line4',
        {
                week01: 20,
                week02: 17,
                week03: 13,
                week04: 8,
                week05: 4,
                week06: -1,
                week07: 1,
                week08: 0,
                week09: -1,
                week10: -3,
                week11: -6,
                week12: -5,
                week13: -2,
                week14: 2
        },
        {
                size: '200x120',
                dataScaling: {
                        top: 140, 
                        bottom: -80
                },
                axisLabels: ['-10', '-08', '-06', '-04', '-02', '0', '2', '4', '6', 
                        '8', '10', '12', '14', '16', '18', '20']
        }
);
```

![http://chart.apis.google.com/chart?chs=600x300&chd=t:20,17,13,8,4,-1,1,0,-1,-3,-6,-5,-2,2&cht=lc&chxl=0:|week01|week02|week03|week04|week05|week06|week07|week08|week09|week10|week11|week12|week13|week14|1:|-10|-8|-6|-4|-2|0|2|4|6|8|10|12|14|16|18|20&chco=&chxt=x,y&chds=-15,25&foo=.png](http://chart.apis.google.com/chart?chs=600x300&chd=t:20,17,13,8,4,-1,1,0,-1,-3,-6,-5,-2,2&cht=lc&chxl=0:|week01|week02|week03|week04|week05|week06|week07|week08|week09|week10|week11|week12|week13|week14|1:|-10|-8|-6|-4|-2|0|2|4|6|8|10|12|14|16|18|20&chco=&chxt=x,y&chds=-15,25&foo=.png)

## Multiple data tracks with an array on a line chart ##

You can define more than one track by passing in a multi-dimensional array. You can then set the colour of each track by passing in a list of comma seperated RGB values into the colour param of the options object.

```
jsEasyCharts.line(
        'line5',
        [[86,75,82,69,50,34], [29,22,25,40,49,55]],
        {
                size: '200x150',
                colour: '99cc00,cc9900'
        }
);
```

![http://chart.apis.google.com/chart?chs=200x150&chd=t:86,75,82,69,50,34|29,22,25,40,49,55&cht=lc&&chco=99cc00,cc9900&foo=.png](http://chart.apis.google.com/chart?chs=200x150&chd=t:86,75,82,69,50,34|29,22,25,40,49,55&cht=lc&&chco=99cc00,cc9900&foo=.png)

You can give the chart a legend, so users know what multiple tracks relate to. Add the param "legend" to the options object, give it the value of a comma or pipe seperated list.

```
jsEasyCharts.line(
        'line6',
        [[86,75,82,69,50,34], [29,22,25,40,49,55]],
        {
                size: '270x150',
                colour: '99cc00,cc9900',
                legend: 'POUND,EURO'
        }
);
```

![http://chart.apis.google.com/chart?chs=270x150&chd=t:86,75,82,69,50,34|29,22,25,40,49,55&cht=lc&&chco=99cc00,cc9900&&chdl=POUND|EURO&foo=.png](http://chart.apis.google.com/chart?chs=270x150&chd=t:86,75,82,69,50,34|29,22,25,40,49,55&cht=lc&&chco=99cc00,cc9900&&chdl=POUND|EURO&foo=.png)