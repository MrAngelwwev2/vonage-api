"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpModule", {
    enumerable: true,
    get: function() {
        return HttpModule;
    }
});
const _common = require("@nestjs/common");
const _createuser = require("../../application/contact-center/use-case/create-user");
const _getuser = require("../../application/contact-center/use-case/get-user");
const _voiceprovidermodule = require("../voice-provider/voice-provider.module");
const _twiliogateway = require("./gateways/twilio.gateway");
const _vonagegateway = require("./gateways/vonage.gateway");
const _usercontroller = require("./controllers/user.controller");
const _vonagecontroller = require("./controllers/vonage.controller");
const _twiliocontroller = require("./controllers/twilio.controller");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpModule = class HttpModule {
} // In this case we will have two websockets paths in the same port but we can have only one using this code
 //https://stackoverflow.com/questions/74879717/conditionally-instantiate-service-class-as-a-provider-in-nestjs
 /*
providers: [
    {
      provide: "UserService",
      inject: [REQUEST, UserSuperAdminService, UserAdminService],
      useFactory: (request: Request, superAdminService: UserSuperAdminService, adminService: UserAdminService) => UserServiceFactory(request, superAdminService, adminService)
    }
...
]
*/ ;
HttpModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _voiceprovidermodule.VoiceProviderModule
        ],
        controllers: [
            _usercontroller.UserController,
            _vonagecontroller.VonageController,
            _twiliocontroller.TwilioController
        ],
        providers: [
            _twiliogateway.TwilioWebSocketGateway,
            _vonagegateway.VonageWebSocketGateway,
            _createuser.CreateUserUseCase,
            _getuser.GetUserUseCase
        ],
        exports: []
    })
], HttpModule);

//# sourceMappingURL=http.module.js.map