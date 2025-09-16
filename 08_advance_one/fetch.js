/*fetch() is a built-in JavaScript function used to make network requests (like calling an API).

It returns a Promise that either:
Resolves → when the network request succeeds.
Rejects → when there is a network error. 
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})

//You will see a Response object, NOT actual data yet: Because fetch doesn't directly give you data.
// The server usually sends JSON (string format), so you need to convert it into a JavaScript object using .json().

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json() //Convert raw response to actual JSON data
    /*response.json() is specific to fetch and returns a Promise.
    It is like a combo of .text() + JSON.parse().
    Use JSON.parse() only when you already have a JSON string, not when working with fetch streams.*/
})
.then((data)=>{
    console.log("user data : ",data)  //Work with actual data
})
.catch((error)=>{
    console.log(error)
})

/*-------IMPORTANT POINTS ABOUT FETCH()---------

1.Even if the server sends a bad response like 404 Not Found or 500 Internal Server Error, 
fetch() still considers it a resolved Promise — not rejected.

If the network itself fails (like no internet connection),
→ fetch() rejects and goes to .catch().

If the server responds, even with a 404 or 500 error,
→ fetch() resolves successfully because technically it did receive a response.

The designers of fetch() separated network errors from HTTP errors:

->Reject (catch block) → Only for network-level issues like:
   -No internet connection.
   -Domain doesn't exist.
   -Server completely unreachable.

->Resolve (then block) → Any response that successfully reached you,
    whether it's good (200 OK) or bad (404, 500, etc.).

*************************************************************************************************************

2.why fetch() finishes before other task queue tasks like setTimeout()
1. First, understand the Event Loop

JavaScript runs in a single thread.
This means only one thing can run at a time.

To handle asynchronous tasks (like fetch, timers, etc.), JS uses a queue system:
Call Stack → Where code runs right now.
Web APIs → Browser-managed background area (e.g., fetch, timers).
Task Queues → Where finished tasks wait to be run.
Event Loop → A manager that decides what task to run next.

2. Types of task queues

Not all tasks have equal priority.
There are two main types of queues in JS:

Queue Type        |    Examples                                  |   Priority
Microtask  Queue  |	   Promise.then(), fetch() callbacks         |	 HIGH 🚀
Macrotask Queue	  |    setTimeout(), setInterval(), DOM events	 |   Lower

Key Rule:

Microtasks always run before macrotasks,
even if the macrotask was scheduled first.

This is why a fetch() .then() callback always runs before a setTimeout() callback.*/