"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: function() {
        return User;
    }
});
const _entity = require("../../core/entities/entity");
let User = class User extends _entity.Entity {
    get id() {
        return this.props.id;
    }
    get name() {
        return this.props.name;
    }
    get type() {
        return this.props.type;
    }
    get phoneNumber() {
        return this.props.phoneNumber;
    }
    get currentState() {
        return this.props;
    }
    constructor(props){
        super(props);
    }
};

//# sourceMappingURL=user.js.map