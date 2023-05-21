"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
exports.default = Object.assign(Object.assign({}, config), { port: parseInt(config.port, 10), database: Object.assign(Object.assign({}, config.database), { port: parseInt(config.database.port, 10), uri: function () {
            return `mongodb://${this.host}:${this.port}`;
        } }) });
//# sourceMappingURL=configuration.js.map