import React from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/lib/button/style';
import { ListView, Toast, Tabs, WhiteSpace, Icon, Collapse, List, Badge, Flex, Button, WingBlank } from 'antd-mobile';
const TabPane = Tabs.TabPane;
const mountNode = document.getElementById('root');


let TabExample = React.createClass({
    render() {
        return (
			
		
            <div>
                <Tabs type="tabbar" defaultActiveKey="1">
				  <TabPane tab={<span><Icon type="home" key="1" />SUMMARY</span>}>
				  <Collapse defaultActiveKey="0">
					  <Collapse.Panel header="新增任务汇总 (1200/1500)">
						<List.Item>二次激活  10</List.Item>
						<List.Item>三次激活  20</List.Item>
						<List.Item>四次激活  30</List.Item>
						<List.Item>五次激活  40</List.Item>
					  </Collapse.Panel>
					  <Collapse.Panel header="留存任务汇总 (1200/1500)">
						<List.Item>二次激活  10</List.Item>
						<List.Item>三次激活  20</List.Item>
						<List.Item>四次激活  30</List.Item>
						<List.Item>五次激活  40</List.Item>
					  </Collapse.Panel>
					  <Collapse.Panel header="slaver状态 (2/6)">
						<List.Item>
							<Flex>
								<Flex.Item>
								  <span>slaver-01 (0)</span>
								</Flex.Item>
								<Flex.Item>
								  <Button type="primary">reboot</Button>
								</Flex.Item>
								<Flex.Item>
								  <Button type="primary">release</Button>
								</Flex.Item>
							</Flex>
						</List.Item>
						
					  </Collapse.Panel>
					  <List>
					  </List>
				  </Collapse>
				  </TabPane>
				  <TabPane tab={<span><Icon type="team" />JOBS</span>} key="2">选项好友内容</TabPane>
				  <TabPane tab={<span><Icon type="setting" />SLAVERS</span>} key="3">选项设置的内容</TabPane>
				</Tabs>
				
            </div>
        );
    },
});

ReactDOM.render(<TabExample />, mountNode);