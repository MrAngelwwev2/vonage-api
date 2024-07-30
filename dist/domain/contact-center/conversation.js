"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Conversation", {
    enumerable: true,
    get: function() {
        return Conversation;
    }
});
const _entity = require("../../core/entities/entity");
let Conversation = class Conversation extends _entity.Entity {
    get id() {
        return this.props.id;
    }
    get caller() {
        return this.props.caller;
    }
    get agent() {
        return this.props.agent;
    }
    get currentState() {
        return this.props;
    }
    constructor(props){
        super(props);
    }
};

//# sourceMappingURL=conversation.js.map