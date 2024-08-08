import { JensenClient } from "./JensenClient";

export function sum(a: number, b: number) {
    const jensen = new JensenClient('project key goes here!');
    jensen.warn('There was a warning!');
    return a + b;
}

sum(15, 25);