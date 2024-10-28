// actions/organizations.js
"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized: User not authenticated");
    }

    try {
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found in database");
        }

        // Get the organization details
        const organization = await clerkClient.organizations.getOrganization({
            slug,
        });

        if (!organization) {
            return null;
        }

        // Check if user belongs to this organization
        const { data: membership } =
            await clerkClient.organizations.getOrganizationMembershipList({
                organizationId: organization.id,
            });

        const userMembership = membership.find(
            (member) => member.publicUserData.userId === userId
        );

        // If user is not a member, return null
        if (!userMembership) {
            return null;
        }

        return organization;
    } catch (error) {
        console.error('Error in getOrganization:', error);
        throw error;
    }
}