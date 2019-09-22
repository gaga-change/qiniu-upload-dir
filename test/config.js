const accessKey = 'accessKey'
const secretKey = 'secretKey'
const bucket = 'bucket'

let config = {
  accessKey,
  secretKey,
  bucket,
  zone: 'Zone_z2',
  prefix: '',
}

try {
  const configDefault = require('../config_default')
  config = configDefault
} catch (error) {
  console.error('将私密参数写入到 根目录/config_default.js 文件中')
}

module.exports = config