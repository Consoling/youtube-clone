import React, { createContext, useState, useEffect } from "react";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategory(selectCategories)
  }, [selectCategories]);
  
  const fetchSelectedCategory = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then((res) => {
            console.log(res.data.contents)
            setSearchResults(res);
            setLoading(false)
        })
  }
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
