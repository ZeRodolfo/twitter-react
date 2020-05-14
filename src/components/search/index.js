import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./styles";

import { Icon as InputIcon } from "../input";

const Search = () => {
  return (
    <Styled.Container>
      <InputIcon leftIcon={faSearch} type="text" placeholder="Search Twitter" />
    </Styled.Container>
  );
};

export default Search;
