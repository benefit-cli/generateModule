import xxxList from 'cimSrc/http/interface';
export default {
  install(Vue) {
    // 模块工具注册 请加模块名
    // Vue.prototype.$cimUtils = utils

    Object.defineProperties(Vue.prototype, {
      // 挂载在Vue原型的 $api 对象上
      $cimList: {
        get() {
          return xxxList;
        }
      }
    });

  }
};
