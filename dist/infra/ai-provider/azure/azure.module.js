"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AzureModule", {
    enumerable: true,
    get: function() {
        return AzureModule;
    }
});
const _common = require("@nestjs/common");
const _env = require("../../env");
const _speechservice = require("./speech.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AzureModule = class AzureModule {
};
AzureModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _env.EnvModule
        ],
        providers: [
            _speechservice.SpeechService
        ],
        exports: []
    })
], AzureModule);

//# sourceMappingURL=azure.module.js.map