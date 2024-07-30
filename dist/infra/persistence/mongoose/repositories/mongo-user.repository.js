"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MongooseUserRepository", {
    enumerable: true,
    get: function() {
        return MongooseUserRepository;
    }
});
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = require("mongoose");
const _userentity = require("../entities/user.entity");
const _mongousermapper = require("../mapper/mongo-user-mapper");
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
let MongooseUserRepository = class MongooseUserRepository {
    async findCaller() {
        const findQuery = await this.userModel.find({
            type: 'caller'
        });
        return findQuery.map((item)=>_mongousermapper.MongooseUserMapper.toDomain(item));
    }
    async findAgents() {
        const findQuery = await this.userModel.find({
            type: 'agent'
        });
        return findQuery.map((item)=>_mongousermapper.MongooseUserMapper.toDomain(item));
    }
    async create(user) {
        const data = _mongousermapper.MongooseUserMapper.toMongoose(user);
        const entity = new this.userModel({
            ...data
        });
        await entity.save();
        return _mongousermapper.MongooseUserMapper.toDomain(entity);
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
MongooseUserRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_userentity.User.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], MongooseUserRepository);

//# sourceMappingURL=mongo-user.repository.js.map