import { NextRequest, NextResponse } from 'next/server';

export function GET(requrest: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
  ]);
}
