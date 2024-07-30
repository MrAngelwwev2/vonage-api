import { EnvService } from "@app/infra/env";
import { Injectable } from "@nestjs/common";
import { VonageService } from "./vonage.service";
import { Vonage } from "@vonage/server-sdk";
import { ConversationRepository } from "@app/application/contact-center/ports/conversation.repository";
import { Conversation } from "@app/domain/contact-center/conversation";

@Injectable()
export class VonageCallRepository implements ConversationRepository {
    private vonage: Vonage;

    constructor(
        private vonageService: VonageService,
        private envService: EnvService
    ) {
        this.vonage = this.vonageService.getInstance();
    }

    async makeCall(agentPhoneNumber: string, callerPhoneNumber: string): Promise<string> {

        try {
            const call = {
                to: [{
                    type: 'phone',
                    number: callerPhoneNumber
                }],
                from: [{
                    type: 'phone',
                    number: agentPhoneNumber
                }],
                ncco: [{
                    action: 'talk',
                    text: 'This is a text to speech call from Vonage'
                }]
            };

            const callResult = await this.vonage.voice.createOutboundCall(call);
            console.log('Call initiated, UUID:', callResult.uuid);
            return "done";
        } catch (error) {
            console.error('Error: ', error)
        }

    }

    find(): Promise<Conversation[]> {
        throw new Error("Method not implemented.");
    }

    save(): Promise<string> {
        throw new Error("Method not implemented.");
    }

}