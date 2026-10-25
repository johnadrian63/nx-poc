import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

export function createDocument(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle("Swagger POC")
        .setDescription("Swagger API Documentation")
        .setVersion("1.0")
        .addTag("documentation")
        .build();

    const documentaryFactory = () => SwaggerModule.createDocument(app, config);

    writeFileSync(
        resolve(process.cwd(), "openapi.json"),
        JSON.stringify(documentaryFactory(), null, 2)
    );

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