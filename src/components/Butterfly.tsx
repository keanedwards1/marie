/* !! Not currently in use */

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Utility function to get random integers
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a random group of butterflies with random positions
const generateButterflies = (): { type: number; style: React.CSSProperties }[] => {
    const butterflies = [];
    const totalButterflies = getRandomInt(9, 10);
    const butterflyTypes = 7; // We have butterfly-0.png to butterfly-6.png

    for (let i = 0; i < totalButterflies; i++) {
        const type = getRandomInt(0, butterflyTypes - 1);
        const count = getRandomInt(0, 3); // Each butterfly appears between 0 and 3 times

        for (let j = 0; j < count; j++) {
            butterflies.push({
                type,
                style: {
                    position: 'absolute' as 'absolute',
                    top: `${getRandomInt(0, 90)}%`,
                    left: `${getRandomInt(0, 90)}%`,
                    zIndex: 0,
                    width: 'auto',
                    height: 'auto',
                } as React.CSSProperties
            });
        }
    }

    return butterflies.sort(() => Math.random() - 0.5); // Shuffle the array
};

const Butterflies: React.FC = () => {
    const [butterflies, setButterflies] = useState<{ type: number; style: React.CSSProperties }[]>([]);

    useEffect(() => {
        setButterflies(generateButterflies());
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: '0' }}>
            {butterflies.map((butterfly, index) => (
                <Image
                    key={index}
                    src={`/images/butterfly-${butterfly.type}.png`}
                    alt={`Butterfly ${butterfly.type}`}
                    className="butterfly"
                    width={50}
                    height={43}
                    style={butterfly.style}
                    priority
                />
            ))}
        </div>
    );
};

export default Butterflies;
