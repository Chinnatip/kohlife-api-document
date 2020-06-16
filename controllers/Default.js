'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.checkOffer = function checkOffer (req, res, next, schedule_id, contentType, authorization) {
  Default.checkOffer(schedule_id, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.creatBooking = function creatBooking (req, res, next, body, contentType, authorization) {
  Default.creatBooking(body, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createMerchant = function createMerchant (req, res, next, body, contentType, authorization) {
  Default.createMerchant(body, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBooking = function getAllBooking (req, res, next, contentType, authorization) {
  Default.getAllBooking(contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooking = function getBooking (req, res, next, ticket_reference_id, contentType, authorization) {
  Default.getBooking(ticket_reference_id, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCancelCondition = function getCancelCondition (req, res, next, ticket_reference_id, contentType, authorization) {
  Default.getCancelCondition(ticket_reference_id, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMerchant = function getMerchant (req, res, next, contentType, authorization) {
  Default.getMerchant(contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOffer = function getOffer (req, res, next, from, to, date, amount, contentType, authorization) {
  Default.getOffer(from, to, date, amount, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStation = function getStation (req, res, next, contentType, authorization) {
  Default.getStation(contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next, body) {
  Default.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCancellation = function postCancellation (req, res, next, body, contentType, authorization) {
  Default.postCancellation(body, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.topupMerchant = function topupMerchant (req, res, next, body, contentType, authorization) {
  Default.topupMerchant(body, contentType, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
