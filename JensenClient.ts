import { ProjectLog, ProjectLogType } from "./projectLog";


class JensenDispatcher
{
    private projectKey: string;
    private url = 'https://fireblade.jensenlabs.dev/api/logs';

    constructor()
    {
        // grab a possible of publicly available keys based on different frameworks
        // for instance, NEXT_PUBLIC_FIREBLADE_API_KEY for Next.js
        // or REACT_APP_FIREBLADE_API_KEY for React
        const publicProjectKey = process.env.NEXT_PUBLIC_FIREBLADE_API_KEY || process.env.REACT_APP_FIREBLADE_API_KEY || process.env.FIREBLADE_API_KEY || '';
        this.projectKey = publicProjectKey;
        if (!this.projectKey)
        {
            throw new Error("You must supply a project key for the Jensen Fireblade Client to work.");
        }
    }


    public async sendEvent(data: {
        title: string, 
        description: string, 
        logType: ProjectLogType,
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        const { title, description, eventMetadata, timeElapsed, userEmailInvoker, userNameInvoker } = data;
        const projectLog: ProjectLog = {
            content: title,
            description: description,
            eventMetadata: eventMetadata,
            eventType: data.logType,
            timeElapsed: timeElapsed,
            userEmailInvoker: userEmailInvoker,
            userNameInvoker: userNameInvoker
        };

        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({
                log: projectLog,
                apiKey: this.projectKey
            })
        });

        if (!response.ok)
        {
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
export class JensenClient extends JensenDispatcher
{
    // we want to inherit the constructor and then overload the sendEvent function for each projectlog type
    // we can use the super keyword to call the parent class constructor
    constructor()
    {
        super();
    }

    public async userEvent(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.USER_EVENT
        });
    }

    public async userFailure(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.USER_FAILURE
        });
    }

    public async databaseInformation(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.DATABASE_INFORMATION
        });
    }

    public async databaseFailure(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.DATABASE_FAILURE
        });
    }

    public async systemInformation(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.SYSTEM_INFORMATION
        });
    }

    public async systemFailure(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.SYSTEM_FAILURE
        });
    }

    public async automatedInformation(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.AUTOMATED_INFORMATION
        });
    }

    public async automatedFailure(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.AUTOMATED_FAILURE
        });
    }

    public async externalVendorInformation(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.EXTERNAL_VENDOR_INFORMATION
        });
    }

    public async externalVendorFailure(data: {
        title: string, 
        description: string, 
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent({
            ...data,
            logType: ProjectLogType.EXTERNAL_VENDOR_FAILURE
        });
    }

    public async customEvent(data: {
        title: string, 
        description: string, 
        logType: ProjectLogType,
        eventMetadata?: Record<string, any>,
        timeElapsed?: number | null,
        userEmailInvoker?: string | null,
        userNameInvoker?: string | null
    }): Promise<void>
    {
        return this.sendEvent(data);
    }
}