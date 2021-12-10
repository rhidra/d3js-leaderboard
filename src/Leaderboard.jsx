import { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

function Leaderboard({data, width}) {
  const d3Ref = useRef(null);
  const screenSize = 1;

  // Constants
  const rowHeight = 80;
  const barHeight = 12;
  const marginText = 8;

  // Set the dimensions and margins of the graph
  const [height, setHeight] = useState(rowHeight * data.length ?? 0);

  useEffect(() => {
    setHeight(rowHeight * data.length);
    const height = rowHeight * data.length;

    // Add only once the root SVG with the correct margins
    const svg = d3.select(d3Ref.current);

    // Scales
    const maxValue = d3.max(data.map(d => +d.value)) ?? 1;
    const x = d3.scaleLinear().domain([0, maxValue]).range([5, width]);
    const y = d3.scaleLinear().domain([0, data.length]).range([0, height]);

    const fontSize = '1.5rem';

    const textColor = '#E0E0E0';
    const bgColor = '#81858E';
    
    // Join the data
    // We use the ID to find rows of same data
    const g = svg.selectAll('g').data(data, d => d.id);

    // Exit animation
    g.exit()
        .attr('opacity', 1)
      .transition()
        .ease(d3.easeLinear)
        .duration(200)
        .attr('transform', (d, i) => `translate(-50, ${y(i)})`)
        .attr('opacity', 0)
      .remove();

    // Initialization
    const gEnter = g.enter()
      .append('g')
        .attr('transform', `translate(0, ${y(data.length) + 500})`);

    // Append background rect as child
    gEnter
      .append('rect')
        .attr('class', 'bg')
        .attr('x', 0).attr('y', marginText)
        .attr('rx', 5).attr('ry', 5)
        .attr('height', barHeight)

    // Append main rect as child
    gEnter
      .append('rect')
        .attr('class', 'main')
        .attr('x', 0).attr('y', marginText)
        .attr('rx', 5).attr('ry', 5)
        .attr('height', barHeight);

    // Append label text as child
    gEnter
      .append('text')
        .attr('class', 'label')
        .attr('x', 0)
        .attr('y', -5);

    // Append value text as child
    gEnter
      .append('text')
        .attr('class', 'value')
        .attr('text-anchor', 'end')
        .attr('y', -5);

    // Update each g row, when data changes
    const gUpdate = g.merge(gEnter);
    gUpdate
      .transition()
        .ease(d3.easePoly)
        .duration(500)
        .attr('transform', (d, i) => `translate(0, ${y(i)})`);

    // Update rect bg
    gUpdate
      .select('rect.bg')
      .attr('width', x(maxValue))
      .attr('fill', bgColor);

    // Update rect main
    gUpdate
      .select('rect.main')
      .transition()
        .ease(d3.easePolyOut)
        .duration(1000)
        .attr('fill', '#FF0000')
        .attr('width', d => x(d.value));
    
    // Update label text
    gUpdate
      .select('text.label')
      .attr('font-size', fontSize)
      .attr('fill', textColor)
      .text(d => d.label);
    
    // Update value text
    gUpdate
      .select('text.value')
      .text(d => d.value)
      .attr('fill', textColor)
      .attr('font-size', fontSize)
      .attr('x', x(maxValue));
  }, [d3Ref, data, width, screenSize, marginText, rowHeight]);

  return (
    <svg
      width={width}
      height={height}
      ref={d3Ref}
    />
  );
}

export default Leaderboard;