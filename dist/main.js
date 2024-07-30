"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _envservice = require("./infra/env/env.service");
const _swagger = require("@nestjs/swagger");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    const configService = app.get(_envservice.EnvService);
    const port = configService.get('PORT');
    function getSwaggerServerUrl() {
        switch(process.env.NODE_ENV){
            case 'production':
                return '';
            default:
                return `http://localhost:${port}`;
        }
    }
    const config = new _swagger.DocumentBuilder().setTitle('API').setVersion('0.1').addServer(getSwaggerServerUrl()).build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(port);
}
bootstrap();

//# sourceMappingURL=main.js.map