import { Entity } from "@app/core/entities/entity";

export interface ConversationProps {
    id?: string;
    caller: string;
    agent: string
}

export class Conversation extends Entity<ConversationProps> {
    constructor(props: ConversationProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get caller(): string {
        return this.props.caller;
    }

    get agent(): string {
        return this.props.agent;
    }

    get currentState(): ConversationProps {
        return this.props;
    }
}