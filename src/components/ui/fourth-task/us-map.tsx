'use client';
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import useGetGeoData from './get-geodata';

function USMap() {
    const geoData = useGetGeoData().data;

    useEffect(() => {
        if (geoData) {
            const projection = d3.geoAlbersUsa()
                .scale(1000)
                .translate([400, 300]);
            const path = d3.geoPath().projection(projection);

            const svg = d3.select('svg');

            // Define a color scale for the heatmap
            const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)
                .domain([0, 40]); // Adjust the domain according to your data

            // Create a tooltip div
            const tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            svg.selectAll('path')
                .data(geoData.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('stroke', '#333')
                .attr('fill', (d) => colorScale(d.properties.Obesity))
                .on("mouseover", (event, d) => {
                    if (d && d.properties) {
                        // Show the tooltip on mouseover
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", 0.9)
                            .style("position", "absolute")
                            .style("background-color", "#333")
                            .style("padding", "8px 8px 8px 8px");
                        tooltip.html(`<strong>${d.properties.NAME}</strong><br>Obesity: ${d.properties.Obesity}%`)
                            .style("left", (event.pageX + 10) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    }
                })
                .on("mouseout", () => {
                    // Hide the tooltip on mouseout
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', 'translate(20, 20)');

            const legendColorScale = d3.scaleSequential(d3.interpolateYlOrRd)
                .domain([0, 40]);

            const legendTicks = d3.range(0, 45, 10);

            // Calculate the total width of the legend
            const legendWidth = legendTicks.length * 100;

            // Position the legend at the bottom of the map
            legend.attr('transform', `translate(${(800 - legendWidth) / 2}, 550)`);

            legend.selectAll('rect')
                .data(legendTicks)
                .enter()
                .append('rect')
                .attr('x', (d, i) => i * 100)
                .attr('width', 100)
                .attr('height', 20)
                .attr('fill', (d) => legendColorScale(d));

            legend.selectAll('text')
                .data(legendTicks)
                .enter()
                .append('text')
                .attr('x', (d, i) => i * 100)
                .attr('y', 40)
                .text((d) => `${d}%`);
        }
    }, [geoData]);

    return (
        <div className="us-map-container">
            <svg width={800} height={650}></svg>
        </div>
    );
}

export default USMap;
