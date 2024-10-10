'use client'

import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Check, ChevronsUpDown, Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { i18n, Locale } from '@/i18n-config'
import { cn } from '@/lib/utils'

export default function LocaleSwitcher() {
  const pathname = usePathname()

  const redirectedPathname = useCallback((locale: Locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }, [pathname])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          role="combobox"
          aria-label="Select language"
          className="w-32 justify-between"
        >
          <Globe className="mr-2 h-4 w-4" />
          <span>{i18n.locales.find(locale => pathname?.startsWith(`/${locale}`)) || 'Select language'}</span>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {i18n.locales.map((locale) => (
                <Link key={locale} href={redirectedPathname(locale)} passHref>
                  <CommandItem
                    value={locale}
                    className="cursor-pointer"
                    onSelect={() => {
                      // You can add any additional logic here if needed
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        pathname?.startsWith(`/${locale}`) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {locale}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}