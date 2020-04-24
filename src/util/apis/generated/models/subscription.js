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
 * @summary Subscription
  *
 * Subscription information
 *
 */
class Subscription {
  /**
   * Create a Subscription.
   * @property {string} [startsAt] The date the subscription began
   * @property {string} [endsAt] The date the subscription will end or ended
   * @property {number} [daysLeft] The number of days left in the subscription
   * @property {object} [tier] Subscription Tier.
   * @property {string} [tier.name] The name of the tier
   * @property {boolean} [active] Is the subscription currently active?
   * @property {uuid} [id] Id of the subscription
   */
  constructor() {
  }

  /**
   * Defines the metadata of Subscription
   *
   * @returns {object} metadata of Subscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Subscription',
      type: {
        name: 'Composite',
        className: 'Subscription',
        modelProperties: {
          startsAt: {
            required: false,
            serializedName: 'startsAt',
            type: {
              name: 'String'
            }
          },
          endsAt: {
            required: false,
            serializedName: 'endsAt',
            type: {
              name: 'String'
            }
          },
          daysLeft: {
            required: false,
            serializedName: 'daysLeft',
            type: {
              name: 'Number'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'Composite',
              className: 'SubscriptionTier'
            }
          },
          active: {
            required: false,
            serializedName: 'active',
            type: {
              name: 'Boolean'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Subscription;
