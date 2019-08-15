/*=========================================================================================
    File Name: dashboard-lite.js
    Description: intialize advance cards
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/
(function(window, document, $) {
    'use strict';

    /**********************************************************
    *                    Projects Task Status                  *
    **********************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx2 = $("#tb-cnr-line");

    // Chart Options
    var userPageVisitOptions = {
        responsive: true,
        maintainAspectRatio: false,
        pointDotStrokeWidth : 4,
        legend: {
            display: false,
            labels: {
                fontColor: '#FFF',
                boxWidth: 10,
            },
            position: 'top',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "rgba(255,255,255, 0.3)",
                    drawTicks: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                    min: 0,
                    max: 160,
                    maxTicksLimit: 4
                },
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        },
    };
    
    /****************************************************
    *               TB Presumptive TB              *
    ****************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx1 = document.getElementById("tb-presumptive-line").getContext("2d");

    // Create Linear Gradient
    var white_gradient = ctx1.createLinearGradient(0, 0, 0,400);
    white_gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
    white_gradient.addColorStop(1, 'rgba(255,255,255,0)');

    // Chart Options
    var empSatOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(0,0,0,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 280
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 40,
            text: '82%'
        }
    };

    // Chart Data
    var empSatData = {
        labels: ["2014", "2015", "2016", "2017", "2018"],
        datasets: [{
            label: "Presumptive TB Examination Rate",
            data: [145.9,159.6,157.9,180.4,245.7,],   
            backgroundColor: white_gradient,
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 2,
            strokeColor : "#ff6c23",
            pointColor : "#fff",
            pointBorderColor: "rgba(255,255,255,1)",
            pointBackgroundColor: "#3BAFDA",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
        }]
    };

    var empSatconfig = {
        type: 'line',

        // Chart Options
        options : empSatOptions,

        // Chart Data
        data : empSatData
    };

    // Create the chart
    var areaChart = new Chart(ctx1, empSatconfig);

    // Chart Data
    var userPageVisitData = {
        labels: ["2014", "2015", "2016", "2017", "2018"],
        datasets: [
        {
            label: "Bact Confirm",
            data: [54.8, 50.4, 53.2, 46.8, 46.4,],
            backgroundColor: 'transparent',
            borderColor: "#FF6E40",
            pointColor : "#fff",
            pointBorderColor: "#FF6E40",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 3,
        },
        {
            label: "All Forms",
            data: [148.4, 136.8,134,143.2,133.6] ,
            backgroundColor: 'transparent',
            borderColor: "#1DE9B6",
            pointColor : "#fff",
            pointBorderColor: "#1DE9B6",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 3,
        }

    ]
    };

    var userPageVisitConfig = {
        type: 'line',
        // Chart Options
        options : userPageVisitOptions,
        // Chart Data
        data : userPageVisitData
    };

    // Create the chart
    var stackedAreaChart = new Chart(ctx2, userPageVisitConfig);

    // // Live chart update random data for the new entry
    // setInterval(function() {
    //     setStackedAreaChartData(stackedAreaChart.data.datasets[0].data, 5, 25);
    //     setStackedAreaChartData(stackedAreaChart.data.datasets[1].data, 35, 60);
    // }, 3500);
    // function setStackedAreaChartData(data, minValue, maxValue) {
    //     data.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    //     data.shift();
    //     stackedAreaChart.update();
    // }

    // *               TB Presumptive TB              *
    // ****************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx3 = document.getElementById("tb-tsr-line").getContext("2d");

    // Create Linear Gradient
    var white_gradient = ctx3.createLinearGradient(0, 0, 0,300);
    white_gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
    white_gradient.addColorStop(1, 'rgba(255,255,255,0)');

    // Chart Options
    var tsrOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(0,0,0,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 110
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 40,
            text: '82%'
        }
    };

    // Chart Data
    var tsrData = {
        labels: ["2014", "2015", "2016", "2017", "2018"],
        datasets: [{
            label: "TB: Treatment Success Rate",
            data: [89,86,87,86,86,],   
            backgroundColor: white_gradient,
            borderColor: '#ff6c23',
            borderWidth: 2,
            strokeColor : "#ff6c23",
            pointColor : "#fffff",
            pointBorderColor: "rgba(255,255,255,1)",
            pointBackgroundColor: "#3BAFDA",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
        }]
    };

    var tsrconfig = {
        type: 'line',

        // Chart Options
        options : tsrOptions,

        // Chart Data
        data : tsrData
    };

    // Create the chart
    var tsrChart = new Chart(ctx3, tsrconfig);




    // Nap data ////////////////////////////////////////////////////////////////

    var ctx4 = document.getElementById('hiv-pmct-line').getContext('2d');
    // Chart Options
    var hivpmctchartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        }
    };

    // Chart Data
    var hivpmctchartData = {
        labels: ["2014", "2015", "2016", "2017"],
        datasets: [{
            label: "PMCT-  HIV Testing % among Pregnant",
            data: [98, 104, 106, 94],
            backgroundColor: "rgba(201,187,174,.3)",
            borderColor: "transparent",
            pointBorderColor: "#C9BBAE",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "# HIV Positive Mother",
            data: [74, 71, 64, 63],
            backgroundColor: "rgba(29,233,182,.6)",
            borderColor: "transparent",
            pointBorderColor: "#1DE9B6",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var hivpmctconfig = {
        type: 'line',

        // Chart Options
        options : hivpmctchartOptions,

        // Chart Data
        data : hivpmctchartData
    };

    // Create the chart
    var areaChart = new Chart(ctx4, hivpmctconfig);


    // positive rate 

    var ctx5 = document.getElementById('hiv-pmct-bar').getContext('2d');
    // Chart Options
    var hivpmctbarchartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        }
    };

    // Chart Data
    var hivpmctbarchartData = {
        labels: ["2014", "2015", "2016", "2017"],
        datasets: [{
            label: "Shan State",
            data: [.2, .16, .14, .12],
            backgroundColor: "transparent",
            borderColor: "rgba(29,233,182,.6)",
            pointBorderColor: "#C9BBAE",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "National",
            data: [.75, .54, .5, .3],
            backgroundColor: "transparent",
            borderColor: "grey",
            borderDash: [5, 5],
            pointBorderColor: "#1DE9B6",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var hivpmctbarconfig = {
        type: 'line',

        // Chart Options
        options : hivpmctbarchartOptions,

        // Chart Data
        data : hivpmctbarchartData
    };

    // Create the chart
    var barChart = new Chart(ctx5, hivpmctbarconfig);

    //positive rate

   //Get the context of the Chart canvas element we want to select
   var ctx6 = document.getElementById('hiv-art-line').getContext('2d');

   // Chart Options
   var artchartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
           position: 'bottom',
       },
       hover: {
           mode: 'label'
       },
       scales: {
           xAxes: [{
               display: true,
               gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false,
               },
               scaleLabel: {
                   display: false,
                   labelString: 'Month'
               }
           }],
           yAxes: [{
               display: false,
               gridLines: {
                   color: "#f3f3f3",
                   drawTicks: false,
               },
               scaleLabel: {
                   display: true,
                   labelString: 'Value'
               }
           }]
       },
       title: {
           display: false,
           text: 'Chart.js Line Chart - Legend'
       }
   };

   // Chart Data
   var artchartData = {
       labels: ["2013", "2014", "2015", "2016", "2017"],
       datasets: [{
           label: "No of Pepole Living with HIV On ART",
           data: [1464, 1811, 2241, 2573, 2984, ],
           lineTension: 0,
           fill: false,
           borderColor: "#FF5722",
           pointBorderColor: "#FF5722",
           pointBackgroundColor: "#FFF",
           pointBorderWidth: 2,
           pointHoverBorderWidth: 2,
           pointRadius: 4,
       }]
   };

   var artconfig = {
       type: 'line',

       // Chart Options
       options : artchartOptions,

       data : artchartData
   };

   // Create the chart
   var lineChart = new Chart(ctx6, artconfig);


   /*=========================================================================================
    File Name: combo.js
    Description: google combo bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Malaria charts//////////////////////////////////////////////////////////////////////////////////////////
// ------------------------------
var ctx7 = document.getElementById('malaria-chart').getContext('2d');
// Chart Options
var malariachartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: false,
                labelString: 'Month'
            }
              }],
              yAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left",
                id: "y-axis-1",
            }, {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "right",
                id: "y-axis-2",

                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
    },
    title: {
        display: false,
        text: 'Chart.js Line Chart - Legend'
    }
};

// Chart Data
var malariachartData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        label: "Malaria Cases",
        data: [16207, 10184, 5894, 2753 , 1037],
        type: 'line',
        // backgroundColor: "lightblue",
        borderColor: "rgba(29,233,182,.6)",
        pointBorderColor: "#C9BBAE",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-1",
    }, {
        label: "Malaria Death",
        data: [28, 14, 3, 0, 0],
        backgroundColor: "lightblue",
        borderColor: "grey",
        borderDash: [5, 5],
        pointBorderColor: "#1DE9B6",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-2",
    }]
};

var malariabarconfig = {
    type: 'bar',

    // Chart Options
    options : malariachartOptions,

    // Chart Data
    data : malariachartData
};

// Create the chart
var barChart = new Chart(ctx7, malariabarconfig);




///////////// DHF/////////////




var ctx8 = document.getElementById('dhf-chart').getContext('2d');
// Chart Options
var dhfchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: false,
                labelString: 'Month'
            }
              }],
              yAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left",
                id: "y-axis-1",
            }, {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "right",
                id: "y-axis-2",

                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
    },
    title: {
        display: false,
        text: 'Chart.js Line Chart - Legend'
    }
};

// Chart Data
var dhfchartData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        label: "DHF Cases",
        data: [372, 128, 787, 491, 708],
        type: 'line',
        // backgroundColor: "lightblue",
        borderColor: "rgba(29,233,182,.6)",
        pointBorderColor: "#C9BBAE",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-1",
    }, {
        label: "DHF Death",
        data: [2, 0, 3, 6, 1],
        backgroundColor: "lightblue",
        borderColor: "grey",
        borderDash: [5, 5],
        pointBorderColor: "#1DE9B6",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-2",
    }]
};

var dhfbarconfig = {
    type: 'bar',

    // Chart Options
    options : dhfchartOptions,

    // Chart Data
    data : dhfchartData
};

// Create the chart
var barChart = new Chart(ctx8, dhfbarconfig);

// Malaria charts//////////////////////////////////////////////////////////////////////////////////////////
// Resize chart
// ------------------------------
///////EMPloyee//////



var ctx9 = document.getElementById('emp-chart').getContext('2d');
// Chart Options
var empchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: false,
                labelString: 'Month'
            }
              }],
              yAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left",
                id: "y-axis-1",
            }, {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "right",
                id: "y-axis-2",

                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
    },
    title: {
        display: false,
        text: 'Chart.js Line Chart - Legend'
    }
};

// Chart Data
var empchartData = {
    labels: [  'Hopone',
        'Hsihseng',
        'Kalaw',
        'Kunhein',
        'Kyithi',
        'Laikha',
        'Lankho',
        'Lawksawk',
        'Loilem',
        'Maukmai',
        'Mongkaing',
        'Mongnai',
        'Mongshu',
        'Namsang',
        'Nyaungshwe',
        'Pekon',
        'Pindaya',
        'Pinlaung',
        'Taunggyi',
        'Ywangan',



    ],
    datasets: [{
        label: "Total Employees",
        data: [149,
            204,
            113,
            33,
            44,
            43,
            61,
            72,
            71,
            53,
            43,
            34,
            43,
            78,
            245,
            110,
            56,
            111,
            124,
            93,
             ],
        type: 'bar',
        // backgroundColor: "lightblue",
        borderColor: "rgba(29,233,182,.6)",
        pointBorderColor: "#C9BBAE",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-1",
    }, {
        label: "Total Health Fascility",
        data: [9,
            12,
            14,
            8,
            10,
            6,
            8,
            7,
            13,
            11,
            6,
            6,
            4,
            3,
            12,
            11,
            6,
            10,
            10,
            9,
             ],
        backgroundColor: "lightblue",
        borderColor: "grey",
        borderDash: [5, 5],
        pointBorderColor: "#1DE9B6",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        yAxisID: "y-axis-2",
    }]
};

var empbarconfig = {
    type: 'bar',

    // Chart Options
    options : empchartOptions,

    // Chart Data
    data : empchartData
};

// Create the chart
var barChart = new Chart(ctx9, empbarconfig);








///////pie



var ctx = $("#emp-pie");



// Chart Options
var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration:500,
};

// Chart Data
var chartData = {
    labels: ['District Health Department',
        'Leprosy',
        'Maternal & Child Health',
        'MCH',
       'Mobile Clinic',
        'NMCP',
      'NTP',
      ' RHC',
       'School Health ',
      'SHU',
       'TB',
        'Township Heath Department',
        'Urban Health Center',
        'Disease Control',
        ],
    datasets: [{
        label: "Employees",
        data: [ 4,
            3,
            76,
            36,
            1,
            14,
            9,
            916,
            19,
            163,
            3,
            514,
            19,
            3,
             ],
        backgroundColor: ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","#83AF9B","#ECD078","#D95B43","#C02942","#542437",],
    }, {
        label: "Health Fascilities",
        data: [2,
            5,
            17,
            6,
            1,
            15,
            7,
            67,
            7,
            17,
            3,
            20,
            6,
            2,
            ],
        backgroundColor: ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","#83AF9B","#ECD078","#D95B43","#C02942","#542437"],
    }]
};

var config = {
    type: 'doughnut',

    // Chart Options
    options : chartOptions,

    data : chartData
};

// Create the chart
var doughnutSimpleChart = new Chart(ctx, config);



////////////EMP




$(function () {

    // Resize chart on menu width change and window resize
    $(window).on('resize', resize);
    $(".menu-toggle").on('click', resize);

    // Resize function
    function resize() {
        drawCombo();
    }
});


    





})(window, document, jQuery);
