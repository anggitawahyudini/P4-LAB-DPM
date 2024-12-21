import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  Alert,
  ImageBackground 
} from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState('');
  const teamAName = "Tim A";
  const teamBName = "Tim B";

  const checkWinner = (score, teamName, otherScore) => {
    if (score === 10) {
      setWinner(teamName);
      Alert.alert(
        "Pertandingan Selesai!", 
        `${teamName} memenangkan pertandingan dengan skor ${score}-${otherScore}!`,
        [
          { 
            text: "Main Lagi", 
            onPress: resetScores 
          }
        ]
      );
      return true;
    }
    return false;
  };

  const handleScoreChange = (team, increment) => {
    if (winner) return;

    if (team === 'A') {
      const newScore = scoreA + increment;
      if (newScore >= 0 && newScore <= 10) {
        setScoreA(newScore);
        checkWinner(newScore, teamAName, scoreB);
      }
    } else {
      const newScore = scoreB + increment;
      if (newScore >= 0 && newScore <= 10) {
        setScoreB(newScore);
        checkWinner(newScore, teamBName, scoreA);
      }
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner('');
  };

  return (
    <ImageBackground
      source={require('./assets/futsal-background..jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScoreBoard
            teamA={teamAName}
            teamB={teamBName}
            scoreA={scoreA}
            scoreB={scoreB}
            onScoreChange={handleScoreChange}
            winner={winner}
          />
          
          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={resetScores}
          >
            <Text style={styles.resetButtonText}>Reset Skor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lapisan semi-transparan untuk meningkatkan keterbacaan
  },
  container: {
    flex: 1,
    paddingTop: 50,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;