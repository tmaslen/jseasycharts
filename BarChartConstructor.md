
```
jsEasyCharts.bar(attachTo, dataSource, opts);
```

[Documentation with examples](http://www.tmaslen.plus.com/jseasycharts/demos.bar.html)

<dl>
<blockquote><dt>attachTo</dt>
<dd>Type: DOM element | string<br />
Reference of an element on the page where you want the chart to be put.  This can be either a string dictating the id of the element or a reference to the element itself.</dd>
<dt>dataSource</dt>
<dd>Type: Array | JSON object | id of a table DOM element<br />
The data that you want to populate the chart with.  This can be an array/multi-dimensional array, a JSON object or a reference to a table element.</dd>
<dt>opts</dt>
<dd>Type: JSON object<br />
Optional configuration setting.<br>
<dl>
<blockquote><dt>altText</dt>
<dd>Type: String<br />
Default: none<br />
The text to be placed in the alt attribute of the image tag.</dd>
<dt>axisLabels</dt>
<dd>Type: String<a href='.md'>.md</a><br />
Default: none<br />
Values to use as the labels for the values of your data.  These values go across the Y axis of the chart.</dd>
<dt>barSpacing</dt>
<dd>Type: number<br />
Default: none<br />
Specify the spacing between bars on the chart in pixels.</dd>
<dt>barWidth</dt>
<dd>Type: number<br />
Default: none<br />
Specify the width of the bars on the chart in pixels.</dd>
<dt>colour</dt>
<dd>Type: String<br />
Default: none<br />
The RGB value for the colour you want the lines in the chart to be.  To set multiple colours use a comma delimited list of RGB values (e.g. '99cc00,cc9900').</dd>
<dt>dataScaling</dt>
<dd>Type: JSON OBJECT<br />
Default: none<br />
By default the values that you can enter range from 0 - 100. Google Charts will ignore any value you enter which is less than 0, and cap any values higher than 100 at 100. You can override this behaviour with the use of the dataScaling parameter in the options object.  Use the dataScaling option to specify a top and bottom value for your data to be scaled against (e.g. dataScaling: {top: 230, bottom: 120}.</dd>
<dt>grouped</dt>
<dd>Type: boolean<br />
Default: false<br />
Set to true if your dataSource has multiple tracks of data that you want to group together.</dd>
<dt>https</dt>
<dd>Type: boolean<br />
Default: false<br />
Set to true if you want an image that has a URL that starts with "https" and won't cause a security alert on a secure page.</dd>
<dt>labels</dt>
<dd>Type: String<a href='.md'>.md</a><br />
Default: none<br />
Values to use as the labels for your data.  These values go across the X axis of the chart.</dd>
<dt>legend</dt>
<dd>Type: string<br />
Default: none<br />
A comma delimited list of values to display in a legend.  The legend will use any colour values passed in via the colour parameter in the options object.</dd>
<dt>showAxisLabels</dt>
<dd>Type: boolean<br />
Default: true<br />
Set to false if your dataSource has data for axisLabels but you do not want them to be shown in the chart.</dd>
<dt>showLabels</dt>
<dd>Type: boolean<br />
Default: true<br />
Set to false if your dataSource has data for labels but you do not want them to be shown in the chart.</dd>
<dt>size</dt>
<dd>Type: string<br />
Default: '100x100'<br />
'x' delimited values for the height and width of the chart.</dd>
<dt>type</dt>
<dd>Type: string<br />
Default: 'horizontal'<br />
Set to 'vertical' if you want a vertical bar chart, otherwise leave empty or set to 'horizontal' for a horizontal bar chart.</dd>
</blockquote></dl>
</dd>
</dl>