var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1927",
        "ko": "8073"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "2275",
        "ko": "159"
    },
    "maxResponseTime": {
        "total": "60334",
        "ok": "59856",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "17404",
        "ok": "31073",
        "ko": "14141"
    },
    "standardDeviation": {
        "total": "23691",
        "ok": "16434",
        "ko": "23990"
    },
    "percentiles1": {
        "total": "1170",
        "ok": "30788",
        "ko": "1115"
    },
    "percentiles2": {
        "total": "36874",
        "ok": "44980",
        "ko": "1244"
    },
    "percentiles3": {
        "total": "60077",
        "ok": "56833",
        "ko": "60087"
    },
    "percentiles4": {
        "total": "60149",
        "ok": "59075",
        "ko": "60158"
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
    "count": 1927,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 8073,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "161.29",
        "ok": "31.081",
        "ko": "130.21"
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
        "ok": "1927",
        "ko": "8073"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "2275",
        "ko": "159"
    },
    "maxResponseTime": {
        "total": "60334",
        "ok": "59856",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "17404",
        "ok": "31073",
        "ko": "14141"
    },
    "standardDeviation": {
        "total": "23691",
        "ok": "16434",
        "ko": "23990"
    },
    "percentiles1": {
        "total": "1170",
        "ok": "30788",
        "ko": "1115"
    },
    "percentiles2": {
        "total": "36837",
        "ok": "44980",
        "ko": "1244"
    },
    "percentiles3": {
        "total": "60077",
        "ok": "56833",
        "ko": "60087"
    },
    "percentiles4": {
        "total": "60149",
        "ok": "59075",
        "ko": "60158"
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
    "count": 1927,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 8073,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "161.29",
        "ok": "31.081",
        "ko": "130.21"
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
