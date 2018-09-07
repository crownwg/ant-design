webpackJsonp([105],{2635:function(n,s){n.exports={content:["article",{},["h2","\u5b89\u88c5\u548c\u521d\u59cb\u5316"],["p","\u8bf7\u786e\u4fdd\u7535\u8111\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86\u6700\u65b0\u7248\u7684 ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," \u6216\u8005 ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"\u3002"],["p","\u4f7f\u7528 yarn \u521b\u5efa\u9879\u76ee\u3002"],["pre",{lang:"bash",highlighted:'$ yarn create react-app antd-demo-ts --scripts-version<span class="token operator">=</span>react-scripts-ts'},["code","$ yarn create react-app antd-demo-ts --scripts-version=react-scripts-ts"]],["p","\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f npm\uff08\u63a5\u4e0b\u6765\u6211\u4eec\u90fd\u4f1a\u7528 yarn \u4f5c\u4e3a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u4e60\u60ef\u7528 npm \u4e5f\u6ca1\u95ee\u9898\uff09\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version<span class="token operator">=</span>react-scripts-ts'},["code","$ npm install -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version=react-scripts-ts"]],["p","\u7136\u540e\u6211\u4eec\u8fdb\u5165\u9879\u76ee\u5e76\u542f\u52a8\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo-ts\n$ yarn start'},["code","$ cd antd-demo-ts\n$ yarn start"]],["p","\u6b64\u65f6\u6d4f\u89c8\u5668\u4f1a\u8bbf\u95ee ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," \uff0c\u770b\u5230 ",["code","Welcome to React"]," \u7684\u754c\u9762\u5c31\u7b97\u6210\u529f\u4e86\u3002"],["h2","\u5f15\u5165 antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","\u4fee\u6539 ",["code","src/App.tsx"],"\uff0c\u5f15\u5165 antd \u7684\u6309\u94ae\u7ec4\u4ef6\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import * as React from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","\u4fee\u6539 ",["code","src/App.css"]," \u5f15\u5165 antd \u7684\u6837\u5f0f\u3002"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","\u91cd\u65b0\u542f\u52a8 ",["code","yarn start"],"\uff0c\u73b0\u5728\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u9875\u9762\u4e0a\u5df2\u7ecf\u6709\u4e86 antd \u7684\u84dd\u8272\u6309\u94ae\u7ec4\u4ef6\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u7ee7\u7eed\u9009\u7528\u5176\u4ed6\u7ec4\u4ef6\u5f00\u53d1\u5e94\u7528\u4e86\u3002\u5176\u4ed6\u5f00\u53d1\u6d41\u7a0b\u4f60\u53ef\u4ee5\u53c2\u8003 create-react-app \u7684",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"\u5b98\u65b9\u6587\u6863"],"\u3002"],["h2","\u9ad8\u7ea7\u914d\u7f6e"],["p","\u6211\u4eec\u73b0\u5728\u5df2\u7ecf\u628a\u7ec4\u4ef6\u6210\u529f\u8fd0\u884c\u8d77\u6765\u4e86\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fd8\u6709\u5f88\u591a\u95ee\u9898\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u5b9e\u9645\u4e0a\u52a0\u8f7d\u4e86\u5168\u90e8\u7684 antd \u7ec4\u4ef6\u7684\u6837\u5f0f\uff08\u5bf9\u524d\u7aef\u6027\u80fd\u662f\u4e2a\u9690\u60a3\uff09\u3002"],["p","\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5bf9 create-react-app \u7684\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," \uff08\u4e00\u4e2a\u5bf9 create-react-app \u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u793e\u533a\u89e3\u51b3\u65b9\u6848\uff09\u3002"],["p","\u5f15\u5165 react-app-rewired \u5e76\u4fee\u6539 package.json \u91cc\u7684\u542f\u52a8\u914d\u7f6e\u3002"],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired <span class="token operator">-</span><span class="token operator">-</span>dev'},["code","$ yarn add react-app-rewired --dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts-ts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start --scripts-version react-scripts-ts",</span>\n<span class="token deleted">-   "build": "react-scripts-ts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build --scripts-version react-scripts-ts",</span>\n<span class="token deleted">-   "test": "react-scripts-ts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts-ts start",\n+   "start": "react-app-rewired start --scripts-version react-scripts-ts",\n-   "build": "react-scripts-ts build",\n+   "build": "react-app-rewired build --scripts-version react-scripts-ts",\n-   "test": "react-scripts-ts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",\n}']],["p","\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",["code","config-overrides.js"]," \u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","\u4f7f\u7528 ts-import-plugin"],["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]," \u662f\u4e00\u4e2a\u7528\u4e8e\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\u4ee3\u7801\u548c\u6837\u5f0f\u7684 TypeScript \u63d2\u4ef6\uff08",["a",{title:null,href:"/docs/react/getting-started#\u6309\u9700\u52a0\u8f7d"},"\u539f\u7406"],"\uff09\uff0c\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u5b89\u88c5\u5b83\u5e76\u4fee\u6539 ",["code","config-overrides.js"]," \u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add ts-import-plugin --dev"},["code","$ yarn add ts-import-plugin --dev"]],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">/* config-overrides.js */</span>\n<span class="token keyword">const</span> tsImportPluginFactory <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'ts-import-plugin\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> getLoader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"react-app-rewired"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tsLoader <span class="token operator">=</span> <span class="token function">getLoader</span><span class="token punctuation">(</span>\n    config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">,</span>\n    rule <span class="token operator">=</span><span class="token operator">></span>\n      rule<span class="token punctuation">.</span>loader <span class="token operator">&amp;&amp;</span>\n      <span class="token keyword">typeof</span> rule<span class="token punctuation">.</span>loader <span class="token operator">===</span> <span class="token string">\'string\'</span> <span class="token operator">&amp;&amp;</span>\n      rule<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'ts-loader\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  tsLoader<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span>\n    getCustomTransformers<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      before<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token function">tsImportPluginFactory</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        libraryDirectory<span class="token punctuation">:</span> <span class="token string">\'es\'</span><span class="token punctuation">,</span>\n        libraryName<span class="token punctuation">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token string">\'css\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* config-overrides.js */\nconst tsImportPluginFactory = require('ts-import-plugin')\nconst { getLoader } = require(\"react-app-rewired\");\n\nmodule.exports = function override(config, env) {\n  const tsLoader = getLoader(\n    config.module.rules,\n    rule =>\n      rule.loader &&\n      typeof rule.loader === 'string' &&\n      rule.loader.includes('ts-loader')\n  );\n\n  tsLoader.options = {\n    getCustomTransformers: () => ({\n      before: [ tsImportPluginFactory({\n        libraryDirectory: 'es',\n        libraryName: 'antd',\n        style: 'css',\n      }) ]\n    })\n  };\n\n  return config;\n}"]],["p","\u7136\u540e\u79fb\u9664\u524d\u9762\u5728 ",["code","src/App.css"]," \u91cc\u5168\u91cf\u6dfb\u52a0\u7684 ",["code","@import '~antd/dist/antd.css';"]," \u6837\u5f0f\u4ee3\u7801\uff0c\u5e76\u4e14\u6309\u4e0b\u9762\u7684\u683c\u5f0f\u5f15\u5165\u6a21\u5757\u3002"],["pre",{lang:"diff",highlighted:"import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      &lt;div className=\"App\">\n        &lt;Button type=\"primary\">Button&lt;/Button>\n      &lt;/div>\n    );\n  }\n}\n\nexport default App;"},["code","import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","\u6700\u540e\u91cd\u542f ",["code","yarn start"]," \u8bbf\u95ee\u9875\u9762\uff0cantd \u7ec4\u4ef6\u7684 js \u548c css \u4ee3\u7801\u90fd\u4f1a\u6309\u9700\u52a0\u8f7d\uff0c\u4f60\u5728\u63a7\u5236\u53f0\u4e5f\u4e0d\u4f1a\u770b\u5230\u8fd9\u6837\u7684",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"\u8b66\u544a\u4fe1\u606f"],"\u3002\u5173\u4e8e\u6309\u9700\u52a0\u8f7d\u7684\u539f\u7406\u548c\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u9605\u8bfb",["a",{title:null,href:"/docs/react/getting-started#\u6309\u9700\u52a0\u8f7d"},"\u8fd9\u91cc"],"\u3002"],["h3","\u81ea\u5b9a\u4e49\u4e3b\u9898"],["p","\u6309\u7167 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914d\u7f6e\u4e3b\u9898"]," \u7684\u8981\u6c42\uff0c\u81ea\u5b9a\u4e49\u4e3b\u9898\u9700\u8981\u7528\u5230 less \u53d8\u91cf\u8986\u76d6\u529f\u80fd\u3002\u6211\u4eec\u53ef\u4ee5\u5f15\u5165 react-app-rewire \u7684 less \u63d2\u4ef6 ",["a",{title:null,href:"http://npmjs.com/react-app-rewire-less"},"react-app-rewire-less"]," \u6765\u5e2e\u52a9\u52a0\u8f7d less \u6837\u5f0f\uff0c\u540c\u65f6\u4fee\u6539 ",["code","config-overrides.js"]," \u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add react-app-rewire-less --dev"},["code","$ yarn add react-app-rewire-less --dev"]],["pre",{lang:"diff",highlighted:'  const tsImportPluginFactory = require(\'ts-import-plugin\')\n  const { getLoader } = require("react-app-rewired");\n<span class="token inserted">+ const rewireLess = require(\'react-app-rewire-less\');</span>\n\n  module.exports = function override(config, env) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &amp;&amp;\n        typeof rule.loader === \'string\' &amp;&amp;\n        rule.loader.includes(\'ts-loader\')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: \'antd\',\n          libraryDirectory: \'es\',\n<span class="token deleted">-         style: \'css\',</span>\n<span class="token inserted">+         style: true,</span>\n        }) ]\n      })\n    };\n\n<span class="token inserted">+   config = rewireLess.withLoaderOptions({</span>\n<span class="token inserted">+     javascriptEnabled: true,</span>\n<span class="token inserted">+     modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+   })(config, env);</span>\n\n    return config;\n  }'},["code","  const tsImportPluginFactory = require('ts-import-plugin')\n  const { getLoader } = require(\"react-app-rewired\");\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config, env) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &&\n        typeof rule.loader === 'string' &&\n        rule.loader.includes('ts-loader')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n-         style: 'css',\n+         style: true,\n        }) ]\n      })\n    };\n\n+   config = rewireLess.withLoaderOptions({\n+     javascriptEnabled: true,\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+   })(config, env);\n\n    return config;\n  }"]],["p","\u8fd9\u91cc\u5229\u7528\u4e86 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," \u7684 ",["code","modifyVars"]," \u6765\u8fdb\u884c\u4e3b\u9898\u914d\u7f6e\uff0c\n\u53d8\u91cf\u548c\u5176\u4ed6\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914d\u7f6e\u4e3b\u9898"]," \u6587\u6863\u3002"],["p","\u4fee\u6539\u540e\u91cd\u542f ",["code","yarn start"],"\uff0c\u5982\u679c\u770b\u5230\u4e00\u4e2a\u7eff\u8272\u7684\u6309\u94ae\u5c31\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u4e86\u3002"],["h2","\u5176\u4ed6\u65b9\u6848"],["p","\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e ",["a",{title:null,href:"/docs/react/use-with-create-react-app.zh-CN.md"},"\u5728 create-react-app \u4e2d\u4f7f\u7528"]," \u7684\u4ecb\u7ecd\u4f7f\u7528 ",["span","react-app-rewire-typescript"]," \u81ea\u5df1\u6765\u914d\u7f6e TypeScript \u7684\u5f00\u53d1\u73af\u5883\u3002"],["p","\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9 ",["a",{title:null,href:"https://www.npmjs.com/package/react-scripts-ts-antd"},"react-scripts-ts-antd"],"\uff0c\u5176\u4e2d\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86 ts-import-plugin\u3001react-app-rewired\u3001scss\u3001less \u7b49\u5e38\u7528\u529f\u80fd\u3002\u53ea\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u751f\u6210\u4e00\u4e2a\u514d\u914d\u7f6e\u7684 TypeScript \u9879\u76ee."],["pre",{lang:"bash",highlighted:'$ create-react-app my-project --scripts-version<span class="token operator">=</span>react-scripts-ts-antd'},["code","$ create-react-app my-project --scripts-version=react-scripts-ts-antd"]],["h2","\u5e38\u89c1\u95ee\u9898"],["h3","error TS2605: JSX element type Xxx is not a constructor function for JSX elements."],["p","antd 3 \u4ee5\u524d\u7684\u7248\u672c\u9700\u8981\u5728 tsconfig.json \u7684 ",["code","compilerOptions"]," \u4e2d\u914d\u7f6e ",["code",'"allowSyntheticDefaultImports": true'],"\u3002"]],meta:{order:5,title:"\u5728 TypeScript \u4e2d\u4f7f\u7528",filename:"docs/react/use-in-typescript.zh-CN.md"},description:["section",["p","\u4f7f\u7528 ",["code","create-react-app"]," \u4e00\u6b65\u6b65\u5730\u521b\u5efa\u4e00\u4e2a TypeScript \u9879\u76ee\uff0c\u5e76\u5f15\u5165 antd\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316",title:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},"\u5b89\u88c5\u548c\u521d\u59cb\u5316"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5f15\u5165-antd",title:"\u5f15\u5165 antd"},"\u5f15\u5165 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u9ad8\u7ea7\u914d\u7f6e",title:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5176\u4ed6\u65b9\u6848",title:"\u5176\u4ed6\u65b9\u6848"},"\u5176\u4ed6\u65b9\u6848"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"]]]}}});