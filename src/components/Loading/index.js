import React from "react";
import { Spin } from 'antd';
import { LoadingBody } from "./styles";

const Loading = () => {
  return (
    <LoadingBody>
        <Spin size="large" />
    </LoadingBody>
  );
};

export default Loading;
