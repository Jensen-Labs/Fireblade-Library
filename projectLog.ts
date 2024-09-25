export enum ProjectLogType
{
    USER_EVENT = 'User Event',
    USER_FAILURE = 'User Failure',
    DATABASE_INFORMATION = 'Database Information',
    DATABASE_FAILURE = 'Database Failure',
    SYSTEM_INFORMATION = 'System Information',
    SYSTEM_FAILURE = 'System Failure',
    AUTOMATED_INFORMATION = 'Automated Information',
    AUTOMATED_FAILURE = 'Automated Failure',
    EXTERNAL_VENDOR_INFORMATION = 'External Vendor Information',
    EXTERNAL_VENDOR_FAILURE = 'External Vendor Failure',
}

export type ProjectLog = 
{
    content: string;
    description: string;
    eventMetadata?: Record<string, any>;
    eventType: ProjectLogType;
    timeElapsed?: number | null;
    userEmailInvoker?: string | null;
    userNameInvoker?: string | null;
}