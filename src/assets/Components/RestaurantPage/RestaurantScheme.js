import React, { useState, useEffect, useRef } from 'react';

const RestaurantScheme = ({ foodPlaceId }) => {
    const [tables, setTables] = useState([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        const fetchLayouts = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/data/layouts/?food_place=${foodPlaceId}`);
                const data = await response.json();
                setTables(data);
            } catch (error) {
                console.error("Error fetching layouts:", error);
            }
        };

        fetchLayouts();
    }, [foodPlaceId]);

    useEffect(() => {
        let zoomScale = 1;
        let panX = 0;
        let panY = 0;
        if (tables.length > 0) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            const drawTable = (table) => {
                // Draw table based on shape
                ctx.beginPath();
                if (table.shape === 'circle') {
                    ctx.arc(table.x, table.y, table.width / 2, 0, Math.PI * 2);
                } else if (table.shape === 'rectangle') {
                    ctx.rect(table.x - table.width / 2, table.y - table.height / 2, table.width, table.height);
                }
                ctx.fillStyle = 'green';
                ctx.fill();
                ctx.closePath();

                // Draw table ID
                ctx.font = '20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(table.id, table.x - 6, table.y + 6);

                // Draw seats
                const seatRadius = 10;
                const angleBetweenSeats = (2 * Math.PI) / table.table_capacity;
                for (let i = 0; i < table.table_capacity; i++) {
                    const seatX = table.x + (40 * Math.cos(angleBetweenSeats * i));
                    const seatY = table.y + (40 * Math.sin(angleBetweenSeats * i));
                    ctx.beginPath();
                    ctx.arc(seatX, seatY, seatRadius, 0, Math.PI * 2);
                    ctx.fillStyle = 'blue';
                    ctx.fill();
                    ctx.closePath();
                }
            };

            tables.forEach((table) => {
                drawTable({
                    ...table,
                    seats: table.table_capacity,
                    width: table.width,
                    height: table.height,
                    shape: table.shape,
                    hoverColor: table.hover_color,
                });
            });
            function applyTransformations(x, y) {
                const transformedX = (x - panX) / zoomScale;
                const transformedY = (y - panY) / zoomScale;
                return { x: transformedX, y: transformedY };
            }


            // ... (rest of the code, like event listeners and helper functions)
            // Add click event listener to the canvas
            canvas.addEventListener('click', (event) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;
                const { x: transformedX, y: transformedY } = applyTransformations(mouseX, mouseY);

                // Check if a table is clicked
                for (const table of tables) {
                    if (isMouseOverTable(transformedX, transformedY, table)) {
                        console.log(`Table ${table.id} selected.`);
                        // Implement your reservation logic here
                        break;
                    }
                }
            });

            // ... (previous code)

            // Set the canvas dimensions
            const canvasContainer = document.getElementById('canvas-container');
            const canvasWidth = canvasContainer.clientWidth;
            const canvasHeight = (3 / 4) * canvasWidth; // Adjust this according to your desired aspect ratio
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            // Function to handle zoom and panning
            function handleGesture(event) {
                event.preventDefault();

                if (event.touches.length === 2) {
                    const distX = event.touches[0].clientX - event.touches[1].clientX;
                    const distY = event.touches[0].clientY - event.touches[1].clientY;
                    const currentDistance = Math.sqrt(distX * distX + distY * distY);

                    if (!this.prevDistance) {
                        this.prevDistance = currentDistance;
                    }

                    const zoom = currentDistance / this.prevDistance;
                    ctx.scale(zoom, zoom);
                    zoomScale *= zoom;

                    this.prevDistance = currentDistance;
                } else {
                    this.prevDistance = null;
                }

                // Redraw the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                tables.forEach(drawTable);
            }

            // Add event listeners for touch events
            canvas.addEventListener('touchmove', handleGesture, { passive: false });
            canvas.addEventListener('touchend', handleGesture, { passive: false });
            canvas.addEventListener('touchcancel', handleGesture, { passive: false });

            // ... (rest of the code, like event listeners and helper functions)

            // Function to check if the mouse is over a table
            function isMouseOverTable(mouseX, mouseY, table) {
                if (table.shape === 'circle') {
                    const dx = mouseX - table.x;
                    const dy = mouseY - table.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    return distance <= table.width / 2;
                } else if (table.shape === 'rectangle') {
                    const minX = table.x - table.width / 2;
                    const maxX = table.x + table.width / 2;
                    const minY = table.y - table.height / 2;
                    const maxY = table.y + table.height / 2;
                    return mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY;
                }
                return false;
            }

            // Add mousemove event listener to the canvas
            canvas.addEventListener('mousemove', (event) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;
                const { x: transformedX, y: transformedY } = applyTransformations(mouseX, mouseY);
                // Check if the mouse is hovering over a table
                let mouseOverTable = false;
                for (const table of tables) {
                    if (isMouseOverTable(transformedX, transformedY, table)) {
                        mouseOverTable = true;
                        ctx.fillStyle = table.hover_color;
                        if (table.shape === 'circle') {
                            ctx.beginPath();
                            ctx.arc(table.x, table.y, table.width / 2, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.closePath();
                        } else if (table.shape === 'rectangle') {
                            ctx.beginPath();
                            ctx.rect(table.x - table.width / 2, table.y - table.height / 2, table.width, table.height);
                            ctx.fill();
                            ctx.closePath();
                        }
                    }
                }
                if (!mouseOverTable) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    tables.forEach(drawTable);
                }
            });
        }
    }, [tables]);

    return (
        <div>
            <div className="scheme-title">
                <h1>Scheme of the restaurant</h1>
            </div>
            <div className="scheme">
                <div className="scheme-main">
                    <canvas ref={canvasRef} id="canvas-container"></canvas>
                </div>
                <div className="scheme-legend">
                    <h3 class="text-dark">Legend</h3>
                    <div className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: 'green' }}></div>
                        <div className="legend-text">Table</div>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: 'blue' }}></div>
                        <div className="legend-text">Seat</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .scheme {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    padding: 20px 0;
                }
                .scheme-main {
                    width: 75%;
                }
                .scheme-main canvas {
                    border: 1px solid #ccc;
                    display: block;
                }
                .scheme-title {
                    text-align: center;
                }
                .scheme-legend {
                    width: 20%;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                }
                .legend-color {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
                #canvas-container {
                    width: 100% !important;
                    margin: 0% !important;
                }
            `}</style>
        </div >
    );
};

export default RestaurantScheme;

