import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'platform',
  remotes: ['programs', 'clients'],
};

export default config;
