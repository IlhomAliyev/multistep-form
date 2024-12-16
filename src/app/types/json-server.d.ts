declare module 'json-server' {
  import { Express } from 'express';

  export function create(): Express;
  export function defaults(options?: object): Express;
  export function router(source: string | object): Express;
}