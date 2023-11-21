import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'programs',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
