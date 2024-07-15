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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mailService_1 = require("./mailService");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post('/api/subscribe', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    console.log(`Received subscription request for email: ${email}`);
    try {
        const response = yield (0, mailService_1.addSubscriber)(email);
        console.log(`Mailchimp response: ${JSON.stringify(response)}`);
        res.status(200).send({ message: 'Subscribed successfully!' });
    }
    catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).send({ message: 'Failed to subscribe.' });
    }
}));
// Test endpoint for debugging
app.post('/api/test', (req, res) => {
    res.status(200).send({ message: 'Test endpoint works!' });
});
app.get('/api/test', (req, res) => {
    res.status(200).send({ message: 'Test endpoint works!' });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
