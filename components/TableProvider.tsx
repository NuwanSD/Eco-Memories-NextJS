import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const About = () => {
  return (
    <div className="px-6 md:px-20 py-10">
      <p className="pb-5 section-text flex justify-center">We Are...</p>
      <div className="flex">
        <Table>
          <TableCaption>Faculty of Computing and Technology</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">STUDENT NO</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default About;
