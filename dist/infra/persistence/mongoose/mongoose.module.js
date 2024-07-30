"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseModule", {
    enumerable: true,
    get: function() {
        return MongooseModule;
    }
});
const _conversationrepository = require("../../../application/contact-center/ports/conversation.repository");
const _userrepository = require("../../../application/contact-center/ports/user.repository");
const _env = require("../../env");
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _conversationentity = require("./entities/conversation.entity");
const _userentity = require("./entities/user.entity");
const _mongoconversationrepository = require("./repositories/mongo-conversation.repository");
const _mongouserrepository = require("./repositories/mongo-user.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let MongooseModule = class MongooseModule {
};
MongooseModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _mongoose.MongooseModule.forRootAsync({
                imports: [
                    _env.EnvModule
                ],
                useFactory: (envService)=>({
                        uri: envService.get('MONGODB_URL')
                    }),
                inject: [
                    _env.EnvService
                ]
            }),
            _mongoose.MongooseModule.forFeature([
                {
                    name: _userentity.User.name,
                    schema: _userentity.UserSchema
                },
                {
                    name: _conversationentity.Conversation.name,
                    schema: _conversationentity.ConversationSchema
                }
            ])
        ],
        providers: [
            {
                provide: _conversationrepository.ConversationRepository,
                useClass: _mongoconversationrepository.MongooseConversationRepository
            },
            {
                provide: _userrepository.UserRepository,
                useClass: _mongouserrepository.MongooseUserRepository
            }
        ],
        exports: [
            _conversationrepository.ConversationRepository,
            _userrepository.UserRepository
        ]
    })
], MongooseModule);

//# sourceMappingURL=mongoose.module.js.map