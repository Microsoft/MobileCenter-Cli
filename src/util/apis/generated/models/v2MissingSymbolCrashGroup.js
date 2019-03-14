/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * missing symbol crash group object
 *
 */
class V2MissingSymbolCrashGroup {
  /**
   * Create a V2MissingSymbolCrashGroup.
   * @property {string} symbolGroupId id of the symbol group
   * @property {number} [crashCount] number of crashes that belong to this
   * group
   * @property {string} appId application id
   * @property {string} appVer application version
   * @property {string} appBuild application build
   * @property {date} lastModified last update date for the group
   * @property {array} missingSymbols list of missing symbols
   * @property {string} status group status. Possible values include: 'active',
   * 'pending', 'closed'
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2MissingSymbolCrashGroup
   *
   * @returns {object} metadata of V2MissingSymbolCrashGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2MissingSymbolCrashGroup',
      type: {
        name: 'Composite',
        className: 'V2MissingSymbolCrashGroup',
        modelProperties: {
          symbolGroupId: {
            required: true,
            serializedName: 'symbol_group_id',
            type: {
              name: 'String'
            }
          },
          crashCount: {
            required: false,
            serializedName: 'crash_count',
            type: {
              name: 'Number'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          appVer: {
            required: true,
            serializedName: 'app_ver',
            type: {
              name: 'String'
            }
          },
          appBuild: {
            required: true,
            serializedName: 'app_build',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: true,
            serializedName: 'last_modified',
            type: {
              name: 'DateTime'
            }
          },
          missingSymbols: {
            required: true,
            serializedName: 'missing_symbols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'V2MissingSymbolElementType',
                  type: {
                    name: 'Composite',
                    className: 'V2MissingSymbol'
                  }
              }
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = V2MissingSymbolCrashGroup;