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
 * GitHub Marketplace purchase
 *
 */
class GitHubMarketplacePurchase {
  /**
   * Create a GitHubMarketplacePurchase.
   * @property {object} [account] GitHub account information
   * @property {number} [account.id] Id of GitHub account
   * @property {string} [account.accountType] Type of GitHub account. Possible
   * values include: 'User', 'Organization'
   * @property {object} [plan] GitHub Marketplace plan
   * @property {number} [plan.id] Id of the GitHub plan
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubMarketplacePurchase
   *
   * @returns {object} metadata of GitHubMarketplacePurchase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubMarketplacePurchase',
      type: {
        name: 'Composite',
        className: 'GitHubMarketplacePurchase',
        modelProperties: {
          account: {
            required: false,
            serializedName: 'account',
            type: {
              name: 'Composite',
              className: 'GitHubMarketplacePurchaseAccount'
            }
          },
          plan: {
            required: false,
            serializedName: 'plan',
            type: {
              name: 'Composite',
              className: 'GitHubMarketplacePurchasePlan'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubMarketplacePurchase;
