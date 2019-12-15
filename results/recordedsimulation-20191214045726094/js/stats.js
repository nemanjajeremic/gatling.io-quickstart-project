var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "1788",
        "ko": "18212"
    },
    "minResponseTime": {
        "total": "134",
        "ok": "734",
        "ko": "134"
    },
    "maxResponseTime": {
        "total": "60317",
        "ok": "56099",
        "ko": "60317"
    },
    "meanResponseTime": {
        "total": "9648",
        "ok": "29358",
        "ko": "7712"
    },
    "standardDeviation": {
        "total": "17560",
        "ok": "15018",
        "ko": "16571"
    },
    "percentiles1": {
        "total": "1794",
        "ok": "29502",
        "ko": "1788"
    },
    "percentiles2": {
        "total": "1855",
        "ok": "41864",
        "ko": "1842"
    },
    "percentiles3": {
        "total": "55400",
        "ok": "52917",
        "ko": "55460"
    },
    "percentiles4": {
        "total": "56203",
        "ok": "55029",
        "ko": "56242"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1787,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 18212,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "327.869",
        "ok": "29.311",
        "ko": "298.557"
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
        "ok": "1788",
        "ko": "18212"
    },
    "minResponseTime": {
        "total": "134",
        "ok": "734",
        "ko": "134"
    },
    "maxResponseTime": {
        "total": "60317",
        "ok": "56099",
        "ko": "60317"
    },
    "meanResponseTime": {
        "total": "9648",
        "ok": "29358",
        "ko": "7712"
    },
    "standardDeviation": {
        "total": "17560",
        "ok": "15018",
        "ko": "16571"
    },
    "percentiles1": {
        "total": "1794",
        "ok": "29502",
        "ko": "1788"
    },
    "percentiles2": {
        "total": "1855",
        "ok": "41864",
        "ko": "1842"
    },
    "percentiles3": {
        "total": "55400",
        "ok": "52917",
        "ko": "55460"
    },
    "percentiles4": {
        "total": "56203",
        "ok": "55029",
        "ko": "56242"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1787,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 18212,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "327.869",
        "ok": "29.311",
        "ko": "298.557"
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
