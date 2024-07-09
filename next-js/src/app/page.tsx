import Link from "next/link";

export default function Home() {
  return (
      <div className='bg-green-400 text-center py-8'>
        <p>この表示はsrc/app/page.tsxに記載したテキストです。</p>
        <Link href="/sample">src/app/sample/page.tsxに記載したファイルに切り替える</Link>
      </div>
  );
}
