var jsEasyCharts

(function() {



	var genericChart = function(attachTo, values, opts, chartSubTypes, chartType, additionalPairValues) {

		opts = (opts || {});
		chartSubTypes = (chartSubTypes || '');
		var labels = '',
			url = 'http://chart.apis.google.com/chart?';

		// required
			// attachTo
				if (typeof attachTo == 'string') {
					attachTo = document.getElementById(attachTo);
				}
				if (attachTo == null) {
					throw new Error("You must define an element to append the pie chart to");
				}
			// Data
				var parseDataObject = parseData(values);
				data = parseDataObject.data;
				labels = parseDataObject.labels;
				


		// optional
			// Size
				var size = 'chs=' + (opts.size || '100x100');
			// Type
				opts.type = (convert_type_names(opts.type) || chartSubTypes[0]);
				// If user defined name not in array of accepted names then error
				if( ('|' + chartSubTypes.toString() + '|').replace(/,/g, '|').indexOf('|' + opts.type + '|') == -1  ) {
					throw new Error("Bar chart type unrecognised");
				}
				// If data has two tracks (divided by a pipe) then change the user defined type automatically
				if (data.indexOf('|') > -1) {
					opts.type = convert_type_names_for_multi_tracks(opts.type);
				}
				var type = 'cht=' + opts.type;
			// Label
				if(typeof opts.labels != 'undefined') {
					labels = 'chl=' + opts.labels.toString().replace(/,/g, '|');
				}
			// Colour
				var colour = 'chco=' + (opts.colour || '');
			// Alt text
				opts.altText = (opts.altText || '');
			// Legend
				if (typeof opts.legend != "undefined")
				{
					additionalPairValues += "&amp;chdl=" + opts.legend.replace(/,/g, "|");
				}



		// Chart type specific code - this is none generic code 
		// (couldn't fit it in the 'inherited' objects below 
		// because the labelling logic needs to be applied first)
			switch (chartType)
			{

				case 'pie' :
					opts.showLabels = (typeof opts.showLabels == 'undefined') ? true : opts.showLabels;
					if (opts.showLabels == false)
					{
						labels = '';
					}
					break;

				// Bar chart
				case 'bar' :
				case 'line' :

					// Show axis labels: default true - use this to turn off the labelling
						opts.showAxisLabels = (typeof opts.showAxisLabels == 'undefined') ? true : opts.showAxisLabels;

					// Axis Labels
						var axisLabels = '';
						if ( 
							   (labels != '') 
							&& (opts.showAxisLabels === true)
						) {

							// For this type of chart we want to use the labels as axis labels.
							// We also want to set the labels to the correct side of the graph
							axisLabels = 'chxt=';
							if (opts.graphAxis == 'vertical') {
								axisLabels += 'x,y';
								labels = 'chxl=0:|' + labels.substr(4);
							} else {
								axisLabels += 'y,x';
								labels = 'chxl=0:|' + labels.substr(4);
							}

							// Add axisLabels if defined as an array
							if (
								   (typeof opts.axisLabels != 'undefined')
								&& (typeof opts.axisLabels.length == 'number')
							) {
								labels += '|1:|' + opts.axisLabels.toString().replace(/,/g, '|');
							}

						}

						// If showAxisLabels set to false then don't show any labels
						if (opts.showAxisLabels === false)
						{
							labels = '';
						}

					// Manual data scaling
						if (
							   (typeof opts.dataScaling == 'object')
							&& (typeof opts.dataScaling.top == 'number')
							&& (typeof opts.dataScaling.bottom == 'number')
						) {
							additionalPairValues += '&amp;chds=' + opts.dataScaling.bottom + ',' + opts.dataScaling.top;
						}

					// Automatic data scaling
					// This doesn't work very well when labels are turned on but not customised.  Probably need to
					// roll this into the axisLabels functionality somehow?
//						else if (typeof opts.dataScaling == 'undefined') {
//							var splitData = data.slice(6).split(/[\,|]/),
//								max = Math.max.apply(null, splitData),
//								min = Math.min.apply(null, splitData);
//							if (
//								   (max > 100)
//								|| (min < 0)
//							) {
//								console.log(attachTo.id + ": automatic data scaling turned on");
//								console.log(max);
//								console.log(min);
//								additionalPairValues += '&amp;chds=' + min + ',' + max;
//							}
//						}
						

					// Grouped data
						// Only want to do this bit for bars - this section of code is messy, need to refactor
						// If opts.grouped == true then show a group of bars instead of a single one
						if (
							   (chartType == 'bar')
							&& (opts.grouped == true)	
						) {
								type = type.slice(0,-1)+"g";
						}


					break;
			}
				

		// Add img
			var img_src = url + size + '&amp;' + data + '&amp;' + type + '&amp;' + labels + '&amp;' + colour + '&amp;' + axisLabels + additionalPairValues;
			attachTo.innerHTML += '<img src="' + img_src + '" alt="' + opts.altText + '" height="' + size.substr(4).split('x')[1] + '" width="' + size.substr(4).split('x')[0] + '" />';
	}











	jsEasyCharts = {


		// =================
		// Line chart object
		// =================
		line: function(attachTo, values, opts) {
		
			var additionalPairValues = '';
			opts = (opts || {});

			// Graph is always vertical (is this true? - seems v and h have been mixed up)
			opts.graphAxis = 'vertical';

			// Call the generic chart object
			return new genericChart(attachTo, values, opts, ["lc", "ls", "lxy"], 'line', additionalPairValues);

		},


		// ================
		// Bar chart object
		// ================
		bar: function(attachTo, values, opts) {

			var additionalPairValues = '&amp;chds=,140';
			opts = (opts || {});

			// Work out which way the graph is pointing
			opts.graphAxis = ( opts.type == 'vertical' ) ? 'vertical' : 'horizontal';
			// Old code, type names have been changed to names that are easier to understand
			// opts.graphAxis = ( (opts.type || 'bhs').substr(1,1) == 'v' ) ? 'vertical' : 'horizontal';

			// Bar width and spacing - http://code.google.com/apis/chart/styles.html#bar_width
			if (
				   (typeof opts.barWidth   != 'undefined')
				|| (typeof opts.barSpacing != 'undefined')
			) {

				// Add a value for the barWidth, default is 'r' which tells GC to ignore it
				additionalPairValues += (typeof opts.barWidth == 'number') ? '&amp;chbh=' + opts.barWidth : '&amp;chbh=r';

				// Add a value for barSpacing if a numeric is passed in
				if (typeof opts.barSpacing == 'number')
				{
					additionalPairValues += ',' + opts.barSpacing;
				}

			}

			// Call the generic chart object
			return new genericChart(attachTo, values, opts, ["bhs", "bvs", "bhg", "bvg"], 'bar', additionalPairValues);
		
		},


		// ================
		// Pie chart object
		// ================
		pie: function(attachTo, values, opts) {
		
			var additionalPairValues = '';

			return new genericChart(attachTo, values, opts, ["p", "pc", "p3"], 'pie', additionalPairValues);

		},


		// =========================
		// Side-By-Side chart object
		// =========================
		sideBySide: function(attachTo, values, opts) {
		
			//var additionalPairValues = '';

			// WE'LL NEED TO PARSE THE OPTS OBJECT

			// WE CAN'T ALLOW NEGATIVE NUMBERS IN, BECAUSE THE FIRST TRACK WILL BE SET TO A NEGATIVE NUMBER AND WE CAN'T HAVE NEGATIVE NEGATIVE NUMBERS

			// Sort the data.  The data for the left side will actually need to be negative values.

				// Fetch the data using parseData, this returns the data as a googlecharts friendly string,
				// but we actually need it as an array...
				var data = parseData(values).data.substr(6).split("|");
				// DataSet needs to have two tracks
				if (data.length != 2)
				{
					throw new Error("jsEasyCharts.sideBySide chart requires two data tracks only.  You have supplied " + data.length);
				}
				// Split strings into arrays
				data[0] = data[0].split(",");
				data[1] = data[1].split(",");
				
				// Set first track into minus numbers
				for (var z = 0, length = data[0].length; z < length ; z++)
				{
					data[0][z] = negativeNumber(data[0][z])
				}
			
			// Now we need to play with the dataScaling.

				// Set default value
				opts.dataScaling = opts.dataScaling || {top: 100, bottom: 0};

				// Can't let in negative values (yet)
				if (
					   (opts.dataScaling.top < 0)
					|| (opts.dataScaling.bottom < 0)
				) {
					throw new Error("jsEasyCharts.sideBySide chart cannot handle dataScaling with values less than 0");
				}

				// store current dataScaling values so we can reapply them for the right side of the chart
				var originalDataScaling = {top: 0, bottom: 100};
				originalDataScaling.top = opts.dataScaling.top;
				originalDataScaling.bottom = opts.dataScaling.bottom;

				// set dataScaling to negative values for the left side of the chart
				opts.dataScaling.top = negativeNumber(originalDataScaling.bottom);
				opts.dataScaling.bottom = negativeNumber(originalDataScaling.top);


			// Left chart
			this.bar(attachTo, data[0], opts);

			opts.dataScaling = originalDataScaling;

			// Right chart
			this.bar(attachTo, data[1], opts);

		}


	}





	function negativeNumber(num) {
		if (isNaN(num)) {
			throw new Error("The data source for the chart must be numeric.");
			return false;
		}
		return parseInt("-" + num);
	}


	// This is the most important part of jsEasyCharts.
	// It takes the dataSource (values) which could be a table,
	// JSON or an array and processes it into a googleCharts
	// friendly string of chart values
	function parseData(values) {
		
		var data = '',
			labels = '';
		if (typeof values == 'undefined') {
			// Nothing passed in
			throw new Error("No data entered to make a pie chart");
		} else {
			if (typeof values.length == 'undefined') {
				// json object passed in
				data = 'chd=t:' + mapJsonToChartValues(values);
				labels = 'chl=' + mapJsonToChartLabels(values);
			} else {
				if (
						(document.getElementById(values) != null) &&
						(document.getElementById(values).nodeName.toLowerCase() == "table")
				) {
					// table passed in...
					// Get a ref for the Table elm
					values = document.getElementById(values);
					// table_check returns array telling us how to process table data.
					// E.g. ['vertical', 3] = data tracks run down the table, and there are 3 columns of data.
					// E.g. ['horizontal', 1] = data tracks run left to right across the table, and there is 1 row of data
					var checkedTable = table_check(values);
					if (checkedTable[0] == 'vertical') {
						data = 'chd=t:' + mapVerticalTableToChartValues(values, checkedTable[1]);
						labels = 'chl=' + mapVerticalTableToChartLabels(values);
					} else {
						data = 'chd=t:' + mapHorizontalTableToChartValues(values, checkedTable[1]);
						labels = 'chl=' + mapHorizontalTableToChartLabels(values);
					}
				} else {
					// array passed in
					data = 'chd=t:' + arrayToData(values);
				}
			}
		}
		return {"data" : data, "labels" : labels};

	}



	// Converts array into googleCharts friendly data string
	function arrayToData(values) {
		// Are we dealing with multi-dimensional array
		// If so then we need to convert array to a string, but with a 
		// pipe seperating each array dimension
		if (typeof values[0] == "object") {
			var r = '';
			// Loop through dimensions
			for (var i = 0, len = values.length; i < len; i++) {
				// If we are onto another dimension then add a pipe character (marks seperation)
				if (i > 0) r = r.slice(0, -1) + '|';
				// Loop through values of array
				for (var x = 0, ilen = values[i].length; x < ilen; x++) {
					r+= values[i][x] + ',';
				}
			}
			// Return formatted string
			return r.slice(0, -1);
		}
		// Else normal single dimensional array, so just return as is
		else { 
			return values;
		}
	}

	// Converts 2 dimensional Json object into an array of values to pass into google charts
	function mapJsonToChartValues(values) {
		var r = [];
		for (value in values) {
			// If first value of JSON is an object, then user has passed in multiple tracked data...
			if (typeof values[value] == "object") {return mapJsonWithMultipleTracksToChartValues(values);}
			// Otherwise continue building return value
			r.push(values[value]);
		}
		return r;
	}

	function mapJsonWithMultipleTracksToChartValues(values) {
		var r = '';
		for (track in values) {
			for (value in values[track])
			{
				r += values[track][value] + ",";
			}
			r = r.slice(0,-1) + '|';
		}
		return r.slice(0,-1);
	}

	// Converts 2 dimensional Json object into an array of labels to pass into google charts
	function mapJsonToChartLabels(labels) {
		var r = '';
		for (label in labels) {
			r += label + "|";
		}
		return r.slice(0, -1);
	}

	// Does a quick check of the table to see if it can be used vertically or horizontally, and makes sure there are numeric values where there should be
	function table_check(values) {
		var flag = true,
			counter = 0,
			finalCount = 0,
			arrTR = values.getElementsByTagName('TR'),
			lenTR = arrTR.length,
			x,
			y,
			arrTD,
			arrTD_len;

		// Check to see if we can use the table vertically...
			for(x = 0; x < lenTR; x++) {
				counter = 0;
				arrTD = arrTR[x].getElementsByTagName('TD');
				for(y = 1, arrTD_len = arrTD.length; y < arrTD_len; y++) {
					if(isNaN(parseInt(arrTD[y].innerHTML))) {
						flag = false;
					}
					if(flag == false) {
						break;
					}
					counter++
				}
				finalCount = counter;
				if(flag == false) {
					break;
				}
				
			}
			if (finalCount > 0) {
				//console.log(['vertical', finalCount]);
				return ['vertical', finalCount];	
			}

		// Check to see if we can use the table horizontally...
			flag = true;
			counter = 0;
			for(x = 1, arrTR = values.getElementsByTagName('TR'), lenTR = arrTR.length; x < lenTR; x++) {
				arrTD = arrTR[x].getElementsByTagName('TD');
				for(y = 0, arrTD_len = arrTD.length; y < arrTD_len; y++) {
					if(isNaN(parseInt(arrTD[y].innerHTML))) {
						flag = false;
					}
					if(flag == false) {
						break;
					}
				}
				if(flag == false) {
					break;
				}
				counter++;
				
			}
			if (counter > 0) {
				//console.log(['horizontal', counter]);
				return ['horizontal', counter];	
			}

		// If we get this far this means the table isn't two dimensional and we can't use it.
			throw new Error("The submitted table element does not have data that can be used with a chart");
	}

	// Converts 2 dimensional html table into an array of values to pass into google charts
	function mapVerticalTableToChartValues(values, dataDepth) {

		var arrTR = values.getElementsByTagName('TR'),
			arr_values = '';

		for (var j = 1; j <= dataDepth; j++) {

			if (j > 1) {
				arr_values = arr_values.slice(0,-1)+"|";
			}
			
			for(var i = 0, arr_len = arrTR.length; i < arr_len; i++) {
				arr_values += parseInt(arrTR[i].getElementsByTagName('TD')[j].innerHTML) + ",";
			}

		}

		return arr_values.slice(0,-1);

}

	// Converts 2 dimensional html table into an array of values to pass into google charts
	function mapHorizontalTableToChartValues(values, dataDepth) {
		var arrTD,
			arr_values = "";
		for (var j = 1; j <= dataDepth; j++) {
			if (j > 1) {
				arr_values = arr_values.slice(0,-1)+"|";
			}
			arrTD = values.getElementsByTagName('TR')[j].getElementsByTagName('TD');
			for(var i = 0, arr_len = arrTD.length; i < arr_len; i++) {
				arr_values += parseInt(arrTD[i].innerHTML) + ",";
			}
		}
		return arr_values.slice(0,-1);
	}

	// Converts 2 dimensional html table into an array of labels to pass into google charts
	function mapVerticalTableToChartLabels(values) {
		var arrTR = values.getElementsByTagName('TR');
		var arr_values = []
		for(var i = 0, arr_len = arrTR.length; i < arr_len; i++) {
			arr_values.push(arrTR[i].getElementsByTagName('TD')[0].innerHTML);
		}
		return arr_values.toString().replace(/,/g, '|');
	}

	// Converts 2 dimensional html table into an array of labels to pass into google charts
	function mapHorizontalTableToChartLabels(values) {
		var arrTD = values.getElementsByTagName('TR')[0].getElementsByTagName('TD');
		var arr_values = []
		for(var i = 0, arr_len = arrTD.length; i < arr_len; i++) {
			arr_values.push(arrTD[i].innerHTML);
		}
		return arr_values.toString().replace(/,/g, '|');
	}
	
	function convert_type_names(type) {
		switch(type) {
			case 'horizontal': 
				return 'bhs';
				break;
			case 'vertical': 
				return 'bvs';
				break;
			case '3d': 
				return 'p3';
				break;
		}
		return type;
	}
	
	function convert_type_names_for_multi_tracks(type) {
		switch(type) {
/*
 			case 'lc':
			case 'ls':
			case 'lxy': 
				return 'bhg';
				break;
 			case 'bhs':
				return 'bhg';
				break;
			case 'bvs':
				return 'bvg';
				break;
*/
			case 'p3':
			case 'p':
				return 'pc';
				break;
		}
		return type;
	}

	return jsEasyCharts;

})();