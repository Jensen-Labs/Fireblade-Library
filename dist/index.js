"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JensenClientFactory = void 0;
const JensenClient_1 = require("./JensenClient");
const dotenv = require("dotenv");
dotenv.config();
class JensenClientFactory {
    static createClient() {
        return new JensenClient_1.JensenClient(process.env.JENSEN_LABS_PROJECT_API_KEY);
    }
}
exports.JensenClientFactory = JensenClientFactory;
