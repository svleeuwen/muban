declare module '*.hbs?include';
declare module '*.json';

declare const process: {
  env: {
    NODE_ENV: 'production' | 'development';
  };
};
