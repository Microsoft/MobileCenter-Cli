/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a TestGDPRPipelineTest.
 */
class TestGDPRPipelineTest {
  /**
   * Create a TestGDPRPipelineTest.
   * @property {uuid} [appUploadId]
   * @property {object} [testParameters]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestGDPRPipelineTest
   *
   * @returns {object} metadata of TestGDPRPipelineTest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestGDPRPipelineTest',
      type: {
        name: 'Composite',
        className: 'TestGDPRPipelineTest',
        modelProperties: {
          appUploadId: {
            required: false,
            serializedName: 'app_upload_id',
            type: {
              name: 'String'
            }
          },
          testParameters: {
            required: false,
            serializedName: 'test_parameters',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = TestGDPRPipelineTest;