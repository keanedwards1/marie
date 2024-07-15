"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubscriber = void 0;
const mailchimp_marketing_1 = __importDefault(require("@mailchimp/mailchimp_marketing"));
// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const apiKey = process.env.MAILCHIMP_API_KEY;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const listId = process.env.MAILCHIMP_LIST_ID;
if (!apiKey || !serverPrefix || !listId) {
    throw new Error('Mailchimp environment variables are not set.');
}
mailchimp_marketing_1.default.setConfig({
    apiKey,
    server: serverPrefix,
});
const addSubscriber = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield mailchimp_marketing_1.default.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
    });
    return response;
});
exports.addSubscriber = addSubscriber;
