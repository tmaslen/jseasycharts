## Basic bar chart ##

You can use the API with very minimal settings. You can create a chart with just a reference to a parent element and an array of values, like so:

```
jsEasyCharts.bar(
        'bar1',
        [60,40,10]
);
```

![http://chart.apis.google.com/chart?chs=100x100&chd=t:60,40,10&cht=bhs&&chco=&&chds=,140&foo=.png](http://chart.apis.google.com/chart?chs=100x100&chd=t:60,40,10&cht=bhs&&chco=&&chds=,140&foo=.png)

## Setting data with JSON, sizing and colouring ##

As well as defining the data for the chart as an array, you can also pass in a JSON object. If you do this, the labels in the JSON object will be used in the chart. Note that if labels are supplied for the chart, then axis labels will be added also.

A third optional param in the method call is an options object. Here you can set the size and colouring of the chart.

```
jsEasyCharts.bar(
        'bar4',
        {
                Apricots: 10,
                Walnuts: 20,
                Hazelnut: 30,
                Almond: 40
        },
        {
                colour: 'ff0000',
                size: '110x110'
        }
);
```

![http://chart.apis.google.com/chart?chs=300x150&chd=t:10,20,30,40&cht=bhs&chxl=0:|Apricots|Walnuts|Hazelnut|Almond&chco=99cc00&chxt=y,x&chds=,140&foo=.png](http://chart.apis.google.com/chart?chs=300x150&chd=t:10,20,30,40&cht=bhs&chxl=0:|Apricots|Walnuts|Hazelnut|Almond&chco=99cc00&chxt=y,x&chds=,140&foo=.png)

## Defining labels and setting data with a HTML table ##

You can define the data for the chart using a (2 row/column only) table. The options object also allows you to override the labels (from the data source) and set axis labels for the chart.

```
jsEasyCharts.bar(
        'bar3',
        'dataBar3',
        {
                type: 'horizontal',
                size: '200x120',
                labels: ['Lib Dem', 'Lab', 'Con'],
                axisLabels: ['0%', '25%', '50%', '75%', '100%']
        }
);
```

![http://chart.apis.google.com/chart?chs=200x120&chd=t:33,16,20|33,16,20&cht=bhs&chxl=0:|Lib%20Dem|Lab|Con|1:|0%|25%|50%|75%|100%&chco=&chxt=y,x&chds=,140&foo=.png](http://chart.apis.google.com/chart?chs=200x120&chd=t:33,16,20|33,16,20&cht=bhs&chxl=0:|Lib%20Dem|Lab|Con|1:|0%|25%|50%|75%|100%&chco=&chxt=y,x&chds=,140&foo=.png)

## Vertical bar chart ##

The third param in the method call is an options object. Here you can set the type of chart and also the width and spacing of the bars. Setting the width and spacing of the bars is useful if the labels are wider than the bars.

```
jsEasyCharts.bar(
        'bar2',
        {
                Apricots: 10,
                Walnuts: 20,
                Hazelnut: 30,
                Almond: 40
        },
        {
                type: 'vertical',
                size: '450x200'
                barWidth: 20,
                barSpacing: 30
        }
);
```

![http://chart.apis.google.com/chart?chs=250x150&chd=t:30,10,40,20&cht=bvs&chxl=0:|Hazelnut|Apricots|Almond|Walnuts&chco=&chxt=x,y&chds=,140&chbh=20,30&foo=.png](http://chart.apis.google.com/chart?chs=250x150&chd=t:30,10,40,20&cht=bvs&chxl=0:|Hazelnut|Apricots|Almond|Walnuts&chco=&chxt=x,y&chds=,140&chbh=20,30&foo=.png)

## Data scaling a bar chart ##

By default the values that you can enter range from 0 - 100. Google Charts will ignore any value you enter which is less than 0, and cap any values higher than 100 at 100. You can override this behaviour with the use of the dataScaling parameter in the options object.

```
jsEasyCharts.bar(
        'bar5',
        {
                November: 80,
                December: -70,
                January: 120,
                Febuary: -40
        },
        {
                type: 'vertical',
                size: '250x300',
                barWidth: 50,
                barSpacing: 5,
                dataScaling: {
                        top: 140, 
                        bottom: -80
                },
                axisLabels: ['-80', '-60', '-40', '-20', '0', '20', 
                            '40', '60', '80', '100', '120', '140']
        }
);
```

![http://chart.apis.google.com/chart?chs=250x300&chd=t:80,-70,120,-40&cht=bvs&chxl=0:|November|December|January|Febuary|1:|-80|-60|-40|-20|0|20|40|60|80|100|120|140&chco=&chxt=x,y&chds=,140&chbh=50,5&chds=-80,140&foo=.png](http://chart.apis.google.com/chart?chs=250x300&chd=t:80,-70,120,-40&cht=bvs&chxl=0:|November|December|January|Febuary|1:|-80|-60|-40|-20|0|20|40|60|80|100|120|140&chco=&chxt=x,y&chds=,140&chbh=50,5&chds=-80,140&foo=.png)

## Multiple data tracks with a JSON object in a bar chart ##

You can define more than one track of data by passing in a JSON object with multiple sub JSON objects. You can then set the colour of each track by passing in a list of comma seperated RGB values into the colour param of the options object. By default the bar chart will think multiple tracks are to be rendered together in a single bar...

```
jsEasyCharts.bar(
        'bar6',
        {
                january: {
                        "Tom": 10,
                        "Jake": 20,
                        "Michael": 30
                },
                february: {
                        "Tom": 40,
                        "Jake": 50,
                        "Michael": 60
                },
                march: {
                        "Tom": 70,
                        "Jake": 80,
                        "Michael": 90
                }
        },
        {
                size: '400x120',
                colour: '99cc00,cc9900,0099cc',
        }
);
```

![http://chart.apis.google.com/chart?chs=400x120&chd=t:10,20,30|40,50,60|70,80,90&cht=bhs&chxl=0:|january|february|march&chco=99cc00,cc9900,0099cc&chxt=y,x&chds=,140&chds=0,300&foo=.png](http://chart.apis.google.com/chart?chs=400x120&chd=t:10,20,30|40,50,60|70,80,90&cht=bhs&chxl=0:|january|february|march&chco=99cc00,cc9900,0099cc&chxt=y,x&chds=,140&chds=0,300&foo=.png)

... however if you want multiple tracks to appear seperately, you can. Set the param 'grouped' to 'true' in the options parameter. You can also give the chart a legend, so users know what multiple tracks relate to. Add the param "legend" to the options object, give it the value of a comma or pipe seperated list.

```
jsEasyCharts.bar(
        'bar7',
        {
                january: {
                        "Tom": 10,
                        "Jake": 20,
                        "Michael": 30
                },
                february: {
                        "Tom": 40,
                        "Jake": 50,
                        "Michael": 60
                },
                march: {
                        "Tom": 70,
                        "Jake": 80,
                        "Michael": 90
                }
        },
        {
                type: 'vertical',
                grouped: true,
                size: '350x300',
                colour: '99cc00,cc9900,0099cc',
                legend: 'Tom,Jake,Michael'
        }
);
```

![http://chart.apis.google.com/chart?chs=350x300&chd=t:10,20,30|40,50,60|70,80,90&cht=bvg&chxl=0:|january|february|march&chco=99cc00,cc9900,0099cc&chxt=x,y&chds=,140&chdl=Tom|Jake|Michael&foo=.png](http://chart.apis.google.com/chart?chs=350x300&chd=t:10,20,30|40,50,60|70,80,90&cht=bvg&chxl=0:|january|february|march&chco=99cc00,cc9900,0099cc&chxt=x,y&chds=,140&chdl=Tom|Jake|Michael&foo=.png)