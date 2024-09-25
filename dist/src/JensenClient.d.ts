import { ProjectLogType } from "../projectLog";
declare class JensenDispatcher {
    private projectKey;
    private url;
    constructor(projectKey?: string);
    sendEvent(data: {
        title: string;
        description: string;
        logType: ProjectLogType;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
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
export declare class JensenClient extends JensenDispatcher {
    constructor(projectKey?: string);
    userEvent(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    userFailure(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    databaseInformation(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    databaseFailure(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    systemInformation(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    systemFailure(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    automatedInformation(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    automatedFailure(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    externalVendorInformation(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    externalVendorFailure(data: {
        title: string;
        description: string;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
    customEvent(data: {
        title: string;
        description: string;
        logType: ProjectLogType;
        eventMetadata?: Record<string, any>;
        timeElapsed?: number | null;
        userEmailInvoker?: string | null;
        userNameInvoker?: string | null;
    }): Promise<void>;
}
export {};
