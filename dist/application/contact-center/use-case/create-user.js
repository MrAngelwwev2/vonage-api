"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserUseCase", {
    enumerable: true,
    get: function() {
        return CreateUserUseCase;
    }
});
const _user = require("../../../domain/contact-center/user");
const _common = require("@nestjs/common");
const _userrepository = require("../ports/user.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateUserUseCase = class CreateUserUseCase {
    async execute({ name, type, phoneNumber }) {
        const user = new _user.User({
            name,
            type,
            phoneNumber
        });
        const response = await this.userRepository.create(user);
        return response;
    }
    constructor(userRepository){
        this.userRepository = userRepository;
    }
};
CreateUserUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userrepository.UserRepository === "undefined" ? Object : _userrepository.UserRepository
    ])
], CreateUserUseCase);

//# sourceMappingURL=create-user.js.map