import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Lee Woojae</h1>
      <h2>
        <Link href="/bouncing.html">Bouncing balls</Link>
      </h2>
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </>
  );
}