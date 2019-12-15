var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1219",
        "ko": "8781"
    },
    "minResponseTime": {
        "total": "70",
        "ok": "3811",
        "ko": "70"
    },
    "maxResponseTime": {
        "total": "60244",
        "ok": "59063",
        "ko": "60244"
    },
    "meanResponseTime": {
        "total": "18461",
        "ok": "31870",
        "ko": "16600"
    },
    "standardDeviation": {
        "total": "23973",
        "ok": "15073",
        "ko": "24383"
    },
    "percentiles1": {
        "total": "1287",
        "ok": "31848",
        "ko": "1163"
    },
    "percentiles2": {
        "total": "46212",
        "ok": "45419",
        "ko": "46254"
    },
    "percentiles3": {
        "total": "58411",
        "ok": "55412",
        "ko": "58477"
    },
    "percentiles4": {
        "total": "59331",
        "ok": "57162",
        "ko": "59468"
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
    "count": 1219,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 8781,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "158.73",
        "ok": "19.349",
        "ko": "139.381"
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
        "ok": "1219",
        "ko": "8781"
    },
    "minResponseTime": {
        "total": "70",
        "ok": "3811",
        "ko": "70"
    },
    "maxResponseTime": {
        "total": "60244",
        "ok": "59063",
        "ko": "60244"
    },
    "meanResponseTime": {
        "total": "18461",
        "ok": "31870",
        "ko": "16600"
    },
    "standardDeviation": {
        "total": "23973",
        "ok": "15073",
        "ko": "24383"
    },
    "percentiles1": {
        "total": "1285",
        "ok": "31848",
        "ko": "1163"
    },
    "percentiles2": {
        "total": "46213",
        "ok": "45419",
        "ko": "46256"
    },
    "percentiles3": {
        "total": "58412",
        "ok": "55412",
        "ko": "58477"
    },
    "percentiles4": {
        "total": "59331",
        "ok": "57162",
        "ko": "59468"
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
    "count": 1219,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 8781,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "158.73",
        "ok": "19.349",
        "ko": "139.381"
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
