import axios from 'axios';

axios
  .get('https://api.example.com/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      // サーバーがエラー応答を返した場合
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // リクエストが作成されたが、応答がない場合
      console.log(error.request);
    } else {
      // 何らかの理由でリクエストが作成できなかった場合
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
