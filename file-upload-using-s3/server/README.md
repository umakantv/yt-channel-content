
# File Upload Using S3

In this tutorial, we look at how to upload files to S3 using Signed URL.

## Creating AWS Access Key for Programmatic Access

Use access keys to send programmatic calls to AWS from AWS SDKs

- First create a user group
  - Use S3 Full Access Permission
- Then create a user
- Then create access key for the user

## Creating S3 Bucket

### Updating Policy for Public Read Access on a prefix URL

https://repost.aws/knowledge-center/read-access-objects-s3-bucket


```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/public/*"
        }
    ]
}
```

Sample image: https://yt-file-upload-tutorial.s3.ap-south-1.amazonaws.com/public/images/og+image.png 

Base Path: https://yt-file-upload-tutorial.s3.ap-south-1.amazonaws.com
key: public/images/og image.png
Metadata: 
Content-Type: image/png


### Updating CORS policy


```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT"
        ],
        "AllowedOrigins": [
            "http://localhost:3000"
        ],
        "ExposeHeaders": []
    },
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```