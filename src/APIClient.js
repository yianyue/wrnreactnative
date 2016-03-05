'use strict';
import superagent from 'superagent';
import qs from 'qs';

import { API_URL } from '../../constants';

const methods = ['get', 'post', 'put', 'patch', 'del'];

const AUTH = {
  email:'kafka@gmail.com',
  name:'Franz',
  // 'goal':500,
  token:'d50b18f2-dd90-4b3f-ac10-5937ba4a3dc3'
};

class ApiClient {
  constructor(req){
    methods.forEach((method) => {
      this[method] = (path, {params, data} = {}, auth = AUTH ) => {

        return new Promise((resolve, reject) =>  {

          const request = superagent[method](path);

          if ( params ){
            console.log('APIClient', {params})
            request.query(qs.stringify(params));
          }
          if ( data ){
            console.log('APIClient', {data})
            request.send(data);
          }
          if ( auth ){
            console.log('APIClient', {auth})
            request.set(auth); //set header
          }

          request.end((err, { body } = {}) => {
            if (err){
              reject( err );
            } else {
              resolve( body );
            }
          });

        });

      };

    });

  }
}

export default ApiClient;
