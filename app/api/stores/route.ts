import prisma from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const userId = auth();
    const body = await req.json();
    const { store } = body;
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!store) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const prismaStore = await prisma.store.create({
      data: { name: store, userId: userId.userId as string },
    });

    return NextResponse.json(prismaStore);
  } catch (e) {
    console.log('POST ', e);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
