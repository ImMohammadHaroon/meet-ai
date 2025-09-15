import { authClient } from "@/lib/auth-client";
import { 
    DropdownMenu,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SimpleAvatar } from "@/components/generated-avator";
import { ChevronDownIcon, LogOut, Settings, User } from "lucide-react";

export const DashboardUserButton = () => {
    const { data, isPending } = authClient.useSession();

    if (isPending || !data?.user) {
        return null;
    }

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
                    {data.user.image ? (
                        <Avatar className="size-9">
                            <AvatarImage src={data.user.image} alt={data.user.name || "User avatar"} />
                            <AvatarFallback>
                                {data.user.name ? data.user.name.charAt(0).toUpperCase() : data.user.email.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <SimpleAvatar
                            seed={data.user.email}
                            className="size-9"
                        />
                    )}
                    
                    <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                        <p className="text-sm font-medium truncate w-full">
                            {data.user.name || "User"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate w-full">
                            {data.user.email}
                        </p>
                    </div>
                </div>
                
                <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" side="right" className="w-72">
                <DropdownMenuLabel className="p-3">
                    <div className="flex items-center gap-3">
                        {data.user.image ? (
                            <Avatar className="size-10">
                                <AvatarImage src={data.user.image} alt={data.user.name || "User avatar"} />
                                <AvatarFallback>
                                    {data.user.name ? data.user.name.charAt(0).toUpperCase() : data.user.email.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        ) : (
                            <SimpleAvatar
                                seed={data.user.email}
                                className="size-10"
                            />
                        )}
                        
                        <div className="flex flex-col gap-1 overflow-hidden flex-1">
                            <span className="font-medium text-sm truncate">
                                {data.user.name || "User"}
                            </span>
                            <span className="text-xs text-muted-foreground truncate">
                                {data.user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="cursor-pointer">
                    <User className="size-4 mr-2" />
                    Profile
                </DropdownMenuItem>
                
                <DropdownMenuItem className="cursor-pointer">
                    <Settings className="size-4 mr-2" />
                    Settings
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem 
                    className="cursor-pointer text-destructive focus:text-destructive"
                    onClick={handleSignOut}
                >
                    <LogOut className="size-4 mr-2" />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};