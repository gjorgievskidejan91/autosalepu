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
  let messages = [];

  try {
    messages = await fetchMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    return <h2>Error fetching message data</h2>;
  }

  return (
    <>
      {messages.length === 0 && <h2>No message data</h2>}
      {messages.map((message, index) => (
        <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle>{message.name}</CardTitle>
            {message.carOfInterest && ( // Check if carOfInterest is not null
              <h2>
                {message.carOfInterest.make} {message.carOfInterest.model}
              </h2>
            )}
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
