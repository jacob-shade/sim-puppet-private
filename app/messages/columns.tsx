"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Message = {
  id: number
  created_at: number
  port: number
  phone_number: number
  msg: string
}

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "port",
    header: "Port",
  },
  {
    accessorKey: "phone_number",
    header: () => <div className=''>Phone Number</div>,
    cell: ({ row }) => {
      const phone_num = parseInt(row.getValue("phone_number")).toString()
      const formatted = formatPhoneNumber(phone_num)

      return <div className='font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: "msg",
    header: "Message",
  },
]

function formatPhoneNumber(phoneNumberString: string) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "")
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return null
}
