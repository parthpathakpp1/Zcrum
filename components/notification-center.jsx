"use client"

import React from "react"
import { KnockFeedProvider, NotificationIconButton, NotificationFeed } from "@knocklabs/react"
import { Bell } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function NotificationCenter({ userId }) {
    return (
        <KnockFeedProvider
            apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY}
            userId={userId}
            feedId="your-feed-id"
        >
            <Popover>
                <PopoverTrigger asChild>
                    <NotificationIconButton>
                        {({ unseenCount }) => (
                            <div className="relative">
                                <Bell className="w-6 h-6" />
                                {unseenCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {unseenCount}
                                    </span>
                                )}
                            </div>
                        )}
                    </NotificationIconButton>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <NotificationFeed
                        renderItem={({ item }) => (
                            <div className="p-4 border-b last:border-b-0">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.text}</p>
                            </div>
                        )}
                    />
                </PopoverContent>
            </Popover>
        </KnockFeedProvider>
    )
}