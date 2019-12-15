var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2405",
        "ok": "1820",
        "ko": "585"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2029",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38637",
        "ok": "38637",
        "ko": "8"
    },
    "meanResponseTime": {
        "total": "15297",
        "ok": "20214",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "11988",
        "ok": "9515",
        "ko": "1"
    },
    "percentiles1": {
        "total": "14923",
        "ok": "20965",
        "ko": "0"
    },
    "percentiles2": {
        "total": "27057",
        "ok": "29711",
        "ko": "1"
    },
    "percentiles3": {
        "total": "31864",
        "ok": "32963",
        "ko": "1"
    },
    "percentiles4": {
        "total": "37071",
        "ok": "37387",
        "ko": "2"
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
    "count": 1820,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 585,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.175",
        "ok": "28.889",
        "ko": "9.286"
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
        "total": "2405",
        "ok": "1820",
        "ko": "585"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2029",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38637",
        "ok": "38637",
        "ko": "8"
    },
    "meanResponseTime": {
        "total": "15297",
        "ok": "20214",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "11988",
        "ok": "9515",
        "ko": "1"
    },
    "percentiles1": {
        "total": "14923",
        "ok": "20965",
        "ko": "0"
    },
    "percentiles2": {
        "total": "27057",
        "ok": "29711",
        "ko": "1"
    },
    "percentiles3": {
        "total": "31864",
        "ok": "32963",
        "ko": "1"
    },
    "percentiles4": {
        "total": "37071",
        "ok": "37387",
        "ko": "2"
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
    "count": 1820,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 585,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.175",
        "ok": "28.889",
        "ko": "9.286"
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
