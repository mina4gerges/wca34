import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <p>Second online interview.<br/>To login go to: <Link href={'http://localhost:3000/login'} className={'text-blue-400'}>localhost:3000/login</Link></p>
        </div>
      </main>
    </div>
  );
}
