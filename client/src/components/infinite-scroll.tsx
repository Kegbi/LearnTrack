import React, { useMemo, useEffect } from "react";

type DataType = {
  courseid?: number;
  bookid?: number;
  name: string;
  author: string;
  info: string;
  image: string;
  type: string;
};

type Props = {
  content: Array<DataType>;
  type: "books" | "courses";
  fetchMore: () => DataType;
  hasMore: boolean;
  children: any;
};

const InfiniteScroll: React.FC<Props> = ({
  content,
  type,
  fetchMore,
  hasMore,
  children: Children,
}) => {
  const handleScroll = useMemo(
    () => async () => {
      const loadMoreData = () => {
        return fetchMore();
      };

      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const scrolled =
        windowHeight + scrollTop > offsetHeight - offsetHeight / 3;

      if (!hasMore) {
        window.removeEventListener("scroll", handleScroll);
        return;
      }

      if (scrolled) {
        window.removeEventListener("scroll", handleScroll);
        console.log("Lol, scroll");
        loadMoreData();
      }
    },
    [content.length, type, hasMore, fetchMore]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Children content={content} type={type} />
      {!hasMore ? (
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>
          Nothing more to load
        </h1>
      ) : null}
    </>
  );
};

export default InfiniteScroll;
