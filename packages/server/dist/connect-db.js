"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const configuration_1 = require("./configuration");
let connection;
async function default_1(options = {}) {
    const dbOptions = Object.assign({}, configuration_1.default.database.options, options);
    if (!connection) {
        connection = await mongoose_1.default.connect(configuration_1.default.database.uri(), dbOptions);
    }
    return connection;
}
exports.default = default_1;
//# sourceMappingURL=connect-db.js.map