/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// JS Global Variable
declare var graphFunc: any;

// SystemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
