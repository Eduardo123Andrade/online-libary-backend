import { Request } from "express";
import { diskStorage, Options as MulterOptions, StorageEngine } from "multer";
import path from 'path'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import { awsConfig, environmentKeys } from '../config/env.config'
import { CustomFileType } from "src/types/file.type";


interface TypeStorage {
    [key: string]: StorageEngine
}

const filenameFunction = (_request: Request, file: CustomFileType, callbackFunction: Function) => {
    const key = `${Date.now()}-${file.originalname}`

    Object.assign(file, { key })

    callbackFunction(null, file.key)
}

const localStorage = diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'images', 'book-cover'),
    filename: filenameFunction,
})

const s3Storage = multerS3({
    s3: new aws.S3(),
    bucket: awsConfig.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: filenameFunction
})

const storageTypes: TypeStorage = {
    local: localStorage,
    S3: s3Storage
}

export const MulterConfig: MulterOptions = {
    storage: storageTypes[environmentKeys.storageType]
}