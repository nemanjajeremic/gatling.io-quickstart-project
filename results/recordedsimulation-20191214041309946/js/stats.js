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
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "maxResponseTime": {
        "total": "33858",
        "ok": "-",
        "ko": "33858"
    },
    "meanResponseTime": {
        "total": "7464",
        "ok": "-",
        "ko": "7464"
    },
    "standardDeviation": {
        "total": "8873",
        "ok": "-",
        "ko": "8873"
    },
    "percentiles1": {
        "total": "1701",
        "ok": "-",
        "ko": "1701"
    },
    "percentiles2": {
        "total": "13763",
        "ok": "-",
        "ko": "13749"
    },
    "percentiles3": {
        "total": "26308",
        "ok": "-",
        "ko": "26306"
    },
    "percentiles4": {
        "total": "33305",
        "ok": "-",
        "ko": "33305"
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
        "total": "270.27",
        "ok": "-",
        "ko": "270.27"
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
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "maxResponseTime": {
        "total": "33858",
        "ok": "-",
        "ko": "33858"
    },
    "meanResponseTime": {
        "total": "7464",
        "ok": "-",
        "ko": "7464"
    },
    "standardDeviation": {
        "total": "8873",
        "ok": "-",
        "ko": "8873"
    },
    "percentiles1": {
        "total": "1702",
        "ok": "-",
        "ko": "1702"
    },
    "percentiles2": {
        "total": "13760",
        "ok": "-",
        "ko": "13732"
    },
    "percentiles3": {
        "total": "26308",
        "ok": "-",
        "ko": "26306"
    },
    "percentiles4": {
        "total": "33305",
        "ok": "-",
        "ko": "33305"
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
        "total": "270.27",
        "ok": "-",
        "ko": "270.27"
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
