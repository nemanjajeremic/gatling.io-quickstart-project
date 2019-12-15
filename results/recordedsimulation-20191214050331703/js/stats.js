var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "1921",
        "ko": "18079"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "1658",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "60348",
        "ok": "59883",
        "ko": "60348"
    },
    "meanResponseTime": {
        "total": "9508",
        "ok": "31040",
        "ko": "7220"
    },
    "standardDeviation": {
        "total": "17894",
        "ok": "16284",
        "ko": "16478"
    },
    "percentiles1": {
        "total": "1648",
        "ok": "30943",
        "ko": "1627"
    },
    "percentiles2": {
        "total": "1920",
        "ok": "45593",
        "ko": "1870"
    },
    "percentiles3": {
        "total": "59685",
        "ok": "56119",
        "ko": "59779"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "59430",
        "ko": "60012"
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
    "count": 1921,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 18079,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "30.016",
        "ko": "282.484"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "20000",
        "ok": "1921",
        "ko": "18079"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "1658",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "60348",
        "ok": "59883",
        "ko": "60348"
    },
    "meanResponseTime": {
        "total": "9508",
        "ok": "31040",
        "ko": "7220"
    },
    "standardDeviation": {
        "total": "17894",
        "ok": "16284",
        "ko": "16478"
    },
    "percentiles1": {
        "total": "1650",
        "ok": "30943",
        "ko": "1626"
    },
    "percentiles2": {
        "total": "1920",
        "ok": "45593",
        "ko": "1870"
    },
    "percentiles3": {
        "total": "59685",
        "ok": "56119",
        "ko": "59779"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "59430",
        "ko": "60012"
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
    "count": 1921,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 18079,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "30.016",
        "ko": "282.484"
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
