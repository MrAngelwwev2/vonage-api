"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseConversationMapper", {
    enumerable: true,
    get: function() {
        return MongooseConversationMapper;
    }
});
const _conversation = require("../../../../domain/contact-center/conversation");
let MongooseConversationMapper = class MongooseConversationMapper {
    static toDomain(entity) {
        const model = new _conversation.Conversation({
            id: entity._id.toString(),
            caller: entity.idCaller.toString(),
            agent: entity.idAgent.toString()
        });
        return model;
    }
    static toMongoose(conversation) {
        return {
            agent: conversation.agent,
            caller: conversation.caller
        };
    }
};

//# sourceMappingURL=mongo-conversation-mapper.js.map