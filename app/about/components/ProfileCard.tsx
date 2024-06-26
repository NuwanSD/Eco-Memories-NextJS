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
    imgUrl: "/assets/images/Ishan.jpeg",
    degree: "BICT",
    role: "Application Design",
  },
  {
    id: 2,
    sid: "CT/2020/009",
    name: "MANURATHNA N.B.U.S",
    imgUrl: "/assets/images/Ushitha.jpeg",
    degree: "BICT",
    role: "Database Design",
  },
  {
    id: 3,
    sid: "CT/2020/019",
    name: "DHARMARATHNA E.K.S.N",
    imgUrl: "/assets/images/Sagara.jpg",
    degree: "BICT",
    role: "Web Development",
  },
  {
    id: 4,
    sid: "ET/2020/051",
    name: "SERASINGHE V.U.V",
    imgUrl: "/assets/images/Upekha.jpeg",
    degree: "BET",
    role: "Vending Machine Design",
  },
  {
    id: 5,
    sid: "ET/2020/063",
    name: "FERNANDO K.G.T.P",
    imgUrl: "/assets/images/Tharushi.jpeg",
    degree: "BET",
    role: "Vending Machine Design",
  },
  {
    id: 6,
    sid: "ET/2020/065",
    name: "MALHARI A.G.D",
    imgUrl: "/assets/images/Malhari.jpeg",
    degree: "BET",
    role: "Vending Machine Design",
  },
];

const ProfileCard = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-3 gap-4">
        {member.map((item) => (
          <Card className="bg-slate-100 drop-shadow-xl" key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-5">
                <Avatar className="w-38 h-36 border-2 border-slate-200">
                  <AvatarImage src={item.imgUrl} alt={item.name} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>Student No: {item.sid}</p>
                  <p>Degree: {item.degree}</p>
                  <CardDescription>Role: {item.role}</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
