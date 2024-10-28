import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/onboarding(.*)",
    "/organisation(.*)",
    "/project(.*)",
    "/issue(.*)",
    "/sprint(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    if (!(await auth()).userId && isProtectedRoute(req)) {
        return (await auth()).redirectToSignIn();
    }
    if (
        auth().userId &&
        !auth().orgId &&
        req.nextUrl.pathname !== "/onboarding" &&
        req.nextUrl.pathname !== "/"
    ) {
        return NextResponse.redirect(new URL("/onboarding", req.url));
    }
});


export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};