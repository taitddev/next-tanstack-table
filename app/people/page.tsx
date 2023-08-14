import { Person, people } from "@/people";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Person[]> {
  // Fetch data from your API here.
  return people;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
