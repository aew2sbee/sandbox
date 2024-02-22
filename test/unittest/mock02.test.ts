import { greet, sayGoodBye } from '../../src/greet'

jest.mock("../../src/greet", () => ({
  // これは実装済みだから、モック化しない
  ...jest.requireActual("../../src/greet"),

  // こっちはモック化する
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

describe('mockの動作確認2', () => {
  // 未実装だから動かない
  test("挨拶を返す（本来の実装どおり）", () => {
    expect(greet("Taro")).toBe("Hello! Taro.");
  });
  
  test("さよならを返す（本来の実装ではない）", () => {
    const message = `${sayGoodBye("Taro")} See you.`;
    expect(message).toBe("Good bye, Taro. See you.");
  });
})
