// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var donations_v1_donation_pb = require('../../donations/v1/donation_pb.js');

function serialize_paralympics_donations_v1_DonateResponse(arg) {
  if (!(arg instanceof donations_v1_donation_pb.DonateResponse)) {
    throw new Error('Expected argument of type paralympics.donations.v1.DonateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_donations_v1_DonateResponse(buffer_arg) {
  return donations_v1_donation_pb.DonateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_donations_v1_Donation(arg) {
  if (!(arg instanceof donations_v1_donation_pb.Donation)) {
    throw new Error('Expected argument of type paralympics.donations.v1.Donation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_donations_v1_Donation(buffer_arg) {
  return donations_v1_donation_pb.Donation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Paralympics Donation Service
var DonationsService = exports.DonationsService = {
  // Make a new donation
donate: {
    path: '/paralympics.donations.v1.Donations/Donate',
    requestStream: false,
    responseStream: false,
    requestType: donations_v1_donation_pb.Donation,
    responseType: donations_v1_donation_pb.DonateResponse,
    requestSerialize: serialize_paralympics_donations_v1_Donation,
    requestDeserialize: deserialize_paralympics_donations_v1_Donation,
    responseSerialize: serialize_paralympics_donations_v1_DonateResponse,
    responseDeserialize: deserialize_paralympics_donations_v1_DonateResponse,
  },
};

exports.DonationsClient = grpc.makeGenericClientConstructor(DonationsService);
