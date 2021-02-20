import React, { useEffect, useRef, useState } from "react";

import { useDebounceFunc } from "../hooks/useDebounce";

import Loader from "./loader/loader";

import { CardType, ItemType } from "../types/item.types";

import { Spacing } from "./layout";

type PropsType = {
  content: Array<CardType>;
  type: ItemType;
  fetchMore: () => CardType;
  hasMore: boolean;
  children: React.FC<{ content: Array<CardType>; type: ItemType }>;
};

const InfiniteScroll: React.FC<PropsType> = ({
  content,
  type,
  fetchMore,
  hasMore,
  children: Children,
}) => {
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    if (wrapperRef.current !== null) {
      const e: HTMLDivElement = wrapperRef.current;
      const bottom: boolean =
        e.getBoundingClientRect().bottom <= window.innerHeight * 1.5;
      if (bottom) {
        setLoading(true);
        window.removeEventListener("scroll", debouncedHandleScroll);
        fetchMore();
      }
    }
  };

  const debouncedHandleScroll = useDebounceFunc(handleScroll, 300);

  useEffect(() => {
    setLoading(false);
    if (!hasMore) {
      window.removeEventListener("scroll", debouncedHandleScroll);
      return;
    }
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [content, hasMore]);

  return (
    <div ref={wrapperRef}>
      <Children content={content} type={type} />
      {loading ? (
        <Spacing top={"sm"} bottom={"sm"}>
          <Loader />
        </Spacing>
      ) : null}
      {!hasMore ? (
        <h1 style={{ margin: "20px 0", textAlign: "center" }}>
          Nothing more to load
        </h1>
      ) : null}
    </div>
  );
};

export default InfiniteScroll;
