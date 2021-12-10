import './App.css';
import Leaderboard from './Leaderboard';
import { getData } from './data';
import { useEffect, useState, useCallback } from 'react';
import useMeasure from 'react-use-measure';

function App() {
  // Leaderboard data
  const [data, setData] = useState([]);

  // Utility function to change the data in the leaderboard
  const refreshData = useCallback(() => getData().then(d => setData(d)), []);

  // Fill the leaderboard at the page load
  useEffect(() => refreshData(), [refreshData]);

  return (
    <div className="app">
      <div className="leaderboard-container">
        <Leaderboard
          data={data}
        />
      </div>

      <div className="button">
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </div>
  );
}

export default App;
