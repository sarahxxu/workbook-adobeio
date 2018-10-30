function main(params) {

    console.log(params);

    var returnObject = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: ""
    };

    /* handle the challenge */
    if (params.challenge) {

        console.log('handling challenge');

        returnObject.body = new Buffer(JSON.stringify({
            "challenge": params.challenge
        })).toString('base64');

        return returnObject;

    } else { /* receives an event */

        console.log('event received.');

        // do stuff with your event!

    }

}