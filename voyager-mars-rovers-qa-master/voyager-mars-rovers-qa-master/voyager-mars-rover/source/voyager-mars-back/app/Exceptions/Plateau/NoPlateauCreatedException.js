'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions');

const HttpStatus = use('http-status-codes');

class NoPlateauCreatedException extends LogicalException {
  constructor() {
    super(`There isn't a Plateau created to this company`);
  }

  handle(error, { response }) {
    response.status(HttpStatus.BAD_REQUEST).send(error.message);
  }
}

module.exports = NoPlateauCreatedException;
