import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/router";
import dummy from "@/mock/dummy.json";
import MovieItem from "@/components/MovieItem";
import style from "./index.module.css";

export default function Page() {
  return (
    <div className={style.container}>
      {dummy.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
