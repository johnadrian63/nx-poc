import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function createDocument(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle("Swagger POC")
        .setDescription("Swagger API Documentation")
        .setVersion("1.0")
        .addTag("documentation")
        .build();

    console.log("createDocument");

    const documentaryFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api", app, documentaryFactory, {
        jsonDocumentUrl: '/api-json',
        useGlobalPrefix: false,
        customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
        customJs: [
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
        ],
    });
}