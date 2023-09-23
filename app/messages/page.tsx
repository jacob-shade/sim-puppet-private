import { Message, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Message[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      created_at: Date.now(),
      port: 1,
      phone_number: 1111111111,
      msg: "test message",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
