import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../utils/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstname,
      lastname,
      password,
      email,
      phonenumber,
      dateofbirth,
      country
    } = body;

    if (!firstname || !lastname || !password || !email || !phonenumber || !dateofbirth || !country) {
      return NextResponse.json({
        code: 400,
        status: false,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    const newRegistration = await prisma.registration.create({
      data: {
        firstname,
        lastname,
        password,
        email,
        phonenumber,
        dateofbirth,
        country,
      },
    });

    return NextResponse.json({
      code: 200,
      status: true,
      message: 'Registration successful',
      data: newRegistration
    }, { status: 200 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: 'Internal server error'
    }, { status: 500 });
  }
}
