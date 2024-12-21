import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Controls from './Controls';

const ScoreBoard = ({ 
  teamA, 
  teamB, 
  scoreA, 
  scoreB, 
  onScoreChange,
  winner 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      
      {winner && (
        <Text style={styles.winnerText}>
          {winner} Memenangkan Pertandingan!
        </Text>
      )}
      
      <View style={styles.scoreContainer}>
        {/* Tim A */}
        <View style={[
          styles.teamContainer,
          winner === teamA && styles.winnerTeam
        ]}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <Controls 
            onIncrement={() => onScoreChange('A', 1)}
            onDecrement={() => onScoreChange('A', -1)}
            disabled={Boolean(winner)}
          />
        </View>

        {/* Pemisah */}
        <Text style={styles.versus}>VS</Text>

        {/* Tim B */}
        <View style={[
          styles.teamContainer,
          winner === teamB && styles.winnerTeam
        ]}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <Controls 
            onIncrement={() => onScoreChange('B', 1)}
            onDecrement={() => onScoreChange('B', -1)}
            disabled={Boolean(winner)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', // Mengubah warna teks untuk kontras dengan background
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(232, 245, 233, 0.9)',
    padding: 10,
    borderRadius: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparan untuk keterbacaan
  },
  winnerTeam: {
    backgroundColor: 'rgba(232, 245, 233, 0.9)',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  versus: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});

export default ScoreBoard;