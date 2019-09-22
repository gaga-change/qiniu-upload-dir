const qiniu = require("qiniu")
const path = require('path')
const fileTree = require('file-tree-simple')

function upload(pathName, config, upload) {
  const { accessKey, secretKey, bucket, zone, prefix } = config;
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let options = {
    // 要上传的空间
    scope: bucket,
  };
  let putPolicy = new qiniu.rs.PutPolicy(options);
  let uploadToken = putPolicy.uploadToken(mac);

  let qiniuConf = new qiniu.conf.Config();
  // 空间对应的机房
  qiniuConf.zone = qiniu.zone[zone]
  const { files } = fileTree(pathName)
  files.forEach(filePath => {
    let localFile = filePath;
    let formUploader = new qiniu.form_up.FormUploader(qiniuConf);
    let putExtra = new qiniu.form_up.PutExtra()
    //上传到七牛后保存的文件名
    let key = path.relative(pathName, filePath)
    key = (prefix || '') + key.split(path.sep).join('/')
    
    // 文件上传
    formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
      respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(`已上传文件: ${key}`)
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    });

  })
}

module.exports = upload