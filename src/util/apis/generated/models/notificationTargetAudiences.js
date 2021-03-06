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
 * Notification target audiences.
 *
 */
class NotificationTargetAudiences {
  /**
   * Create a NotificationTargetAudiences.
   * @property {string} type Possible values include: 'audiences_target',
   * 'devices_target', 'user_ids_target', 'account_ids_target',
   * 'broadcast_target'
   * @property {array} audiences List of target audiences.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationTargetAudiences
   *
   * @returns {object} metadata of NotificationTargetAudiences
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'audiences_target',
      type: {
        name: 'Composite',
        className: 'NotificationTargetAudiences',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          audiences: {
            required: true,
            serializedName: 'audiences',
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
          }
        }
      }
    };
  }
}

module.exports = NotificationTargetAudiences;
