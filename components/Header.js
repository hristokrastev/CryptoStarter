import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                CryptoStarter
            </Menu.Item>
            
            
            <Menu.Menu position="right">
                <Menu.Item>
                    Campaigns
                </Menu.Item>

                <Menu.Item>
                <Button
                icon="add"
                primary
                />
                </Menu.Item>
            </Menu.Menu>


        </Menu>
    );
};