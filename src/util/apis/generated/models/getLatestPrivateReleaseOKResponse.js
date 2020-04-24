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
 * Details of an uploaded release
 *
 */
class GetLatestPrivateReleaseOKResponse {
  /**
   * Create a GetLatestPrivateReleaseOKResponse.
   * @property {number} id ID identifying this unique release.
   * @property {string} appName The app's name (extracted from the uploaded
   * release).
   * @property {string} appDisplayName The app's display name.
   * @property {string} [appOs] The app's OS.
   * @property {string} version The release's version.<br>
   * For iOS: CFBundleVersion from info.plist.
   * For Android: android:versionCode from AppManifest.xml.
   * @property {string} [origin] The release's origin. Possible values include:
   * 'hockeyapp', 'appcenter'
   * @property {string} shortVersion The release's short version.<br>
   * For iOS: CFBundleShortVersionString from info.plist.
   * For Android: android:versionName from AppManifest.xml.
   * @property {string} [releaseNotes] The release's release notes.
   * @property {string} [provisioningProfileName] The release's provisioning
   * profile name.
   * @property {string} [provisioningProfileType] The type of the provisioning
   * profile for the requested app version. Possible values include: 'adhoc',
   * 'enterprise', 'other'
   * @property {string} [provisioningProfileExpiryDate] expiration date of
   * provisioning profile in UTC format.
   * @property {boolean} [isProvisioningProfileSyncing] A flag that determines
   * whether the release's provisioning profile is still extracted or not.
   * @property {number} [size] The release's size in bytes.
   * @property {string} [minOs] The release's minimum required operating
   * system.
   * @property {string} [deviceFamily] The release's device family.
   * @property {string} [androidMinApiLevel] The release's minimum required
   * Android API level.
   * @property {string} [bundleIdentifier] The identifier of the apps bundle.
   * @property {array} [packageHashes] Hashes for the packages.
   * @property {string} [fingerprint] MD5 checksum of the release binary.
   * @property {string} uploadedAt UTC time in ISO 8601 format of the uploaded
   * time.
   * @property {string} [downloadUrl] The URL that hosts the binary for this
   * release.
   * @property {string} appIconUrl A URL to the app's icon.
   * @property {string} [installUrl] The href required to install a release on
   * a mobile device. On iOS devices will be prefixed with
   * `itms-services://?action=download-manifest&url=`
   * @property {string} [destinationType] OBSOLETE. Will be removed in next
   * version. The destination type.<br>
   * <b>group</b>: The release distributed to internal groups and
   * distribution_groups details will be returned.<br>
   * <b>store</b>: The release distributed to external stores and
   * distribution_stores details will be returned.<br>
   * <b>tester</b>: The release distributed testers details will be
   * returned.<br>
   * . Possible values include: 'group', 'store', 'tester'
   * @property {array} [distributionGroups] OBSOLETE. Will be removed in next
   * version. A list of distribution groups that are associated with this
   * release.
   * @property {array} [distributionStores] OBSOLETE. Will be removed in next
   * version. A list of distribution stores that are associated with this
   * release.
   * @property {array} [destinations] A list of distribution groups or stores.
   * @property {boolean} [isUdidProvisioned] In calls that allow passing `udid`
   * in the query string, this value will hold the provisioning status of that
   * UDID in this release. Will be ignored for non-iOS platforms.
   * @property {boolean} [canResign] In calls that allow passing `udid` in the
   * query string, this value determines if a release can be re-signed. When
   * true, after a re-sign, the tester will be able to install the release from
   * his registered devices. Will not be returned for non-iOS platforms.
   * @property {object} [build] Contains metadata about the build that produced
   * the release being uploaded
   * @property {string} [build.branchName] The branch name of the build
   * producing the release
   * @property {string} [build.commitHash] The commit hash of the build
   * producing the release
   * @property {string} [build.commitMessage] The commit message of the build
   * producing the release
   * @property {boolean} enabled This value determines the whether a release
   * currently is enabled or disabled.
   * @property {string} [status] Status of the release.
   * @property {boolean} [isExternalBuild] This value determines if a release
   * is external or not.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLatestPrivateReleaseOKResponse
   *
   * @returns {object} metadata of GetLatestPrivateReleaseOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLatestPrivateReleaseOKResponse',
      type: {
        name: 'Composite',
        className: 'GetLatestPrivateReleaseOKResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          appName: {
            required: true,
            serializedName: 'app_name',
            type: {
              name: 'String'
            }
          },
          appDisplayName: {
            required: true,
            serializedName: 'app_display_name',
            type: {
              name: 'String'
            }
          },
          appOs: {
            required: false,
            serializedName: 'app_os',
            type: {
              name: 'String'
            }
          },
          version: {
            required: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          shortVersion: {
            required: true,
            serializedName: 'short_version',
            type: {
              name: 'String'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          provisioningProfileName: {
            required: false,
            serializedName: 'provisioning_profile_name',
            type: {
              name: 'String'
            }
          },
          provisioningProfileType: {
            required: false,
            serializedName: 'provisioning_profile_type',
            type: {
              name: 'String'
            }
          },
          provisioningProfileExpiryDate: {
            required: false,
            serializedName: 'provisioning_profile_expiry_date',
            type: {
              name: 'String'
            }
          },
          isProvisioningProfileSyncing: {
            required: false,
            serializedName: 'is_provisioning_profile_syncing',
            type: {
              name: 'Boolean'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          minOs: {
            required: false,
            serializedName: 'min_os',
            type: {
              name: 'String'
            }
          },
          deviceFamily: {
            required: false,
            serializedName: 'device_family',
            type: {
              name: 'String'
            }
          },
          androidMinApiLevel: {
            required: false,
            serializedName: 'android_min_api_level',
            type: {
              name: 'String'
            }
          },
          bundleIdentifier: {
            required: false,
            serializedName: 'bundle_identifier',
            type: {
              name: 'String'
            }
          },
          packageHashes: {
            required: false,
            serializedName: 'package_hashes',
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
          },
          fingerprint: {
            required: false,
            serializedName: 'fingerprint',
            type: {
              name: 'String'
            }
          },
          uploadedAt: {
            required: true,
            serializedName: 'uploaded_at',
            type: {
              name: 'String'
            }
          },
          downloadUrl: {
            required: false,
            serializedName: 'download_url',
            type: {
              name: 'String'
            }
          },
          appIconUrl: {
            required: true,
            serializedName: 'app_icon_url',
            type: {
              name: 'String'
            }
          },
          installUrl: {
            required: false,
            serializedName: 'install_url',
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
          distributionGroups: {
            required: false,
            serializedName: 'distribution_groups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetLatestPrivateReleaseOKResponseDistributionGroupsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetLatestPrivateReleaseOKResponseDistributionGroupsItem'
                  }
              }
            }
          },
          distributionStores: {
            required: false,
            serializedName: 'distribution_stores',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetLatestPrivateReleaseOKResponseDistributionStoresItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetLatestPrivateReleaseOKResponseDistributionStoresItem'
                  }
              }
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetLatestPrivateReleaseOKResponseDestinationsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetLatestPrivateReleaseOKResponseDestinationsItem'
                  }
              }
            }
          },
          isUdidProvisioned: {
            required: false,
            serializedName: 'is_udid_provisioned',
            type: {
              name: 'Boolean'
            }
          },
          canResign: {
            required: false,
            serializedName: 'can_resign',
            type: {
              name: 'Boolean'
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'Composite',
              className: 'GetLatestPrivateReleaseOKResponseBuild'
            }
          },
          enabled: {
            required: true,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          isExternalBuild: {
            required: false,
            serializedName: 'is_external_build',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLatestPrivateReleaseOKResponse;
