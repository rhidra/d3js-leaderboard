import { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

function Leaderboard({data}) {
  const d3Ref = useRef(null);

  useEffect(() => {
    /***

    Write D3.js code here !
    
    ***/
  }, [d3Ref, data]);

  return (
    <svg
      ref={d3Ref}
    />
  );
}

export default Leaderboard;