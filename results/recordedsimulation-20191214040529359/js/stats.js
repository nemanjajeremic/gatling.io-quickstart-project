var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "-",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "60143",
        "ok": "-",
        "ko": "60143"
    },
    "meanResponseTime": {
        "total": "10883",
        "ok": "-",
        "ko": "10883"
    },
    "standardDeviation": {
        "total": "13257",
        "ok": "-",
        "ko": "13257"
    },
    "percentiles1": {
        "total": "3252",
        "ok": "-",
        "ko": "3251"
    },
    "percentiles2": {
        "total": "17675",
        "ok": "-",
        "ko": "17675"
    },
    "percentiles3": {
        "total": "36112",
        "ok": "-",
        "ko": "36112"
    },
    "percentiles4": {
        "total": "59847",
        "ok": "-",
        "ko": "59847"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "153.846",
        "ok": "-",
        "ko": "153.846"
    }
},
contents: {
"req_switch-price-4fcdd": {
        type: "REQUEST",
        name: "switch/price",
path: "switch/price",
pathFormatted: "req_switch-price-4fcdd",
stats: {
    "name": "switch/price",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "-",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "60143",
        "ok": "-",
        "ko": "60143"
    },
    "meanResponseTime": {
        "total": "10883",
        "ok": "-",
        "ko": "10883"
    },
    "standardDeviation": {
        "total": "13257",
        "ok": "-",
        "ko": "13257"
    },
    "percentiles1": {
        "total": "3252",
        "ok": "-",
        "ko": "3251"
    },
    "percentiles2": {
        "total": "17677",
        "ok": "-",
        "ko": "17670"
    },
    "percentiles3": {
        "total": "36112",
        "ok": "-",
        "ko": "36112"
    },
    "percentiles4": {
        "total": "59847",
        "ok": "-",
        "ko": "59847"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "153.846",
        "ok": "-",
        "ko": "153.846"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
