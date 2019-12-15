var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "1923",
        "ko": "18077"
    },
    "minResponseTime": {
        "total": "165",
        "ok": "862",
        "ko": "165"
    },
    "maxResponseTime": {
        "total": "60408",
        "ok": "59958",
        "ko": "60408"
    },
    "meanResponseTime": {
        "total": "9630",
        "ok": "31282",
        "ko": "7327"
    },
    "standardDeviation": {
        "total": "18051",
        "ok": "16476",
        "ko": "16627"
    },
    "percentiles1": {
        "total": "1724",
        "ok": "31551",
        "ko": "1719"
    },
    "percentiles2": {
        "total": "1878",
        "ok": "45657",
        "ko": "1790"
    },
    "percentiles3": {
        "total": "59926",
        "ok": "56993",
        "ko": "59988"
    },
    "percentiles4": {
        "total": "60166",
        "ok": "59035",
        "ko": "60175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1921,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 18077,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "317.46",
        "ok": "30.524",
        "ko": "286.937"
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
        "ok": "1923",
        "ko": "18077"
    },
    "minResponseTime": {
        "total": "165",
        "ok": "862",
        "ko": "165"
    },
    "maxResponseTime": {
        "total": "60408",
        "ok": "59958",
        "ko": "60408"
    },
    "meanResponseTime": {
        "total": "9630",
        "ok": "31282",
        "ko": "7327"
    },
    "standardDeviation": {
        "total": "18051",
        "ok": "16476",
        "ko": "16627"
    },
    "percentiles1": {
        "total": "1724",
        "ok": "31551",
        "ko": "1719"
    },
    "percentiles2": {
        "total": "1878",
        "ok": "45657",
        "ko": "1790"
    },
    "percentiles3": {
        "total": "59918",
        "ok": "56993",
        "ko": "59986"
    },
    "percentiles4": {
        "total": "60166",
        "ok": "59035",
        "ko": "60175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1921,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 18077,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "317.46",
        "ok": "30.524",
        "ko": "286.937"
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
