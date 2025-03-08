import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

import { Skeleton } from "../ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function SearchCommand() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] border-none ">
      <CommandInput placeholder="Search Product..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <SkeletonDemo />
          </CommandItem>
          <CommandItem>
            <SkeletonDemo />
          </CommandItem>
          <CommandItem>
            <SkeletonDemo />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
