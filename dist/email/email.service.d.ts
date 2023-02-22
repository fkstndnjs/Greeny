export declare class EmailService {
    private transporter;
    constructor();
    sendMail(email: string, text: string): Promise<void>;
}
