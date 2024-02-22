import * as axios from '../src/axios'
import { get } from '../src/axios';

jest.mock("../src/axios");

describe('axiosの単体テスト', () => {
  // test('jsonplaceholder users', async () => {
  //   const Received = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   const Expected = {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz',
  //     address: {
  //       street: 'Kulas Light',
  //       suite: 'Apt. 556',
  //       city: 'Gwenborough',
  //       zipcode: '92998-3874',
  //       geo: {
  //         lat: '-37.3159',
  //         lng: '81.1496'
  //       }
  //     },
  //     phone: '1-770-736-8031 x56442',
  //     website: 'hildegard.org',
  //     company: {
  //       name: 'Romaguera-Crona',
  //       catchPhrase: 'Multi-layered client-server neural-net',
  //       bs: 'harness real-time e-markets'
  //     }
  //   }
  //   expect(Received[0]).toEqual(Expected)
  // })

  test("データ取得成功時：ユーザー名がない場合", async () => {
    // getMyProfile が resolve した時の値を再現
    // spyOnでFetcherオブジェクトのgetMyProfileメソッドをスタブ化
    jest.spyOn(axios, "get").mockResolvedValueOnce({
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
    });

    // アサーション(正常時)
    // getGreetが解決したら、"Hello, anonymous user!"が返ってくることを確認
    await expect(get('a')).resolves.toBe("Hello, anonymous user!");
  });

})
