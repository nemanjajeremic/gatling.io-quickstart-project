var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "210",
        "ok": "210",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4024",
        "ok": "4024",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1411",
        "ok": "1411",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1351",
        "ok": "1351",
        "ko": "-"
    },
    "percentiles1": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3140",
        "ok": "3140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3743",
        "ok": "3743",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3844",
        "ok": "3844",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 103,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 86,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21",
        "ok": "21",
        "ko": "-"
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
        "total": "210",
        "ok": "210",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4024",
        "ok": "4024",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1411",
        "ok": "1411",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1351",
        "ok": "1351",
        "ko": "-"
    },
    "percentiles1": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3140",
        "ok": "3140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3743",
        "ok": "3743",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3844",
        "ok": "3844",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 103,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 86,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21",
        "ok": "21",
        "ko": "-"
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
