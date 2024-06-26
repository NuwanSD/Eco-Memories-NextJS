import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const content = [
  {
    id: 1,
    Question: "Why is it important to reduce plastic usage?",
    Answer:
      "Reducing plastic usage is crucial because plastics do not biodegrade easily and can persist in the environment for hundreds of years. They break down into microplastics, which contaminate soil, waterways, and oceans, harming wildlife and ecosystems. By reducing our plastic consumption, we can help prevent pollution, protect wildlife, and promote a healthier planet.",
  },
  {
    id: 2,
    Question: "How does plastic pollution affect marine life?",
    Answer:
      "Plastic pollution severely impacts marine life. Many marine animals mistake plastic debris for food, which can lead to ingestion, choking, and ultimately death. Plastics can also entangle marine creatures, causing injury and restricting movement. Over time, plastics break down into microplastics, which enter the food chain and pose health risks to both marine life and humans.",
  },
  {
    id: 3,
    Question:
      "What are some simple ways individuals can reduce their plastic waste?",
    Answer:
      "Individuals can reduce plastic waste by: using reusable bags, bottles, and containers; avoiding single-use plastics like straws, cutlery, and packaging; choosing products with minimal or no plastic packaging; participating in local recycling programs; supporting companies and products that prioritize sustainability and eco-friendly practices.",
  },
  {
    id: 4,
    Question: "How does recycling plastic benefit the environment?",
    Answer:
      "Recycling plastic helps to conserve natural resources, reduce landfill waste, and decrease pollution. It saves energy compared to producing new plastics from raw materials. By recycling, we can turn used plastic into new products, reducing the need for virgin plastic production and lowering the overall environmental footprint.",
  },
  {
    id: 5,
    Question: "What can communities do to combat plastic pollution?",
    Answer:
      "Communities can combat plastic pollution by organizing and participating in local clean-up events; implementing and supporting policies that limit single-use plastics and encourage recycling; educating residents about the impact of plastic pollution and the importance of sustainable practices; establishing local recycling and waste management programs; encouraging businesses to adopt sustainable packaging and reduce their plastic use.",
  },
];

const accordianProvider = () => {
  return (
    <div className="mt-10 px-10">
      {content.map((Item) => (
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value={`item-${Item.id}`} key={Item.id}>
            <AccordionTrigger>{Item.Question}</AccordionTrigger>
            <AccordionContent>{Item.Answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default accordianProvider;
