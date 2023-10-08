
# File Upload Using S3

- [File Upload Using S3](#file-upload-using-s3)
  - [What is Static Content?](#what-is-static-content)
  - [Let's setup S3 and understand What S3 is?](#lets-setup-s3-and-understand-what-s3-is)
  - [Why should we use S3?](#why-should-we-use-s3)
  - [Creating S3 Bucket](#creating-s3-bucket)
    - [Updating Policy for Public Read Access on a prefix URL](#updating-policy-for-public-read-access-on-a-prefix-url)
    - [Updating CORS policy](#updating-cors-policy)
  - [Creating AWS Access Key for Programmatic Access](#creating-aws-access-key-for-programmatic-access)


## What is Static Content?

Images, PDFs, Audios, Videos, etc are all static content that don’t change often. They are stored on a file server and served through a unique URL.

Example: https://www.example.com/images/logo.png

Uploading files is very important feature in most of the applications and we need disk space to store these files.  
Our users upload files on our application like profile picture, documents, etc., we have to store these somewhere and they should be accessible by a URL.  

## Let's setup S3 and understand What S3 is? 

S3 is a static file storage and server, and we will use S3 to store and serve our application's static content.  
S3 has buckets in while files are arranged in different directories.

## Why should we use S3?
* Performant, Fast
* Reliable
* Secure
* Cheaper than building and maintaining our own file server
  * 5GB storage free under 12 Months Free-Tier

## Creating S3 Bucket

Let's create an S3 bucket and upload some files to it and then we will try to access those files by a URL.

Sample File: https://yt-file-upload-tutorial.s3.ap-south-1.amazonaws.com/public/images/profile/34534534.png 

- Base Path: https://yt-file-upload-tutorial.s3.ap-south-1.amazonaws.com
- key: `public/images/profile/34534534.png`
- Metadata: 
  - Content-Type: `image/png`

S3 buckets can have both private and public files, so we can control which files are publicly accessible.

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

We will need to do a bit more setup. We will need to update CORS policy and create an AWS access key for programmatic access.

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

## Creating AWS Access Key for Programmatic Access

Use access keys to send programmatic calls to AWS from AWS SDKs

- First create a user group
  - Use S3 Full Access Permission
- Then create a user
- Then create access key for the user
- Make sure to copy/download the secret key, it will not be shown again

