
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("http://contractless-load-balancer-661842337.eu-west-1.elb.amazonaws.com")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36")





	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/switch/price?number=9328654&time=2019-08-01"))


	//setUp(scn.inject(atOnceUsers(20000))).protocols(httpProtocol);
	//setUp(scn.inject(atOnceUsers(20000))).protocols(httpProtocol);
	setUp(scn.inject(constantUsersPerSec(100) during(2 minutes))).throttle(
  reachRps(1000) in (3 seconds),holdFor(1 minute)).protocols(httpProtocol)
}