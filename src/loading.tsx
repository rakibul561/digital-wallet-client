import React from "react";
import { Skeleton } from "./components/ui/skeleton";


const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <Skeleton className="w-64 h-6" />
      <Skeleton className="w-48 h-6" />
      <Skeleton className="w-80 h-40" />
      <div className="flex space-x-4">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-24 h-10" />
      </div>
    </div>
  );
};

export default Loading;
