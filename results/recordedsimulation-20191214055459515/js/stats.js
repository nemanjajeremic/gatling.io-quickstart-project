var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2404",
        "ok": "1271",
        "ko": "1133"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4539",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "50545",
        "ok": "50545",
        "ko": "45052"
    },
    "meanResponseTime": {
        "total": "15421",
        "ok": "28094",
        "ko": "1204"
    },
    "standardDeviation": {
        "total": "16734",
        "ok": "12542",
        "ko": "5955"
    },
    "percentiles1": {
        "total": "10631",
        "ok": "28421",
        "ko": "1"
    },
    "percentiles2": {
        "total": "29710",
        "ok": "38637",
        "ko": "1"
    },
    "percentiles3": {
        "total": "45707",
        "ok": "47121",
        "ko": "2"
    },
    "percentiles4": {
        "total": "48040",
        "ok": "48530",
        "ko": "28935"
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
    "count": 1271,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 1133,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.159",
        "ok": "20.175",
        "ko": "17.984"
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
        "total": "2404",
        "ok": "1271",
        "ko": "1133"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4539",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "50545",
        "ok": "50545",
        "ko": "45052"
    },
    "meanResponseTime": {
        "total": "15421",
        "ok": "28094",
        "ko": "1204"
    },
    "standardDeviation": {
        "total": "16734",
        "ok": "12542",
        "ko": "5955"
    },
    "percentiles1": {
        "total": "10631",
        "ok": "28421",
        "ko": "1"
    },
    "percentiles2": {
        "total": "29710",
        "ok": "38637",
        "ko": "1"
    },
    "percentiles3": {
        "total": "45707",
        "ok": "47121",
        "ko": "2"
    },
    "percentiles4": {
        "total": "48040",
        "ok": "48530",
        "ko": "28935"
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
    "count": 1271,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 1133,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.159",
        "ok": "20.175",
        "ko": "17.984"
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
