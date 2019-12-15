var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1925",
        "ko": "8075"
    },
    "minResponseTime": {
        "total": "157",
        "ok": "2395",
        "ko": "157"
    },
    "maxResponseTime": {
        "total": "60275",
        "ok": "59959",
        "ko": "60275"
    },
    "meanResponseTime": {
        "total": "16889",
        "ok": "30900",
        "ko": "13549"
    },
    "standardDeviation": {
        "total": "22838",
        "ok": "16157",
        "ko": "22929"
    },
    "percentiles1": {
        "total": "1276",
        "ok": "30627",
        "ko": "1148"
    },
    "percentiles2": {
        "total": "33259",
        "ok": "44784",
        "ko": "15573"
    },
    "percentiles3": {
        "total": "60055",
        "ok": "55937",
        "ko": "60071"
    },
    "percentiles4": {
        "total": "60116",
        "ok": "58216",
        "ko": "60118"
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
    "count": 1925,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 8075,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "156.25",
        "ok": "30.078",
        "ko": "126.172"
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
        "ok": "1925",
        "ko": "8075"
    },
    "minResponseTime": {
        "total": "157",
        "ok": "2395",
        "ko": "157"
    },
    "maxResponseTime": {
        "total": "60275",
        "ok": "59959",
        "ko": "60275"
    },
    "meanResponseTime": {
        "total": "16889",
        "ok": "30900",
        "ko": "13549"
    },
    "standardDeviation": {
        "total": "22838",
        "ok": "16157",
        "ko": "22929"
    },
    "percentiles1": {
        "total": "1276",
        "ok": "30627",
        "ko": "1148"
    },
    "percentiles2": {
        "total": "33250",
        "ok": "44784",
        "ko": "15573"
    },
    "percentiles3": {
        "total": "60055",
        "ok": "55937",
        "ko": "60071"
    },
    "percentiles4": {
        "total": "60116",
        "ok": "58216",
        "ko": "60118"
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
    "count": 1925,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 8075,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "156.25",
        "ok": "30.078",
        "ko": "126.172"
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
