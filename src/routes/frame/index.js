import React from "react";
import { connect } from "react-redux";

import Loading from "../../components/loading"

function Frame({ children, loading }) {
  const renderLoading = () => {
    return loading && <Loading />;
  };

  return (
    <>
      {renderLoading()}
      {children}
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.utilities.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
