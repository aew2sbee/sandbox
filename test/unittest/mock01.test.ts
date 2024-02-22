import { greet, sayGoodBye } from '../../src/greet'

// ../../src/greetで実装されているgreet関数をモック化実装
jest.mock('../../src/greet', () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`
}))

describe('mockの動作確認1', () => {
  // モック化されたため動かない
  test('挨拶が未実装（本来の実装ではない）', () => {
    expect(greet).toBe(undefined)
  })

  // モックで実装した関数が呼ばれる
  test('さよならを返す（本来の実装ではない）', () => {
    const message = `${sayGoodBye('Taro')} See you.`
    expect(message).toBe('Good bye, Taro. See you.')
  })
})
