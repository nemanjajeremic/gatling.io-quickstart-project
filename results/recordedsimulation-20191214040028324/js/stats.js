var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "404",
        "ko": "596"
    },
    "minResponseTime": {
        "total": "766",
        "ok": "1269",
        "ko": "766"
    },
    "maxResponseTime": {
        "total": "13043",
        "ok": "13043",
        "ko": "11987"
    },
    "meanResponseTime": {
        "total": "6657",
        "ok": "7639",
        "ko": "5991"
    },
    "standardDeviation": {
        "total": "3476",
        "ok": "3573",
        "ko": "3245"
    },
    "percentiles1": {
        "total": "6475",
        "ok": "7517",
        "ko": "5984"
    },
    "percentiles2": {
        "total": "9718",
        "ok": "10927",
        "ko": "8808"
    },
    "percentiles3": {
        "total": "12444",
        "ok": "12759",
        "ko": "11239"
    },
    "percentiles4": {
        "total": "12847",
        "ok": "12910",
        "ko": "11659"
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
    "count": 404,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 596,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "28.857",
        "ko": "42.571"
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
        "total": "1000",
        "ok": "404",
        "ko": "596"
    },
    "minResponseTime": {
        "total": "766",
        "ok": "1269",
        "ko": "766"
    },
    "maxResponseTime": {
        "total": "13043",
        "ok": "13043",
        "ko": "11987"
    },
    "meanResponseTime": {
        "total": "6657",
        "ok": "7639",
        "ko": "5991"
    },
    "standardDeviation": {
        "total": "3476",
        "ok": "3573",
        "ko": "3245"
    },
    "percentiles1": {
        "total": "6475",
        "ok": "7517",
        "ko": "5984"
    },
    "percentiles2": {
        "total": "9718",
        "ok": "10927",
        "ko": "8808"
    },
    "percentiles3": {
        "total": "12444",
        "ok": "12759",
        "ko": "11239"
    },
    "percentiles4": {
        "total": "12847",
        "ok": "12910",
        "ko": "11659"
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
    "count": 404,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 596,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "28.857",
        "ko": "42.571"
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
