import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <h1>검색결과 : {q}</h1>;
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
