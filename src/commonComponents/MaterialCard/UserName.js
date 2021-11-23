import React, { memo } from "react";

const UserName = ({ name, age }) => {
    return <h1>{`${name} - (${age})`}</h1>;
};

export default memo(UserName);