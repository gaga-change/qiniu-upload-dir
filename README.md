# qiniu-upload-dir

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/qiniu-upload-dir.svg?style=flat-square
[npm-url]: https://npmjs.org/package/qiniu-upload-dir
[download-image]: https://img.shields.io/npm/dm/qiniu-upload-dir.svg?style=flat-square
[download-url]: https://npmjs.org/package/qiniu-upload-dir

 上传指定目录中所有文件到七牛云。
 应用场景： 前端项目（Vue\React）打包后，将静态资源发布到七牛云cdn

## 安装

```bash
$ npm i qiniu-upload-dir --save
```

## 使用

```js
const upload = require('qiniu-upload-dir')

const config = {
  accessKey: 'accessKey', // 密钥，在 个人中心 -> 密钥管理中 获取
  secretKey: 'secretKey', 
  bucket: 'bucket', // 空间名称
  zone: 'Zone_z2', // 机房：华东 Zone_z0 、华北 Zone_z1 、华南 Zone_z2 、北美 Zone_na0
  prefix: 'abc/', // 附加前缀，可以为空，或者不填
}

// 指定要上传的目录名称，可以为全路径或者相对路径
upload('./dist', config)

// 日志默认输出：
// 已上传文件: img/a.png
// 已上传文件: img/b/t.png
```

## License

[MIT](LICENSE)
