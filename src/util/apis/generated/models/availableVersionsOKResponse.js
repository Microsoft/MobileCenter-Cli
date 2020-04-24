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
 * Class representing a AvailableVersionsOKResponse.
 */
class AvailableVersionsOKResponse {
  /**
   * Create a AvailableVersionsOKResponse.
   * @property {array} [versions] List of available versions.
   * @property {number} [totalCount] The full number of versions across all
   * pages.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableVersionsOKResponse
   *
   * @returns {object} metadata of AvailableVersionsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableVersionsOKResponse',
      type: {
        name: 'Composite',
        className: 'AvailableVersionsOKResponse',
        modelProperties: {
          versions: {
            required: false,
            serializedName: 'versions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          totalCount: {
            required: false,
            serializedName: 'total_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableVersionsOKResponse;
