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
 * Class representing a IdentityProviderPatchPayload.
 */
class IdentityProviderPatchPayload {
  /**
   * Create a IdentityProviderPatchPayload.
   * @property {boolean} [enabled] Determines if the provider is currently
   * active or not
   * @property {string} [clientId]
   * @property {string} [clientSecret]
   */
  constructor() {
  }

  /**
   * Defines the metadata of IdentityProviderPatchPayload
   *
   * @returns {object} metadata of IdentityProviderPatchPayload
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IdentityProviderPatchPayload',
      type: {
        name: 'Composite',
        className: 'IdentityProviderPatchPayload',
        modelProperties: {
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          clientId: {
            required: false,
            serializedName: 'client_id',
            type: {
              name: 'String'
            }
          },
          clientSecret: {
            required: false,
            serializedName: 'client_secret',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IdentityProviderPatchPayload;