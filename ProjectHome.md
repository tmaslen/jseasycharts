The [Google Charts API](http://code.google.com/apis/chart/) is an excellent way to put charts onto your page - they are PNG images, so do not require any specific plugin or latest browser. However, the interface is a URL, so it can be hard to build the querystring to make a chart.

jsEasyCharts is a javascript wrapper that allows you to easily place a Google Chart onto your page and access it via a simple API.

jsEasyCharts is also:

  * Easy to use - make a chart with just two lines of javascript. Total file size < 6kb.
  * Flexible - Can be used with almost any type of data: HTML table, arrays and JSON.
  * Customisable - define the size, colour, labels, scale, type and spacing for your charts.

## Example pie chart ##

```
jsEasyCharts.pie(
        'chart4',
        [21.3, 14.5, 5.2, 47.7, 40, 3.0, 2.2],
        {
                labels: ['IE7', 'IE6', 'IE8', 'FF', 'CH', 'SF', 'OTHERS'],
                size: '600x300',
                colour: '99cc00'
        }
);
```

![http://chart.apis.google.com/chart?chs=600x300&chd=t:21,14,5,47,40,3,2&cht=p&chl=IE7|IE6|IE8|FF|CH|SF|OTHERS&chco=99cc00&.png](http://chart.apis.google.com/chart?chs=600x300&chd=t:21,14,5,47,40,3,2&cht=p&chl=IE7|IE6|IE8|FF|CH|SF|OTHERS&chco=99cc00&.png)