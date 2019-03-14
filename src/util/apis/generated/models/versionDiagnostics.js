/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a VersionDiagnostics.
 */
class VersionDiagnostics {
  /**
   * Create a VersionDiagnostics.
   * @property {string} [version] version
   * @property {number} [count] version count
   * @property {number} [previousCount] the count of previous time range of the
   * version
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionDiagnostics
   *
   * @returns {object} metadata of VersionDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Version_Diagnostics',
      type: {
        name: 'Composite',
        className: 'VersionDiagnostics',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          previousCount: {
            required: false,
            serializedName: 'previous_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = VersionDiagnostics;