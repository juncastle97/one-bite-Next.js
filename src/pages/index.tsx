import SearchBar from "@/components/SearchBar";
import dummy from "@/mock/dummy.json";
import MovieItem from "@/components/MovieItem";
import style from "./index.module.css";

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommendMovie}>
          {dummy.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMovie}>
          {dummy.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
