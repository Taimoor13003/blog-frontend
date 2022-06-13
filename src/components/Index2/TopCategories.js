import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SmartphonesCategory from "../TopCategorise/SmartphonesCategory";
import GamesCategory from "../TopCategorise/GamesCategory";
import HeadphonesCategory from "../TopCategorise/HeadphonesCategory";
import SmartwatchCategory from "../TopCategorise/SmartwatchCategory";

const TopCategories = () => {
    return (
		<>
            <div className="banner-area">
                <div className="container">
                    <div className="banner-content">
                        <h1>Top Categories on Tozi.</h1>

                        <Tabs>
                            <TabList>
                                <Tab>Smartphones</Tab>
                                <Tab>Games</Tab>
                                <Tab>Headphones</Tab>
                                <Tab>Smartwatch</Tab>
                            </TabList>

                            <TabPanel>
                                <SmartphonesCategory />
                            </TabPanel>

                            <TabPanel>
                                <GamesCategory />
                            </TabPanel>

                            <TabPanel>
                                <HeadphonesCategory />
                            </TabPanel>

                            <TabPanel>
                                <SmartwatchCategory />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
		</>
    );
}

export default TopCategories;