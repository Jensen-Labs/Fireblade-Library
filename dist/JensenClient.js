"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JensenClient = void 0;
const projectLog_1 = require("./projectLog");
class JensenDispatcher {
    projectKey;
    // private url = 'http://localhost:3000/api/logs';
    url = 'https://fireblade.jensenlabs.dev/api/logs';
    constructor(projectKey) {
        this.projectKey = projectKey || process.env.JENSEN_LABS_PROJECT_API_KEY || '';
        if (!this.projectKey) {
            throw new Error("You must supply a project key for the Jensen Fireblade Client to work.");
        }
    }
    async sendEvent(data) {
        const { title, description, eventMetadata, timeElapsed, userEmailInvoker, userNameInvoker } = data;
        const projectLog = {
            content: title,
            description: description,
            eventMetadata: eventMetadata,
            eventType: projectLog_1.ProjectLogType.USER_EVENT,
            timeElapsed: timeElapsed,
            userEmailInvoker: userEmailInvoker,
            userNameInvoker: userNameInvoker
        };
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.projectKey}`,
            },
            body: JSON.stringify(projectLog)
        });
        if (!response.ok) {
            console.error(response);
            throw new Error("Failed to send event to Jensen API");
        }
    }
}
/**
 * JensenClient
 * @description The JensenClient class is a wrapper around the JensenDispatcher class that provides a more user-friendly interface for sending events to the Fireblade API.
 * @example
 * ```typescript
 * import { JensenClient } from "./JensenClient";
 * const jensen = new JensenClient();
 * jensen.userEvent({
 *      title: 'Test',
 *      description: 'Test'
 * });
 */
class JensenClient extends JensenDispatcher {
    // we want to inherit the constructor and then overload the sendEvent function for each projectlog type
    // we can use the super keyword to call the parent class constructor
    constructor(projectKey) {
        super(projectKey);
    }
    async userEvent(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.USER_EVENT
        });
    }
    async userFailure(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.USER_FAILURE
        });
    }
    async databaseInformation(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.DATABASE_INFORMATION
        });
    }
    async databaseFailure(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.DATABASE_FAILURE
        });
    }
    async systemInformation(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.SYSTEM_INFORMATION
        });
    }
    async systemFailure(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.SYSTEM_FAILURE
        });
    }
    async automatedInformation(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.AUTOMATED_INFORMATION
        });
    }
    async automatedFailure(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.AUTOMATED_FAILURE
        });
    }
    async externalVendorInformation(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.EXTERNAL_VENDOR_INFORMATION
        });
    }
    async externalVendorFailure(data) {
        return this.sendEvent({
            ...data,
            logType: projectLog_1.ProjectLogType.EXTERNAL_VENDOR_FAILURE
        });
    }
    async customEvent(data) {
        return this.sendEvent(data);
    }
}
exports.JensenClient = JensenClient;
