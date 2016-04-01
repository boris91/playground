export const ASYNC = true;

export const RESPONSE_TYPE = 'json';

export const Methods = {
	POST: 'POST',    //Create
	GET: 'GET',      //Read
	PUT: 'PUT',      //Update/Replace
	PATCH: 'PATCH',  //Update/Modify
	DELETE: 'DELETE' //Delete
};

export const Events = {
	LOAD: 'load',
	PEND: 'progress',
	FAIL: 'error',
	TOUT: 'timeout'
};

export const EventsOrder = [
	'LOAD',
	'PEND',
	'FAIL',
	'TOUT'
];

export const States = {
	NONE: 0, //Client has been created. open() not called yet.
	OPND: 1, //open() has been called.
	HDRS: 2, //send() has been called, and headers and status are available.
	PEND: 3, //Downloading; responseText holds partial data.
	DONE: 4  //The operation is complete.
};