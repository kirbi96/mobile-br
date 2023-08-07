import {Platform} from 'react-native';

export default class FormDataFactory {
  static create(
    doc: any,
    fileTitle: string = 'file',
    data: any = null,
  ): FormData {
    const formData = new FormData();

    formData.append(fileTitle, {
      uri: Platform.OS === 'ios' ? doc.uri?.replace('file://', '') : doc.uri,
      type: doc.type,
      name: doc?.fileName,
    });

    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }

    return formData;
  }
}
