/* eslint-disable @typescript-eslint/no-var-requires */
const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const fs = require('fs');

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  name: 'dataAPI.ts',
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), './__generated__'),
  url: 'https://data-api.makerdao.network/openapi.json',
  codeGenConstructs: (constructs) => ({
    ...constructs,
    Keyword: {
      ...constructs.Keyword,
      Object: 'Record<string, any>'
    }
  }),
  // input: path.resolve(process.cwd(), './foo/swagger.json'),
  // spec: {
  //   swagger: '3.0',
  //   info: {
  //     version: '1.0.0',
  //     title: 'Swagger Petstore'
  //   }
  // }
  // templates: path.resolve(process.cwd(), './api-templates'),
  // httpClientType: 'axios', // or "fetch"
  // defaultResponseAsSuccess: false,
  // generateClient: true,
  // generateRouteTypes: false,
  // generateResponses: false,
  // toJS: false,
  // extractRequestParams: false,
  // extractRequestBody: false,
  unwrapResponseData: true
  // prettier: {
  //   // By default prettier config is load from your project
  //   printWidth: 120,
  //   tabWidth: 2,
  //   trailingComma: 'all',
  //   parser: 'typescript'
  // },
  // defaultResponseType: 'void',
  // singleHttpClient: true,
  // cleanOutput: false,
  // enumNamesAsValues: false,
  // moduleNameFirstTag: false,
  // generateUnionEnums: false,
  // typePrefix: '',
  // typeSuffix: '',
  // enumKeyPrefix: '',
  // enumKeySuffix: '',
  // addReadonly: false,
  // extractingOptions: {
  //   requestBodySuffix: ['Payload', 'Body', 'Input'],
  //   requestParamsSuffix: ['Params'],
  //   responseBodySuffix: ['Data', 'Result', 'Output'],
  //   responseErrorSuffix: [
  //     'Error',
  //     'Fail',
  //     'Fails',
  //     'ErrorData',
  //     'HttpError',
  //     'BadResponse'
  //   ]
  // },
  // /** allow to generate extra files based with this extra templates, see more below */
  // extraTemplates: [],
  // anotherArrayType: false,
  // fixInvalidTypeNamePrefix: 'Type',
  // fixInvalidEnumKeyPrefix: 'Value',
  // primitiveTypeConstructs: (constructs) => ({
  //   ...constructs,
  //   string: {
  //     'date-time': 'Date'
  //   }
  // }),
  // hooks: {
  //   onCreateComponent: (component) => {},
  //   onCreateRequestParams: (rawType) => {},
  //   onCreateRoute: (routeData) => {},
  //   onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
  //   onFormatRouteName: (routeInfo, templateRouteName) => {},
  //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
  //   onInit: (configuration) => {},
  //   onPreParseSchema: (originalSchema, typeName, schemaType) => {},
  //   onParseSchema: (originalSchema, parsedSchema) => {},
  //   onPrepareConfig: (currentConfiguration) => {}
  // }
})
  .then(({ files }) => {
    files.forEach(({ content }) => {
      fs.writeFile(path, content);
    });
  })
  .catch((e) => console.error(e));

// generateTemplates({
//   cleanOutput: false,
//   output: PATH_TO_OUTPUT_DIR,
//   httpClientType: 'fetch',
//   modular: false,
//   silent: false,
//   rewrite: false
// });
