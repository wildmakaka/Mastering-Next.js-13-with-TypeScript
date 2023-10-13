import schema from '@/app/api/products/schema';
import { NextRequest, NextResponse } from 'next/server';

export function GET(requrest: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Milk', price: 2.5 },
    { id: 2, name: 'Bread', price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
