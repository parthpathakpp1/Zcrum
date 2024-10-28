// app/organization/[orgId]/page.jsx

import { getOrganization } from '@/actions/organizations';
import { auth } from '@clerk/nextjs/server';

export default async function OrganizationPage({ params, searchParams }) {
    // Destructure and await params at the start
    const orgId = params?.orgId;

    // Get auth first
    const { userId } = await auth();

    if (!userId) {
        return <div>Please sign in to view this page</div>;
    }

    if (!orgId) {
        return <div>No organization ID provided</div>;
    }

    try {
        const organization = await getOrganization(orgId);

        if (!organization) {
            return <div>Organization not found</div>;
        }

        return (
            <div>
                <div>
                    <h1 className="text-5xl font-bold gradient-title pb-2">
                        {organization.name}&rsquo;s Projects
                    </h1>
                </div>
                {/* Add more organization details here */}
            </div>
        );
    } catch (error) {
        console.error('Error fetching organization:', error);
        return <div>Error: {error.message}</div>;
    }
}