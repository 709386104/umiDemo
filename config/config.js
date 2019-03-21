import proxySettings from './proxy';
import pluginSettings from './plugins';
export default {
   //是否生成html的形式
   exportStatic: {
    htmlSuffix: true,
},
 plugins: pluginSettings,
  proxy:proxySettings,
}
