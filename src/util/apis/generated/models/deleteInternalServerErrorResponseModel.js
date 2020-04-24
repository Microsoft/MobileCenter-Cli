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
 * Class representing a DeleteInternalServerErrorResponseModel.
 */
class DeleteInternalServerErrorResponseModel {
  /**
   * Create a DeleteInternalServerErrorResponseModel.
   * @property {string} code Possible values include: 'BadRequest', 'Conflict',
   * 'NotAcceptable', 'NotFound', 'InternalServerError', 'Unauthorized',
   * 'TooManyRequests'
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteInternalServerErrorResponseModel
   *
   * @returns {object} metadata of DeleteInternalServerErrorResponseModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteInternalServerErrorResponse',
      type: {
        name: 'Composite',
        className: 'DeleteInternalServerErrorResponseModel',
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

module.exports = DeleteInternalServerErrorResponseModel;
