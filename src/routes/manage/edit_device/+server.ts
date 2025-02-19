import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const PATCH: RequestHandler = async ({ url }) => {
    const deviceId = Number(url.searchParams.get('device_id'));
    console.log(deviceId);

    if (!deviceId) {
        return new Response('Invalid device ID', { status: 400 });
    }

    try {
        const device = await prisma.device.findUnique({
            where: { device_id: deviceId },
            select: { view_flag: true },
        });

        if (!device) {
            return new Response('Device not found', { status: 404 });
        }

        // `view_flag` を切り替え
        const newViewFlag = !device.view_flag;  // true <=> false

        await prisma.device.update({
            where: { device_id: deviceId },
            data: { view_flag: newViewFlag },
        });

        console.log(newViewFlag);

        return new Response('Device view_flag toggled successfully');
    } catch (error) {
        console.error('Error toggling device view_flag:', error);
        return new Response('Error toggling device view_flag', { status: 500 });
    }
};