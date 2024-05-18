import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

const member = [
  {
    id: 1,
    sid: "CT/2020/007",
    name: "UDAYANGA W.P.I",
    imgUrl: "",
    degree: "BICT",
    role: "Web developer",
  },
  {
    id: 2,
    sid: "CT/2020/009",
    name: "MANURATHNA N.B.U.S",
    imgUrl: "",
    degree: "BICT",
    role: "System architecture",
  },
  {
    id: 3,
    sid: "CT/2020/019",
    name: "DHARMARATHNA E.K.S.N",
    imgUrl: "",
    degree: "BICT",
    role: "System architecture",
  },
  {
    id: 4,
    sid: "ET/2020/051",
    name: "SERASINGHE V.U.V",
    imgUrl: "",
    degree: "BICT",
    role: "System architecture",
  },
  {
    id: 5,
    sid: "ET/2020/063",
    name: "FERNANDO K.G.T.P",
    imgUrl: "",
    degree: "BICT",
    role: "System architecture",
  },
  {
    id: 6,
    sid: "ET/2020/065",
    name: "MALHARI A.G.D",
    imgUrl: "",
    degree: "BICT",
    role: "System architecture",
  },
];

const ProfileCard = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-3 gap-4">
        {member.map((item) => (
          <Card className="bg-[#F2F4F7]" key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p>Student No: {item.sid}</p>
                <p>Degree: {item.degree}</p>
                <CardDescription>Role: {item.role}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
