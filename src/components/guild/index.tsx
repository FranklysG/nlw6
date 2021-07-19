import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../guild_icon';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    status: string;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}>
            <GuildIcon />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>
            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}