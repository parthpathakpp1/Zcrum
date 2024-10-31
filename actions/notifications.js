"use server"

import { Knock } from "@knocklabs/node"

const knockClient = new Knock(process.env.KNOCK_API_KEY)

export async function sendNotification(recipientId, event, data) {
    try {
        await knockClient.notify(event, {
            recipients: [recipientId],
            actor: "system",
            data: data,
        })
        return { success: true }
    } catch (error) {
        console.error("Error sending notification:", error)
        return { success: false, error: "Failed to send notification" }
    }
}