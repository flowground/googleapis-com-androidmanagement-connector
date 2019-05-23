/**
 * Auto-generated action file for "Android Management" API.
 *
 * Generated at: 2019-05-23T09:12:58.424Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-androidmanagement-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'androidmanagement.enterprises.policies.patch'
 * Endpoint Path: '/v1/{name}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "name",
    "updateMask",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "name": "name",
    "updateMask": "updateMask",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "accountTypesWithManagementDisabled": "accountTypesWithManagementDisabled",
    "addUserDisabled": "addUserDisabled",
    "adjustVolumeDisabled": "adjustVolumeDisabled",
    "lockdownEnabled": "lockdownEnabled",
    "packageName": "packageName",
    "alwaysOnVpnPackage": "alwaysOnVpnPackage",
    "androidDevicePolicyTracks": "androidDevicePolicyTracks",
    "appAutoUpdatePolicy": "appAutoUpdatePolicy",
    "applications": "applications",
    "autoTimeRequired": "autoTimeRequired",
    "blockApplicationsEnabled": "blockApplicationsEnabled",
    "bluetoothConfigDisabled": "bluetoothConfigDisabled",
    "bluetoothContactSharingDisabled": "bluetoothContactSharingDisabled",
    "bluetoothDisabled": "bluetoothDisabled",
    "cameraDisabled": "cameraDisabled",
    "cellBroadcastsConfigDisabled": "cellBroadcastsConfigDisabled",
    "choosePrivateKeyRules": "choosePrivateKeyRules",
    "complianceRules": "complianceRules",
    "createWindowsDisabled": "createWindowsDisabled",
    "credentialsConfigDisabled": "credentialsConfigDisabled",
    "dataRoamingDisabled": "dataRoamingDisabled",
    "debuggingFeaturesAllowed": "debuggingFeaturesAllowed",
    "defaultPermissionPolicy": "defaultPermissionPolicy",
    "defaultMessage": "defaultMessage",
    "localizedMessages": "localizedMessages",
    "deviceOwnerLockScreenInfo": "deviceOwnerLockScreenInfo",
    "encryptionPolicy": "encryptionPolicy",
    "ensureVerifyAppsEnabled": "ensureVerifyAppsEnabled",
    "factoryResetDisabled": "factoryResetDisabled",
    "frpAdminEmails": "frpAdminEmails",
    "funDisabled": "funDisabled",
    "installAppsDisabled": "installAppsDisabled",
    "installUnknownSourcesAllowed": "installUnknownSourcesAllowed",
    "keyguardDisabled": "keyguardDisabled",
    "keyguardDisabledFeatures": "keyguardDisabledFeatures",
    "kioskCustomLauncherEnabled": "kioskCustomLauncherEnabled",
    "locationMode": "locationMode",
    "longSupportMessage": "longSupportMessage",
    "maximumTimeToLock": "maximumTimeToLock",
    "mobileNetworksConfigDisabled": "mobileNetworksConfigDisabled",
    "modifyAccountsDisabled": "modifyAccountsDisabled",
    "mountPhysicalMediaDisabled": "mountPhysicalMediaDisabled",
    "networkEscapeHatchEnabled": "networkEscapeHatchEnabled",
    "networkResetDisabled": "networkResetDisabled",
    "openNetworkConfiguration": "openNetworkConfiguration",
    "outgoingBeamDisabled": "outgoingBeamDisabled",
    "outgoingCallsDisabled": "outgoingCallsDisabled",
    "passwordPolicies": "passwordPolicies",
    "maximumFailedPasswordsForWipe": "maximumFailedPasswordsForWipe",
    "passwordExpirationTimeout": "passwordExpirationTimeout",
    "passwordHistoryLength": "passwordHistoryLength",
    "passwordMinimumLength": "passwordMinimumLength",
    "passwordMinimumLetters": "passwordMinimumLetters",
    "passwordMinimumLowerCase": "passwordMinimumLowerCase",
    "passwordMinimumNonLetter": "passwordMinimumNonLetter",
    "passwordMinimumNumeric": "passwordMinimumNumeric",
    "passwordMinimumSymbols": "passwordMinimumSymbols",
    "passwordMinimumUpperCase": "passwordMinimumUpperCase",
    "passwordQuality": "passwordQuality",
    "passwordScope": "passwordScope",
    "passwordRequirements": "passwordRequirements",
    "permissionGrants": "permissionGrants",
    "packageNames": "packageNames",
    "permittedInputMethods": "permittedInputMethods",
    "persistentPreferredActivities": "persistentPreferredActivities",
    "playStoreMode": "playStoreMode",
    "privateKeySelectionEnabled": "privateKeySelectionEnabled",
    "excludedHosts": "excludedHosts",
    "host": "host",
    "pacUri": "pacUri",
    "port": "port",
    "recommendedGlobalProxy": "recommendedGlobalProxy",
    "removeUserDisabled": "removeUserDisabled",
    "safeBootDisabled": "safeBootDisabled",
    "screenCaptureDisabled": "screenCaptureDisabled",
    "setUserIconDisabled": "setUserIconDisabled",
    "setWallpaperDisabled": "setWallpaperDisabled",
    "setupActions": "setupActions",
    "shareLocationDisabled": "shareLocationDisabled",
    "shortSupportMessage": "shortSupportMessage",
    "skipFirstUseHintsEnabled": "skipFirstUseHintsEnabled",
    "smsDisabled": "smsDisabled",
    "statusBarDisabled": "statusBarDisabled",
    "applicationReportsEnabled": "applicationReportsEnabled",
    "deviceSettingsEnabled": "deviceSettingsEnabled",
    "displayInfoEnabled": "displayInfoEnabled",
    "hardwareStatusEnabled": "hardwareStatusEnabled",
    "memoryInfoEnabled": "memoryInfoEnabled",
    "networkInfoEnabled": "networkInfoEnabled",
    "powerManagementEventsEnabled": "powerManagementEventsEnabled",
    "softwareInfoEnabled": "softwareInfoEnabled",
    "statusReportingSettings": "statusReportingSettings",
    "stayOnPluggedModes": "stayOnPluggedModes",
    "endMinutes": "endMinutes",
    "startMinutes": "startMinutes",
    "type": "type",
    "systemUpdate": "systemUpdate",
    "tetheringConfigDisabled": "tetheringConfigDisabled",
    "uninstallAppsDisabled": "uninstallAppsDisabled",
    "unmuteMicrophoneDisabled": "unmuteMicrophoneDisabled",
    "usbFileTransferDisabled": "usbFileTransferDisabled",
    "usbMassStorageEnabled": "usbMassStorageEnabled",
    "version": "version",
    "vpnConfigDisabled": "vpnConfigDisabled",
    "wifiConfigDisabled": "wifiConfigDisabled",
    "wifiConfigsLockdownEnabled": "wifiConfigsLockdownEnabled",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'androidmanagement.enterprises.policies.patch',
        pathName: '/v1/{name}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}