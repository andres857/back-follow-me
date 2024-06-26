import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

interface FileUploadResponse {
  ETag: string;
  Location: string;
  key: string;
  Key: string;
  Bucket: string;
}

@Injectable()
export class SpacesService {
  private s3: AWS.S3;

  constructor() {
    const spacesEndpoint = new AWS.Endpoint(
      'https://nyc3.digitaloceanspaces.com',
    );
    this.s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: process.env.SPACES_ACCESS_KEY,
      secretAccessKey: process.env.SPACES_SECRET_KEY,
    });
  }

  async uploadFile(file) {
    const params = {
      Bucket: process.env.SPACES_BUCKET,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read', // o ajusta según tus necesidades de privacidad
    };
    const rtado = await this.s3.upload(params).promise();
    return rtado;
  }

  async uploadQR(buffer) {
    const params = {
      Bucket: process.env.SPACES_BUCKET,
      Key: `qrcodes/${Date.now()}.png`,
      Body: buffer,
      ContentType: 'image/png',
      ACL: 'public-read', // o ajusta según tus necesidades de privacidad
    };
    const uploadResult = await this.s3.upload(params).promise();
    return uploadResult;
  }
}
