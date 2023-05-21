"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const configuration_1 = require("../configuration");
const book_controller_1 = require("../controller/book.controller");
const book_entity_1 = require("../entity/book.entity");
const health_controller_1 = require("../health.controller");
const book_repository_1 = require("../repository/book.repository");
const book_service_1 = require("../service/book.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                ignoreEnvFile: true,
                load: [() => configuration_1.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const database = configService.get('database');
                    return Object.assign({ uri: database.uri(), dbName: database.name }, database.options);
                },
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature([{ name: book_entity_1.Book.name, schema: book_entity_1.BookSchema }]),
        ],
        controllers: [health_controller_1.HealthController, book_controller_1.BookController],
        providers: [book_service_1.BookService, book_repository_1.BookRepository],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map