/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWilder: Wilder;
};


export type MutationCreateWilderArgs = {
  firstName: Scalars['String'];
  isTrainer: Scalars['Boolean'];
  lastName: Scalars['String'];
  schoolName: Scalars['String'];
  skillsName: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  wilders: Array<Wilder>;
};

export type School = {
  __typename?: 'School';
  id: Scalars['ID'];
  schoolName: Scalars['String'];
  wilders: Array<Wilder>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  skillName: Scalars['String'];
  wilders: Array<Wilder>;
};

export type Wilder = {
  __typename?: 'Wilder';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isTrainer: Scalars['Boolean'];
  lastName: Scalars['String'];
  school?: Maybe<School>;
  skills: Array<Skill>;
};

export type GetWildersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWildersQuery = { __typename?: 'Query', wilders: Array<{ __typename?: 'Wilder', id: string, firstName: string, lastName: string, isTrainer: boolean, skills: Array<{ __typename?: 'Skill', id: string, skillName: string }>, school?: { __typename?: 'School', id: string, schoolName: string } | null }> };


export const GetWildersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wilders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"isTrainer"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skillName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"school"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}}]}}]}}]}}]} as unknown as DocumentNode<GetWildersQuery, GetWildersQueryVariables>;