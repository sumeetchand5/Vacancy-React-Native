import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
    <Icon {...props} name='bulb-outline'/>
);

const BellIcon = (props) => (
    <Icon {...props} name='globe-outline'/>
);

const EmailIcon = (props) => (
    <Icon {...props} name='settings-2-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};

  const BottomNavigationAccessoriesShowcase = () => {

    const topState = useBottomNavigationState();
    const bottomState = useBottomNavigationState();

    return (
        <React.Fragment>

            <BottomNavigation style={styles.bottomNavigation} {...topState}>
                <BottomNavigationTab title='Opportunities' icon={PersonIcon}/>
                <BottomNavigationTab title='Organizations' icon={BellIcon}/>
                <BottomNavigationTab title='Setting' icon={EmailIcon}/>
            </BottomNavigation>

            <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
                <BottomNavigationTab icon={PersonIcon}/>
                <BottomNavigationTab icon={BellIcon}/>
                <BottomNavigationTab icon={EmailIcon}/>
            </BottomNavigation>

        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});


export default BottomNavigationAccessoriesShowcase;
