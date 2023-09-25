import {appConfig} from '../appConfig';

export const getImageUrl = (postFixUrl: string) => {
  return `${appConfig.HOST}/${postFixUrl}`;
};
