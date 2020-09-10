import { HttpHeaders } from '@angular/common/http';

const getHeaders = () => {

  const headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  return headers;
}

export { getHeaders }

