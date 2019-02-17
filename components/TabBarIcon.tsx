import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export interface ITabBarIconProps {
  focused: boolean;
  name: string;
}

export default class TabBarIcon extends React.Component<ITabBarIconProps, any> {

  constructor(props: ITabBarIconProps) {
    super(props);
  }

  render() {
    return (
      < Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
