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
 * Class representing a BodyModelModelModelModelModel.
 */
class BodyModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModel.
   * @property {uuid} id Unique id of the release destination
   * @property {boolean} [mandatoryUpdate] Flag to mark the release for the
   * provided destinations as mandatory
   * @property {boolean} [notifyTesters] Flag to enable or disable
   * notifications to testers. Default value: true .
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModel',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          notifyTesters: {
            required: false,
            serializedName: 'notify_testers',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModel;
