'use strict';
import superagent from 'superagent';
import qs from 'qs';

import { API_URL } from './constants';

const methods = ['get', 'post', 'put', 'patch', 'del'];

const AUTH = {
  email: 'kafka@gmail.com',
  name: 'Franz',
  // 'goal':500,
  token: '8dd95a7f-cd5d-4f56-aadb-b8a41e350769'
};

class ApiClient {
  constructor (req) {
    methods.forEach((method) => {
      this[method] = (path, {params, data} = {}, auth = AUTH) => {
        return new Promise((resolve, reject) => {
          const request = superagent[method](API_URL + path);

          // console.log('URL path', API_URL + path)

          if (params) {
            // console.log('APIClient', {params})
            request.query(qs.stringify(params));
          }
          if (data) {
            // console.log('APIClient', {data})
            request.send(data);
          }
          if (auth) {
            // console.log('APIClient', {auth})
            request.set(auth); // set header
          }

          request.end((err, { body } = {}) => {
            if (err) {
              console.log({path, err});
              reject(err);
            } else {
              resolve(body);
            }
          });
        });
      };
    });
  }
}

export default ApiClient;
