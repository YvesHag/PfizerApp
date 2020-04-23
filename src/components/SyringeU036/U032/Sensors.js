const TempGraphOptions = {
    hAxis: {
        title: 'Time',
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
    },

    vAxis: {
        title: "°C",
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
        maxValue: 50,
    },
    series: {
        0: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        1: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        2: { color: "blue", lineWidth: 1, curveType: 'function' },
    },
    legend: { position: 'bottom' },
    backgroundColor: { fill: 'transparent' }
}

const HumGraphOptions = {
    hAxis: {
        title: 'Time',
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
    },

    vAxis: {
        title: "%",
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
        maxValue: 100
    },
    series: {
        0: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        1: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        2: { color: "blue", lineWidth: 1, curveType: 'function' },
    },
    legend: { position: 'bottom' },
    backgroundColor: { fill: 'transparent' }
}

const PresGraphOptions = {
    hAxis: {
        title: 'Time',
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
    },

    vAxis: {
        title: "Pa",
        baselineColor: '#fff',
        gridlines: {
            color: 'transparent'
        },
        minValue: 0,
        maxValue: 100
    },
    series: {
        0: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        1: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
        2: { color: "blue", lineWidth: 1, curveType: 'function' },
    },
    legend: { position: 'bottom' },
    backgroundColor: { fill: 'transparent' }
}



const SENSORS =
    [
        {
            id: "5126-40TT5",
            description: "Temp. Lok U032",
            value: 20,
            minRange: 0,
            maxRange: 40,
            status: "comfort",
            statusColor: "",
            measurements: [
                ['x', 'HighA', 'LowA', "AV"],
                [0, 25, 15, 18],
                [1, 25, 15, 20],
                [2, 25, 15, 35],
                [3, 25, 15, 17.5],
                [4, 25, 15, 14],
                [5, 25, 15, 17],
                [6, 25, 15, 24],
                [7, 25, 15, 23],
            ],
            unit: '°C',
            graphOptions: TempGraphOptions,
            alarmLog: [
                {id:1, content:"Low alarm", time: "15:32:54"},
                {id:2, content:"High alarm", time: "04:18:47"},
                {id:3, content:"Low alarm", time: "20:39:29"}
            ]
        },
        {
            id: "5126-40MT5",
            description: "Hum. Lok U032",
            value: 46,
            maxRange: 40,
            status: "comfort",
            statusColor: "",
            measurements: [
                ['x', 'HighA', 'LowA', "AV"],
                [0, 65, 15, 58],
                [1, 65, 15, 40],
                [2, 65, 15, 45],
                [3, 65, 15, 62],
                [4, 65, 15, 67],
                [5, 65, 15, 17],
                [6, 65, 15, 30],
                [7, 65, 15, 40],
            ],
            unit: '%',
            graphOptions: HumGraphOptions,
            alarmLog: []
        },
        {
            id: "5126-18TT8",
            description: "Temp. Lok U032",
            value: 20,
            minRange: 0,
            maxRange: 40,
            status: "comfort",
            statusColor: "",
            measurements: [
                ['x', 'HighA', 'LowA', "AV"],
                [0, 25, 15, 18],
                [1, 25, 15, 20],
                [2, 25, 15, 35],
                [3, 25, 15, 17.5],
                [4, 25, 15, 14],
                [5, 25, 15, 17],
                [6, 25, 15, 24],
                [7, 25, 15, 23],
            ],
            unit: '°C',
            graphOptions: TempGraphOptions,
            alarmLog: [
                {id:1, content:"Low alarm", time: "15:32:54"},
                {id:2, content:"High alarm", time: "04:18:47"},
                {id:3, content:"Low alarm", time: "20:39:29"}
            ]
        },
        {
            id: "5126-18MT8",
            description: "Hum. Lok U032",
            value: 46,
            maxRange: 40,
            status: "comfort",
            statusColor: "",
            measurements: [
                ['x', 'HighA', 'LowA', "AV"],
                [0, 65, 15, 58],
                [1, 65, 15, 40],
                [2, 65, 15, 45],
                [3, 65, 15, 62],
                [4, 65, 15, 67],
                [5, 65, 15, 17],
                [6, 65, 15, 30],
                [7, 65, 15, 40],
            ],
            unit: '%',
            graphOptions: HumGraphOptions,
            alarmLog: []
        },
        {
            id: "5126-18PT8",
            description: "Druk. Lok U032",
            value: 62,
            maxRange: 40,
            status: "comfort",
            statusColor: "",
            measurements: [
                ['x', 'HighA', 'LowA', "AV"],
                [0, 70, 15, 18],
                [1, 70, 15, 16],
                [2, 70, 15, 30],
                [3, 70, 15, 62],
                [4, 70, 15, 67],
                [5, 70, 15, 50],
                [6, 70, 15, 20],
                [7, 70, 15, 40],
            ],
            unit: 'Pa',
            graphOptions: PresGraphOptions,
            alarmLog: []
        }

    ]
export default SENSORS;