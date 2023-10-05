"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@grpc+proto-loader@0.7.10";
exports.ids = ["vendor-chunks/@grpc+proto-loader@0.7.10"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @license\n * Copyright 2018 gRPC authors.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadFileDescriptorSetFromObject = exports.loadFileDescriptorSetFromBuffer = exports.fromJSON = exports.loadSync = exports.load = exports.isAnyExtension = exports.Long = void 0;\nconst camelCase = __webpack_require__(/*! lodash.camelcase */ \"(ssr)/./node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js\");\nconst Protobuf = __webpack_require__(/*! protobufjs */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/index.js\");\nconst descriptor = __webpack_require__(/*! protobufjs/ext/descriptor */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/ext/descriptor/index.js\");\nconst util_1 = __webpack_require__(/*! ./util */ \"(ssr)/./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js\");\nconst Long = __webpack_require__(/*! long */ \"(ssr)/./node_modules/.pnpm/long@5.2.3/node_modules/long/umd/index.js\");\nexports.Long = Long;\nfunction isAnyExtension(obj) {\n    return ('@type' in obj) && (typeof obj['@type'] === 'string');\n}\nexports.isAnyExtension = isAnyExtension;\nconst descriptorOptions = {\n    longs: String,\n    enums: String,\n    bytes: String,\n    defaults: true,\n    oneofs: true,\n    json: true,\n};\nfunction joinName(baseName, name) {\n    if (baseName === '') {\n        return name;\n    }\n    else {\n        return baseName + '.' + name;\n    }\n}\nfunction isHandledReflectionObject(obj) {\n    return (obj instanceof Protobuf.Service ||\n        obj instanceof Protobuf.Type ||\n        obj instanceof Protobuf.Enum);\n}\nfunction isNamespaceBase(obj) {\n    return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;\n}\nfunction getAllHandledReflectionObjects(obj, parentName) {\n    const objName = joinName(parentName, obj.name);\n    if (isHandledReflectionObject(obj)) {\n        return [[objName, obj]];\n    }\n    else {\n        if (isNamespaceBase(obj) && typeof obj.nested !== 'undefined') {\n            return Object.keys(obj.nested)\n                .map(name => {\n                return getAllHandledReflectionObjects(obj.nested[name], objName);\n            })\n                .reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);\n        }\n    }\n    return [];\n}\nfunction createDeserializer(cls, options) {\n    return function deserialize(argBuf) {\n        return cls.toObject(cls.decode(argBuf), options);\n    };\n}\nfunction createSerializer(cls) {\n    return function serialize(arg) {\n        if (Array.isArray(arg)) {\n            throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);\n        }\n        const message = cls.fromObject(arg);\n        return cls.encode(message).finish();\n    };\n}\nfunction createMethodDefinition(method, serviceName, options, fileDescriptors) {\n    /* This is only ever called after the corresponding root.resolveAll(), so we\n     * can assume that the resolved request and response types are non-null */\n    const requestType = method.resolvedRequestType;\n    const responseType = method.resolvedResponseType;\n    return {\n        path: '/' + serviceName + '/' + method.name,\n        requestStream: !!method.requestStream,\n        responseStream: !!method.responseStream,\n        requestSerialize: createSerializer(requestType),\n        requestDeserialize: createDeserializer(requestType, options),\n        responseSerialize: createSerializer(responseType),\n        responseDeserialize: createDeserializer(responseType, options),\n        // TODO(murgatroid99): Find a better way to handle this\n        originalName: camelCase(method.name),\n        requestType: createMessageDefinition(requestType, fileDescriptors),\n        responseType: createMessageDefinition(responseType, fileDescriptors),\n    };\n}\nfunction createServiceDefinition(service, name, options, fileDescriptors) {\n    const def = {};\n    for (const method of service.methodsArray) {\n        def[method.name] = createMethodDefinition(method, name, options, fileDescriptors);\n    }\n    return def;\n}\nfunction createMessageDefinition(message, fileDescriptors) {\n    const messageDescriptor = message.toDescriptor('proto3');\n    return {\n        format: 'Protocol Buffer 3 DescriptorProto',\n        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),\n        fileDescriptorProtos: fileDescriptors,\n    };\n}\nfunction createEnumDefinition(enumType, fileDescriptors) {\n    const enumDescriptor = enumType.toDescriptor('proto3');\n    return {\n        format: 'Protocol Buffer 3 EnumDescriptorProto',\n        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),\n        fileDescriptorProtos: fileDescriptors,\n    };\n}\n/**\n * function createDefinition(obj: Protobuf.Service, name: string, options:\n * Options): ServiceDefinition; function createDefinition(obj: Protobuf.Type,\n * name: string, options: Options): MessageTypeDefinition; function\n * createDefinition(obj: Protobuf.Enum, name: string, options: Options):\n * EnumTypeDefinition;\n */\nfunction createDefinition(obj, name, options, fileDescriptors) {\n    if (obj instanceof Protobuf.Service) {\n        return createServiceDefinition(obj, name, options, fileDescriptors);\n    }\n    else if (obj instanceof Protobuf.Type) {\n        return createMessageDefinition(obj, fileDescriptors);\n    }\n    else if (obj instanceof Protobuf.Enum) {\n        return createEnumDefinition(obj, fileDescriptors);\n    }\n    else {\n        throw new Error('Type mismatch in reflection object handling');\n    }\n}\nfunction createPackageDefinition(root, options) {\n    const def = {};\n    root.resolveAll();\n    const descriptorList = root.toDescriptor('proto3').file;\n    const bufferList = descriptorList.map(value => Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));\n    for (const [name, obj] of getAllHandledReflectionObjects(root, '')) {\n        def[name] = createDefinition(obj, name, options, bufferList);\n    }\n    return def;\n}\nfunction createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {\n    options = options || {};\n    const root = Protobuf.Root.fromDescriptor(decodedDescriptorSet);\n    root.resolveAll();\n    return createPackageDefinition(root, options);\n}\n/**\n * Load a .proto file with the specified options.\n * @param filename One or multiple file paths to load. Can be an absolute path\n *     or relative to an include path.\n * @param options.keepCase Preserve field names. The default is to change them\n *     to camel case.\n * @param options.longs The type that should be used to represent `long` values.\n *     Valid options are `Number` and `String`. Defaults to a `Long` object type\n *     from a library.\n * @param options.enums The type that should be used to represent `enum` values.\n *     The only valid option is `String`. Defaults to the numeric value.\n * @param options.bytes The type that should be used to represent `bytes`\n *     values. Valid options are `Array` and `String`. The default is to use\n *     `Buffer`.\n * @param options.defaults Set default values on output objects. Defaults to\n *     `false`.\n * @param options.arrays Set empty arrays for missing array values even if\n *     `defaults` is `false`. Defaults to `false`.\n * @param options.objects Set empty objects for missing object values even if\n *     `defaults` is `false`. Defaults to `false`.\n * @param options.oneofs Set virtual oneof properties to the present field's\n *     name\n * @param options.json Represent Infinity and NaN as strings in float fields,\n *     and automatically decode google.protobuf.Any values.\n * @param options.includeDirs Paths to search for imported `.proto` files.\n */\nfunction load(filename, options) {\n    return (0, util_1.loadProtosWithOptions)(filename, options).then(loadedRoot => {\n        return createPackageDefinition(loadedRoot, options);\n    });\n}\nexports.load = load;\nfunction loadSync(filename, options) {\n    const loadedRoot = (0, util_1.loadProtosWithOptionsSync)(filename, options);\n    return createPackageDefinition(loadedRoot, options);\n}\nexports.loadSync = loadSync;\nfunction fromJSON(json, options) {\n    options = options || {};\n    const loadedRoot = Protobuf.Root.fromJSON(json);\n    loadedRoot.resolveAll();\n    return createPackageDefinition(loadedRoot, options);\n}\nexports.fromJSON = fromJSON;\nfunction loadFileDescriptorSetFromBuffer(descriptorSet, options) {\n    const decodedDescriptorSet = descriptor.FileDescriptorSet.decode(descriptorSet);\n    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);\n}\nexports.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;\nfunction loadFileDescriptorSetFromObject(descriptorSet, options) {\n    const decodedDescriptorSet = descriptor.FileDescriptorSet.fromObject(descriptorSet);\n    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);\n}\nexports.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;\n(0, util_1.addCommonProtos)();\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGdycGMrcHJvdG8tbG9hZGVyQDAuNy4xMC9ub2RlX21vZHVsZXMvQGdycGMvcHJvdG8tbG9hZGVyL2J1aWxkL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUNBQXVDLEdBQUcsdUNBQXVDLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsWUFBWSxHQUFHLHNCQUFzQixHQUFHLFlBQVk7QUFDOUssa0JBQWtCLG1CQUFPLENBQUMsa0hBQWtCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLGdHQUFZO0FBQ3JDLG1CQUFtQixtQkFBTyxDQUFDLDhIQUEyQjtBQUN0RCxlQUFlLG1CQUFPLENBQUMsc0hBQVE7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLGtGQUFNO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsVUFBVTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQywyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZ3JwYytwcm90by1sb2FkZXJAMC43LjEwL25vZGVfbW9kdWxlcy9AZ3JwYy9wcm90by1sb2FkZXIvYnVpbGQvc3JjL2luZGV4LmpzP2M5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBnUlBDIGF1dGhvcnMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkRmlsZURlc2NyaXB0b3JTZXRGcm9tT2JqZWN0ID0gZXhwb3J0cy5sb2FkRmlsZURlc2NyaXB0b3JTZXRGcm9tQnVmZmVyID0gZXhwb3J0cy5mcm9tSlNPTiA9IGV4cG9ydHMubG9hZFN5bmMgPSBleHBvcnRzLmxvYWQgPSBleHBvcnRzLmlzQW55RXh0ZW5zaW9uID0gZXhwb3J0cy5Mb25nID0gdm9pZCAwO1xuY29uc3QgY2FtZWxDYXNlID0gcmVxdWlyZShcImxvZGFzaC5jYW1lbGNhc2VcIik7XG5jb25zdCBQcm90b2J1ZiA9IHJlcXVpcmUoXCJwcm90b2J1ZmpzXCIpO1xuY29uc3QgZGVzY3JpcHRvciA9IHJlcXVpcmUoXCJwcm90b2J1ZmpzL2V4dC9kZXNjcmlwdG9yXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmNvbnN0IExvbmcgPSByZXF1aXJlKFwibG9uZ1wiKTtcbmV4cG9ydHMuTG9uZyA9IExvbmc7XG5mdW5jdGlvbiBpc0FueUV4dGVuc2lvbihvYmopIHtcbiAgICByZXR1cm4gKCdAdHlwZScgaW4gb2JqKSAmJiAodHlwZW9mIG9ialsnQHR5cGUnXSA9PT0gJ3N0cmluZycpO1xufVxuZXhwb3J0cy5pc0FueUV4dGVuc2lvbiA9IGlzQW55RXh0ZW5zaW9uO1xuY29uc3QgZGVzY3JpcHRvck9wdGlvbnMgPSB7XG4gICAgbG9uZ3M6IFN0cmluZyxcbiAgICBlbnVtczogU3RyaW5nLFxuICAgIGJ5dGVzOiBTdHJpbmcsXG4gICAgZGVmYXVsdHM6IHRydWUsXG4gICAgb25lb2ZzOiB0cnVlLFxuICAgIGpzb246IHRydWUsXG59O1xuZnVuY3Rpb24gam9pbk5hbWUoYmFzZU5hbWUsIG5hbWUpIHtcbiAgICBpZiAoYmFzZU5hbWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2VOYW1lICsgJy4nICsgbmFtZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc0hhbmRsZWRSZWZsZWN0aW9uT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqIGluc3RhbmNlb2YgUHJvdG9idWYuU2VydmljZSB8fFxuICAgICAgICBvYmogaW5zdGFuY2VvZiBQcm90b2J1Zi5UeXBlIHx8XG4gICAgICAgIG9iaiBpbnN0YW5jZW9mIFByb3RvYnVmLkVudW0pO1xufVxuZnVuY3Rpb24gaXNOYW1lc3BhY2VCYXNlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBQcm90b2J1Zi5OYW1lc3BhY2UgfHwgb2JqIGluc3RhbmNlb2YgUHJvdG9idWYuUm9vdDtcbn1cbmZ1bmN0aW9uIGdldEFsbEhhbmRsZWRSZWZsZWN0aW9uT2JqZWN0cyhvYmosIHBhcmVudE5hbWUpIHtcbiAgICBjb25zdCBvYmpOYW1lID0gam9pbk5hbWUocGFyZW50TmFtZSwgb2JqLm5hbWUpO1xuICAgIGlmIChpc0hhbmRsZWRSZWZsZWN0aW9uT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIFtbb2JqTmFtZSwgb2JqXV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNOYW1lc3BhY2VCYXNlKG9iaikgJiYgdHlwZW9mIG9iai5uZXN0ZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqLm5lc3RlZClcbiAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBbGxIYW5kbGVkUmVmbGVjdGlvbk9iamVjdHMob2JqLm5lc3RlZFtuYW1lXSwgb2JqTmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yLmNvbmNhdChjdXJyZW50VmFsdWUpLCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuZnVuY3Rpb24gY3JlYXRlRGVzZXJpYWxpemVyKGNscywgb3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiBkZXNlcmlhbGl6ZShhcmdCdWYpIHtcbiAgICAgICAgcmV0dXJuIGNscy50b09iamVjdChjbHMuZGVjb2RlKGFyZ0J1ZiksIG9wdGlvbnMpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTZXJpYWxpemVyKGNscykge1xuICAgIHJldHVybiBmdW5jdGlvbiBzZXJpYWxpemUoYXJnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHNlcmlhbGl6ZSBtZXNzYWdlOiBleHBlY3RlZCBvYmplY3Qgd2l0aCAke2Nscy5uYW1lfSBzdHJ1Y3R1cmUsIGdvdCBhcnJheSBpbnN0ZWFkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNscy5mcm9tT2JqZWN0KGFyZyk7XG4gICAgICAgIHJldHVybiBjbHMuZW5jb2RlKG1lc3NhZ2UpLmZpbmlzaCgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVNZXRob2REZWZpbml0aW9uKG1ldGhvZCwgc2VydmljZU5hbWUsIG9wdGlvbnMsIGZpbGVEZXNjcmlwdG9ycykge1xuICAgIC8qIFRoaXMgaXMgb25seSBldmVyIGNhbGxlZCBhZnRlciB0aGUgY29ycmVzcG9uZGluZyByb290LnJlc29sdmVBbGwoKSwgc28gd2VcbiAgICAgKiBjYW4gYXNzdW1lIHRoYXQgdGhlIHJlc29sdmVkIHJlcXVlc3QgYW5kIHJlc3BvbnNlIHR5cGVzIGFyZSBub24tbnVsbCAqL1xuICAgIGNvbnN0IHJlcXVlc3RUeXBlID0gbWV0aG9kLnJlc29sdmVkUmVxdWVzdFR5cGU7XG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gbWV0aG9kLnJlc29sdmVkUmVzcG9uc2VUeXBlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6ICcvJyArIHNlcnZpY2VOYW1lICsgJy8nICsgbWV0aG9kLm5hbWUsXG4gICAgICAgIHJlcXVlc3RTdHJlYW06ICEhbWV0aG9kLnJlcXVlc3RTdHJlYW0sXG4gICAgICAgIHJlc3BvbnNlU3RyZWFtOiAhIW1ldGhvZC5yZXNwb25zZVN0cmVhbSxcbiAgICAgICAgcmVxdWVzdFNlcmlhbGl6ZTogY3JlYXRlU2VyaWFsaXplcihyZXF1ZXN0VHlwZSksXG4gICAgICAgIHJlcXVlc3REZXNlcmlhbGl6ZTogY3JlYXRlRGVzZXJpYWxpemVyKHJlcXVlc3RUeXBlLCBvcHRpb25zKSxcbiAgICAgICAgcmVzcG9uc2VTZXJpYWxpemU6IGNyZWF0ZVNlcmlhbGl6ZXIocmVzcG9uc2VUeXBlKSxcbiAgICAgICAgcmVzcG9uc2VEZXNlcmlhbGl6ZTogY3JlYXRlRGVzZXJpYWxpemVyKHJlc3BvbnNlVHlwZSwgb3B0aW9ucyksXG4gICAgICAgIC8vIFRPRE8obXVyZ2F0cm9pZDk5KTogRmluZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXNcbiAgICAgICAgb3JpZ2luYWxOYW1lOiBjYW1lbENhc2UobWV0aG9kLm5hbWUpLFxuICAgICAgICByZXF1ZXN0VHlwZTogY3JlYXRlTWVzc2FnZURlZmluaXRpb24ocmVxdWVzdFR5cGUsIGZpbGVEZXNjcmlwdG9ycyksXG4gICAgICAgIHJlc3BvbnNlVHlwZTogY3JlYXRlTWVzc2FnZURlZmluaXRpb24ocmVzcG9uc2VUeXBlLCBmaWxlRGVzY3JpcHRvcnMpLFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTZXJ2aWNlRGVmaW5pdGlvbihzZXJ2aWNlLCBuYW1lLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnMpIHtcbiAgICBjb25zdCBkZWYgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBzZXJ2aWNlLm1ldGhvZHNBcnJheSkge1xuICAgICAgICBkZWZbbWV0aG9kLm5hbWVdID0gY3JlYXRlTWV0aG9kRGVmaW5pdGlvbihtZXRob2QsIG5hbWUsIG9wdGlvbnMsIGZpbGVEZXNjcmlwdG9ycyk7XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlRGVmaW5pdGlvbihtZXNzYWdlLCBmaWxlRGVzY3JpcHRvcnMpIHtcbiAgICBjb25zdCBtZXNzYWdlRGVzY3JpcHRvciA9IG1lc3NhZ2UudG9EZXNjcmlwdG9yKCdwcm90bzMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdQcm90b2NvbCBCdWZmZXIgMyBEZXNjcmlwdG9yUHJvdG8nLFxuICAgICAgICB0eXBlOiBtZXNzYWdlRGVzY3JpcHRvci4kdHlwZS50b09iamVjdChtZXNzYWdlRGVzY3JpcHRvciwgZGVzY3JpcHRvck9wdGlvbnMpLFxuICAgICAgICBmaWxlRGVzY3JpcHRvclByb3RvczogZmlsZURlc2NyaXB0b3JzLFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVFbnVtRGVmaW5pdGlvbihlbnVtVHlwZSwgZmlsZURlc2NyaXB0b3JzKSB7XG4gICAgY29uc3QgZW51bURlc2NyaXB0b3IgPSBlbnVtVHlwZS50b0Rlc2NyaXB0b3IoJ3Byb3RvMycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ1Byb3RvY29sIEJ1ZmZlciAzIEVudW1EZXNjcmlwdG9yUHJvdG8nLFxuICAgICAgICB0eXBlOiBlbnVtRGVzY3JpcHRvci4kdHlwZS50b09iamVjdChlbnVtRGVzY3JpcHRvciwgZGVzY3JpcHRvck9wdGlvbnMpLFxuICAgICAgICBmaWxlRGVzY3JpcHRvclByb3RvczogZmlsZURlc2NyaXB0b3JzLFxuICAgIH07XG59XG4vKipcbiAqIGZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24ob2JqOiBQcm90b2J1Zi5TZXJ2aWNlLCBuYW1lOiBzdHJpbmcsIG9wdGlvbnM6XG4gKiBPcHRpb25zKTogU2VydmljZURlZmluaXRpb247IGZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24ob2JqOiBQcm90b2J1Zi5UeXBlLFxuICogbmFtZTogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zKTogTWVzc2FnZVR5cGVEZWZpbml0aW9uOyBmdW5jdGlvblxuICogY3JlYXRlRGVmaW5pdGlvbihvYmo6IFByb3RvYnVmLkVudW0sIG5hbWU6IHN0cmluZywgb3B0aW9uczogT3B0aW9ucyk6XG4gKiBFbnVtVHlwZURlZmluaXRpb247XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24ob2JqLCBuYW1lLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnMpIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgUHJvdG9idWYuU2VydmljZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU2VydmljZURlZmluaXRpb24ob2JqLCBuYW1lLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBQcm90b2J1Zi5UeXBlKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVNZXNzYWdlRGVmaW5pdGlvbihvYmosIGZpbGVEZXNjcmlwdG9ycyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIFByb3RvYnVmLkVudW0pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVudW1EZWZpbml0aW9uKG9iaiwgZmlsZURlc2NyaXB0b3JzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZSBtaXNtYXRjaCBpbiByZWZsZWN0aW9uIG9iamVjdCBoYW5kbGluZycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhY2thZ2VEZWZpbml0aW9uKHJvb3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWYgPSB7fTtcbiAgICByb290LnJlc29sdmVBbGwoKTtcbiAgICBjb25zdCBkZXNjcmlwdG9yTGlzdCA9IHJvb3QudG9EZXNjcmlwdG9yKCdwcm90bzMnKS5maWxlO1xuICAgIGNvbnN0IGJ1ZmZlckxpc3QgPSBkZXNjcmlwdG9yTGlzdC5tYXAodmFsdWUgPT4gQnVmZmVyLmZyb20oZGVzY3JpcHRvci5GaWxlRGVzY3JpcHRvclByb3RvLmVuY29kZSh2YWx1ZSkuZmluaXNoKCkpKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBvYmpdIG9mIGdldEFsbEhhbmRsZWRSZWZsZWN0aW9uT2JqZWN0cyhyb290LCAnJykpIHtcbiAgICAgICAgZGVmW25hbWVdID0gY3JlYXRlRGVmaW5pdGlvbihvYmosIG5hbWUsIG9wdGlvbnMsIGJ1ZmZlckxpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZnVuY3Rpb24gY3JlYXRlUGFja2FnZURlZmluaXRpb25Gcm9tRGVzY3JpcHRvclNldChkZWNvZGVkRGVzY3JpcHRvclNldCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJvb3QgPSBQcm90b2J1Zi5Sb290LmZyb21EZXNjcmlwdG9yKGRlY29kZWREZXNjcmlwdG9yU2V0KTtcbiAgICByb290LnJlc29sdmVBbGwoKTtcbiAgICByZXR1cm4gY3JlYXRlUGFja2FnZURlZmluaXRpb24ocm9vdCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIExvYWQgYSAucHJvdG8gZmlsZSB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy5cbiAqIEBwYXJhbSBmaWxlbmFtZSBPbmUgb3IgbXVsdGlwbGUgZmlsZSBwYXRocyB0byBsb2FkLiBDYW4gYmUgYW4gYWJzb2x1dGUgcGF0aFxuICogICAgIG9yIHJlbGF0aXZlIHRvIGFuIGluY2x1ZGUgcGF0aC5cbiAqIEBwYXJhbSBvcHRpb25zLmtlZXBDYXNlIFByZXNlcnZlIGZpZWxkIG5hbWVzLiBUaGUgZGVmYXVsdCBpcyB0byBjaGFuZ2UgdGhlbVxuICogICAgIHRvIGNhbWVsIGNhc2UuXG4gKiBAcGFyYW0gb3B0aW9ucy5sb25ncyBUaGUgdHlwZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlcHJlc2VudCBgbG9uZ2AgdmFsdWVzLlxuICogICAgIFZhbGlkIG9wdGlvbnMgYXJlIGBOdW1iZXJgIGFuZCBgU3RyaW5nYC4gRGVmYXVsdHMgdG8gYSBgTG9uZ2Agb2JqZWN0IHR5cGVcbiAqICAgICBmcm9tIGEgbGlicmFyeS5cbiAqIEBwYXJhbSBvcHRpb25zLmVudW1zIFRoZSB0eXBlIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVwcmVzZW50IGBlbnVtYCB2YWx1ZXMuXG4gKiAgICAgVGhlIG9ubHkgdmFsaWQgb3B0aW9uIGlzIGBTdHJpbmdgLiBEZWZhdWx0cyB0byB0aGUgbnVtZXJpYyB2YWx1ZS5cbiAqIEBwYXJhbSBvcHRpb25zLmJ5dGVzIFRoZSB0eXBlIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVwcmVzZW50IGBieXRlc2BcbiAqICAgICB2YWx1ZXMuIFZhbGlkIG9wdGlvbnMgYXJlIGBBcnJheWAgYW5kIGBTdHJpbmdgLiBUaGUgZGVmYXVsdCBpcyB0byB1c2VcbiAqICAgICBgQnVmZmVyYC5cbiAqIEBwYXJhbSBvcHRpb25zLmRlZmF1bHRzIFNldCBkZWZhdWx0IHZhbHVlcyBvbiBvdXRwdXQgb2JqZWN0cy4gRGVmYXVsdHMgdG9cbiAqICAgICBgZmFsc2VgLlxuICogQHBhcmFtIG9wdGlvbnMuYXJyYXlzIFNldCBlbXB0eSBhcnJheXMgZm9yIG1pc3NpbmcgYXJyYXkgdmFsdWVzIGV2ZW4gaWZcbiAqICAgICBgZGVmYXVsdHNgIGlzIGBmYWxzZWAuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gKiBAcGFyYW0gb3B0aW9ucy5vYmplY3RzIFNldCBlbXB0eSBvYmplY3RzIGZvciBtaXNzaW5nIG9iamVjdCB2YWx1ZXMgZXZlbiBpZlxuICogICAgIGBkZWZhdWx0c2AgaXMgYGZhbHNlYC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAqIEBwYXJhbSBvcHRpb25zLm9uZW9mcyBTZXQgdmlydHVhbCBvbmVvZiBwcm9wZXJ0aWVzIHRvIHRoZSBwcmVzZW50IGZpZWxkJ3NcbiAqICAgICBuYW1lXG4gKiBAcGFyYW0gb3B0aW9ucy5qc29uIFJlcHJlc2VudCBJbmZpbml0eSBhbmQgTmFOIGFzIHN0cmluZ3MgaW4gZmxvYXQgZmllbGRzLFxuICogICAgIGFuZCBhdXRvbWF0aWNhbGx5IGRlY29kZSBnb29nbGUucHJvdG9idWYuQW55IHZhbHVlcy5cbiAqIEBwYXJhbSBvcHRpb25zLmluY2x1ZGVEaXJzIFBhdGhzIHRvIHNlYXJjaCBmb3IgaW1wb3J0ZWQgYC5wcm90b2AgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIGxvYWQoZmlsZW5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKDAsIHV0aWxfMS5sb2FkUHJvdG9zV2l0aE9wdGlvbnMpKGZpbGVuYW1lLCBvcHRpb25zKS50aGVuKGxvYWRlZFJvb3QgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlUGFja2FnZURlZmluaXRpb24obG9hZGVkUm9vdCwgb3B0aW9ucyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZnVuY3Rpb24gbG9hZFN5bmMoZmlsZW5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBsb2FkZWRSb290ID0gKDAsIHV0aWxfMS5sb2FkUHJvdG9zV2l0aE9wdGlvbnNTeW5jKShmaWxlbmFtZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNyZWF0ZVBhY2thZ2VEZWZpbml0aW9uKGxvYWRlZFJvb3QsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5sb2FkU3luYyA9IGxvYWRTeW5jO1xuZnVuY3Rpb24gZnJvbUpTT04oanNvbiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGxvYWRlZFJvb3QgPSBQcm90b2J1Zi5Sb290LmZyb21KU09OKGpzb24pO1xuICAgIGxvYWRlZFJvb3QucmVzb2x2ZUFsbCgpO1xuICAgIHJldHVybiBjcmVhdGVQYWNrYWdlRGVmaW5pdGlvbihsb2FkZWRSb290LCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZnJvbUpTT04gPSBmcm9tSlNPTjtcbmZ1bmN0aW9uIGxvYWRGaWxlRGVzY3JpcHRvclNldEZyb21CdWZmZXIoZGVzY3JpcHRvclNldCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRlY29kZWREZXNjcmlwdG9yU2V0ID0gZGVzY3JpcHRvci5GaWxlRGVzY3JpcHRvclNldC5kZWNvZGUoZGVzY3JpcHRvclNldCk7XG4gICAgcmV0dXJuIGNyZWF0ZVBhY2thZ2VEZWZpbml0aW9uRnJvbURlc2NyaXB0b3JTZXQoZGVjb2RlZERlc2NyaXB0b3JTZXQsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5sb2FkRmlsZURlc2NyaXB0b3JTZXRGcm9tQnVmZmVyID0gbG9hZEZpbGVEZXNjcmlwdG9yU2V0RnJvbUJ1ZmZlcjtcbmZ1bmN0aW9uIGxvYWRGaWxlRGVzY3JpcHRvclNldEZyb21PYmplY3QoZGVzY3JpcHRvclNldCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRlY29kZWREZXNjcmlwdG9yU2V0ID0gZGVzY3JpcHRvci5GaWxlRGVzY3JpcHRvclNldC5mcm9tT2JqZWN0KGRlc2NyaXB0b3JTZXQpO1xuICAgIHJldHVybiBjcmVhdGVQYWNrYWdlRGVmaW5pdGlvbkZyb21EZXNjcmlwdG9yU2V0KGRlY29kZWREZXNjcmlwdG9yU2V0LCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubG9hZEZpbGVEZXNjcmlwdG9yU2V0RnJvbU9iamVjdCA9IGxvYWRGaWxlRGVzY3JpcHRvclNldEZyb21PYmplY3Q7XG4oMCwgdXRpbF8xLmFkZENvbW1vblByb3RvcykoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @license\n * Copyright 2018 gRPC authors.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addCommonProtos = exports.loadProtosWithOptionsSync = exports.loadProtosWithOptions = void 0;\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst Protobuf = __webpack_require__(/*! protobufjs */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/index.js\");\nfunction addIncludePathResolver(root, includePaths) {\n    const originalResolvePath = root.resolvePath;\n    root.resolvePath = (origin, target) => {\n        if (path.isAbsolute(target)) {\n            return target;\n        }\n        for (const directory of includePaths) {\n            const fullPath = path.join(directory, target);\n            try {\n                fs.accessSync(fullPath, fs.constants.R_OK);\n                return fullPath;\n            }\n            catch (err) {\n                continue;\n            }\n        }\n        process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);\n        return originalResolvePath(origin, target);\n    };\n}\nasync function loadProtosWithOptions(filename, options) {\n    const root = new Protobuf.Root();\n    options = options || {};\n    if (!!options.includeDirs) {\n        if (!Array.isArray(options.includeDirs)) {\n            return Promise.reject(new Error('The includeDirs option must be an array'));\n        }\n        addIncludePathResolver(root, options.includeDirs);\n    }\n    const loadedRoot = await root.load(filename, options);\n    loadedRoot.resolveAll();\n    return loadedRoot;\n}\nexports.loadProtosWithOptions = loadProtosWithOptions;\nfunction loadProtosWithOptionsSync(filename, options) {\n    const root = new Protobuf.Root();\n    options = options || {};\n    if (!!options.includeDirs) {\n        if (!Array.isArray(options.includeDirs)) {\n            throw new Error('The includeDirs option must be an array');\n        }\n        addIncludePathResolver(root, options.includeDirs);\n    }\n    const loadedRoot = root.loadSync(filename, options);\n    loadedRoot.resolveAll();\n    return loadedRoot;\n}\nexports.loadProtosWithOptionsSync = loadProtosWithOptionsSync;\n/**\n * Load Google's well-known proto files that aren't exposed by Protobuf.js.\n */\nfunction addCommonProtos() {\n    // Protobuf.js exposes: any, duration, empty, field_mask, struct, timestamp,\n    // and wrappers. compiler/plugin is excluded in Protobuf.js and here.\n    // Using constant strings for compatibility with tools like Webpack\n    const apiDescriptor = __webpack_require__(/*! protobufjs/google/protobuf/api.json */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/google/protobuf/api.json\");\n    const descriptorDescriptor = __webpack_require__(/*! protobufjs/google/protobuf/descriptor.json */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/google/protobuf/descriptor.json\");\n    const sourceContextDescriptor = __webpack_require__(/*! protobufjs/google/protobuf/source_context.json */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/google/protobuf/source_context.json\");\n    const typeDescriptor = __webpack_require__(/*! protobufjs/google/protobuf/type.json */ \"(ssr)/./node_modules/.pnpm/protobufjs@7.2.5/node_modules/protobufjs/google/protobuf/type.json\");\n    Protobuf.common('api', apiDescriptor.nested.google.nested.protobuf.nested);\n    Protobuf.common('descriptor', descriptorDescriptor.nested.google.nested.protobuf.nested);\n    Protobuf.common('source_context', sourceContextDescriptor.nested.google.nested.protobuf.nested);\n    Protobuf.common('type', typeDescriptor.nested.google.nested.protobuf.nested);\n}\nexports.addCommonProtos = addCommonProtos;\n//# sourceMappingURL=util.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGdycGMrcHJvdG8tbG9hZGVyQDAuNy4xMC9ub2RlX21vZHVsZXMvQGdycGMvcHJvdG8tbG9hZGVyL2J1aWxkL3NyYy91dGlsLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsR0FBRyxpQ0FBaUMsR0FBRyw2QkFBNkI7QUFDM0YsV0FBVyxtQkFBTyxDQUFDLGNBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCLGlCQUFpQixtQkFBTyxDQUFDLGdHQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVEsd0NBQXdDLGFBQWE7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQU8sQ0FBQyx5SUFBcUM7QUFDdkUsaUNBQWlDLG1CQUFPLENBQUMsdUpBQTRDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLCtKQUFnRDtBQUM1RiwyQkFBMkIsbUJBQU8sQ0FBQywySUFBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZ3JwYytwcm90by1sb2FkZXJAMC43LjEwL25vZGVfbW9kdWxlcy9AZ3JwYy9wcm90by1sb2FkZXIvYnVpbGQvc3JjL3V0aWwuanM/OTU4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IGdSUEMgYXV0aG9ycy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZENvbW1vblByb3RvcyA9IGV4cG9ydHMubG9hZFByb3Rvc1dpdGhPcHRpb25zU3luYyA9IGV4cG9ydHMubG9hZFByb3Rvc1dpdGhPcHRpb25zID0gdm9pZCAwO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBQcm90b2J1ZiA9IHJlcXVpcmUoXCJwcm90b2J1ZmpzXCIpO1xuZnVuY3Rpb24gYWRkSW5jbHVkZVBhdGhSZXNvbHZlcihyb290LCBpbmNsdWRlUGF0aHMpIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlc29sdmVQYXRoID0gcm9vdC5yZXNvbHZlUGF0aDtcbiAgICByb290LnJlc29sdmVQYXRoID0gKG9yaWdpbiwgdGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmIChwYXRoLmlzQWJzb2x1dGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGRpcmVjdG9yeSBvZiBpbmNsdWRlUGF0aHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGRpcmVjdG9yeSwgdGFyZ2V0KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZnMuYWNjZXNzU3luYyhmdWxsUGF0aCwgZnMuY29uc3RhbnRzLlJfT0spO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdWxsUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmVtaXRXYXJuaW5nKGAke3RhcmdldH0gbm90IGZvdW5kIGluIGFueSBvZiB0aGUgaW5jbHVkZSBwYXRocyAke2luY2x1ZGVQYXRoc31gKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVzb2x2ZVBhdGgob3JpZ2luLCB0YXJnZXQpO1xuICAgIH07XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkUHJvdG9zV2l0aE9wdGlvbnMoZmlsZW5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByb290ID0gbmV3IFByb3RvYnVmLlJvb3QoKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoISFvcHRpb25zLmluY2x1ZGVEaXJzKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLmluY2x1ZGVEaXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVGhlIGluY2x1ZGVEaXJzIG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5JykpO1xuICAgICAgICB9XG4gICAgICAgIGFkZEluY2x1ZGVQYXRoUmVzb2x2ZXIocm9vdCwgb3B0aW9ucy5pbmNsdWRlRGlycyk7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRlZFJvb3QgPSBhd2FpdCByb290LmxvYWQoZmlsZW5hbWUsIG9wdGlvbnMpO1xuICAgIGxvYWRlZFJvb3QucmVzb2x2ZUFsbCgpO1xuICAgIHJldHVybiBsb2FkZWRSb290O1xufVxuZXhwb3J0cy5sb2FkUHJvdG9zV2l0aE9wdGlvbnMgPSBsb2FkUHJvdG9zV2l0aE9wdGlvbnM7XG5mdW5jdGlvbiBsb2FkUHJvdG9zV2l0aE9wdGlvbnNTeW5jKGZpbGVuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgcm9vdCA9IG5ldyBQcm90b2J1Zi5Sb290KCk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCEhb3B0aW9ucy5pbmNsdWRlRGlycykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5pbmNsdWRlRGlycykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY2x1ZGVEaXJzIG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkSW5jbHVkZVBhdGhSZXNvbHZlcihyb290LCBvcHRpb25zLmluY2x1ZGVEaXJzKTtcbiAgICB9XG4gICAgY29uc3QgbG9hZGVkUm9vdCA9IHJvb3QubG9hZFN5bmMoZmlsZW5hbWUsIG9wdGlvbnMpO1xuICAgIGxvYWRlZFJvb3QucmVzb2x2ZUFsbCgpO1xuICAgIHJldHVybiBsb2FkZWRSb290O1xufVxuZXhwb3J0cy5sb2FkUHJvdG9zV2l0aE9wdGlvbnNTeW5jID0gbG9hZFByb3Rvc1dpdGhPcHRpb25zU3luYztcbi8qKlxuICogTG9hZCBHb29nbGUncyB3ZWxsLWtub3duIHByb3RvIGZpbGVzIHRoYXQgYXJlbid0IGV4cG9zZWQgYnkgUHJvdG9idWYuanMuXG4gKi9cbmZ1bmN0aW9uIGFkZENvbW1vblByb3RvcygpIHtcbiAgICAvLyBQcm90b2J1Zi5qcyBleHBvc2VzOiBhbnksIGR1cmF0aW9uLCBlbXB0eSwgZmllbGRfbWFzaywgc3RydWN0LCB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdyYXBwZXJzLiBjb21waWxlci9wbHVnaW4gaXMgZXhjbHVkZWQgaW4gUHJvdG9idWYuanMgYW5kIGhlcmUuXG4gICAgLy8gVXNpbmcgY29uc3RhbnQgc3RyaW5ncyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRvb2xzIGxpa2UgV2VicGFja1xuICAgIGNvbnN0IGFwaURlc2NyaXB0b3IgPSByZXF1aXJlKCdwcm90b2J1ZmpzL2dvb2dsZS9wcm90b2J1Zi9hcGkuanNvbicpO1xuICAgIGNvbnN0IGRlc2NyaXB0b3JEZXNjcmlwdG9yID0gcmVxdWlyZSgncHJvdG9idWZqcy9nb29nbGUvcHJvdG9idWYvZGVzY3JpcHRvci5qc29uJyk7XG4gICAgY29uc3Qgc291cmNlQ29udGV4dERlc2NyaXB0b3IgPSByZXF1aXJlKCdwcm90b2J1ZmpzL2dvb2dsZS9wcm90b2J1Zi9zb3VyY2VfY29udGV4dC5qc29uJyk7XG4gICAgY29uc3QgdHlwZURlc2NyaXB0b3IgPSByZXF1aXJlKCdwcm90b2J1ZmpzL2dvb2dsZS9wcm90b2J1Zi90eXBlLmpzb24nKTtcbiAgICBQcm90b2J1Zi5jb21tb24oJ2FwaScsIGFwaURlc2NyaXB0b3IubmVzdGVkLmdvb2dsZS5uZXN0ZWQucHJvdG9idWYubmVzdGVkKTtcbiAgICBQcm90b2J1Zi5jb21tb24oJ2Rlc2NyaXB0b3InLCBkZXNjcmlwdG9yRGVzY3JpcHRvci5uZXN0ZWQuZ29vZ2xlLm5lc3RlZC5wcm90b2J1Zi5uZXN0ZWQpO1xuICAgIFByb3RvYnVmLmNvbW1vbignc291cmNlX2NvbnRleHQnLCBzb3VyY2VDb250ZXh0RGVzY3JpcHRvci5uZXN0ZWQuZ29vZ2xlLm5lc3RlZC5wcm90b2J1Zi5uZXN0ZWQpO1xuICAgIFByb3RvYnVmLmNvbW1vbigndHlwZScsIHR5cGVEZXNjcmlwdG9yLm5lc3RlZC5nb29nbGUubmVzdGVkLnByb3RvYnVmLm5lc3RlZCk7XG59XG5leHBvcnRzLmFkZENvbW1vblByb3RvcyA9IGFkZENvbW1vblByb3Rvcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js\n");

/***/ })

};
;