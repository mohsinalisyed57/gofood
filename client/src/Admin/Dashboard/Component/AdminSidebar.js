import "./style.css";
import React, { useState } from "react";
import {
    RiHome4Line,
    RiTeamLine,
    RiCalendar2Line,
    RiFolder2Line,
    RiUserFollowLine,
    RiPlantLine,
    RiStackLine,
    RiUserUnfollowLine
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
    Sidebar,
    SubMenu,
    Menu,
    MenuItem
    //useProSidebar
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
function AdminSidebar() {
    //const { collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed] = useState(false);

    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div>
            <Sidebar
                className={`app ${toggled ? "toggled" : ""}`}
                style={{ height: "100%", position: "absolute" }}
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            >
                <main>
                    <Menu>
                        {collapsed ? (
                            <MenuItem
                                icon={<FiChevronsRight />}
                                onClick={handleCollapsedChange}
                            ></MenuItem>
                        ) : (
                            <MenuItem
                                suffix={<FiChevronsLeft />}
                                onClick={handleCollapsedChange}
                            >
                                <div
                                    style={{
                                        padding: "9px",
                                        // textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        letterSpacing: "1px"
                                    }}
                                >
                                    YOUR LOGO!..
                                </div>
                            </MenuItem>
                        )}
                        <hr />
                    </Menu>

                    <Menu>
                        <MenuItem icon={<RiHome4Line />}><Link to="/admin/dashboard">Dashboard</Link></MenuItem>
                        <SubMenu defaultOpen label={"Product"} icon={<RiTeamLine />}>7
                            <MenuItem icon={<RiCalendar2Line />}> <Link to="/admin/view-product"> View </Link></MenuItem>
                            <MenuItem icon={<RiUserFollowLine />}> <Link to="/admin/add-product">Add</Link></MenuItem>
                            <MenuItem icon={<RiUserUnfollowLine />}><Link to="/admin/update-product"> Update</Link></MenuItem>
                        <MenuItem icon={<RiCalendar2Line />}><Link to="/admin/remove-product"> Remove </Link></MenuItem>
                        </SubMenu>
                        <SubMenu defaultOpen label={"Order"} icon={<RiFolder2Line />}>
                            <MenuItem icon={<RiStackLine />}>Detail</MenuItem>
                            <MenuItem icon={<RiPlantLine />}>Update</MenuItem>
                        </SubMenu>
                    </Menu>
                </main>
            </Sidebar>
        </div>
    );
}
export default AdminSidebar;
