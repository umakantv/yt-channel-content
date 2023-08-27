
import {config as loadConfig} from 'dotenv'

loadConfig({
    path: '.env.local'
})

const config = {
    PORT: parseInt(process.env.PORT, 10) || 3010,
    AWS: {
        AccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        AWSSecretKey: process.env.AWS_SECRET_KEY,
        Region: 'ap-south-1',
        BucketName: 'yt-file-upload-tutorial'
    }
}

export default config;