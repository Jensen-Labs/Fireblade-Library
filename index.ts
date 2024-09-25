import { JensenClient } from "./JensenClient";
import * as dotenv from 'dotenv';
dotenv.config();

export default class JensenClientFactory
{
    public static createClient(): JensenClient
    {
        return new JensenClient(process.env.JENSEN_LABS_PROJECT_API_KEY);
    }
}