import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
export const Loading =()=>{
    return (
        <Spin indicator={<LoadingOutlined spin />} size="large" />
    )
}