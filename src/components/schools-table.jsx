"use client";
import * as React from "react"
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const data = [
  {
    schoolName: "Bedford School",
    schoolDescription: [
      "Bedford School is a prestigious independent boarding and day school for boys...",
      "Beyond academics, Bedford School offers outstanding opportunities...",
    ],
    studentNumbers: 1070,
    faithSchool: "Church of England",
    schoolEmail: "admissions@bedfordschool.org.uk",
    schoolPhoneNumber: "+44 (0)1234 362 216",
    latitude: 52.141703504440656,
    longitude: -0.4661550144318919,
    schoolLocation: "Bedford, Bedfordshire, East Midlands",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys",
    totalSchoolFees: [18942, 29229],
    established: 1552,
    ranking: 10,
  },
  // Add other schools here...
]

export const columns = [
  {
    accessorKey: "schoolName",
    header: ({ column }) => {
      return (
        (<Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>School
                    <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>)
      );
    },
    cell: ({ row }) => {
      return (
        (<div className="flex flex-col">
          <span className="font-medium">{row.getValue("schoolName")}</span>
          <span className="text-sm text-muted-foreground">Est. {row.original.established}</span>
        </div>)
      );
    },
  },
  {
    accessorKey: "schoolLocation",
    header: "Location",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        {row.getValue("schoolLocation")}
      </div>
    ),
  },
  {
    accessorKey: "coeducation",
    header: "Type",
    cell: ({ row }) => {
      const stages = row.original.stages.join(", ")
      return (
        (<div className="flex flex-col">
          <span>{row.getValue("coeducation")}</span>
          <span className="text-sm text-muted-foreground">{stages}</span>
        </div>)
      );
    },
  },
  {
    accessorKey: "totalSchoolFees",
    header: ({ column }) => {
      return (
        (<Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Fees (per year)
                    <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>)
      );
    },
    cell: ({ row }) => {
      const fees = row.original.totalSchoolFees
      return (
        (<div className="flex flex-col">
          <span>
            £{fees[0].toLocaleString()} - £{fees[1].toLocaleString()}
          </span>
        </div>)
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const school = row.original
      return (
        (<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <a href={`mailto:${school.schoolEmail}`} className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact School
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href={`tel:${school.schoolPhoneNumber}`}
                className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call School
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>)
      );
    },
  },
]

export function SchoolsTable() {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    (<div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter schools..."
          value={(table.getColumn("schoolName")?.getFilterValue()) ?? ""}
          onChange={(event) => table.getColumn("schoolName")?.setFilterValue(event.target.value)}
          className="max-w-sm" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    (<TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>)
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={columns.length}>
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full">
                            <ChevronDownIcon className="h-4 w-4" />
                            Show Details
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-4 px-4 py-2">
                          <div>
                            <h4 className="font-semibold">About the School</h4>
                            {row.original.schoolDescription.map((para, idx) => (
                              <p key={idx} className="mt-2 text-sm">
                                {para}
                              </p>
                            ))}
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <h4 className="font-semibold">School Type</h4>
                              <p className="text-sm">{row.original.schoolType.join(", ")}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Student Numbers</h4>
                              <p className="text-sm">{row.original.studentNumbers} students</p>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>)
  );
}

