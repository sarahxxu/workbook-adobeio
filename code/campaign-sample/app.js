"use strict"

// Dependencies
var request = require('request'),
    jwt = require('jwt-simple'),
    _config = require('./config.js');

/**
 * The entry point for this action.
 * It should be invoked once the authentication has succeeded.
 * @param params Input object
 * @returns {Promise}
 */

function main(params) {
  console.log('in main: ', params);

    // read config
    var clientID = _config.campaign.campaignClientID,
        clientSecret = _config.campaign.campaignClientSecret,
        orgID = _config.campaign.campaignOrgID,
        technicalAccount = _config.campaign.campaignTechnicalAccount,
        PEM = _config.campaign.campaignPEM,
        IMSEndpoint = _config.campaign.campaignIMSEndpoint,
        tenant = _config.campaign.campaignTenant;

    var accessToken, JWTToken;

    // generate JWT Token
    var aud = "https://ims-na1.adobelogin.com/c/" + clientID;
    var jwtPayload = {
        "exp": Math.round(87000 + Date.now()/1000),
        "iss": orgID,
        "sub": technicalAccount,
        "aud": aud
    };

    jwtPayload[IMSEndpoint] = true;
    JWTToken = jwt.encode(jwtPayload, PEM, 'RS256');

    console.log("jwtToken: " + JWTToken);

    return new Promise (function (resolve, reject) {

        try {
            var url = 'https://ims-na1.adobelogin.com/ims/exchange/jwt/';
            var formData = {
                client_id: clientID,
                client_secret: clientSecret,
                jwt_token: JWTToken
            };

            request.post({url: url, formData: formData}, function optionalCallback(err, httpResponse, body) {
                if (err){
                    //reject(err);
                } else {
                    var result = JSON.parse(body);
                    accessToken = "Bearer " + result.access_token;
                    console.log("Access Token: " + accessToken);
                }
            });

        } catch (e) {
            console.log ("error");
        }

    })
}

exports.main = main;