/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CrashFreeDevicePercentages class.
 * @constructor
 * @member {number} [overtimePercentage]
 * 
 * @member {array} [dailyPercentages] the crash-free percentage for day
 * 
 */
function CrashFreeDevicePercentages() {
}

/**
 * Defines the metadata of CrashFreeDevicePercentages
 *
 * @returns {object} metadata of CrashFreeDevicePercentages
 *
 */
CrashFreeDevicePercentages.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CrashFreeDevicePercentages',
    type: {
      name: 'Composite',
      className: 'CrashFreeDevicePercentages',
      modelProperties: {
        overtimePercentage: {
          required: false,
          serializedName: 'overtimePercentage',
          type: {
            name: 'Number'
          }
        },
        dailyPercentages: {
          required: false,
          serializedName: 'dailyPercentages',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DateTimePercentagesElementType',
                type: {
                  name: 'Composite',
                  className: 'DateTimePercentages'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = CrashFreeDevicePercentages;
