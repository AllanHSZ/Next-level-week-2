import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorege from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles'

function Favorites(){
    const [ favotires, setFavotires ] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorege.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher ) => {
                    return teacher.id;
                });
                setFavotires(favoritedTeachersIds)
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    )

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
               {favotires.map((teacher: Teacher) => {
                   return (
                       <TeacherItem
                        key={teacher.id}
                        teacher={teacher} 
                        favorited
                       />
                   );
               })}
            </ScrollView>
        </View>
    );
}

export default Favorites;
