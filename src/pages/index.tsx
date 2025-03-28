import SearchBar from "@/components/SearchBar";

export default function Home() {
  return <h1>Home</h1>;
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
