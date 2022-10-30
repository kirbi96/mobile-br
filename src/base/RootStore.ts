import * as React from 'react';
import {FileStore} from '../modules/file/FileStore';

class RootStore {
  fileStore: FileStore;

  constructor() {
    this.fileStore = new FileStore();
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
