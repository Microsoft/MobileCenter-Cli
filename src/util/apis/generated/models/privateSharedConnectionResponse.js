/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * PrivateSharedConnectionResponse
 *
 */
class PrivateSharedConnectionResponse {
  /**
   * Create a PrivateSharedConnectionResponse.
   * @property {string} id id of the shared connection
   * @property {string} [displayName] display name of shared connection
   * @property {boolean} [isValid] whether the credentials are valid or not
   * @property {boolean} [is2FA] if the account is a 2FA account or not
   * @property {string} serviceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateSharedConnectionResponse
   *
   * @returns {object} metadata of PrivateSharedConnectionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateSharedConnectionResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'PrivateSharedConnectionResponse',
        className: 'PrivateSharedConnectionResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateSharedConnectionResponse;