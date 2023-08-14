import { IPost } from "interfaces"
import { Table } from "antd";
import { List, TagField, DateField, TextField, useTable } from "@refinedev/antd";
export const PostList: React.FC = () => {
    
    const { tableProps } = useTable<IPost>();

    return (
        
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" title="title"></Table.Column>
                <Table.Column dataIndex="status" title="status" render={(value) => <TagField value={value}></TagField>}></Table.Column>
                <Table.Column dataIndex="createAt" title="createAt" render={(value) => <DateField format="LLL" value={value}></DateField>}></Table.Column>
            </Table>
        </List>

        )
}