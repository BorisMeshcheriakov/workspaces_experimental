import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'clients',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
