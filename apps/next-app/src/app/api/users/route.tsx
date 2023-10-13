import schema from '@/app/api/users/schema';
import { NextRequest, NextResponse } from 'next/server';

export function GET(requrest: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
