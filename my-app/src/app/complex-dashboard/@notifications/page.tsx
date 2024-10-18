import Link from "next/link";
import Card from "@/components/Card";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  );
}

// * default.tsx file is needed when u reload the url;
