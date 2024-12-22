import React from "react";
import { Button } from "./ui/button";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button size="lg" className="bg-primary px-4 py-2 h-12 w-full">
      {children}
    </Button>
  );
};

export default PrimaryButton;