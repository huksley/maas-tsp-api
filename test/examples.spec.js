'use strict';

const BookingCreateRequest = require('maas-schemas-ts/lib/tsp/booking-create/request').Default;
const BookingCreateResponse = require('maas-schemas-ts/lib/tsp/booking-create/response').Default;
const BookingUpdateRequest = require('maas-schemas-ts/lib/tsp/booking-update/request').Default;
const BookingUpdateResponse = require('maas-schemas-ts/lib/tsp/booking-update/response').Default;
const BookingOptionsResponse = require('maas-schemas-ts/lib/tsp/booking-options-list/response').Default;
const BookingReadByIdResponse = require('maas-schemas-ts/lib/tsp/booking-read-by-id/response').Default;
const BookingReceiptResponse = require('maas-schemas-ts/lib/tsp/booking-receipt/response').Default;
const typePromise = require('io-ts-promise');
const assert = require('assert');

const fs = require('fs');

describe('Check examples', () => {
  describe('taxi', () => {
    it('booking-create-request.json', () => {
      return typePromise.decode(
        BookingCreateRequest,
        JSON.parse(fs.readFileSync('./examples/taxi/booking-create-request.json'))
      );
    });

    it('should fail decode', async () => {
      let failed = false;
      try {
        await typePromise.decode(BookingCreateResponse, {});
      } catch (e) {
        failed = true;
        // eslint-disable-next-line no-console
        console.info('Received expected error', e.message.substring(0, 32) + '...');
      }
      return assert.equal(failed, true);
    });

    it('booking-create-response.json', () => {
      return typePromise.decode(
        BookingCreateResponse,
        JSON.parse(fs.readFileSync('./examples/taxi/booking-create-response.json'))
      );
    });

    it('booking-options-response.json', () => {
      return typePromise.decode(
        BookingOptionsResponse,
        JSON.parse(fs.readFileSync('./examples/taxi/booking-options-response.json'))
      );
    });

    it('booking-read-by-id-response.json', () => {
      return typePromise.decode(
        BookingReadByIdResponse,
        JSON.parse(fs.readFileSync('./examples/taxi/booking-read-by-id-response.json'))
      );
    });

    it('booking-read-by-id-response-activated.json', () => {
      return typePromise.decode(
        BookingReadByIdResponse,
        JSON.parse(fs.readFileSync('./examples/taxi/booking-read-by-id-response-activated.json'))
      );
    });
  });

  describe('car', () => {
    it('booking-update-request-unlock.json', () => {
      return typePromise.decode(
        BookingUpdateRequest,
        JSON.parse(fs.readFileSync('./examples/car/booking-update-request-unlock.json'))
      );
    });

    it('booking-update-request-lock.json', () => {
      return typePromise.decode(
        BookingUpdateRequest,
        JSON.parse(fs.readFileSync('./examples/car/booking-update-request-lock.json'))
      );
    });
  });

  describe('scooter', () => {
    it('booking-create-request.json', () => {
      return typePromise.decode(
        BookingCreateRequest,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-create-request.json'))
      );
    });

    it('booking-create-response.json', () => {
      return typePromise.decode(
        BookingCreateResponse,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-create-response.json'))
      );
    });

    it('booking-options-response.json', () => {
      return typePromise.decode(
        BookingOptionsResponse,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-options-response.json'))
      );
    });

    it('booking-read-by-id-response-activated.json', () => {
      return typePromise.decode(
        BookingReadByIdResponse,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-read-by-id-response-activated.json'))
      );
    });

    it('booking-receipt-response.json', () => {
      return typePromise.decode(
        BookingReceiptResponse,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-receipt-response.json'))
      );
    });

    it('booking-update-expired-request.json', () => {
      return typePromise.decode(
        BookingUpdateRequest,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-update-expired-request.json'))
      );
    });

    it('booking-update-expired-response.json', () => {
      return typePromise.decode(
        BookingUpdateResponse,
        JSON.parse(fs.readFileSync('./examples/scooter/booking-update-expired-response.json'))
      );
    });
  });
});