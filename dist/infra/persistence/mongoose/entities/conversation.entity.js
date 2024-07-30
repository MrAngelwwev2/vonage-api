"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Conversation: function() {
        return Conversation;
    },
    ConversationSchema: function() {
        return ConversationSchema;
    }
});
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = /*#__PURE__*/ _interop_require_wildcard(require("mongoose"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let Conversation = class Conversation {
};
_ts_decorate([
    (0, _mongoose.Prop)({
        type: [
            {
                type: _mongoose1.default.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }),
    _ts_metadata("design:type", typeof _mongoose1.ObjectId === "undefined" ? Object : _mongoose1.ObjectId)
], Conversation.prototype, "idCaller", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        type: [
            {
                type: _mongoose1.default.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }),
    _ts_metadata("design:type", typeof _mongoose1.ObjectId === "undefined" ? Object : _mongoose1.ObjectId)
], Conversation.prototype, "idAgent", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Conversation.prototype, "startedAt", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Conversation.prototype, "endedAt", void 0);
Conversation = _ts_decorate([
    (0, _mongoose.Schema)()
], Conversation);
const ConversationSchema = _mongoose.SchemaFactory.createForClass(Conversation);

//# sourceMappingURL=conversation.entity.js.map