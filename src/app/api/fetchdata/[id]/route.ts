import prisma from "../../../../../utils/db";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        // Use the ID to fetch data from the database
        const registration = await prisma.registration.findUnique({
            where: { id: parseInt(id, 10) },
        });

        if (!registration) {
            return NextResponse.json({
                message: 'Registration not found'
            }, { status: 404 });
        }

        return NextResponse.json({
            code: 200,
            status: true,
            message: 'Registration retrieved successfully',
            data: registration
        }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: 'Internal server error'
        }, { status: 500 });
    }
}
