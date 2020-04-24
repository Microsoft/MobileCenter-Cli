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
 * @summary Test Cloud Error Details
  *
 * Details of a failed operation
 *
 */
class CreateDeviceSetOfUserBadRequestResponse {
  /**
   * Create a CreateDeviceSetOfUserBadRequestResponse.
   * @property {string} status Status of the operation
   * @property {string} message Human-readable message that describes the error
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateDeviceSetOfUserBadRequestResponse
   *
   * @returns {object} metadata of CreateDeviceSetOfUserBadRequestResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateDeviceSetOfUserBadRequestResponse',
      type: {
        name: 'Composite',
        className: 'CreateDeviceSetOfUserBadRequestResponse',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
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

module.exports = CreateDeviceSetOfUserBadRequestResponse;
