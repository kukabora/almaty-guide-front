import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../Styles/FoodPageTabStyle.css';
import ModalMenuItem from '../ModalMenuItem';
import SimpleMenuItem from '../SimpleMenuItem';
import axios from "axios";


class MenuTab extends Component {
    state = {
        menuTypes: [],
        menuItems: [],
        foodPlaceId: this.props.foodPlaceId
    };

    componentDidMount() {
        this.fetchMenuTypes();
    }

    fetchMenuTypes = async () => {
        const response = await fetch('http://localhost:8000/api/data/menutypes/');
        const menuTypes = await response.json();
        this.setState({ menuTypes });
    };

    handleSelect = async (menuTypeId) => {
        const foodPlaceId = this.state.foodPlaceId;
        try {
            const response = await axios.get(`http://localhost:8000/api/data/menus/?food_places=${foodPlaceId}&menu_type_id=${menuTypeId}`);
            const menuItems = response.data.length > 0 ? response.data : [];
            this.setState({ menuItems });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { menuTypes, menuItems } = this.state;

        return (
            <div className="foodpage-menu-tabs">
                <Tabs
                    defaultActiveKey="1"
                    id="uncontrolled-tab-example"
                    className="menu-tabs"
                    onSelect={this.handleSelect}
                >
                    {menuTypes.map((menuType) => (
                        <Tab
                            eventKey={menuType.menu_type_id}
                            title={menuType.type_name}
                            className="menu-tab"
                            key={menuType.menu_type_id}
                        >
                            {menuType.menu_type_id === 1 ? (
                                <ModalMenuItem menuItems={menuItems} />
                            ) : (
                                <SimpleMenuItem menuItems={menuItems} />
                            )}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        );
    }
}

export default MenuTab;
