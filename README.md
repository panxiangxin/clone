# clone
实现Javascript 引用类型数据的深拷贝功能
通过npm下载安装代码
```bash
$ npm install clone
```

如果使用Node.js环境
```js
var { clone } = require('clone')
clone({a : 1})
```

如果使用webpack等环境
```js
import { clone } from 'clone'
clone({a: 1})
```

如果使用浏览器环境
```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
    clone({a: 1})
</script>
```
## 贡献者指南
首次运行需要安装依赖
```bash
$ npm install
```

一键打包生成代码
```bash
$ npm run build
```

运行单元测试
```bash
$ npm run test
```

