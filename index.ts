import { JensenClient } from "./JensenClient";
import * as dotenv from 'dotenv';
dotenv.config();

export default class JensenClientFactory
{
    public static createClient(projectApiKey: string): JensenClient
    {
        return new JensenClient(projectApiKey);
    }
}