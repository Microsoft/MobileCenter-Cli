/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, ServiceClientCredentials, RequestOptions, ServiceCallback } from 'ms-rest';
import * as operations from "./operations";

declare class SonomaClient {
    /**
     * @class
     * Initializes a new instance of the SonomaClient class.
     * @constructor
     *
     * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     */
    constructor(credentials: ServiceClientCredentials, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    // Operation groups
    invitations: operations.Invitations;
    users: operations.Users;
    xcodeVersions: operations.XcodeVersions;
    versionsOperations: operations.VersionsOperations;
    apps: operations.Apps;
    symbols: operations.Symbols;
    symbolUploads: operations.SymbolUploads;
    symbolUpLoadsOperations: operations.SymbolUpLoadsOperations;
    symbolUploadOperations: operations.SymbolUploadOperations;
    repositories: operations.Repositories;
    packages: operations.Packages;
    packageModel: operations.PackageModel;
    packageUpload: operations.PackageUpload;
    crashOperations: operations.CrashOperations;
    commits: operations.Commits;
    builds: operations.Builds;
    branches: operations.Branches;
    sessions: operations.Sessions;
    devices: operations.Devices;
    available: operations.Available;
    apiTokens: operations.ApiTokens;
    }

export = SonomaClient;
