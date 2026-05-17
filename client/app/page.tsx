import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Taksi 58 Sivas | 7/24 Sivas Taksi Hizmeti — 0553 407 49 89",
  description:
    "Sivas taksi için 0553 407 49 89'u arayın. 7/24 şehir içi, terminal, otogar, hastane ve havalimanı transferi. 5 dakikada kapınızda.",
  alternates: { canonical: "https://taksi58sivas.com" },
};

export default function Page() {
  return <HomeClient />;
}
