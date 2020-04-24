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
 * Class representing a GetLatestByDistributionGroupOKResponseDestinationsItem.
 */
class GetLatestByDistributionGroupOKResponseDestinationsItem {
  /**
   * Create a GetLatestByDistributionGroupOKResponseDestinationsItem.
   * @property {string} id ID identifying a unique distribution group.
   * @property {string} [name] A name identifying a unique distribution group.
   * @property {boolean} [isLatest] Is the containing release the latest one in
   * this distribution group.
   * @property {string} [type] type of the distribution store currently stores
   * type can be intune, googleplay or windows. Possible values include:
   * 'intune', 'googleplay', 'apple', 'none'
   * @property {string} [publishingStatus] publishing status of the release in
   * the store.
   * @property {string} [destinationType] Destination can be either store or
   * group. Possible values include: 'group', 'store', 'tester'
   * @property {string} [displayName] Display name for the group or tester
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLatestByDistributionGroupOKResponseDestinationsItem
   *
   * @returns {object} metadata of GetLatestByDistributionGroupOKResponseDestinationsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLatestByDistributionGroupOKResponse_destinationsItem',
      type: {
        name: 'Composite',
        className: 'GetLatestByDistributionGroupOKResponseDestinationsItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isLatest: {
            required: false,
            serializedName: 'is_latest',
            type: {
              name: 'Boolean'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          },
          destinationType: {
            required: false,
            serializedName: 'destination_type',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLatestByDistributionGroupOKResponseDestinationsItem;
