// Fireside Chat: Serverless Application Architecture
// Ben Sigelman: @el_bhs, @lightstephq 
// Alex Salazar: @salatzar, stormpath

// Serverless Architecture
	// 	An unused term until 6 months ago
	// Buzzword to replace microservices

	// API driven development
		// Find stripe, etc to use

	// Other term in backend as a services

	// Newer: functions as a service
		// calls something small that's atomic and stateless

	// Serverless is like have a receipe, but sending it to someone to cook it
	// you still get food, but don't have to deal wit the stove, etc

	// building a set of finite, stateless functions

	// took monolithic java app
		// looked at AWS Lambda, wrote own and made stormpath
		// POC

		// Redeploy update and maintain modules of code without having to reload/rebuild entire application

		// have good hygiene about you deployments

		// microservices/functions as a service allows you to be smaller with your deploys
		// however, what happens to function z when you deploy a change to function x???
			// cuts both ways

	//Complexity of deployments

	// latency
		// spun up and down as needed
		// 10's of ms

		// used samsa?? (sp?)

		// can compound latency when chaining microfunction calls

	// nosql database consideration
		// hype machine didn't communicate push of nosql

		// new things don't do a good job of communicating drawbacks
			// i'd say sometimes products not necessarily know until people get into the weeds with a new arch

	// Only 2 hard problems in CS
		// 1. Nameing
		// 2. cache validation
		// 3. off by one

	// Where will things be in 5 years
		// Abstraction
		// Raw business logic as functions (FAAS)
		// Development paradigm will be difficult
			// Implementation was hard
			// Testing, auth, messaging, all custom built to meet requirements

	// node community 
		// expect everything to happen async and with using callbacks
		// will be more adaptable for moving to FAAS

		// ES6 promises, deadlines

	// Scala
		// Pushing java into more async

	// It's not the language, it's the idioms
		// Auth a big deal
			// Auth to functions
			// Auth to users
			// Do as much in the app level as you can
				// just becase port :443 doesn't mean it's secure

	// Dependency risk of vendors
		// SASS: logic, code, ops
		// SLA around high % latency
			// Uptime is important, but isn't enough