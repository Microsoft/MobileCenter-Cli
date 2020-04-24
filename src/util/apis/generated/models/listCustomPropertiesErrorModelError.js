/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ListCustomPropertiesErrorModelError.
 */
class ListCustomPropertiesErrorModelError {
  /**
   * Create a ListCustomPropertiesErrorModelError.
   * @property {string} code Possible values include: 'BadRequest', 'Conflict',
   * 'NotAcceptable', 'NotFound', 'InternalServerError', 'Unauthorized',
   * 'TooManyRequests'
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListCustomPropertiesErrorModelError
   *
   * @returns {object} metadata of ListCustomPropertiesErrorModelError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListCustomPropertiesErrorModel_error',
      type: {
        name: 'Composite',
        className: 'ListCustomPropertiesErrorModelError',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListCustomPropertiesErrorModelError;
