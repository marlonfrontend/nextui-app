import { Card as AppCard, CardHeader, CardBody, CardFooter, CardProps } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export const Card = ({ children, ...props }: PropsWithChildren<CardProps>) => {
  return (
    <AppCard {...props} classNames={{ base: 'shadow-sm' }}>
      {children}
    </AppCard>
  );
};

Card.Header = ({ children }: PropsWithChildren) => {
  return (
    <CardHeader>
      {children}
    </CardHeader>
  );
};

Card.Body = ({ children }: PropsWithChildren) => {
  return (
    <CardBody>
      {children}
    </CardBody>
  );
};

Card.Footer = ({ children }: PropsWithChildren) => {
  return (
    <CardFooter>
      {children}
    </CardFooter>
  );
};
