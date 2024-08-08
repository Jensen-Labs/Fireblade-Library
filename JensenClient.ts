

export class JensenClient
{
    projectKey: string;

    constructor(projectKey?: string)
    {
        this.projectKey = projectKey || process.env.JENSEN_PROJECT_KEY || '';
        if (!this.projectKey)
        {
            throw new Error("You must supply a project key for the Jensen Fireblade Client to work.");
        }
    }

    public async info(message: string): Promise<boolean>
    {
        console.log(`[INFO] ${message}`);
        // This is where our axios requests would go to dispatch the message about the event.
        return false;
    }

    public async warn(message: string): Promise<boolean>
    {
        console.log(`[WARN] ${message}`);
        // This is where our axios requests would go to dispatch the message about the event.
        return false;
    }

    public async error(message: string): Promise<boolean>
    {
        console.log(`[ERROR] ${message}`);
        // This is where our axios requests would go to dispatch the message about the event.
        return false;
    }

    public async critical(message: string): Promise<boolean>
    {
        console.log(`[CRITICAL] ${message}`);
        // This is where our axios requests would go to dispatch the message about the event.
        return false;
    }
}