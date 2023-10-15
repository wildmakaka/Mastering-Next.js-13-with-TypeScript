import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import MonkeyPic from '../../public/images/monkey.jpg';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <Image
        src={MonkeyPic}
        alt="Monkey Picture"
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
      <ProductCard />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  // const product = await fetch('');

  return {
    title: 'product.title',
    description: 'product.description',
  };
}
