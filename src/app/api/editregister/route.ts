import prisma from "../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  try {
    const body = await req.json();

    const {
      userid,
      firstname,
      lastname,
      password,
      email,
      phonenumber,
      dateofbirth,
      country,
    } = body;

      
    if (!userid) {
      return NextResponse.json(
        {
          message: "Missing ID in request body",
        },
        { status: 400 }
      );
    }

    const updatedRegistration = await prisma.registration.update({
      where: { id: Number(userid) }, // Assuming id is a number
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
      message: "Registration updated successfully",
      data: updatedRegistration,
    });
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
