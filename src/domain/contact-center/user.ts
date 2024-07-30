import { Entity } from "@app/core/entities/entity";

export interface UserProps {
    id?: string;
    name: string;
    type: string;
    phoneNumber: string;
}

export class User extends Entity<UserProps> {
    constructor(props: UserProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get name(): string {
        return this.props.name;
    }

    get type(): string {
        return this.props.type;
    }

    get phoneNumber(): string {
        return this.props.phoneNumber;
    }

    get currentState(): UserProps {
        return this.props;
    }
}