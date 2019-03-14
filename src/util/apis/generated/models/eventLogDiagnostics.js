/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Event log.
 *
 * @extends models['LogWithPropertiesDiagnostics']
 */
class EventLogDiagnostics extends models['LogWithPropertiesDiagnostics'] {
  /**
   * Create a EventLogDiagnostics.
   * @property {uuid} sessionId Session ID.
   * @property {uuid} id Unique identifier for this event.
   * @property {string} name Name of the event.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EventLogDiagnostics
   *
   * @returns {object} metadata of EventLogDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'event',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LogDiagnostics',
        className: 'EventLogDiagnostics',
        modelProperties: {
          timestamp: {
            required: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          installId: {
            required: true,
            serializedName: 'install_id',
            type: {
              name: 'String'
            }
          },
          device: {
            required: true,
            serializedName: 'device',
            type: {
              name: 'Composite',
              className: 'DeviceDiagnostics'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sessionId: {
            required: true,
            serializedName: 'session_id',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventLogDiagnostics;