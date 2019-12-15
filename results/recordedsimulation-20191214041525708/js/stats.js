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
        "total": "154",
        "ok": "-",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "33621",
        "ok": "-",
        "ko": "33621"
    },
    "meanResponseTime": {
        "total": "7335",
        "ok": "-",
        "ko": "7335"
    },
    "standardDeviation": {
        "total": "8983",
        "ok": "-",
        "ko": "8983"
    },
    "percentiles1": {
        "total": "1573",
        "ok": "-",
        "ko": "1573"
    },
    "percentiles2": {
        "total": "13201",
        "ok": "-",
        "ko": "13203"
    },
    "percentiles3": {
        "total": "26021",
        "ok": "-",
        "ko": "26021"
    },
    "percentiles4": {
        "total": "32401",
        "ok": "-",
        "ko": "32401"
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
        "total": "277.778",
        "ok": "-",
        "ko": "277.778"
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
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "-",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "33621",
        "ok": "-",
        "ko": "33621"
    },
    "meanResponseTime": {
        "total": "7335",
        "ok": "-",
        "ko": "7335"
    },
    "standardDeviation": {
        "total": "8983",
        "ok": "-",
        "ko": "8983"
    },
    "percentiles1": {
        "total": "1573",
        "ok": "-",
        "ko": "1572"
    },
    "percentiles2": {
        "total": "13198",
        "ok": "-",
        "ko": "13201"
    },
    "percentiles3": {
        "total": "26021",
        "ok": "-",
        "ko": "26021"
    },
    "percentiles4": {
        "total": "32401",
        "ok": "-",
        "ko": "32401"
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
        "total": "277.778",
        "ok": "-",
        "ko": "277.778"
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
