//获取html元素；
var pie = document.getElementById('pie');
var pieCycle = document.getElementById('pieCycle');
var bar = document.getElementById('bar');
var bar_line = document.getElementById('bar_line');
var pie_dynamic = document.getElementById('pie_dynamic');
var map3D = document.getElementById('map_3D');

//把要画的表格放在charts中；
var charts = [];
//饼图
var myChart = echarts.init(pie);
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: { color: '#E4CCCC' },
        data: ['外省企业', '本省企业']
    },
    series: [{
        name: '企业占有率',
        type: 'pie',
        radius: '45%',
        center: ['50%', '50%'],
        data: [
            { value: 42, name: '外省企业' },
            { value: 58, name: '本省企业' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart.setOption(option);
charts.push(myChart);
//圆环图；
myChart = echarts.init(pieCycle);
option = {
    color: ['#546ef3', '#a6cb09', '#f8bd00'],

    legend: {
        //show:false,
        x: 'center',
        // y: "bottom",

    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{a} : <br />{c}%",
    },
    polar: {
        center: ['50%', '50%'],
        radius: '160%' //图形大小
    },
    angleAxis: {
        show: false,
        startAngle: 90,
        min: 0,
        max: 100
    },
    radiusAxis: {
        type: 'category',
        show: false,
        data: ["4级权重媒体", "3级权重媒体", "5级权重媒体"]
    },
    series: [{
            type: "bar",
            name: "5级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20,
            barCategoryGap: "40%",
            // data: ["9.66","23.09","53.09"]
            data: ["9.66"]
        },
        {
            type: "bar",
            name: "3级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20,
            barCategoryGap: "40%",
            // data: ["14.09","55.09","27.09"]
            data: ["14.09"]
        },
        {
            type: "bar",
            name: "4级权重媒体",
            coordinateSystem: "polar",
            barWidth: 20, //宽度
            barCategoryGap: "40%",
            // data: ["76.25","47.09","22.09"],
            data: ["76.25"],
        }

    ]
};
myChart.setOption(option);
charts.push(myChart);

myChart = echarts.init(bar);
option = {
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue']
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        data: [120, 200],
        type: 'bar'
    }]
};
myChart.setOption(option);
charts.push(myChart);
//bug;
myChart = echarts.init(bar_line);
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '水量',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [{
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2]
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5]
        }
    ]
};
myChart.setOption(option);
charts.push(myChart);
myChart = echarts.init(pie_dynamic);
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['有待完成', '目前已完成']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            { value: 335, name: '有待完成' },
            { value: 1548, name: '目前已完成' }
        ]
    }]
};
myChart.setOption(option);
charts.push(myChart);
window.onresize = function() {
    for (var i = 0; i < charts.length; i++) {
        //resizeMainContainer();
        charts[i].resize();
    }
};