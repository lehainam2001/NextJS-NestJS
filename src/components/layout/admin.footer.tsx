'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                NamLH ©{new Date().getFullYear()} Created by NamLH
            </Footer>
        </>
    )
}

export default AdminFooter;