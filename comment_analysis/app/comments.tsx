import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, Button, TouchableOpacity } from 'react-native';
import CommentCard from '../components/CommentCard';
import FilterBar from '../components/FilterBar';
import comments from '../data/comments.json';

export default function CommentsScreen() {
    const [isAnalyticView, setIsAnalyticView] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'positive', 'neutral', 'negative'

    const filteredComments = comments.filter((comment) =>
        filter === 'all' ? true : comment.sentiment === filter
    );

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
            <TouchableOpacity
                style={[styles.toggleButton, isAnalyticView && styles.activeToggleButton]}
                onPress={() => setIsAnalyticView(true)}
            >
                <Text style={[styles.toggleText, isAnalyticView && styles.activeToggleText]}>
                    Analytic
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.toggleButton, !isAnalyticView && styles.activeToggleButton]}
                onPress={() => setIsAnalyticView(false)}
            >
                <Text style={[styles.toggleText, !isAnalyticView && styles.activeToggleText]}>
                    Standard
                </Text>
            </TouchableOpacity>
            </View>
            
            {isAnalyticView && <FilterBar filter={filter} setFilter={setFilter} />}
            <FlatList
                data={filteredComments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CommentCard comment={item} isAnalyticView={isAnalyticView} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    switchContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: 'transparent',
    },
    activeToggleButton: {
        backgroundColor: '#007BFF',
    },
    toggleText: {
        fontSize: 14,
        color: '#000',
    },
    activeToggleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});