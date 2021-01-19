import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, List, ListItem, Divider, Input, Layout, Text} from '@ui-kitten/components';
import TopNavigation from "../components/TopNavigation";

const VaccancyScreen = () => {

    const data = [
        {title: 'Finance Officer', update: 'Jan 19, 2021', org: 'Fiji Job'},
        {
            title: 'Sales Manager Lubricants - Carpenters Motors (Lautoka)',
            update: 'Jan 18, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Experienced House Keeper',
            update: 'Jan 17, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Fitter & Machinist',
            update: 'Jan 17, 2021',
            org: 'Fiji Job'
        },
        {title: 'Tilers', update: 'Jan 17, 2021', org: 'Fiji Job'},

        {
            title: 'Restaurant Manager',
            update: 'Jan 15, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Team Leader - Insurance',
            update: 'Jan 15, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Printer Technician (Nadi)',
            update: 'Jan 14, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Sheet Metal Shop Supervisor',
            update: 'Jan 14, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Heavy Diesel Mechanics (Apply in Person)',
            update: 'Jan 14, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Technician - Heavy Mobile Unit',
            update: 'Jan 14, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Front Office & Admin  Assistant – Nadi Branch',
            update: 'Jan 13, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Inventory Control Clerk',
            update: 'Jan 13, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Bus Checkers (Apply in Person)',
            update: 'Jan 13, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Sales Rep - Suva Branch',
            update: 'Jan 12, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Group 6 Truck Driver',
            update: 'Jan 12, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Central (Suva) & Western Sales Manager',
            update: 'Jan 12, 2021',
            org: 'Fiji Job'
        },
        {
            title: 'Regional Technical Specialist (Ecosystem and Incubation), Suva, Fiji',
            update: '2021-01-18',
            org: 'UN Job'
        },
        {
            title: 'Technical Adviser, Gender, Suva',
            update: '2021-01-18',
            org: 'UN Job'
        },
        {
            title: 'Production and Design Assistant - Suva, Fiji, Suva, Fiji',
            update: '2021-01-18',
            org: 'UN Job'
        },
        {
            title: 'Maths Curriculum Coordinator (Secondary) - Suva, Fiji, Suva, Fiji',
            update: '2021-01-18',
            org: 'UN Job'
        },
        {
            title: 'Value Chain Mapping Specialist, Market Development Facility (MDF), Fiji',
            update: '2021-01-15',
            org: 'UN Job'
        },
        {
            title: 'Senior Pacific Economic Officer - Macroeconomic Analysis of Low Carbon Development, Suva',
            update: '2021-01-14',
            org: 'UN Job'
        },
        {
            title: 'Technical Expert in the area of geology mining and quarry management, Fiji',
            update: '2021-01-14',
            org: 'UN Job'
        },
        {
            title: 'Director of Finance & Administration, anticipated USAID funded Pacific Regional Initiative and Support for more Effective Counter-Trafficking in Persons (Pacific RISE CTIP) project, Suva',
            update: '2021-01-13',
            org: 'UN Job'
        },
        {
            title: 'Country Coordinator - Fiji - USAID funded Pacific Regional Initiative and Support for more Effective Counter-Trafficking in Persons (Pacific RISE CTIP) project, Fiji',
            update: '2021-01-13',
            org: 'UN Job'
        },
        {
            title: 'Civil Society Engagement (CSE) Project Manager, Suva, Fiji',
            update: '2021-01-12',
            org: 'UN Job'
        },
        {
            title: 'Finance Officer, Suva',
            update: '2021-01-11',
            org: 'UN Job'
        },
        {
            title: 'Gender Specialist, Suva',
            update: '2021-01-11',
            org: 'UN Job'
        },
        {
            title: 'Programme Officer (Private Sector Development), Suva',
            update: '2021-01-11',
            org: 'UN Job'
        },
        {
            title: 'Consultant - Health and Nutrition Coordinator, Suva, Fiji',
            update: '2021-01-11',
            org: 'UN Job'
        },
        {
            title: 'UNICEF MICS Dissemination Coordinator, Fiji',
            update: '2021-01-07',
            org: 'UN Job'
        },
        {
            title: 'International Consultant: Logistics Officer (Emergency Preparedness), Suva, Fiji',
            update: '2021-01-07',
            org: 'UN Job'
        },
        {
            title: 'Logistics Officer (Emergency Preparedness) (Service Contract - SC9), Suva, Fiji',
            update: '2021-01-07',
            org: 'UN Job'
        },
        {
            title: 'Parliament Project Coordinator Consultant, Fiji',
            update: '2020-12-31',
            org: 'UN Job'
        },
        {
            title: 'Parliament Project Coordinator Consultant- FSM, Fiji',
            update: '2020-12-31',
            org: 'UN Job'
        },
        {
            title: 'Director of Monitoring, Evaluation, and Learning, anticipated USAID-funded Pacific Islands RISE project, Suva, Fiji',
            update: '2020-12-29',
            org: 'UN Job'
        },
        {
            title: 'Economic Advisor, Fiji',
            update: '2020-12-23',
            org: 'UN Job'
        },
        {
            title: 'Programme Management Officer, (Risk Knowledge and Analysis), Suva, Fiji',
            update: '2020-12-09',
            org: 'UN Job'
        },
        {
            title: 'Internship - Human Rights (Regional), Suva, Fiji',
            update: '2020-12-08',
            org: 'UN Job'
        }
    ]


    const renderItemAccessory = (props) => (
        <Button size='tiny'>View</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='minus-square-outline'/>
    );

    const renderItem = ({item, index}) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.update} - ${item.org}`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
        />
    );

    return (
        <View style={{marginTop:110}}>
            <TopNavigation/>
            <Input
                placeholder='Search Keywords'
               // value={value}
               // onChangeText={nextValue => setValue(nextValue)}
               // onChangeText={nextValue => setValue(nextValue)}
            />
            <List
                style={styles.container}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        width: 400,
    },
});

export default VaccancyScreen;


