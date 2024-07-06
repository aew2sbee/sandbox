const getEndElement = <T>(list: T[]) => list.at(-1);
console.log(getEndElement<number>([1, 2, 3, 4]));
console.log(getEndElement<string>(['a', 'b', 'c']));

// 数値型の配列の末尾のデータを取得する関数
const getEndElementOfNum = (list: number[]) => list.at(-1);
// 文字列型の配列の末尾のデータを取得する関数
const getEndElementOfStr = (list: string[]) => list.at(-1);

console.log(getEndElementOfNum([1, 2, 3, 4]));
console.log(getEndElementOfStr(['a', 'b', 'c']));

// 配列の末尾のデータを取得する関数
const getEndElementOfAny = (list: any[]) => list.at(-1);

console.log(getEndElementOfAny([1, 2, 3, 4]));
console.log(getEndElementOfAny(['a', 'b', 'c']));
