# Timestamp Microservice for freeCodeCamp

This is Node and Express app that takes a string and converts ito to a proper timestamp. It was created as part of the freeCodeCamp APIs and Microservices curriculum.

This solution is available for testing at:

https://tricolor-pick.glitch.me/


## Example usage:

* https://tricolor-pick.glitch.me/api/timestamp/2015-12-15
* https://tricolor-pick.glitch.me/api/timestamp/1450137600000


## User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.
