/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery GetWilders {\n\t\twilders {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tisTrainer\n\t\t\tskills {\n\t\t\t\tid\n\t\t\t\tskillName\n\t\t\t}\n\t\t\tschool {\n\t\t\t\tid\n\t\t\t\tschoolName\n\t\t\t}\n\t\t}\n\t}\n": types.GetWildersDocument,
};

export function graphql(source: "\n\tquery GetWilders {\n\t\twilders {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tisTrainer\n\t\t\tskills {\n\t\t\t\tid\n\t\t\t\tskillName\n\t\t\t}\n\t\t\tschool {\n\t\t\t\tid\n\t\t\t\tschoolName\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetWilders {\n\t\twilders {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tisTrainer\n\t\t\tskills {\n\t\t\t\tid\n\t\t\t\tskillName\n\t\t\t}\n\t\t\tschool {\n\t\t\t\tid\n\t\t\t\tschoolName\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;