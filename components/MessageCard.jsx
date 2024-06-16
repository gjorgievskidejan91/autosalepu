import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { fetchMessages } from "@/app/lib/data";
const MessageCard = async () => {
  const messages = await fetchMessages();

  if (!messages) {
    return <h2>No message data</h2>;
  }

  return (
    // <h1>Hello</h1>
    <>
      {messages.map((message, index) => (
        <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle>{message.name}</CardTitle>
            <h2>
              {message.carOfInterest.make} {message.carOfInterest.model}
            </h2>
          </CardHeader>
          <CardContent>
            <p>{message.message}</p>
          </CardContent>
          <CardFooter>
            received:{" "}
            {new Date(message.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            {new Date(message.createdAt).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default MessageCard;
