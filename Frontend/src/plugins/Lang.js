export class Lang {
  static data = {
    lang: null,
    lang_data: null,
  };

  static get(key) {
    return (this.data?.lang_data && this.data.lang_data[key]) || key;
  }
  static getLang() {
    return this.data?.lang;
  }
  static getData() {
    return this.data;
  }
  static setData(data) {
    this.data = {
      ...this.data,
      ...data,
    };
  }
}
