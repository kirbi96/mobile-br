import * as React from 'react';
import {FileStore} from '../modules/file/FileStore';
import {ApplicationStore} from '../modules/application/ApplicationStore';
import {AuthStore} from '../modules/auth/AuthStore';

class RootStore {
  fileStore: FileStore;
  applicationStore: ApplicationStore;
  authStore: AuthStore;

  constructor() {
    this.fileStore = new FileStore();
    this.applicationStore = new ApplicationStore();
    this.authStore = new AuthStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
