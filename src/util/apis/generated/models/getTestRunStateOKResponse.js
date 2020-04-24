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
 * @summary Test Run State
  *
 * Current status of a test run
 *
 */
class GetTestRunStateOKResponse {
  /**
   * Create a GetTestRunStateOKResponse.
   * @property {array} [message] Multi-line message that describes the status
   * @property {number} [waitTime] Time (in seconds) that the client should
   * wait for before checking the status again
   * @property {number} [exitCode] The exit code that the client should use
   * when exiting. Used for indicating status to the caller of the client.
   * 0: test run completes with no failing tests
   * 1: test run completes with at least one failing test
   * 2: test run failed to complete. Status for test run is unknown
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetTestRunStateOKResponse
   *
   * @returns {object} metadata of GetTestRunStateOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetTestRunStateOKResponse',
      type: {
        name: 'Composite',
        className: 'GetTestRunStateOKResponse',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
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
          waitTime: {
            required: false,
            serializedName: 'wait_time',
            type: {
              name: 'Number'
            }
          },
          exitCode: {
            required: false,
            serializedName: 'exit_code',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GetTestRunStateOKResponse;
