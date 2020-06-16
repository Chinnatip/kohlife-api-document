'use strict';


/**
 * Check offer Request
 * Check offer request
 *
 * schedule_id Integer schedule_id that have to check available
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns CheckOfferResponse
 **/
exports.checkOffer = function(schedule_id,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "data" : {
      "net_price" : 6.027456183070403,
      "currency" : "currency",
      "schedule_id" : 0.8008281904610115,
      "departure_time" : {
        "date" : "date",
        "unixtime" : 1.4658129805029452,
        "time" : "time"
      },
      "status" : "status"
    },
    "status" : "status"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Booking Request
 * Booking new request
 *
 * body BookingCreateRequest  (optional)
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns BookingResponse
 **/
exports.creatBooking = function(body,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "ticket_detail" : {
      "notes" : "notes",
      "leader_name" : "leader_name",
      "leader_contact_email" : "leader_contact_email",
      "pickup" : {
        "location" : "location",
        "time" : "time"
      },
      "travel_date" : "travel_date",
      "travel_date_unix" : 7.061401241503109,
      "leader_contact_telephone" : "leader_contact_telephone",
      "schedule" : 5.962133916683182,
      "to_location" : "to_location",
      "pnr" : "pnr",
      "pax_amount" : 9.301444243932576,
      "b2b_rate" : 1.4658129805029452,
      "from_location" : "from_location",
      "departure" : {
        "station" : "station",
        "gps" : {
          "lattitude" : 5.637376656633329,
          "longitude" : 2.3021358869347655
        },
        "time" : "time"
      },
      "leader_contact_nationality" : "leader_contact_nationality",
      "status" : "status"
    },
    "transaction_detail" : {
      "agent_user_id" : 0.8008281904610115,
      "total_payment_amount" : 6.027456183070403,
      "invoice_code" : "invoice_code",
      "agent_secret" : "agent_secret",
      "payment_status" : true,
      "ticket_reference_id" : "ticket_reference_id"
    }
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Merchant Request
 * Merchant new request
 *
 * body MerchantCreateRequest  (optional)
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns MerchantResponse
 **/
exports.createMerchant = function(body,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "agent_secret" : "agent_secret",
    "agent_name" : "agent_name",
    "user_id" : 6.027456183070403,
    "current_balance" : 1.4658129805029452,
    "currency" : "currency",
    "telephone" : "telephone",
    "merchant_id" : 0.8008281904610115,
    "email" : "email"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ticket all get
 * Ticket all get request
 *
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns AllBookingResponse
 **/
exports.getAllBooking = function(contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "pastTrip" : [ null, null ],
    "currentTrip" : [ {
      "schedule" : 0.8008281904610115,
      "pnr" : "pnr",
      "leader_name" : "leader_name",
      "leader_contact_email" : "leader_contact_email",
      "pax_amount" : 1.4658129805029452,
      "travel_date" : "travel_date",
      "leader_contact_nationality" : "leader_contact_nationality",
      "travel_date_unix" : 6.027456183070403,
      "leader_contact_telephone" : "leader_contact_telephone",
      "status" : "status"
    }, {
      "schedule" : 0.8008281904610115,
      "pnr" : "pnr",
      "leader_name" : "leader_name",
      "leader_contact_email" : "leader_contact_email",
      "pax_amount" : 1.4658129805029452,
      "travel_date" : "travel_date",
      "leader_contact_nationality" : "leader_contact_nationality",
      "travel_date_unix" : 6.027456183070403,
      "leader_contact_telephone" : "leader_contact_telephone",
      "status" : "status"
    } ]
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ticket get
 * Ticket get request
 *
 * ticket_reference_id Integer ticket reference id
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns TicketResponse
 **/
exports.getBooking = function(ticket_reference_id,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "notes" : "notes",
    "leader_name" : "leader_name",
    "leader_contact_email" : "leader_contact_email",
    "pickup" : {
      "location" : "location",
      "time" : "time"
    },
    "travel_date" : "travel_date",
    "travel_date_unix" : 7.061401241503109,
    "leader_contact_telephone" : "leader_contact_telephone",
    "schedule" : 5.962133916683182,
    "to_location" : "to_location",
    "pnr" : "pnr",
    "pax_amount" : 9.301444243932576,
    "b2b_rate" : 1.4658129805029452,
    "from_location" : "from_location",
    "departure" : {
      "station" : "station",
      "gps" : {
        "lattitude" : 5.637376656633329,
        "longitude" : 2.3021358869347655
      },
      "time" : "time"
    },
    "leader_contact_nationality" : "leader_contact_nationality",
    "status" : "status"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancellation check
 * Cancellation check request
 *
 * ticket_reference_id Integer ticket reference id
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns CancellationResponse
 **/
exports.getCancelCondition = function(ticket_reference_id,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "refund_policy" : "refund_policy",
    "departure_date" : "departure_date",
    "policy_description" : "policy_description",
    "refund_amount" : 0.8008281904610115
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Merchant get
 * Merchant get request
 *
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns MerchantResponse
 **/
exports.getMerchant = function(contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "agent_secret" : "agent_secret",
    "agent_name" : "agent_name",
    "user_id" : 6.027456183070403,
    "current_balance" : 1.4658129805029452,
    "currency" : "currency",
    "telephone" : "telephone",
    "merchant_id" : 0.8008281904610115,
    "email" : "email"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Offer Request
 * Offer new request
 *
 * from String from station
 * to String to station
 * date String departure date format in YYYY-MM-DD
 * amount BigDecimal pax amount of passenger
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns OfferResponse
 **/
exports.getOffer = function(from,to,date,amount,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : [ {
    "net_price_per_person" : 6.027456183070403,
    "datetime" : {
      "duration" : "duration",
      "departure" : {
        "date" : "date",
        "unit" : 5.637376656633329,
        "time" : "time"
      }
    },
    "trip" : {
      "from" : {
        "coordinate" : "coordinate",
        "location" : "location",
        "terminal" : "terminal",
        "location_key" : "location_key"
      }
    },
    "total_price" : 5.962133916683182,
    "pax_amount" : 1.4658129805029452,
    "currency" : "currency",
    "service_provider" : {
      "name" : "name",
      "logo" : "logo",
      "fullname" : "fullname"
    },
    "schedule_id" : 0.8008281904610115,
    "itineray" : [ {
      "date" : "date",
      "duration" : "duration",
      "terminal" : "terminal",
      "time" : "time",
      "vehicle" : "vehicle"
    }, {
      "date" : "date",
      "duration" : "duration",
      "terminal" : "terminal",
      "time" : "time",
      "vehicle" : "vehicle"
    } ]
  }, {
    "net_price_per_person" : 6.027456183070403,
    "datetime" : {
      "duration" : "duration",
      "departure" : {
        "date" : "date",
        "unit" : 5.637376656633329,
        "time" : "time"
      }
    },
    "trip" : {
      "from" : {
        "coordinate" : "coordinate",
        "location" : "location",
        "terminal" : "terminal",
        "location_key" : "location_key"
      }
    },
    "total_price" : 5.962133916683182,
    "pax_amount" : 1.4658129805029452,
    "currency" : "currency",
    "service_provider" : {
      "name" : "name",
      "logo" : "logo",
      "fullname" : "fullname"
    },
    "schedule_id" : 0.8008281904610115,
    "itineray" : [ {
      "date" : "date",
      "duration" : "duration",
      "terminal" : "terminal",
      "time" : "time",
      "vehicle" : "vehicle"
    }, {
      "date" : "date",
      "duration" : "duration",
      "terminal" : "terminal",
      "time" : "time",
      "vehicle" : "vehicle"
    } ]
  } ],
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Valid Station request
 * Valid Station request
 *
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns StationResponse
 **/
exports.getStation = function(contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "key" : [ 0.8008281904610115, 0.8008281904610115 ]
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login Request
 * Login new request
 *
 * body LoginUserRequest  (optional)
 * returns LoginUserResponse
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "access_token" : "access_token"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancellation create
 * Cancellation create request
 *
 * body CancellationCreateRequest  (optional)
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns CancellationResponse
 **/
exports.postCancellation = function(body,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "refund_policy" : "refund_policy",
    "departure_date" : "departure_date",
    "policy_description" : "policy_description",
    "refund_amount" : 0.8008281904610115
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Merchant Request
 * Merchant topup request
 *
 * body MerchantTopupRequest  (optional)
 * contentType String Content Type header
 * authorization String Auth Header please get from Login response
 * returns MerchantResponse
 **/
exports.topupMerchant = function(body,contentType,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "agent_secret" : "agent_secret",
    "agent_name" : "agent_name",
    "user_id" : 6.027456183070403,
    "current_balance" : 1.4658129805029452,
    "currency" : "currency",
    "telephone" : "telephone",
    "merchant_id" : 0.8008281904610115,
    "email" : "email"
  },
  "status" : {
    "status" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

