import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SimpleAvatarProps {
  seed: string;
  className?: string;
  size?: number;
}

// Simple hash function to generate consistent colors
const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

const getColorFromSeed = (seed: string): string => {
  const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500",
    "bg-orange-500", "bg-cyan-500"
  ];
  
  const hash = Math.abs(hashCode(seed));
  return colors[hash % colors.length];
};

export const SimpleAvatar = ({
  seed,
  className,
  size = 40
}: SimpleAvatarProps) => {
  const initials = seed
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
  
  const bgColor = getColorFromSeed(seed);
  
  return (
    <Avatar className={cn(`h-${size/4} w-${size/4}`, className)}>
      <AvatarFallback className={cn(bgColor, "text-white font-medium")}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};