
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
const capturedDataUrl = 'https://prod-browseai-captured-data.s3.amazonaws.com/b2079e30-d03c-4a11-b804-7ca9f31b2ba4/62362f6a-8a9c-4085-b337-e892b88f835c/650378bd-923a-4cac-9305-187370a987e9/system-1683875928-42eb3ab0-61fc-4b9a-b489-e39ebeefaa49.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQVG3TPBVWOQXHWMD%2F20230512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230512T203634Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICMUdwmqHZ5E6rrx8PF09%2F7z3kBDMFg3bZw8iABiSWc7AiEAkidUNh7mbUGek6S5yFescevgJI%2FDRu1WUD0Ir1GM6usqmgMIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgwwNDU1NTc3MDg5MDciDGtS9qu8SNRXoE0CLiruAq1WWyFbnmUq%2BJtdOWq75D2KDVJoDbanOhcT4tX26ZmjjP%2FH%2BVuCpC22dJ%2Fw2LSYjYESnysmJCcFpqlbGaAKuS6dp89BWlzHPbg8qkajvAK3RaZdx8oFdBYnwACP8%2FX4wyWSzGp2vKwxGJYjSwZgEPPfWghqtGk1p3hO2gep%2FGq%2BPH2UPAD0IHisRYq4IoFZRZ1fH5aL4yRi9KD6P4fZoCartveelCtJ%2FTOkzMi6YOiEhS5Lxze0wnPnWlsShESFf0ejuftMaBU9sjpvjWCyLo4iBKyqP14P7iSepv8mVJJCC33rWhoXuAm93sbVEUEOONMIW682YwlkkKTrXdcXqwpYCPEGdiyJNayctst8gtS47v0ANKcXeXwKCEH2sMTXtS4mG5U8OIlsoA7R%2BIB1DS1KHTvIX5OArHAZ8MNkYjf6m%2FVhY37uzPBPwyEh16IvaH76BpLeqSWWfQPQB1QTTnyiyiEyN61vhJ0Hr60fCTDFxvqiBjqdARglzLFN9fL3EhpG5LP0%2Ff3NXfN8XP1w5FTyJ6KBs%2B5J0zdmg%2Bxiwt%2B4jAef9QahEs4jKl4UtMHV0ZJeW5rTx3Nbyc7NTt%2FJvvb3Yg0UvVoX9juEDO0OA5Xf6GYZE1VQ9FUfQbVc%2B8F0lwuekw7qwlQ2dSHqwdAg2ZMo2VRWDBmwJUn6A2bN%2BN9DIDNaz91rPu6jMsDXKmdqsrMuVh0%3D&X-Amz-Signature=b61b3a03d4c80ca84097441b248f2987765a6a1955a9416dd6d665e318dba0f2&X-Amz-SignedHeaders=host'

axios.get(capturedDataUrl)
  .then(response => {
    const capturedDeals = response.data.capturedLists;
    console.log(capturedDeals);
    // Do something with the captured deals array...
  })
  .catch(error => {
    console.error(error);
  });
