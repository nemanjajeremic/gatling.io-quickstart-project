var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1490",
        "ko": "8510"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "1080",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "60295",
        "ok": "59653",
        "ko": "60295"
    },
    "meanResponseTime": {
        "total": "11892",
        "ok": "25467",
        "ko": "9515"
    },
    "standardDeviation": {
        "total": "16967",
        "ok": "15164",
        "ko": "16128"
    },
    "percentiles1": {
        "total": "1696",
        "ok": "23780",
        "ko": "1582"
    },
    "percentiles2": {
        "total": "19312",
        "ok": "36527",
        "ko": "10301"
    },
    "percentiles3": {
        "total": "58817",
        "ok": "57228",
        "ko": "59949"
    },
    "percentiles4": {
        "total": "60030",
        "ok": "58828",
        "ko": "60033"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1489,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 8510,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "158.73",
        "ok": "23.651",
        "ko": "135.079"
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
        "ok": "1490",
        "ko": "8510"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "1080",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "60295",
        "ok": "59653",
        "ko": "60295"
    },
    "meanResponseTime": {
        "total": "11892",
        "ok": "25467",
        "ko": "9515"
    },
    "standardDeviation": {
        "total": "16967",
        "ok": "15164",
        "ko": "16128"
    },
    "percentiles1": {
        "total": "1696",
        "ok": "23780",
        "ko": "1582"
    },
    "percentiles2": {
        "total": "19316",
        "ok": "36527",
        "ko": "10271"
    },
    "percentiles3": {
        "total": "58817",
        "ok": "57228",
        "ko": "59948"
    },
    "percentiles4": {
        "total": "60030",
        "ok": "58828",
        "ko": "60033"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1489,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 8510,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "158.73",
        "ok": "23.651",
        "ko": "135.079"
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
