import { NextRequest, NextResponse } from 'next/server';
import webpush from 'web-push';

export async function POST(request: NextRequest) {
  const { subscription } = await request.json();

  if (!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    console.error("VAPID keys are not defined!");
    return new NextResponse("VAPID keys are not configured.", { status: 500 });
  }

  webpush.setVapidDetails(
    'mailto:test@example.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  try {
    const payload = JSON.stringify({
      title: 'Admin Dashboard Notification!',
      body: 'This is a test notification from the server.',
    });
    await webpush.sendNotification(subscription, payload);
    return NextResponse.json({ message: 'Notification sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to send notification", { status: 500 });
  }
}