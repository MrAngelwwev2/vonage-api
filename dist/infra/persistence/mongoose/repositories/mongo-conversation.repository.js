"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseConversationRepository", {
    enumerable: true,
    get: function() {
        return MongooseConversationRepository;
    }
});
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = require("mongoose");
const _conversationentity = require("../entities/conversation.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let MongooseConversationRepository = class MongooseConversationRepository {
    find() {
        throw new Error("Method not implemented.");
    }
    save() {
        throw new Error("Method not implemented.");
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
MongooseConversationRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_conversationentity.Conversation.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], MongooseConversationRepository);

//# sourceMappingURL=mongo-conversation.repository.js.map