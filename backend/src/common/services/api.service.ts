import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ApiService {
  constructor(private configService: ConfigService) {}

  async getApiRequest(url: string, query = ''): Promise<AxiosResponse> {
    const apiKey = this.configService.get('API_KEY');

    return axios.get(`${url}?api_key=${apiKey}${query}`);
  }
}
