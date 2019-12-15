var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2403",
        "ok": "1956",
        "ko": "447"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1118",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38699",
        "ok": "38699",
        "ko": "3"
    },
    "meanResponseTime": {
        "total": "17082",
        "ok": "20985",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12162",
        "ok": "9989",
        "ko": "1"
    },
    "percentiles1": {
        "total": "17640",
        "ok": "22409",
        "ko": "0"
    },
    "percentiles2": {
        "total": "29993",
        "ok": "30423",
        "ko": "1"
    },
    "percentiles3": {
        "total": "33614",
        "ok": "33695",
        "ko": "1"
    },
    "percentiles4": {
        "total": "37675",
        "ok": "37717",
        "ko": "2"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1953,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 447,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.143",
        "ok": "31.048",
        "ko": "7.095"
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
        "total": "2403",
        "ok": "1956",
        "ko": "447"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1118",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38699",
        "ok": "38699",
        "ko": "3"
    },
    "meanResponseTime": {
        "total": "17082",
        "ok": "20985",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12162",
        "ok": "9989",
        "ko": "1"
    },
    "percentiles1": {
        "total": "17640",
        "ok": "22409",
        "ko": "0"
    },
    "percentiles2": {
        "total": "29993",
        "ok": "30423",
        "ko": "1"
    },
    "percentiles3": {
        "total": "33614",
        "ok": "33694",
        "ko": "1"
    },
    "percentiles4": {
        "total": "37675",
        "ok": "37717",
        "ko": "2"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1953,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 447,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.143",
        "ok": "31.048",
        "ko": "7.095"
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
