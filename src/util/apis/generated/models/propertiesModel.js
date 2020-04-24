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
 * Notification definition object
 *
 */
class PropertiesModel {
  /**
   * Create a PropertiesModel.
   * @property {object} [notificationTarget] Type of Notification target
   * (audiences, devices, user ids, account ids or broadcast). The object must
   * include the correct properties for the specified target type except for
   * broadcast.
   * @property {string} [notificationTarget.type] Polymorphic Discriminator
   * @property {object} notificationContent Notification definition object
   * @property {string} [notificationContent.name] Notification name
   * @property {string} [notificationContent.title] Notification title
   * @property {string} [notificationContent.body] Notification body
   * @property {object} [notificationContent.customData] Notification custom
   * data (such as badge, color, sound, etc.)
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertiesModel
   *
   * @returns {object} metadata of PropertiesModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'properties',
      type: {
        name: 'Composite',
        className: 'PropertiesModel',
        modelProperties: {
          notificationTarget: {
            required: false,
            serializedName: 'notification_target',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'PropertiesNotificationTarget',
              className: 'PropertiesNotificationTarget'
            }
          },
          notificationContent: {
            required: true,
            serializedName: 'notification_content',
            type: {
              name: 'Composite',
              className: 'PropertiesNotificationContent'
            }
          }
        }
      }
    };
  }
}

module.exports = PropertiesModel;
