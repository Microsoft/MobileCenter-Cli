/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DataSubjectRightEmailRequest.
 */
class DataSubjectRightEmailRequest {
  /**
   * Create a DataSubjectRightEmailRequest.
   * @property {string} email Email used for cancel delete with x-authz-bypass
   * headers
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataSubjectRightEmailRequest
   *
   * @returns {object} metadata of DataSubjectRightEmailRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataSubjectRightEmailRequest',
      type: {
        name: 'Composite',
        className: 'DataSubjectRightEmailRequest',
        modelProperties: {
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataSubjectRightEmailRequest;