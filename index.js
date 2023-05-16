
import axios from 'axios';
import http from "https"

   

const options = {
  "method": "GET",
  "hostname": "api.browse.ai",
  "port": null,
  "path": "/v2/robots/62362f6a-8a9c-4085-b337-e892b88f835c/tasks/650378bd-923a-4cac-9305-187370a987e9",
  "headers": {
    "Authorization": "Bearer fc3e0854-2759-4616-8118-71aa0de1e0aa:6e382af5-9cb8-434f-b3a0-b4b6087475ee"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    const json = JSON.parse(body.toString());
    console.log(json);
    
    
  });
});

req.end();
// import axios library to make HTTP requests
const capturedDataUrl = 'https://prod-browseai-captured-data.s3.amazonaws.com/b2079e30-d03c-4a11-b804-7ca9f31b2ba4/62362f6a-8a9c-4085-b337-e892b88f835c/650378bd-923a-4cac-9305-187370a987e9/system-1683875928-42eb3ab0-61fc-4b9a-b489-e39ebeefaa49.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQVG3TPBVZOYH5NPC%2F20230516%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230516T012530Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC5EUhTj3W44aoRzQ%2BXarH24dWPE8BgwUTtoBPsrXY5FgIhALIV0rkiu7QKAh1j4bmpzK0OQoE44JO2%2FQr9AJu%2BjiZ4KpEDCCIQAhoMMDQ1NTU3NzA4OTA3Igyvgiw3T5GmVLnL4IAq7gLF3FLksln8Yh2%2F0pauKhvufvAoA7cDEVWxb1dR0%2B6qBNfbDuEwWXEX%2FSHAwJ5k7agzmuFtE%2FWqpnTMf579GBvK0oYASDasBKN7fdPesSJk75SEnAQQcVYUgXmWTSxrEsTLY5NEnjmyfPHaFQsfDEUohc6aiQ1Ox64qoQSjAn9RZo%2BIA2BAcHoY4O6bod8mFrDdLJsIjDDABd%2FfG0VX04qh4%2FI75Dr1TeP01cFV%2BLUi4sW37s%2BZoWD%2BlMJrdlAVzF5IgI87%2F4SsP10X6SUWRwF5wvrWUF8%2B%2BWBjMN3toEhMll3V9yo7HUNt2LORn%2BoRKU6%2BIIR4EleGgNX0nzlqKC45iLS7577xmwfuR6benZ4cIrL%2BgAvlSOI0JWVQi4kaN9DqLWY6HM6OBEHlz1sjNtRxq%2BopCDERAjVikoOcdteiB9YIso5yW4XGevmQhwt8KZodTFcv5YkdM1oEnUPH%2BW4u%2FfRJlh6iN4lFXx%2F9HVwwxqmLowY6nAFfDDj%2F%2BIt1ZpAeATZ%2FV6kEx1HPAL7enkv1l7rA9my9LO1t4PNfNW4wQgiiE8eyxIWw8RlkC71xPvJhvy14xFcvKz%2FXEsx93t2Fz%2FOC5hg5U8h40N%2FR8dkQXwt1jqepOtsqbksoXCqhAfCT7yj%2FVnee1Qq1MjDLRJt2WmiNNWDFYKFkUSPZ8D%2BwyONDEG2zDNlzJttceR2XOpwl2r8%3D&X-Amz-Signature=c7937d423368efe8e29e901f7665bad79c42bfc90effc8d9df77bc155821533e&X-Amz-SignedHeaders=host'

axios.get(capturedDataUrl)
  .then(response => {
    const capturedDeals = response.data.capturedLists;
    console.log(capturedDeals);
    return capturedDeals;
  })
  .catch(error => {
    console.error(error);
  });
  

 

  
  
  