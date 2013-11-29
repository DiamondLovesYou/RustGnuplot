var searchIndex = [{ty:"mod",name:"",path:"gnuplot",desc:"A simple gnuplot controller."},{ty:"mod",name:"writer",path:"gnuplot",desc:""},{ty:"mod",name:"figure",path:"gnuplot",desc:""},{ty:"struct",name:"Figure",path:"gnuplot::figure",desc:"A figure that may contain multiple axes"},{ty:"enum",name:"AxesVariant",path:"gnuplot::figure",desc:""},{ty:"variant",name:"Axes2DType",path:"gnuplot::figure",desc:"",parent:'1970'},{ty:"variant",name:"Axes3DType",path:"gnuplot::figure",desc:"",parent:'1970'},{ty:"method",name:"new",path:"gnuplot::figure",desc:"Creates a new figure",parent:'2036'},{ty:"method",name:"set_terminal",path:"gnuplot::figure",desc:"Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",parent:'2036'},{ty:"method",name:"set_grid",path:"gnuplot::figure",desc:"Sets the dimensions of the grid that you can use to\nplace multiple axes on\n# Arguments\n* `rows` - Number of rows. Set to 0 to disable the grid\n* `cols` - Number of columns. Set to 0 to disable the grid",parent:'2036'},{ty:"method",name:"axes2d",path:"gnuplot::figure",desc:"Creates a set of 2D axes",parent:'2036'},{ty:"method",name:"axes3d",path:"gnuplot::figure",desc:"Creates a set of 3D axes",parent:'2036'},{ty:"method",name:"show",path:"gnuplot::figure",desc:"Launch a gnuplot process and display the figure on it",parent:'2036'},{ty:"method",name:"echo",path:"gnuplot::figure",desc:"Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",parent:'2036'},{ty:"method",name:"echo_to_file",path:"gnuplot::figure",desc:"Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",parent:'2036'},{ty:"mod",name:"options",path:"gnuplot",desc:""},{ty:"enum",name:"PlotOption",path:"gnuplot::options",desc:"An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others"},{ty:"variant",name:"PointSymbol",path:"gnuplot::options",desc:"Sets the symbol used for points. The valid characters are as follows:",parent:'2701'},{ty:"variant",name:"PointSize",path:"gnuplot::options",desc:"Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",parent:'2701'},{ty:"variant",name:"Caption",path:"gnuplot::options",desc:"Sets the caption of the plot element. Set to empty to hide it from the legend.",parent:'2701'},{ty:"variant",name:"LineWidth",path:"gnuplot::options",desc:"Sets the width of lines.",parent:'2701'},{ty:"variant",name:"Color",path:"gnuplot::options",desc:"Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",parent:'2701'},{ty:"variant",name:"BorderColor",path:"gnuplot::options",desc:"Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",parent:'2701'},{ty:"variant",name:"LineStyle",path:"gnuplot::options",desc:"Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",parent:'2701'},{ty:"variant",name:"FillAlpha",path:"gnuplot::options",desc:"Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",parent:'2701'},{ty:"variant",name:"FillRegion",path:"gnuplot::options",desc:"Sets the fill region. See FillRegion for the available regions.",parent:'2701'},{ty:"variant",name:"ArrowType",path:"gnuplot::options",desc:"Sets what an arrowhead looks like",parent:'2701'},{ty:"variant",name:"ArrowSize",path:"gnuplot::options",desc:"Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",parent:'2701'},{ty:"enum",name:"FillRegion",path:"gnuplot::options",desc:"An enumeration of possible fill regions"},{ty:"variant",name:"Above",path:"gnuplot::options",desc:"",parent:'2753'},{ty:"variant",name:"Below",path:"gnuplot::options",desc:"",parent:'2753'},{ty:"variant",name:"Between",path:"gnuplot::options",desc:"",parent:'2753'},{ty:"enum",name:"AlignType",path:"gnuplot::options",desc:"An enumeration of possible text alignments"},{ty:"variant",name:"AlignLeft",path:"gnuplot::options",desc:"",parent:'2757'},{ty:"variant",name:"AlignRight",path:"gnuplot::options",desc:"",parent:'2757'},{ty:"variant",name:"AlignCenter",path:"gnuplot::options",desc:"",parent:'2757'},{ty:"enum",name:"DashType",path:"gnuplot::options",desc:"An enumeration of possible dash styles"},{ty:"variant",name:"Solid",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"variant",name:"SmallDot",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"variant",name:"Dot",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"variant",name:"Dash",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"variant",name:"DotDash",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"variant",name:"DotDotDash",path:"gnuplot::options",desc:"",parent:'2761'},{ty:"enum",name:"ArrowheadType",path:"gnuplot::options",desc:"An enumeration of possible arrow head styles"},{ty:"variant",name:"Open",path:"gnuplot::options",desc:"An arrow head shaped like a 'V'",parent:'2768'},{ty:"variant",name:"Closed",path:"gnuplot::options",desc:"An arrow head shaped like an outlined triangle",parent:'2768'},{ty:"variant",name:"Filled",path:"gnuplot::options",desc:"An arrow head shaped like a filled triangle",parent:'2768'},{ty:"variant",name:"NoArrow",path:"gnuplot::options",desc:"No arrow head",parent:'2768'},{ty:"enum",name:"AutoOption",path:"gnuplot::options",desc:"An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined"},{ty:"variant",name:"Fix",path:"gnuplot::options",desc:"Fixes the value to a specific value",parent:'2773'},{ty:"variant",name:"Auto",path:"gnuplot::options",desc:"Lets the value scale automatically",parent:'2773'},{ty:"enum",name:"LabelOption",path:"gnuplot::options",desc:"An enumeration of label options that control label attributes"},{ty:"variant",name:"Offset",path:"gnuplot::options",desc:"Sets the offset of the label in characters",parent:'2780'},{ty:"variant",name:"Font",path:"gnuplot::options",desc:"Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",parent:'2780'},{ty:"variant",name:"TextColor",path:"gnuplot::options",desc:"Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'2780'},{ty:"variant",name:"Rotate",path:"gnuplot::options",desc:"Rotates the label by a certain number of degrees",parent:'2780'},{ty:"variant",name:"Align",path:"gnuplot::options",desc:"Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",parent:'2780'},{ty:"variant",name:"MarkerSymbol",path:"gnuplot::options",desc:"Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",parent:'2780'},{ty:"variant",name:"MarkerColor",path:"gnuplot::options",desc:"Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'2780'},{ty:"variant",name:"MarkerSize",path:"gnuplot::options",desc:"Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",parent:'2780'},{ty:"enum",name:"TickOption",path:"gnuplot::options",desc:"An enumeration of axis tick options"},{ty:"variant",name:"OnAxis",path:"gnuplot::options",desc:"Specifies whether the ticks are drawn at the borders of the plot, or on the axis",parent:'2826'},{ty:"variant",name:"Mirror",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the tics on the opposite border as well",parent:'2826'},{ty:"variant",name:"Inward",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",parent:'2826'},{ty:"variant",name:"MinorScale",path:"gnuplot::options",desc:"Sets the scale of the minor ticks",parent:'2826'},{ty:"variant",name:"MajorScale",path:"gnuplot::options",desc:"Sets the scale of the major ticks",parent:'2826'},{ty:"variant",name:"MinorIntervals",path:"gnuplot::options",desc:"Sets the number of minor intervals between the major tics",parent:'2826'},{ty:"enum",name:"BorderLocation2D",path:"gnuplot::options",desc:"Plot border locations"},{ty:"variant",name:"Bottom",path:"gnuplot::options",desc:"",parent:'2851'},{ty:"variant",name:"Left",path:"gnuplot::options",desc:"",parent:'2851'},{ty:"variant",name:"Top",path:"gnuplot::options",desc:"",parent:'2851'},{ty:"variant",name:"Right",path:"gnuplot::options",desc:"",parent:'2851'},{ty:"mod",name:"private",path:"gnuplot::options",desc:""},{ty:"method",name:"to_int",path:"gnuplot::options::private",desc:"",parent:'2761'},{ty:"mod",name:"datatype",path:"gnuplot",desc:""},{ty:"trait",name:"DataType",path:"gnuplot::datatype",desc:""},{ty:"tymethod",name:"get",path:"gnuplot::datatype",desc:"",parent:'2895'},{ty:"mod",name:"internal",path:"gnuplot",desc:""},{ty:"mod",name:"axes2d",path:"gnuplot::internal",desc:""},{ty:"struct",name:"Axes2D",path:"gnuplot::internal::axes2d",desc:"2D axes that is used for drawing 2D plots"},{ty:"method",name:"set_pos_grid",path:"gnuplot::internal::axes2d",desc:"Set the position of the axes on the figure using grid coordinates\n# Arguments\n* `row` - Row on the grid. Top-most row is 1\n* `column` - Column on the grid. Left-most column is 1",parent:'3280'},{ty:"method",name:"set_pos",path:"gnuplot::internal::axes2d",desc:"Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",parent:'3280'},{ty:"method",name:"set_size",path:"gnuplot::internal::axes2d",desc:"Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",parent:'3280'},{ty:"method",name:"set_aspect_ratio",path:"gnuplot::internal::axes2d",desc:"Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",parent:'3280'},{ty:"method",name:"set_x_label",path:"gnuplot::internal::axes2d",desc:"Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'3280'},{ty:"method",name:"set_y_label",path:"gnuplot::internal::axes2d",desc:"Set the label for the Y axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'3280'},{ty:"method",name:"set_title",path:"gnuplot::internal::axes2d",desc:"Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'3280'},{ty:"method",name:"label",path:"gnuplot::internal::axes2d",desc:"Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",parent:'3280'},{ty:"method",name:"set_x_tics",path:"gnuplot::internal::axes2d",desc:"Sets the properties of the tics on the X axis. The first 3 arguments specify the range of the tics. The following combinations work for `(min, max)`:",parent:'3280'},{ty:"method",name:"set_y_tics",path:"gnuplot::internal::axes2d",desc:"Like `set_x_tics` but for the Y axis.",parent:'3280'},{ty:"method",name:"add_x_major_tics",path:"gnuplot::internal::axes2d",desc:"Adds major tics to the X axis with specified labels at specified positions.",parent:'3280'},{ty:"method",name:"add_x_minor_tics",path:"gnuplot::internal::axes2d",desc:"Like `set_x_major_tics` but for the minor tics of the X axis.",parent:'3280'},{ty:"method",name:"add_y_major_tics",path:"gnuplot::internal::axes2d",desc:"Like `set_x_major_tics` but for the major tics of the Y axis.",parent:'3280'},{ty:"method",name:"add_y_minor_tics",path:"gnuplot::internal::axes2d",desc:"Like `set_x_major_tics` but for the minor tics of the Y axis.",parent:'3280'},{ty:"method",name:"set_border",path:"gnuplot::internal::axes2d",desc:"Sets the properties of the plot border",parent:'3280'},{ty:"method",name:"set_x_axis",path:"gnuplot::internal::axes2d",desc:"Sets the properties of x axis.",parent:'3280'},{ty:"method",name:"set_y_axis",path:"gnuplot::internal::axes2d",desc:"Like `set_x_axis` but for the y axis.",parent:'3280'},{ty:"method",name:"arrow",path:"gnuplot::internal::axes2d",desc:"Adds an arrow to the plot. The arrow is drawn from `(x1, y1)` to `(x2, y2)` with the arrow point towards `(x2, y2)`.\n# Arguments\n* `x1` - X coordinate of the arrow start\n* `y1` - Y coordinate of the arrow start\n* `x2` - X coordinate of the arrow end\n* `y2` - Y coordinate of the arrow end\n* `options` - Array of PlotOption controlling the appearance of the arrowhead and arrow shaft. Relevant options are:\n     * `ArrowType` - Specifies the style of the arrow head (or an option to omit it)\n     * `ArrowSize` - Sets the size of the arrow head (in graph units)\n     * `Color` - Specifies the color of the arrow\n     * `LineStyle` - Specifies the style of the arrow shaft\n     * `LineWidth` - Specifies the width of the arrow shaft",parent:'3280'},{ty:"method",name:"set_x_range",path:"gnuplot::internal::axes2d",desc:"Set the range of values for the X axis\n# Arguments\n* `min` - Minimum X value\n* `max` - Maximum X value",parent:'3280'},{ty:"method",name:"set_y_range",path:"gnuplot::internal::axes2d",desc:"Set the range of values for the Y axis\n# Arguments\n* `min` - Minimum Y value\n* `max` - Maximum Y value",parent:'3280'},{ty:"method",name:"lines",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot with lines connecting each data point\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",parent:'3280'},{ty:"method",name:"points",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot with a point standing in for each data point\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `Color` - Sets the color",parent:'3280'},{ty:"method",name:"lines_points",path:"gnuplot::internal::axes2d",desc:"A combination of lines and points methods (drawn in that order).\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element",parent:'3280'},{ty:"method",name:"x_error_lines",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the X direction.\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y valuess\n* `x_error` - Iterator for the error associated with the x value\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",parent:'3280'},{ty:"method",name:"y_error_lines",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the Y direction.\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `y_error` - Iterator for the error associated with the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",parent:'3280'},{ty:"method",name:"fill_between",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot of two curves (bound by `y_lo` and `y_hi`) with a filled region between them.\n`FillRegion` plot option can be used to control what happens when the curves intersect. If set to Above, then the `y_lo < y_hi` region is filled.\nIf set to Below, then the `y_lo > y_hi` region is filled. Otherwise both regions are filled.\n# Arguments\n* `x` - Iterator for the x values\n* `y_lo` - Iterator for the bottom y values\n* `y_hi` - Iterator for the top y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `FillRegion` - Specifies the region between the two curves to fill\n    * `Color` - Sets the color of the filled region\n    * `FillAlpha` - Sets the transparency of the filled region",parent:'3280'},{ty:"method",name:"boxes",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot using boxes of automatic width. Box widths are set so that there are no gaps between successive boxes (i.e. each box may have a different width).\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - Iterator for the x values (center of the box)\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",parent:'3280'},{ty:"method",name:"boxes_set_width",path:"gnuplot::internal::axes2d",desc:"Plot a 2D scatter-plot using boxes of set (per box) width.\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - Iterator for the x values (center of the box)\n* `y` - Iterator for the y values\n* `w` - Iterator for the box width values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",parent:'3280'},{ty:"mod",name:"axes3d",path:"gnuplot::internal",desc:""},{ty:"mod",name:"coordinates",path:"gnuplot::internal",desc:""},{ty:"enum",name:"Coordinate",path:"gnuplot::internal::coordinates",desc:"Specifies how to interpret the coordinate passed to a plotting command"},{ty:"variant",name:"Graph",path:"gnuplot::internal::coordinates",desc:"Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",parent:'6327'},{ty:"variant",name:"Axis",path:"gnuplot::internal::coordinates",desc:"Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",parent:'6327'},{ty:"mod",name:"external",path:"gnuplot::internal::coordinates",desc:""}];var allPaths = {'2762':{type:'variant',name:'Solid'},'2895':{type:'trait',name:'DataType'},'2755':{type:'variant',name:'Below'},'2780':{type:'enum',name:'LabelOption'},'1978':{type:'variant',name:'Axes3DType'},'6327':{type:'enum',name:'Coordinate'},'2715':{type:'variant',name:'Caption'},'2826':{type:'enum',name:'TickOption'},'2820':{type:'variant',name:'MarkerColor'},'2842':{type:'variant',name:'MinorScale'},'2758':{type:'variant',name:'AlignLeft'},'2767':{type:'variant',name:'DotDotDash'},'6321':{type:'mod',name:'external'},'2760':{type:'variant',name:'AlignCenter'},'2743':{type:'variant',name:'FillRegion'},'2772':{type:'variant',name:'NoArrow'},'1671':{type:'mod',name:'writer'},'2855':{type:'variant',name:'Left'},'6280':{type:'mod',name:'axes3d'},'2769':{type:'variant',name:'Open'},'2036':{type:'struct',name:'Figure'},'2719':{type:'variant',name:'LineWidth'},'2709':{type:'variant',name:'PointSize'},'2699':{type:'mod',name:'options'},'2824':{type:'variant',name:'MarkerSize'},'2739':{type:'variant',name:'FillAlpha'},'1970':{type:'enum',name:'AxesVariant'},'2764':{type:'variant',name:'Dot'},'2814':{type:'variant',name:'MarkerSymbol'},'2851':{type:'enum',name:'BorderLocation2D'},'2705':{type:'variant',name:'PointSymbol'},'1974':{type:'variant',name:'Axes2DType'},'2893':{type:'mod',name:'datatype'},'6335':{type:'variant',name:'Axis'},'2768':{type:'enum',name:'ArrowheadType'},'2766':{type:'variant',name:'DotDash'},'2751':{type:'variant',name:'ArrowSize'},'2838':{type:'variant',name:'Inward'},'2846':{type:'variant',name:'MajorScale'},'3271':{type:'mod',name:'internal'},'2806':{type:'variant',name:'Rotate'},'1958':{type:'mod',name:'figure'},'2747':{type:'variant',name:'ArrowType'},'2777':{type:'variant',name:'Fix'},'2757':{type:'enum',name:'AlignType'},'2731':{type:'variant',name:'BorderColor'},'2860':{type:'mod',name:'private'},'2725':{type:'variant',name:'Color'},'2771':{type:'variant',name:'Filled'},'2778':{type:'variant',name:'Auto'},'2859':{type:'variant',name:'Right'},'2754':{type:'variant',name:'Above'},'2850':{type:'variant',name:'MinorIntervals'},'2701':{type:'enum',name:'PlotOption'},'2787':{type:'variant',name:'Offset'},'2756':{type:'variant',name:'Between'},'2753':{type:'enum',name:'FillRegion'},'6331':{type:'variant',name:'Graph'},'6318':{type:'mod',name:'coordinates'},'2735':{type:'variant',name:'LineStyle'},'3273':{type:'mod',name:'axes2d'},'2773':{type:'enum',name:'AutoOption'},'2761':{type:'enum',name:'DashType'},'2810':{type:'variant',name:'Align'},'2834':{type:'variant',name:'Mirror'},'2857':{type:'variant',name:'Top'},'2802':{type:'variant',name:'TextColor'},'2759':{type:'variant',name:'AlignRight'},'3280':{type:'struct',name:'Axes2D'},'2765':{type:'variant',name:'Dash'},'2853':{type:'variant',name:'Bottom'},'2763':{type:'variant',name:'SmallDot'},'2796':{type:'variant',name:'Font'},'2770':{type:'variant',name:'Closed'},'2830':{type:'variant',name:'OnAxis'},'0':{type:'mod',name:'gnuplot'}};