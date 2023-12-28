import { Card, Typography } from "@material-tailwind/react";

// const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_HEAD = [];

const TABLE_ROWS = [
  {
    name: "Security Deposit",
    job: "$$$$$",
  },
  {
    name: "Includes",
    job: "100 miles per day | Extra miles $/mile",
  },
  {
    name: "MSRP",
    job: "$123,456",
  },
  {
    name: "Top Speed",
    job: "205 MPH",
  },
  {
    name: "0-60 mph in:",
    job: "3.4 seconds",
  },
  {
    name: "Transmission",
    job: "6 Speed Auto",
  },
  {
    name: "Seats",
    job: "2",
  },
  {
    name: "Engine",
    job: "6.5L V8",
  },
];

const DataTable = () => {
  return (
    <Card className="h-full w-full ">
      <table className="w-full table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-blue-gray-100 bg-blue-gray-50 border-b p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4" : "py-2  border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-text-gray"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-base font-bold text-white"
                  >
                    {job}
                  </Typography>
                </td>
                {/* <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td> */}
                {/* <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default DataTable;
