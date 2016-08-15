import React from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/lib/button/style';
import Button from 'antd-mobile/lib/button';

const mountNode = document.getElementById('root');
import { Tabs, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

let TabExample = React.createClass({
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="选项卡A" key="1">这只是个DEMO</TabPane>
                    <TabPane tab="选项卡B" key="2">只是为了验证antd mobile</TabPane>
                    <TabPane tab="选项卡C" key="3">感觉antd mobile还不是很成熟, 兼容性有问题, 有些示例也有问题</TabPane>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    },
});

ReactDOM.render(<TabExample />, mountNode);